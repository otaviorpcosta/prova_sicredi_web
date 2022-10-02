#language: pt

@sicredWeb
Funcionalidade: Cadastro de Customer

  @ct01
  Esquema do Cenário: Validar inclusão de novo customer
    Dado que o usuário esteja no sistema do grocerycrud
    Quando alterar a versão do crud para Boostra V4 Theme
    E clicar na opção de adicionar customer
    E preencher dados de "<Name>", "<LastName>", "<ContactFirstName>", "<Phone>", "<AddressLine1>", "<AddressLine2>", "<City>", "<State>", "<PostalCode>", "<Country>", "<Employeer>", "<CreditLimit>"
    E clicar na opção de Save
    Então o sistema exibe mensagem informando Your data has been successfully stored into the database. Edit Record or Go back to list

    Exemplos:
      | Name          | LastName | ContactFirstName | Phone        | AddressLine1          | AddressLine2 | City         | State | PostalCode | Country | Employeer | CreditLimit |
      | Teste Sicredi | Teste    | Juliano          | 51 9999-9999 | Av Assis Brasil, 3970 | Torre D      | Porto Alegre | RS    | 91000-000  | Brasil  | 10        | 200         |

  @ct02
  Esquema do Cenário: Validar exclusão de novo customer
    Dado que o usuário esteja no sistema do grocerycrud
    Quando alterar a versão do crud para Boostra V4 Theme
    E clicar na opção de adicionar customer
    E preencher dados de "<Name>", "<LastName>", "<ContactFirstName>", "<Phone>", "<AddressLine1>", "<AddressLine2>", "<City>", "<State>", "<PostalCode>", "<Country>", "<Employeer>", "<CreditLimit>"
    E clicar na opção de Save and go back to list
    E buscar o "<Name>" cadastrado no campo de busca por CustomerName
    E clicar no checkbox de selecionar todos os resultados e clicar na opção de Delete
    E validar o modal exibido com a mensagem Are you sure that you want to delete this X item?
    E clicar na opção delete do modal exibido
    Então o sistema exibe mensagem informando Your data hasbeen successfully deleted from the database.

    Exemplos:
      | Name          | LastName | ContactFirstName | Phone        | AddressLine1          | AddressLine2 | City         | State | PostalCode | Country | Employeer | CreditLimit |
      | Teste Sicredi | Teste    | Juliano          | 51 9999-9999 | Av Assis Brasil, 3970 | Torre D      | Porto Alegre | RS    | 91000-000  | Brasil  | 10        | 200         |

