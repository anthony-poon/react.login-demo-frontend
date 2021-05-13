import Authentication from "./authentication.js";
import User from "./users";

const API = {
    authentication: new Authentication(),
    user: new User(),
};

export default API;
