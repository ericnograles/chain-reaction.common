export let actions = require('./actions');
export let constants = require('./constants');
export let reducers = require('./reducers');
export let services = require('./services')
export let configureStore = require('./store/configureStore').configureStore;

console.log('(From chain-reaction.common) The API Path is ' + API_PATH);