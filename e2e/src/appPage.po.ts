import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
  
  changeInput(newName){
    return element(by.id('nameField')).sendKeys(newName);
  }

  getInput() {
    return element(by.id('nameReturn')).getText();
  }
}