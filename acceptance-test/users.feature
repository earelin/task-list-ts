Feature: Users
  As a user
  I want to hava an user account
  So that I can have my own data

  @wip
  Scenario: Create a new user account
    Given I do not have an user account
    When I create a new user account with the information
      | name    | description         |
      | Errands | Tasks to do outside |
    Then I should get the task list with the information
      | name    | description         |
      | Errands | Tasks to do outside |

  @wip
  Scenario: Update an user account
    Given I have an user account
    And I have an user account with the information
      | name    | description         |
      | Errands | Tasks to do outside |
    When I update the user account data to
      | name    | description         |
      | Chores  | Tasks to do at home |
    Then I should get the user account with the information
      | name    | description         |
      | Chores  | Tasks to do at home |

  @wip
  Scenario: Remove an user account
    Given I have an user account
    When I remove the user account
    Then I should not be able to access to the service
