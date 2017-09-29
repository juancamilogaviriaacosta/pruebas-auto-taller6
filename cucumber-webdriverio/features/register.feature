Feature: Register into losestudiantes
    As an user I want to sign up myself within losestudiantes website in order to rate teachers

Scenario Outline: Register failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And Sign up form with <name> <lastname> <email> and <password>
    And I try to sign up
    Then I expect to see <error>

    Examples:
      | name      | lastname  | email         | password  | error                    |
      |           |           |               |           | Ingresa tu correo        |
      | misogmail | misogmail | misogmail.com | 1234      | Ingresa un correo valido |


Scenario Outline: Register failed with registered email

  Given I go to losestudiantes home screen
    When I open the login screen
    And Sign up form with <name> <lastname> <email> and <password>
    And I try to sign up
    Then Sign up error must be <error>

    Examples:
      | name  | lastname | email                        | password          | error                                |
      | cosme | fulanito | cosmefulanitog88@gmail.com   | cosmefulanitog88  | Ocurrió un error activando tu cuenta |


Scenario Outline: Register succes

  Given I go to losestudiantes home screen
    When I open the login screen
    And Random sign up form
    And I try to sign up
    Then Succes info must be <info>

    Examples:
      | info              |
      | Registro exitoso! |