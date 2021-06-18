//import { User, Transport } from "../../../../SHARED.CODE";
import User from "../../../SHARED.CODE/Objects/User/user";
import {
    Transport,
    transportCodes,
    generalCases
} from "../../../SHARED.CODE/Constants/Transport";

//import { User, Transport, transportCodes } from "shared.code";
//import User from "shared.code/Objects/User/user";
//import { Transport, transportCodes } from "shared.code/Objects/Transport.js";



export default {
    data() {
        return {
            statusMessage: "",
            toggleStatusMessage: false,
            user: new User(),
            request: new Transport(),
            response: new Transport(),
            transportCodes: transportCodes,
            generalCases: generalCases

        }
    },
    mounted() {
        this.user = new User();

    }
}

