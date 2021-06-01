export default {
    methods: {
        async getCertificatesForDisplay(rawCertificates) {
            rawCertificates.forEach((certificateObj) => {
                certificateObj.certificate.priority = this.getThreeScaleForDisplay(
                    certificateObj.certificate.priority
                );
            });
            return new Promise((resolve) => { resolve(rawCertificates) });
        },

    },
    computed: {

    }
}