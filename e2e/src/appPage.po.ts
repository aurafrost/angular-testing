import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
  
  changeInput(){
    return element(by.id('nameField')).sendKeys("Bob");
  }

  getInput() {
    return element(by.id('nameReturn')).getText();
  }
}