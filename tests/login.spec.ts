import { test, expect } from "@playwright/test";

// Used Hooks for loggin of every page in the starting 
test.beforeEach("login successful", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})

// verifying login UI
test.only("verifying login UI", async ({ page }) => {

    const username = page.getByRole("textbox", { name: "Username" });
    const password = page.getByRole("textbox", { name: "Password"});
    const login = page.getByRole("button", { name: "Login"});

    await expect(username).toBeVisible();
    await expect(password).toBeVisible();

    await expect(username).toBeEnabled();
    await expect(password).toBeEnabled();

    await expect(username).toBeEditable();
    await expect(password).toBeEditable();
    
    await expect(username).toHaveAttribute("placeholder", "Username");     // checks the Username should be desplayed in the textbox
    await expect(password).toHaveAttribute("placeholder", "Password");

    await expect(password).toHaveAttribute("type", "password");

    await username.fill('Admin');
    await expect(username).toHaveValue("Admin");
    await password.fill("admin123");
    await expect(password).toHaveValue("admin123");
    
    await username.clear();
    await expect(username).toHaveValue("");
    await username.fill("Admin");

    await password.clear();
    await expect(password).toHaveValue("");
    await password.fill("admin123");

    await expect(login).toBeVisible();
    await expect(login).toBeEnabled();
    await expect(login).toHaveText("Login");
    await login.click();

    await expect(page).toHaveURL(/dashboard/);

})


