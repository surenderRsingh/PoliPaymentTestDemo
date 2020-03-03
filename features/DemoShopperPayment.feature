Feature: Test assignment 
    Scenario: Validate default Default Bank name
    Given I set Replace Merchant Code value to 6100550
    And i set amount value to 10.03
    When Pay with Poli button is clicked
    Then Amount on Bank Selection Page should be 10.03
    And Reference on Bank Selection Page should be 'MyRef01'
    And Default bank on Bank Selection Page should be 'iBank AU 01'

    Scenario: Validate default Default Bank details after shopper is logged in
    Given I entered test Merchant details
    And i enter 'DemoShopper' as username
    And i enter 'DemoShopper' as password
    When i click on log in
    Then selected bank should be 'iBank'
    
    
    Scenario: Shopper making a successful payment
    Given I entered test Merchant details
    And I login with default credentials
    And i select account 'Cheque .123456. 46532471 .* available.'
    And i click continue on bank account Page
    When i click confirm on payment confirmation Page
    Then transaction receipt screen should be displayed
