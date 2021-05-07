import AccountService from './AccountService';
import CertificateService from './CertificateService'
import OrganizationService from './OrganizationService';
import NewsService from './NewsService';

const services = {
    certificates: CertificateService,
    organizations: OrganizationService,
    account: AccountService,
    news: NewsService
};

export const ServicesFactory = {
    get: name => services[name]
};