# Projeto de Exemplo com Visual Review

Exemplo de como fazer testes de Visual Regression na ng-pokedex usando Visual Review e Protractor.


### Pré requisitos
* Instalar [NodeJS](http://nodejs.org/)
* Instalae a [Java JRE](http://java.com/nl) (ou [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html))

## Instalar as dependências

```shell
npm install
```

Instalar o selenium server pelo Protractor:

```shell
node node_modules/protractor/bin/webdriver-manager update
```

Iniciar o [VisualReview server](https://github.com/xebia/VisualReview)fazendo o download da [última versão](https://github.com/xebia/VisualReview/releases), basta extrair a pasta e executar `./start.sh`.

### Executando

```shell
npm test
```

Abra o VisualReview web app ([http://localhost:7000](http://localhost:7000)) para ver se está funcionando.
