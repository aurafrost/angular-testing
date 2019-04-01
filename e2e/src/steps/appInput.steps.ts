import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../appPage.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I am waiting on the home page$/, async () => {
  await page.navigateTo();
});

When(/^I change the name$/, () => {
  page.changeInput("Bob");
});

Then(/^I should see the name change$/, async () => {
  expect(await page.getInput()).not.equal("");
});