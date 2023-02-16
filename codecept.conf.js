const server = require("./server/server")

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: process.env.PLATFORM,
      app: process.env.APP,
      desiredCapabilities: {
        appPackage: process.env.PLATFORM == 'Android' ? process.env.PACKAGE : "",
        appActivity: process.env.PLATFORM == 'Android' ? process.env.ACTIVITY: "",
        deviceName: process.env.DEVICE,
        platformVersion: process.env.VERSION,
        automationName: process.env.AUTOMATION
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: async () =>{
    server.start();
  },
  timeout: null,
  teardown: async () =>{
    server.stop();
  },
  hooks: [],
  // gherkin: {
  //   features: './features/*.feature',
  //   steps: ['./step_definitions/steps.js']
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './steps/*_test.js',
  name: 'qazando-testes'
}