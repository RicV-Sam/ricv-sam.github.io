from playwright.sync_api import sync_playwright
import os

def final_verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        current_dir = os.getcwd()
        page.goto(f"file://{current_dir}/guides/cheap-holidays-albania-from-uk/index.html")
        page.set_viewport_size({"width": 1280, "height": 2000})
        page.screenshot(path="final_verification.png", full_page=True)
        browser.close()

if __name__ == "__main__":
    final_verify()
