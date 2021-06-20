import AccountService from './AccountService';
import CertificateService from './CertificateService'
import OrganizationService from './OrganizationService';
import NewsService from './NewsService';
import PublicationService from './PublicationService';
import UserService from "./UserService";

const services = {
    certificates: CertificateService,
    organizations: OrganizationService,
    account: AccountService,
    news: NewsService,
    publications: PublicationService,
    user: UserService
};

export const ServicesFactory = {
    get: name => services[name]
};