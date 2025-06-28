import { test, expect, devices } from "@playwright/test";

test("collapsible sidebar functionality", async ({ browser }) => {
  // Create mobile context
  const context = await browser.newContext({
    ...devices["iPhone 12"],
  });
  const page = await context.newPage();
  await page.goto("http://localhost:5173/settings");
  // Check if sidebar is initially closed
  await expect(
    page.getByRole("link", { name: "Support" })
  ).not.toBeInViewport();
  await page.locator(".lucide.lucide-menu").click();
  await expect(page.getByRole("link", { name: "Support" })).toBeInViewport();
  await expect(page.locator(".lucide").first()).toBeVisible();
  await page.locator(".lucide").first().click();
  await expect(
    page.getByRole("link", { name: "Support" })
  ).not.toBeInViewport();
});

test("settings menu functionality", async ({ page }) => {
  await page.goto("http://localhost:5173/settings");
  await page.getByRole("tab", { name: "My details" }).click();
  await expect(page.getByText("User Roles").first()).not.toBeVisible();
  await page.getByRole("tab", { name: "Roles" }).click();
  await expect(page.getByText("User Roles").first()).toBeVisible();
});
