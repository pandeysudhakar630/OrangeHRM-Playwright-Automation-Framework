# OrangeHRM Automation Testing - Login UI Verification

## Project Overview

This project is part of an end-to-end UI automation testing framework built using Playwright and TypeScript. The goal of this module is to verify the Login User Interface (UI) of the OrangeHRM Demo application before performing authentication.

The test ensures that all login page elements are displayed correctly, are interactive, and behave as expected from a user's perspective.

----------

## Technology Stack

* Automation Tool: Playwright
* Programming Language: TypeScript
* Test Runner: Playwright Test Runner
* IDE: Visual Studio Code
* Application Under Test: OrangeHRM Demo

----------

## Application URL

https://opensource-demo.orangehrmlive.com/

----------

# Test Module

## Login UI Verification

This module validates the Login page of the OrangeHRM application.

### Test Scenario

Verify that all login page components are displayed correctly and the user can successfully log in using valid credentials.

----------

# Test Coverage

The following validations are performed during execution:

### Username Textbox

* Verify the Username textbox is visible.
* Verify the Username textbox is enabled.
* Verify the Username textbox is editable.
* Verify the placeholder text is "Username".
* Enter a valid username.
* Verify the entered value.
* Clear the textbox.
* Verify the textbox becomes empty.
* Enter the username again.

----------

### Password Textbox

* Verify the Password textbox is visible.
* Verify the Password textbox is enabled.
* Verify the Password textbox is editable.
* Verify the placeholder text is "Password".
* Verify the input type is password.
* Enter a valid password.
* Verify the entered value.
* Clear the textbox.
* Verify the textbox becomes empty.
* Enter the password again.

----------

### Login Button

* Verify the Login button is visible.
* Verify the Login button is enabled.
* Verify the button text is "Login".
* Click the Login button.

----------

### Login Verification

After successful authentication:

* Verify the application redirects to the Dashboard.
* Validate the current URL contains dashboard.

----------

# Playwright Assertions Used

This test demonstrates the use of the following Playwright assertions:

| Assertion           | Purpose                           |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `toBeVisible()`     | Verify element is displayed       |
| `toBeEnabled()`     | Verify element is enabled         |
| `toBeEditable()`    | Verify textbox accepts user input |
| `toHaveAttribute()` | Verify placeholder and input type |
| `toHaveValue()`     | Verify entered text               |
| `toHaveText()`      | Verify button text                |
| `toHaveURL()`       | Verify successful navigation      |

----------

# Playwright Features Used

* Hooks (`beforeEach`)
* Role-based Locators (`getByRole`)
* Auto Waiting
* Built-in Assertions
* Form Interaction
* URL Validation
* Cross Browser Support
* Playwright Test Runner

----------

# Folder Structure

```text
tests/
│
├── login.spec.ts

playwright.config.ts

package.json

README.md
```

----------

# How to Run the Project

### Install Dependencies

```
npm install
```

### Install Playwright Browsers

```
npx playwright install
```

### Execute All Tests

```
npx playwright test
```

### Execute in Headed Mode

```
npx playwright test --headed
```

### Execute a Specific Test File

```
npx playwright test tests/login.spec.ts
```

### View HTML Report

```
npx playwright show-report
```

----------

# Expected Result

* Login page loads successfully.
* Username and Password fields are validated.
* Login button is verified.
* Valid credentials authenticate successfully.
* User is redirected to the Dashboard page.

----------

# Learning Objectives

This module demonstrates the fundamentals of UI automation testing using Playwright and TypeScript, including:

* Working with role-based locators
* Using Playwright assertions
* Form validation
* User interaction
* Authentication flow verification
* Navigation validation
* Writing clean and maintainable automated test scripts

----------

# Future Enhancements

Upcoming modules in this repository will include:

* Dashboard Verification
* Navigation Menu Testing
* User Profile Testing
* Search Functionality Testing
* Admin Module
* PIM Module
* Leave Module
* Recruitment Module
* Performance Assertions
* End-to-End User Workflows
* Data-Driven Testing
* Page Object Model (POM)
* Cross-Browser Testing
* Parallel Execution
* API Testing with Playwright
* CI/CD Integration using GitHub Actions
