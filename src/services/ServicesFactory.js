import AccountService from './AccountService';
import CertificateService from './CertificateService'
import OrganizationService from './OrganizationService';
import NewsService from './NewsService';
import PublicationService from './PublicationService';

const services = {
    certificates: CertificateService,
    organizations: OrganizationService,
    account: AccountService,
    news: NewsService,
    publications: PublicationService
};

export const ServicesFactory = {
    get: name => services[name]
};