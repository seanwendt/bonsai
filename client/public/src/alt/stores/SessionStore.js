import * as Constants from "../Constants"

export default class SessionStore {
    constructor() {

        let systemActions        = this.alt.getActions(Constants.Actions.SYSTEM);
        let sessionActions       = this.alt.getActions(Constants.Actions.SESSION);

        this.register = {
            state: Constants.RegisterStates.NONE,
            errorMessage: null
        };

        this.login = {
            state: Constants.LoginStates.NONE,
            errorMessage: null
        };

        // Temporary list to resolve the results into for now
        this.messages = [];

        this.token = null;
        this.userId = null;

        this.bindListeners({
            // System
            handleInitialize: systemActions.initialize,

            // Session
            handleUpdateSession: sessionActions.updateSession,

            handleRegisterUpdateView: sessionActions.registerUpdateView,
            handleLoginUpdateView: sessionActions.loginUpdateView,

            handleLogoutOk: sessionActions.logoutOk
        });
    }

    handleInitialize() {

    }

    handleUpdateSession(payload) {
        let { token, user } = payload;

        this.token = token;
        this.userId = user.id;
    }

    handleRegisterUpdateView(payload) {
        if (payload.state) {
            this.register.state = payload.state;
        }

        if (payload.message) {
            this.register.errorMessage = payload.message;
        }
    }

    handleLoginUpdateView(payload) {
        if (payload.state) {
            this.login.state = payload.state;
        }

        if (payload.message) {
            this.login.errorMessage = payload.message;
        }
    }

    handleLogoutOk() {
        this.messages.push('Logged Out');
    }
}