import { email, password, user } from './user';

import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  LOGOUT,
  KEYPRESS_EMAIL,
  KEYPRESS_PASSWORD
} from '../actions';

import expect from 'expect';

describe('user reducer', () => {
  it('should handle an email keypress', () => {
    var enteredEmail = 'testy@test.org';
    var state = email(null, {type: KEYPRESS_EMAIL, email: enteredEmail});
    expect(state).toBe(enteredEmail, 'Invalid email');
  });

  it('should handle a password keypress', () => {
    var enteredPassword = 'password';
    var state = password(null, {type: KEYPRESS_PASSWORD, password: enteredPassword});
    expect(state).toBe(enteredPassword, 'Invalid password');
  });

  it('should request a login', () => {
    var enteredEmail = 'testy@test.org';
    var state = user(null, {type: REQUEST_LOGIN, email: enteredEmail});
    expect(state.email).toBe(enteredEmail, 'Invalid email');
    expect(state.status).toBe('authenticating', 'Invalid status');
  });

  it('should receive a login profile and mark a user as authenticated', () => {
    var actionObject = {
      type: RECEIVE_LOGIN,
      email: 'testy@test.org',
      profile: {
        access_token: '12345',
        user_name: 'testy',
        created_date: new Date()
      }
    };
    var state = user(null, actionObject);
    expect(state.email).toBe(actionObject.email, 'Invalid email');
    expect(state.status).toBe('authenticated', 'Invalid status');
  });

  it('should receive an error and mark a user as authenticated', () => {
    var actionObject = {
      type: RECEIVE_LOGIN,
      email: 'testy@test.org',
      error: 'Server error encountered'
    };
    var state = user(null, actionObject);
    expect(state.email).toBe(actionObject.email, 'Invalid email');
    expect(state.status).toBe('unauthenticated', 'Invalid status');
  });

  it('should log a user out', () => {
    // First login a user
    var actionObject = {
      type: RECEIVE_LOGIN,
      email: 'testy@test.org',
      profile: {
        access_token: '12345',
        user_name: 'testy',
        created_date: new Date()
      }
    };
    var state = user(null, actionObject);
    expect(state.email).toBe(actionObject.email, 'Invalid logged in email');
    expect(state.status).toBe('authenticated', 'Invalid logged in status');

    // Now log them out
    state = user(null, {type: LOGOUT});
    expect(state.email).toBe(null, 'Invalid email');
    expect(state.profile).toBe(null, 'Invalid profile');
    expect(state.status).toBe('unauthenticated', 'Invalid status');
  });
});