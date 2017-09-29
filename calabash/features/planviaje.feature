Feature: Planear viaje

  Scenario: Como usuario quiero acceder a la seccion de plan de viaje y consultar el viaje de la calle 19 a la calle 22
    Given I press "Paraderos"
    When I wait for 2 seconds
    And I press "Planear viaje"
    And I wait for 2 seconds
    And I go back
    And I press "Troncales"
    And I press "Caracas"
    And I press "Calle 19"
    And I press "Caracas"
    And I press "Calle 22"
    Then I should see "Resultados"