Feature: Go to the home
  Display the title and other home page actions

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title

  Scenario Outline: Name input
    Given I am on the home page 2
    When I change the name to <newName>
    Then I should see the name change

  Examples:
    | newName |
    | "Bill" |
    | "Bob" |

  Scenario Outline: Correct age input
    Given I am on the home page 3
    When I enter the keys <age> in the age field
    Then I should see the age change

  Examples:
    | age |
    | 12 |
    | 98 |

  Scenario Outline: Incorrect age input
    Given I am on the home page 4
    When I enter the keys <age> in the age field
    Then I should not see the age change

  Examples:
    | age |
    | "asd" |
    | "derp" |