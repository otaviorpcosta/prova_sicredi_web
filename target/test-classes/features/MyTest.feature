#language: pt

@webMotors
Funcionalidade: Login

  @ct01
  Cenário: Validar busca de veículo desejado
    Dado que o usuário esteja no sistema do webmotors
    Quando informar o nome do veículo desejado
    E selecionar a opção do modelo
    Então o sistema direciona o usuário para a tela de listagem dos veículos disponíveis para venda

  @ct02
  Cenário: Validar seleção do veículo desejado
    Dado que o usuário esteja no sistema do webmotors
    Quando informar o nome do veículo desejado
    E selecionar a opção do modelo
    E selecionar o veículo desejado
    Então o sistema direciona o usuário para a tela de detalhes do veículo

  @ct03
  Cenário: Validar o contato para negociação com os vendedores
    Dado que o usuário esteja no sistema do webmotors
    Quando informar o nome do veículo desejado
    E selecionar a opção do modelo
    E selecionar o veículo desejado
    E preencher o formulário com dados válidos
    E clicar na opção de Enviar mensagem
    Então o sistema envia a menasagem ao vendedor e retorna o usuário para a tela de listagem de veículos

