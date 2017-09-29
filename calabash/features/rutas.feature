Feature: Calcular rutas

  Scenario: Como usuario quiero acceder a la seccion de rutas y ver el detalle de la ruta 1
    Given I press "Paraderos"
    And I press "Rutas" button
    And I press "1"
    Then I should see "Recorrido"