# chain-reaction.common
## Overview

This is the "common" project of the [Chain Reaction](https://github.com/ericnograles/chain-reaction) multi-platform sample project.  It houses the Redux components and infrastructure communication code for the application.

Spliting off the Redux state management and generic services was intentional.  This illustrates how one could have a shared library across Web, iOS, and Android apps written in [React](https://facebook.github.io/react/) and [React Native](https://facebook.github.io/react-native/)

## Installation

Follow the instructions on the [Chain Reaction](https://github.com/ericnograles/chain-reaction) readme.md, as this entire solution relies on a specific folder structure which is managed by the main repo.

## Development

The [chain-reaction.web](https://github.com/ericnograles/chain-reaction.web) and [chain-reaction.mobile](https://github.com/ericnograles/chain-reaction.mobile) projects directly reference the `/src` folder of this project for ease of development.  Simply make any changes to the files under `/src` to see them reflected on the app on which you are working.

## Library Readiness

This project is written in ES2015 (see the `/src` directory).  However, there is support for deploying this to NPM using transpiled ES5 code.  Simply run `npm run compile` to regenerate the `/lib` folder.  You'll notice that the application's `index.js` entry point actually references `/lib` and not `/src`.

To test this, in either the [chain-reaction.web](https://github.com/ericnograles/chain-reaction.web) or [chain-reaction.mobile](https://github.com/ericnograles/chain-reaction.mobile) projects, run `npm install git://github.com/ericnograles/chain-reaction.common --save`.  Note that this repo will then be pulled into `node_modules` and can be referenced using: 
* ES2015: `import * as common from chain-reaction.common` 
* ES5: `var common = require('chain-reaction.common')`

## What's Under the Hood?
* [Redux](https://github.com/reactjs/redux)
* [Babel](https://babeljs.io/)
