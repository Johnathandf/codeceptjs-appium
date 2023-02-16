Feature: Login
    Eu como usuário
    Gostaria de  fazer Login na aplicação
    Para acessar o aplicativo

    Scenario: Login With Success
     Given I fill email
     And I fill password
     When I tap on entrar
     Then I see the Salvar button