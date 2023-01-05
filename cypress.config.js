const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
       //implement node event listeners here
     
    },

    //baseUrl:"https://google.com"

    //viewportWidth:550,
    //viewportHeight:750

  },


});

