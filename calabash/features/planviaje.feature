Feature: Planear viaje

  Scenario: Como usuario quiero acceder a la seccion de plan de viaje y consultar el viaje de la calle 19
            a la calle 22 escribiendo los nombres de las estaciones y por ultimo intercambiar el origen con el destino
    Given I press "Paraderos"
    When I wait for 2 seconds
    And I press "Planear viaje"
    And I wait for 2 seconds
    And I go back
    And I press "Punto de origen"
    And I enter "Calle 19" into input field number 1
    And I press "list"
    And I press "Punto de destino"
    And I enter "Calle 22" into input field number 1
    And I press "list"
    And I press view with id "imgExchange"
    And I press view with id "btnOrigenDestino"
    Then I should see "Resultados"

  Scenario: Como usuario quiero acceder a la seccion de plan de viaje y desplazarmever por el mapa del sistema
    Given I press "Planear viaje"
    And I wait for 2 seconds
    And I press "Mapa del Sistema"
    And I swipe right
    And I swipe left
    And I scroll down
    And I scroll up
    Then I should not see "Rutas"

  Scenario: Como usuario quiero acceder a la seccion de plan de viaje y consultar el viaje de la calle 19 
             a la calle 22 seleccionando las estaciones de la lista
    Given I press "Planear viaje"
    And I wait for 2 seconds
    And I press "Troncales"
    And I press "Caracas"
    And I press "Calle 19"
    And I press "Caracas"
    And I press "Calle 22"
    Then I should see "Resultados"