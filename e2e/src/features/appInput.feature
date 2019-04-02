Feature: Go to the home
  Change input of name

  Scenario Outline: Home Page
    Given I am waiting on the home page
    When I change the name to <newName>
    Then I should see the name change

  Examples:
    | newName |
    | "Bill" |
    | "Bob" |