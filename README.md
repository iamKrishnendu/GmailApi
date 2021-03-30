# Test Framework setup guide for Gmail API
This is playground of Gmail API tests

# Table of Content
  1. [Introduction](#introduction)
  2. [Technology Used](#technology-used)
  3. [How to setup](#how-to-setup)
  4. [Preparation of config file](#preparation-of-config-file)
  5. [How to execute the tests](#how-to-execute-the-tests)
  6. [Test Report](#test-report)
  7. [Test Scope](#test-scope) 
  


## Introduction
[Gmail API](https://developers.google.com/gmail/api) provides a set of APIs which are being used by Gmail to perform varoius email operations. This framework has been developed to validate some it's functionalities with some basic use case scenarios.

## Technology Used
  * [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * [Node.JS](https://nodejs.org/en/)
  * [Mocha](https://mochajs.org/)
  * [Chai Assertion Library](https://www.chaijs.com/plugins/chai-http/)
  * [VS Code IDE](https://code.visualstudio.com/)

## How to setup
At first clone the framework [repository](https://github.com/iamKrishnendu/GmailApi.git) in your local system. Run the below command to clone the repostory using [Git Bash](https://git-scm.com/downloads)
```
$ git clone https://github.com/iamKrishnendu/GmailApi.git
```
##### On MacOs
  *  Download and installation guide available [here](https://nodejs.org/en/download/package-manager/#macos)
##### On Windows
  *  Download and installation guide available [here](https://nodejs.org/en/download/package-manager/#windows)
##### Other
  *  Installation guide for all supported OS available [here](https://nodejs.org/en/download/package-manager/)

## Preparation of config file
  1. A `.env` file needs to be created first along with the below details
  2. This file needs to be put uder the `root` project folder before execution
  3. An example file is already provided within the project for reference. For a quickstart, just remove the `.example` extension by `renaming` it
```yaml
USER_ID= <User Id goes here>
BASE_URI=https://gmail.googleapis.com
SERVICE=gmail
VERSION=v1
CLIENT_ID=<Client Id goes here>
CLIENT_SECRET=<Client Secret goes here>
REDIRECT_URI=https://developers.google.com/oauthplayground
REFRESH_TOKEN=<Refresh Token goes here>
TO_EMAIL=<To Email goes here>
FROM_EMAIL=<From email goes here. Usually same as USER_ID>
EAMIL_SUBJECT=<Email Subject goes here>
EMAIL_BODY=<Onliner body of Email goes here>
```

## How to execute the tests
To start the execution, follow the steps below.
  1. Open command prompt or terminal
  2. Navigate to project folder directory
  3. Run `npm install` to install all required dependencies first
  4. Run `npm run test` command to start execution and generate test report

## Test Report
Once test execution is completed, a nice and clean report will generate automatically by [mochawesome](https://github.com/adamgruber/mochawesome#readme) and a `.html` report can be found under `./mochawesome-report`. One snapshot is attached for reference.

## Test Scope
#### Covered
  * Send Email
  * Get email
#### Not Covered
  * Send email with attachment
