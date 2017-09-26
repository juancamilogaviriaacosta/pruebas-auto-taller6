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

  When(^/I fill sign up form with (.*), (.*), (.*) and (.*)/, (name, lastname, email, password) => {
        var cajaSignUp = browser.element('.cajaSignUp');
        var nombre = cajaSignUp.element('input[name="nombre"]');
        var apellido = cajaSignUp.element('input[name="apellido"]');
        var correo = cajaSignUp.element('input[name="correo"]');
        var password = cajaSignUp.element('input[name="password"]');

        nombre.click();
        nombre.keys(name);

        apellido.click();
        apellido.keys(lastname);

        correo.click();
        correo.keys(email);

        password.click();
        password.keys(password);

        browser.waitForVisible('button=Registrarse', 5000);
        browser.click('button=Registrarse');
  });

  When('I try to sign up', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Registrarse').click()
  });

  Then('Sign up error must be {string}', error => {
    browser.waitForVisible('.sweet-alert', 5000);
    var alerta = browser.getText('.sweet-alert');
    expect(alerta).toContain('Ocurrió un error activando tu cuenta');
  });

});