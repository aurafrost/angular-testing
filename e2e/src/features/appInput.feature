Feature: Go to the home
  Change input of name

  Scenario: Home Page
    Given I am waiting on the home page
    When I change the name
    Then I should see the name change