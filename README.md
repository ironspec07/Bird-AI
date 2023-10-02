# birdAI

birdAI is a generative AI platform

## general setup

- [x] setup an **next.js** app
- [x] add ui with **shadcn**
- [x] create **landing** page
- [x] create **dashbord** page
- [x] Add user authentication using **clerk**
- [x] add conversation page
- [x] add openAI api to app

### Next.js

> - create a new next.js app
> - use routes group to organise folder structure without affecting browser route

### shadcn/ui

> - library for building user interface
> - add shadcn-ui

### Authentication using Clerk

> - setup clerk for next.js
> - setup middleware
> - setup authentication folder
> - setup sign-in and singn-up
> - setup environment variables

### Dashboard page

- create a **sidebar**

  > - responsive (hidden for mobile)
  > - add app logo & name on top
  > - add routes to different features
  > - use lucid-react to add logo

- create a **navbar**

  > - add userProfile menu in navbar
  > - add toogle button to open/close sidebar (sheet) for mobile

- add cards to display features of app
- add links to navigate to pages

### Conversation page

- create a conversation folder
- add heading element
- add form element
  - form validation
  - add zod to create schema
  - constant file to store schema
  - define form state (loading,submit)
- add user input element
- add userPrompt submit button
- create result display section
- display result generated from openAI api

### openAI API

- create api folder
- add api keys to env variables
- add openai package
- create route.ts to add routes
- setup configuration
- add POST method to send request
- add methods to catch resonse & error
- setup error message
- add conditionals to check for valid request
