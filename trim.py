#!/usr/bin/env python3
"""
trim.py — crops a transparent-background mockup PNG down to its actual
content bounding box (card + soft shadow), instead of leaving it at
whatever oversized browser-window size it was rendered at.

Mockups from this skill are raw material composited into other assets,
so output size is NOT fixed (no LinkedIn-canvas cropping) — this script
just removes the empty transparent margin around the real content.

Usage:
    python3 trim.py path/to/rendered.png [path/to/output.png]

If output path is omitted, overwrites the input file.

Crops to the bounding box of pixels with alpha > ALPHA_THRESHOLD, then
adds MARGIN pixels of padding on every side so a soft box-shadow's faint
tail doesn't get cut off right at its edge.
"""
import sys
from PIL import Image

ALPHA_THRESHOLD = 4   # ignore near-invisible shadow noise when finding the bbox
MARGIN = 24            # px of breathing room kept around the detected content (at whatever scale the PNG was rendered at — double this if you rendered at 2x)


def trim(path, out_path):
    img = Image.open(path).convert("RGBA")
    alpha = img.split()[3]
    # threshold the alpha channel so faint anti-aliasing noise doesn't
    # expand the bbox to the full canvas
    mask = alpha.point(lambda a: 255 if a > ALPHA_THRESHOLD else 0)
    bbox = mask.getbbox()
    if bbox is None:
        print(f"warning: {path} appears fully transparent, nothing to trim")
        img.save(out_path)
        return
    left, top, right, bottom = bbox
    left = max(0, left - MARGIN)
    top = max(0, top - MARGIN)
    right = min(img.width, right + MARGIN)
    bottom = min(img.height, bottom + MARGIN)
    cropped = img.crop((left, top, right, bottom))
    cropped.save(out_path)
    print(f"trimmed {path}: {img.size} -> {cropped.size}  (saved to {out_path})")


if __name__ == "__main__":
    if len(sys.argv) not in (2, 3):
        print("Usage: python3 trim.py path/to/rendered.png [path/to/output.png]")
        sys.exit(2)
    in_path = sys.argv[1]
    out_path = sys.argv[2] if len(sys.argv) == 3 else in_path
    trim(in_path, out_path)
