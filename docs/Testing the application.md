###About the document:

The document contains the steps involved in writing the test cases.

1) Brief introduction on the framework that has been used to write test cases.

2) Setting up the test environment.

3) Commands to run the test suite.

### Introduction to Jasmine & Protractor:

####Jasmine:

Jasmine is mostly preferred testing framework for Angularjs because all the tests can be maintained and documented in a structured way
which is very important while considering the fact that the test cases might be added as and when a new feature will be introduced.

Each test case in Jasmine is written with the main function: 'describe'. Describe function basically groups all the test scenarios together.
The Describe function contains individual test cases which  are defined within a call to 'it' function.

Jasmine provides matchers like toEqual, not.toEqual, tobe, not.tobe which are usually used for assertions within test cases.

Example: 

describe('User Login module', function(){
  it('returns if user email is valid or invalid', function(){
    var email = ['jack@gmail.com', 'esps@home.com']
    var result = validateUserEmail(email);
    expect(result).toEqual('valid'); 
  }        
}

The test cases within this application have been written using Jasmine framework. Jasmine-node should be available within the node_modules for 
the test cases to run.
The test cases are located in a folder 'test' witnin the file grid_spec.js. The comments before the tese case states which scenario is being testing 
in the following test case

Installation of Jasmine:

npm install jasmine-node --save ('--save' command makes an entry into package.json)

#### Protractor:

Protractor is a nodejs program which by default uses Jasmine testing framework for its testing interface. It is built on Selenium server. It runs 
the tests automatically and interact as if a user would do.

For Protractor to run, it needs following to be installed
- JDK
- Selenium standalone server

#### Installation:
- 
