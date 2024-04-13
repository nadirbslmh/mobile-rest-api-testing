Feature: Notes
    As a user
    I can manage Notes
    So that I can manage my notes carefully

    Background: Home Page
        Given I am on the home page

    Scenario: View all notes
        When I see sample note
        Then I can view all notes

    Scenario: Create note
        When I tap plus button
        Then I insert title
        Then I insert content
        Then I tap create button
        Then I see message