import AccountService from './AccountService';
import CertificateService from './CertificateService'
import OrganizationService from './OrganizationService';

const services = {
    certificates: CertificateService,
    organizations: OrganizationService,
    account: AccountService
};

export const ServicesFactory = {
    get: name => services[name]
};