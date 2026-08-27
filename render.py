#!/usr/bin/env python3
"""
render.py — renders a mkt-ui-mockup HTML file to a transparent PNG.

Portable across environments that have a `google-chrome`/`chromium` binary
on PATH (e.g. a typical Claude Code machine) AND environments where Chrome
is only reachable through Playwright's own browser cache, not PATH (e.g.
Claude Cowork, where Chromium lives at a Playwright-managed path like
/opt/pw-browsers/chromium instead of being a `google-chrome` command).

Tries, in order:
  1. Playwright's Python API (chromium.launch()) — Playwright finds its own
     managed browser automatically, no PATH or explicit path needed. This
     is the path that works in Cowork.
  2. A `google-chrome` / `chromium` / `chromium-browser` CLI binary on PATH,
     via headless screenshot flags — the path that works in a normal
     Claude Code / desktop environment.

Usage:
    python3 render.py path/to/mockup.html path/to/out.png \
        [--width 1800] [--height 1200] [--scale 2]

Output is always a transparent-background PNG at the given viewport size
times --scale. Follow with trim.py to crop to the actual content.
"""
import argparse
import os
import shutil
import subprocess
import sys


def render_with_playwright(html_path, out_path, width, height, scale):
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        return False

    url = "file://" + os.path.abspath(html_path)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(
            viewport={"width": width, "height": height},
            device_scale_factor=scale,
        )
        page.goto(url)
        # omit_background is Playwright's equivalent of Chrome CLI's
        # --default-background-color=00000000 — this is what makes the
        # PNG transparent instead of white.
        page.screenshot(path=out_path, omit_background=True)
        browser.close()
    print(f"rendered with Playwright: {out_path}")
    return True


MACOS_APP_PATHS = (
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
)


def find_chrome_binary():
    for name in ("google-chrome", "chromium", "chromium-browser", "google-chrome-stable"):
        path = shutil.which(name)
        if path:
            return path
    # PATH lookups above cover Linux; on macOS, Chrome is normally only
    # a .app bundle, never a `google-chrome` command on PATH.
    for path in MACOS_APP_PATHS:
        if os.path.exists(path):
            return path
    return None


def render_with_cli(html_path, out_path, width, height, scale):
    binary = find_chrome_binary()
    if not binary:
        return False

    url = "file://" + os.path.abspath(html_path)
    cmd = [
        binary,
        "--headless=new",
        "--disable-gpu",
        f"--window-size={width},{height}",
        f"--force-device-scale-factor={scale}",
        "--default-background-color=00000000",
        f"--screenshot={out_path}",
        url,
    ]
    subprocess.run(cmd, check=True, capture_output=True)
    print(f"rendered with {binary}: {out_path}")
    return True


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("html_path")
    parser.add_argument("out_path")
    parser.add_argument("--width", type=int, default=1800)
    parser.add_argument("--height", type=int, default=1200)
    parser.add_argument("--scale", type=int, default=4)
    args = parser.parse_args()

    if render_with_playwright(args.html_path, args.out_path, args.width, args.height, args.scale):
        return
    if render_with_cli(args.html_path, args.out_path, args.width, args.height, args.scale):
        return

    print(
        "error: no way to render found — install the 'playwright' Python "
        "package (pip install playwright && playwright install chromium), "
        "or make sure google-chrome/chromium is on PATH.",
        file=sys.stderr,
    )
    sys.exit(1)


if __name__ == "__main__":
    main()
