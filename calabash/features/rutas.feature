Feature: Calcular rutas

  Scenario: Como usuario quiero acceder a la seccion de rutas y ver el detalle de la ruta 1 de transmilenio
    Given I press "Paraderos"
    When I wait for 2 seconds
    And I press "Rutas de buses"
    And I press "1"
    And I wait for 2 seconds
    Then I should see "Recorrido"

  Scenario: Como usuario quiero acceder a la seccion de rutas y ver el detalle de la ruta 4 de bus urbano
    Given I press "Rutas de buses"
    When I wait for 2 seconds
    And I press "URBANO"
    And I press "4"
    And I wait for 2 seconds
    Then I should see "Recorrido"

  Scenario: Como usuario quiero acceder a la seccion de rutas y filtrar las rutas que estan en operacion
    Given I press "Rutas de buses"
    When I wait for 2 seconds
    And I press the menu key
    And I press "En operación"
    And I wait for 2 seconds
    Then I should see "Rutas"