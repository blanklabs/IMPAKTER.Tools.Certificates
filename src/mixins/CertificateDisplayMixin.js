import SdgDisplayMixin from "@/mixins/SdgDisplayMixin";
import IndustryDisplayMixin from "./IndustryDisplayMixin";

export default {
    mixins: [SdgDisplayMixin, IndustryDisplayMixin],

    methods: {
        //obsolete - using filters instead for displaying
        async getCertificatesForDisplay(rawCertificates) {
            rawCertificates.forEach((certificateObj) => {
                certificateObj.certificate.priority = this.getThreeScaleForDisplay(
                    certificateObj.certificate.priority
                );
                certificateObj.sdgs = this.getSdgsForDisplay(certificateObj.sdgs)
                certificateObj.industries = this.getIndustriesForDisplay(certificateObj.industries)
            });

            return new Promise((resolve) => {
                resolve(rawCertificates)
            });
        },

    },
    computed: {}
}