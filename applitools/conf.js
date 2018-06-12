exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true, //comunicação direta com o chromedriver
    restartBrowserBetweenTests: false, //não reinicia o browser
    specs: ['pokedex_visual_test.js'],
    allScriptsTimeout: 10000, //timeout em milisegundos
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--disable-extensions']
        }

    },
    beforeLaunch: function() {
        setTimeout(function() {
            browser.driver.executeScript(function() {
                return {
                    width: window.screen.availWidth,
                    height: window.screen.availHeight
                };
            }).then(function(result) {
                browser.driver.manage().window().setSize(result.width, result.height);
            });
        });

    },

    onPrepare: function() { //rodar antes dos testes
        browser.ignoreSynchronization = true; //esperar pelas promises do angular. Se eu peço um nome, ele não necessariamente vai me retornar um nome, pode vir um erro
    },


}
