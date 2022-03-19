module.exports = {
    src_folders: ['e2e'],
    page_objects_path: [ "pages" ],
    test_settings: {
      default: {
        selenium_port: 35753,
        selenium_host: "localhost",
        silent: true,
        screenshots: {
          enabled: false,
          path: "",
        },
        globals: {
          abortOnAssertionFailure: false,
          waitForConditionPollInterval: 300,
          waitForConditionTimeout: 10000,
          retryAssertionTimeout: 5000,
        },
        selenium : {
          start_process : true,
          server_path: require("selenium-server").path,
          check_process_delay: 5000
        }
      },
      selenium: {
        selenium: {
          start_process: true,
          port: 35753,
          server_path: require("selenium-server").path,
          cli_args: {
            "webdriver.chrome.driver": require("chromedriver").path,
            "webdriver.gecko.driver": require("geckodriver").path
          },
        },
        webdriver: {
          start_process: false,
        },
      },
      "chrome": {
        extends: "selenium",
        desiredCapabilities: {
          browserName: "chrome",
          chromeOptions: {
            w3c: false,
          },
        },
      },
  
      "firefox": {
        extends: "selenium",
        desiredCapabilities: {
          browserName: "firefox",
        },
      },
    },
  }
