import {store} from "../../redux/store";

export default class JWTConsumer {
    constructor() {
        this._getJwt();
        store.subscribe(() => {
            this._getJwt();
        });
    }

    _getJwt() {
        const state = store.getState();
        this.jwt = state.login.jwt;
    }

    ajaxOption () {
        return {
            contentType: "application/json; charset=utf-8",
            headers: {
                "Authorization": `Bearer ${this.jwt}`,
            },
        }
    }
}