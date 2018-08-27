/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const APP_STATE_NAME = 'global';

export const LOGIN = 'dicoapp/App/LOGIN';
export const LOGIN_SUCCESS = 'dicoapp/App/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'dicoapp/App/LOGIN_ERROR';

export const LOGOUT = 'dicoapp/App/LOGOUT';