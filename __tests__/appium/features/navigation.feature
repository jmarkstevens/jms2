Feature: Navigate through the app

  Background: Open the app
    Given I open the app
    Then the AllTab tab is visible
    Then the Maps screen is visible

  Scenario: As a user I want to navigate through the app with the tabbar
    When I select All from the tabbar
    Then the All screen is visible
