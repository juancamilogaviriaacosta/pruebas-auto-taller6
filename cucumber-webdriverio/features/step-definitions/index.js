var webdriverio = require('webdriverio');
//var waitUntil = require('wait-until');
var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When('I fill a wrong email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('wrongemail@example.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891')
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
  });

  Then('I expect to see {string}', error => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
  });

  Then('Must exists exit button', () => {
    browser.waitForVisible('#cuenta', 5000);
  });

  When(/^Sign up form with (.*) (.*) (.*) and (.*)$/ , (name, lastname, email, password) => {
        var cajaSignUp = browser.element('.cajaSignUp');
        var nombre = cajaSignUp.element('input[name="nombre"]');
        var apellido = cajaSignUp.element('input[name="apellido"]');
        var correo = cajaSignUp.element('input[name="correo"]');
        var passwordTmp = cajaSignUp.element('input[name="password"]');
        var terminosCondiciones = cajaSignUp.element('input[name="acepta"]');

        nombre.click();
        nombre.keys(name);

        apellido.click();
        apellido.keys(lastname);

        correo.click();
        correo.keys(email);

        passwordTmp.click();
        passwordTmp.keys(password);

        terminosCondiciones.click();
  });

  When('I try to sign up', () => {
    var cajaSignUp = browser.element('.cajaSignUp');
    cajaSignUp.element('button=Registrarse').click();
  });

  Then('Sign up error must be {string}', error => {
    browser.waitForVisible('.sweet-alert', 5000);
    var alerta = browser.getText('.sweet-alert');
    expect(alerta).contain(error);
  });

  When('Random sign up form', () => {
        var cajaSignUp = browser.element('.cajaSignUp');
        var nombre = cajaSignUp.element('input[name="nombre"]');
        var apellido = cajaSignUp.element('input[name="apellido"]');
        var correo = cajaSignUp.element('input[name="correo"]');
        var passwordTmp = cajaSignUp.element('input[name="password"]');
        var terminosCondiciones = cajaSignUp.element('input[name="acepta"]');

        nombre.click();
        nombre.keys(guid());

        browser.pause(3000);

        apellido.click();
        apellido.keys(guid() + guid());

        browser.pause(3000);

        correo.click();
        correo.keys(guid() + guid() + '@' + guid() + '.com');    

        browser.pause(3000);

        passwordTmp.click();
        passwordTmp.keys(guid() + guid());

        browser.pause(3000);

        terminosCondiciones.click();

        browser.pause(3000);
  });

  Then('Succes info must be {string}', info => {
    browser.waitForVisible('.sweet-alert', 5000);
    var alerta = browser.getText('.sweet-alert');
    expect(alerta).contain(info);
  });

});


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4();
}