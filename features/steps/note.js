import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import assert from "assert";

import initDriver from "../../configs/driver.js";
import HomePage from "../../pages/home.js";
import AddNotePage from "../../pages/add.js";

let driver;
let homePage;
let addNotePage;

Before({ timeout: 6000 * 10000 }, async () => {
  try {
    driver = await initDriver();
    homePage = new HomePage(driver);
    addNotePage = new AddNotePage(driver);
  } catch (error) {
    console.error(error);
  }
});

Given("I am on the home page", async () => {
  const title = await homePage.getTitle();
  assert.equal(title, "Notes");
});

When("I see sample note", { timeout: 70000 }, async () => {
  const noteTitle = await homePage.getSampleNote();
  assert.notEqual(noteTitle, "");
});

Then("I can view all notes", { timeout: 70000 }, async () => {
  const noteTitle = await homePage.getSampleNote();
  assert.notEqual(noteTitle, "");
});

When("I tap plus button", async () => {
  await homePage.tapPlusButton();
});

Then("I insert title", async () => {
  await addNotePage.insertTitle("my notes");
});

Then("I insert content", async () => {
  await addNotePage.insertContent("my content");
});

Then("I tap create button", async () => {
  await addNotePage.tapCreateButton();
});

Then("I see message", async () => {
  await addNotePage.getMessage();
});

After(async () => {
  await driver.deleteSession();
});
