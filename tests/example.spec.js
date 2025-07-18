const { test, expect } = require("@playwright/test");

test("Homepage should have title", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example Domain/);
});
