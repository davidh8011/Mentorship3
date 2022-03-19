module.exports = {
    'Login' : function (browser) {
      const LoginPage = browser.page.LoginPage();

      LoginPage
        .navigate()
      browser.windowMaximize()
      LoginPage
        .standardLogin()
        .assert.visible('#inventory_container')
      browser.end();
        
    }
  };


  /*module.exports = {
    'Login' : function (browser) {
      browser
        .url('https://www.saucedemo.com/')
        .waitForElementVisible('#user-name')
        .setValue('#user-name','standard_user')
        .setValue('#password', 'secret_sauce')
        .pause(1000)
        .click('#login-button')
        .pause(1000)
        .assert.visible('#inventory_container')
    }
  };*/