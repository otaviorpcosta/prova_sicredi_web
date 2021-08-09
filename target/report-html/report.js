$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/MyTest.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@webMotors"
    }
  ]
});
formatter.scenario({
  "name": "Validar busca de veículo desejado",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@webMotors"
    },
    {
      "name": "@ct01"
    }
  ]
});
formatter.step({
  "name": "que o usuário esteja no sistema do webmotors",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.MyStep.acessSystem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o nome do veículo desejado",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.MyStep.searchVehicle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opção do modelo",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.selectionOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema direciona o usuário para a tela de listagem dos veículos disponíveis para venda",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.MyStep.modalLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar seleção do veículo desejado",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@webMotors"
    },
    {
      "name": "@ct02"
    }
  ]
});
formatter.step({
  "name": "que o usuário esteja no sistema do webmotors",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.MyStep.acessSystem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o nome do veículo desejado",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.MyStep.searchVehicle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opção do modelo",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.selectionOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar o veículo desejado",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.selectionOptionVehicle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema direciona o usuário para a tela de detalhes do veículo",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.MyStep.screenDetailsVehicle()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar o contato para negociação com os vendedores",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@webMotors"
    },
    {
      "name": "@ct03"
    }
  ]
});
formatter.step({
  "name": "que o usuário esteja no sistema do webmotors",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.MyStep.acessSystem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o nome do veículo desejado",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.MyStep.searchVehicle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar a opção do modelo",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.selectionOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selecionar o veículo desejado",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.selectionOptionVehicle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o formulário com dados válidos",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.formComplete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar na opção de Enviar mensagem",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.optionProposal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema envia a menasagem ao vendedor e retorna o usuário para a tela de listagem de veículos",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.MyStep.messageSucess()"
});
formatter.result({
  "status": "passed"
});
});