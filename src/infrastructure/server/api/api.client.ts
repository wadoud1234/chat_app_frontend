import ky from "ky";
import SERVER_ENV from "../env/server.env";

const ApiClient = ky.create({
    prefixUrl: SERVER_ENV.API_URL,
})

export default ApiClient
