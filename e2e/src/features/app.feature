Feature: Go to the home
  Display the title and other home page actions

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title

  Scenario Outline: Home Page
    Given I am waiting on the home page
    When I change the name to <newName>
    Then I should see the name change

  Examples:
    | newName |
    | "Bill" |
    | "Bob" |