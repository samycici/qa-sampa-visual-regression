/**
 * Created by Samy
 */
var vr = browser.params.visualreview;

describe('Pokedex Homepage', function() {

    beforeAll(function() {
        browser.manage().window().setSize(1200, 2000);
    });
    it('test homepage', function() {
        browser.get('http://localhost:3000/#/pokemons');
        browser.wait(result =>{
            return element(by.className('infos-container')).isPresent();
        }, 20000);
        vr.takeScreenshot('Pokedex-Homepage');
    });
    it('test pokemons search', function() {
        browser.get('http://localhost:3000/#/pokemons');
        element(by.id('busca')).sendKeys("pikachu");
        vr.takeScreenshot('Search-Pikachu');
    });
    it('test pokemons 404', function() {
        browser.get('http://localhost:3000/#/TESTE');
        browser.wait(result =>{
            return element(by.id('img_404')).isPresent();
        }, 20000);
        vr.takeScreenshot('404-page');
    });
});
