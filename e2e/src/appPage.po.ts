import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
  
  setName(newName){
    return element(by.id('nameField')).sendKeys(newName);
  }

  getName() {
    return element(by.id('nameReturn')).getText();
  }

  setAge(num){
    return element(by.id('ageField')).sendKeys(num);
  }

  getAge(){
    return element(by.id('ageReturn')).getText();
  }
}