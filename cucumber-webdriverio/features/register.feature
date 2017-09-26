Feature: Register into losestudiantes
    As an user I want to sign up myself within losestudiantes website in order to rate teachers

Scenario Outline: Register failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill sign up form with <name>, <lastname>, <email> and <password>
    And I try to sign up
    Then I expect to see <error>

    Examples:
      | name      | lastname  | email         | password  | error                    |
      |           |           |               |           | Ingresa un correo valido |
      | misogmail | misogmail | misogmail.com | 1234      | Ingresa un correo valido |


Scenario Outline: Register failed with registered email

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill sign up form with <name>, <lastname>, <email> and <password>
    And I try to sign up
    Then I expect to see <error>

    Examples:
      | name  | lastname | email                        | password          | error                                |
      | cosme | fulanito | cosmefulanitog88@gmail.com   | cosmefulanitog88  | Ocurrió un error activando tu cuenta |


Scenario Outline: Register succes

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill sign up form with <name>, <lastname>, <email> and <password>
    And I try to sign up
    Then Must exists exit button

    Examples:
      | name  | lastname | email                        | password          | error                                |
      | cosme | fulanito | cosmefulanitog88@gmail.com   | cosmefulanitog88  | Ocurrió un error activando tu cuenta |