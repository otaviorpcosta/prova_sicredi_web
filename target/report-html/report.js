$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/MyTest.feature");
formatter.feature({
  "name": "Cadastro de Customer",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@sicredWeb"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validar inclusão de novo customer",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@ct01"
    }
  ]
});
formatter.step({
  "name": "que o usuário esteja no sistema do grocerycrud",
  "keyword": "Dado "
});
formatter.step({
  "name": "alterar a versão do crud para Boostra V4 Theme",
  "keyword": "Quando "
});
formatter.step({
  "name": "clicar na opção de adicionar customer",
  "keyword": "E "
});
formatter.step({
  "name": "preencher dados de \"\u003cName\u003e\", \"\u003cLastName\u003e\", \"\u003cContactFirstName\u003e\", \"\u003cPhone\u003e\", \"\u003cAddressLine1\u003e\", \"\u003cAddressLine2\u003e\", \"\u003cCity\u003e\", \"\u003cState\u003e\", \"\u003cPostalCode\u003e\", \"\u003cCountry\u003e\", \"\u003cEmployeer\u003e\", \"\u003cCreditLimit\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "clicar na opção de Save",
  "keyword": "E "
});
formatter.step({
  "name": "o sistema exibe mensagem informando Your data has been successfully stored into the database. Edit Record or Go back to list",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "Name",
        "LastName",
        "ContactFirstName",
        "Phone",
        "AddressLine1",
        "AddressLine2",
        "City",
        "State",
        "PostalCode",
        "Country",
        "Employeer",
        "CreditLimit"
      ]
    },
    {
      "cells": [
        "Teste Sicredi",
        "Teste",
        "Juliano",
        "51 9999-9999",
        "Av Assis Brasil, 3970",
        "Torre D",
        "Porto Alegre",
        "RS",
        "91000-000",
        "Brasil",
        "10",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validar inclusão de novo customer",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@sicredWeb"
    },
    {
      "name": "@ct01"
    }
  ]
});
formatter.step({
  "name": "que o usuário esteja no sistema do grocerycrud",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.MyStep.acessSystem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alterar a versão do crud para Boostra V4 Theme",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.MyStep.updatedVersion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar na opção de adicionar customer",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.selectionOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher dados de \"Teste Sicredi\", \"Teste\", \"Juliano\", \"51 9999-9999\", \"Av Assis Brasil, 3970\", \"Torre D\", \"Porto Alegre\", \"RS\", \"91000-000\", \"Brasil\", \"10\", \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.fillDate(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar na opção de Save",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.selectionOptionSave()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe mensagem informando Your data has been successfully stored into the database. Edit Record or Go back to list",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.MyStep.modalLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validar exclusão de novo customer",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@ct02"
    }
  ]
});
formatter.step({
  "name": "que o usuário esteja no sistema do grocerycrud",
  "keyword": "Dado "
});
formatter.step({
  "name": "alterar a versão do crud para Boostra V4 Theme",
  "keyword": "Quando "
});
formatter.step({
  "name": "clicar na opção de adicionar customer",
  "keyword": "E "
});
formatter.step({
  "name": "preencher dados de \"\u003cName\u003e\", \"\u003cLastName\u003e\", \"\u003cContactFirstName\u003e\", \"\u003cPhone\u003e\", \"\u003cAddressLine1\u003e\", \"\u003cAddressLine2\u003e\", \"\u003cCity\u003e\", \"\u003cState\u003e\", \"\u003cPostalCode\u003e\", \"\u003cCountry\u003e\", \"\u003cEmployeer\u003e\", \"\u003cCreditLimit\u003e\"",
  "keyword": "E "
});
formatter.step({
  "name": "clicar na opção de Save and go back to list",
  "keyword": "E "
});
formatter.step({
  "name": "buscar o \"\u003cName\u003e\" cadastrado no campo de busca por CustomerName",
  "keyword": "E "
});
formatter.step({
  "name": "clicar no checkbox de selecionar todos os resultados e clicar na opção de Delete",
  "keyword": "E "
});
formatter.step({
  "name": "validar o modal exibido com a mensagem Are you sure that you want to delete this X item?",
  "keyword": "E "
});
formatter.step({
  "name": "clicar na opção delete do modal exibido",
  "keyword": "E "
});
formatter.step({
  "name": "o sistema exibe mensagem informando Your data hasbeen successfully deleted from the database.",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "Name",
        "LastName",
        "ContactFirstName",
        "Phone",
        "AddressLine1",
        "AddressLine2",
        "City",
        "State",
        "PostalCode",
        "Country",
        "Employeer",
        "CreditLimit"
      ]
    },
    {
      "cells": [
        "Teste Sicredi",
        "Teste",
        "Juliano",
        "51 9999-9999",
        "Av Assis Brasil, 3970",
        "Torre D",
        "Porto Alegre",
        "RS",
        "91000-000",
        "Brasil",
        "10",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validar exclusão de novo customer",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@sicredWeb"
    },
    {
      "name": "@ct02"
    }
  ]
});
formatter.step({
  "name": "que o usuário esteja no sistema do grocerycrud",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.MyStep.acessSystem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alterar a versão do crud para Boostra V4 Theme",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.MyStep.updatedVersion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar na opção de adicionar customer",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.selectionOption()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher dados de \"Teste Sicredi\", \"Teste\", \"Juliano\", \"51 9999-9999\", \"Av Assis Brasil, 3970\", \"Torre D\", \"Porto Alegre\", \"RS\", \"91000-000\", \"Brasil\", \"10\", \"200\"",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.fillDate(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar na opção de Save and go back to list",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.selectionOptionSaveAndaBack()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "buscar o \"Teste Sicredi\" cadastrado no campo de busca por CustomerName",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.searchCustomerName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no checkbox de selecionar todos os resultados e clicar na opção de Delete",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.selectedAll()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validar o modal exibido com a mensagem Are you sure that you want to delete this X item?",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.modalTilte()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar na opção delete do modal exibido",
  "keyword": "E "
});
formatter.match({
  "location": "steps.MyStep.buttonDeleteModal()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe mensagem informando Your data hasbeen successfully deleted from the database.",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.MyStep.messagemAlert()"
});
formatter.result({
  "status": "passed"
});
});