import Authentication from "./authentication.js";
import User from "./users";
import Admin from "./admin";

const API = {
    authentication: new Authentication(),
    user: new User(),
    admin: new Admin()
};

export default API;
