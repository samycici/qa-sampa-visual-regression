/**
 * Created by Samy
 */

// Require do webdriver e do eyes
var webdriver = require('selenium-webdriver');
var Eyes = require("eyes.selenium").Eyes;

// Iniciando o SDK e setando a API key
var eyes = new Eyes();
var apiKey = process.env.APPLITOOLS_API_KEY;
eyes.setApiKey(apiKey);

describe('Pokedex Homepage', function() {
    it('list all pokemons', function() {
      // Open a chrome browser.
       eyes.open(browser, "Hello World!", "Pokedex Teste");

       // Navegando para a pokedex
       browser.get("http://localhost:3000/#/pokemons");

       // Testando a homepage.
       eyes.checkWindow("Homepage");

       // End the test.
       eyes.close();
    });
    it('test 404 page', function() {
      // Open a chrome browser.
       eyes.open(browser, "Hello World!", "Pokedex Teste 404");

       // Navegando para a pokedex
       browser.get("http://localhost:3000/#/404");

       // Testando a homepage.
       eyes.checkWindow("404");

       // End the test.
       eyes.close();
    });
    it('check footer', function() {
      // Open a chrome browser.
       eyes.open(browser, "Hello World!", "Pokedex Teste Footer");

       // Navegando para a pokedex
       browser.get("http://localhost:3000/#/teste");

      eyes.checkRegionBy(by.tagName("footer"), "Footer");

       // End the test.
       eyes.close();
    });
});
