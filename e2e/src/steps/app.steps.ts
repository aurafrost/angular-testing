import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../appPage.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});


//Scenario 1
Given("I am on the home page", async () => {
  await page.navigateTo();
});

When("I do nothing", () => {});

Then("I should see the title", async () => {
  expect(await page.getTitleText()).to.equal('Welcome to angular-testing!');
});


//Scenario 2
Given("I am on the home page 2", async () => {
  await page.navigateTo();
});

When("I change the name to {string}", (newName) => {
  page.setName(newName);
});

Then("I should see the name change", async () => {
  expect(await page.getName()).not.equal("");
});

//scenario 3
Given("I am on the home page 3", async () => {
  await page.navigateTo();
});

When("I enter the keys {int} in the age field", (age) => {
  page.setAge(age);
});

Then("I should see the age change", async () => {
  expect(await page.getAge()).not.equal("");
});

//Scenario 4
Given("I am on the home page 4", async () => {
  await page.navigateTo();
});

When("I enter the keys {string} in the age field", (age) => {
  page.setAge(age);
});

Then("I should not see the age change", async () => {
  expect(await page.getAge()).to.equal("");
});