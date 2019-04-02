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
Given("I am waiting on the home page", async () => {
  await page.navigateTo();
});

When("I change the name to {string}", (newName) => {
  page.changeInput(newName);
});

Then("I should see the name change", async () => {
  expect(await page.getInput()).not.equal("");
});