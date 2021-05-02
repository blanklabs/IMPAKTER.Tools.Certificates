//import { User, Transport } from "../../../../SHARED.CODE";
import User from "../../../SHARED.CODE/Objects/User/user";
import {
    Transport,
    transportCodes,
} from "../../../SHARED.CODE/Objects/Transport";

//import { User, Transport, transportCodes } from "shared.code";
//import User from "shared.code/Objects/User/user";
//import { Transport, transportCodes } from "shared.code/Objects/Transport.js";



export default {
    data() {
        return {
            user: new User(),
            request: new Transport(),
            transportCodes: transportCodes

        }
    },
    mounted() {
        this.user = new User();

    }
}

