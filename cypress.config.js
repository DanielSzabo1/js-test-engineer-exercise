const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    createAnAccountUrl:
      "https://www.btcom.digital-ref1.bt.com/sport/buy/monthly-pass/create-an-account",
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
