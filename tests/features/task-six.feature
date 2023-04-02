@ui-tests @api-tests
Feature: Todoist Projects

  Background: Login into Todoist
    Given the user logged into Todoist
  @six
  Scenario: Create Project
    Given the user hovers the mouse on Projects label on the Vertical Menu
    And the user clicks the Add Project Icon on the Vertical Menu
    And the user sets "new project" as Project Name on the Add Project popup
    And the user clicks the color dropdown list and select "Lime Green" on the Add Project popup
    And The user add to favorites the new project on the Add Project popup
    And the user select type "Board" project on the Add Project popup
    Then the user click the "Cancel" button on the Add Project popup
    When the user should not see the New Project on the Vertical Menu
