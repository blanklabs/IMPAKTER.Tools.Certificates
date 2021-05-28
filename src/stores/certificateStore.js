import { ServicesFactory } from "@/services/ServicesFactory";
import axios from 'axios'

const certificateService = ServicesFactory.get("certificates");

//import certificateModel from "./models/certificate";
import certificateModel from "../../../SHARED.CODE/Objects/Certificate/certificate";
//import {certificateModel} from "shared.code";
//import organizationModel from ".././models/organization";
import { awsConfig } from "@/models/constants"
import {
    Transport,
    transportCodes,
} from "../../../SHARED.CODE/Objects/Transport";
import compute from "@/models/compute";



const certificateStore = {
    namespaced: true,
    state: {

        certificateArchived: {
            certificateID: null,
            name: "",
            description: "",
            priority: "",
            applicationLength: "",
            imagePath: "",
            difficulty: null,
            relevance: null,
            validity: null,
            region: null,
            countries: [],
            goal: null,
            rating: "P3",
            pricing: "",
            sdgEngagement: "",
            sdgs: [],
            sdgTargets: [],
            industries: [],
            industrySectors: [],
            activeStatus: true
        },
        certificate: new certificateModel(),
        organization: {},
        organizationName: null,
        certificates: [],
        organizationID: null,
        mode: "new",
        IsloggedIn: false,
        isNetworkConnected: null,
        uploadPolicy: null,
        orgLoginFailed: false

    },
    getters: {
        certificateForm: state => {
            state.certificate.setOrganizationID(state.organizationID)
            console.log(state.organizationID)
            return state.certificate
        },
        payloadArchived: state => {
            return {
                certificateID: state.certificate.certificateID,
                basicDetails: {
                    name: state.certificate.name,
                    organizationID: state.organizationID,
                    description: state.certificate.description,
                    priority: state.certificate.priority,
                    activeStatus: state.certificate.activeStatus
                },
                sdgs: state.certificate.sdgs,
                sdgTargets: state.certificate.sdgTargets,
                additionalDetails: {
                    applicationLength: state.certificate.applicationLength,
                    difficulty: state.certificate.difficulty,
                    relevance: state.certificate.relevance,
                    validity: state.certificate.validity,
                    goal: state.certificate.goal,
                    specificity: state.certificate.rating,
                    pricing: state.certificate.pricing,
                    sdgEngagement: state.certificate.sdgEngagement
                }

            }


        },
        payload: state => {
            var payload = state.certificate.getCertificatePayload()
            return payload
        },
        certificates: state => {
            return state.certificates
        },
        mode: state => {
            return state.mode
        },
        isNetworkConnected: state => {
            return state.isNetworkConnected
        },

        uploadPolicy: state => {
            return state.uploadPolicy
        },
        getCertificatesCount: state => {
            return state.certificates.length;
        }
    },
    mutations: {
        changeCertificate(state, payload) {
            state.certificate = payload
        },
        addSdgs(state, payload) {
            state.certificate.sdgs = payload
            state.certificate.computeSdgs()
        },
        addSdgTargets(state, payload) {
            state.certificate.sdgTargets = payload
        },
        addIndustries(state, payload) {
            state.certificate.industries = payload
            state.certificate.computeIndustries()
        },
        performComputations(state) {
            state.certificate.computeSdgs()
            state.certificate.computeIndustries()
        },
        addSubIndustries(state, payload) {
            state.certificate.industrySectors = payload
        },

        resetCertificate(state) {
            state.certificate = new certificateModel()

        },

        addCertificate(state, payload) {
            state.certificates.Add(payload)
        },
        changeMode(state, payload) {
            state.mode = payload
        },

        resetComputedSdgs(state) {
            state.certificate.computedSdgs = []
        },

        async updateCertificateStatus(state, payload) {
            state.certificate = payload
            state.certificate.mode = "statusChange"
            var req = state.certificate.getCertificatePayload()

            await certificateService.updateCertificate(req).then((response) => {
                this.responseMessage = response.data.msg
                this.responseStatus = response.data.status
            });
            console.log(this.responseMessage)
            state.certificate = new certificateModel.certificateModel()

        },

        async deleteCertificate(state) {
            await certificateService.deleteCertificate(state.certificate.certificateID).then((response) => {
                this.responseMessage = response.data.msg
                this.responseStatus = response.data.status
            });
            console.log(this.responseMessage)
            state.certificate = new certificateModel.certificateModel()

        },

        fetchSignatureAndPolicy(state, payload) {
            state.uploadPolicy = awsConfig.policy
            state.uploadPolicy.content_type = payload.content_type
            state.uploadPolicy.key = `certificateLogos/${state.organizationName}_${payload.filename}`
        },
        async uploadImage(payload) {
            let { data } = await axios.post(awsConfig.s3bucketUrl, payload)
            console.log(data)
        },
        setCertificates(state, payload) {
            return new Promise((resolve) => {
                let certificatesResponse = payload;
                state.certificates = [];
                for (var i = 0; i < certificatesResponse.length; i++) {
                    let cert = new certificateModel();
                    cert.change(certificatesResponse[i]);
                    cert.computeSdgs();
                    state.certificates.push(cert);
                }
                state.certificates = state.certificates.sort(compute.compareByName);
                resolve();
            })
        }


    },
    actions: {
        changeCertificate(context, payload) {
            context.commit("changeCertificate", payload)
        },
        addSdgs(context, payload) {
            context.commit("addSdgs", payload)
        },
        addSdgTargets(context, payload) {
            context.commit("addSdgTargets", payload)
        },
        addIndustries(context, payload) {
            context.commit("addIndustries", payload)
        },
        addSubIndustries(context, payload) {
            context.commit("addSubIndustries", payload)
        },

        resetCertificate(context) {
            context.commit("resetCertificate")
        },

        addCertificate(context, payload) {
            context.commit("addCertificate", payload)
        },
        changeMode(context, payload) {
            context.commit("changeMode", payload)
        },
        resetComputed(context) {
            context.commit("resetComputedSdgs")
        },
        updateCertificateStatus(context, payload) {
            context.commit("updateCertificateStatus", payload)
        },

        performComputations(context) {
            context.commit("performComputations")
        },
        deleteCertificate(context) {
            context.commit("deleteCertificate")
        },
        async fetchCertificates(context) {
            let org = await context.dispatch("org/fetchOrg", null, { root: true });
            console.log("Executing fetch Certificates")
            let response = new Transport();
            try {
                let webResponse = await certificateService.fetchCertificates(org.orgID);
                response = webResponse.data;
                if (response.status.code == transportCodes.SUCCESS) {
                    await context.commit('setCertificates', response.data);
                    return new Promise((resolve) => {
                        context.commit("global/toggleLoading", "off", { root: true });
                        resolve(context.getters.certificates)
                    })
                }
            } catch (err) {
                context.commit("global/setMessagePopup", { type: 0, message: err }, { root: true });
            }
        }
    }
}


export { certificateStore }