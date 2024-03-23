import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//     {
//         path: '',
//         data: {
//             entityType: 'home',
//             title: 'Wholesale B2B marketplace - MarketTime',
//             description: 'MarketTime is a wholesale marketplace supporting b2b. We work with sellers and buyers globally. Want to grow your business? Visit us now.',
//             keywords: 'wholesale marketplace, b2b marketplace, markettime, wholesale order management software, wholesale website',
//         },
//         loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent),
//     },

//     {
//         path: 'tradeshows',
//         data: {
//             entityType: 'tradeshows',
//         },
//         loadComponent: () => import('./components/tradeshow/tradeshow.component').then((m) => m.TradeshowComponent),
//     },
//     {
//         path: 'careers',
//         data: {
//             entityType: 'careers',
//             title: 'Careers - MarketTime',
//             description: 'Looking forward to being a part of the winning team at MarketTime? Then check out our Career page now. Come join us!',
//             keywords: '',
//         },
//         loadComponent: () => import('./components/career/career.component').then((m) => m.CareerComponent),
//     },
//     {
//         path: 'culture',
//         data: {
//             entityType: 'culture',
//             title: 'Omnichannel B2B Commerce Across Globe - MarketTime',
//             description: 'MarketTime helps the customers grow. We work towards bridging gaps between digital and physical b2b commerce. Need help? Call us!',
//             keywords: '',
//         },
//         loadComponent: () => import('./components/culture/culture.component').then((m) => m.CultureComponent),
//     },
//     {
//         path: 'clients',
//         data: {
//             entityType: 'clients',
//             title: 'Clients - MarketTime',
//             description: 'MarketTime has clients all over the world. We are trusted by more than 2,000 companies for omnichannel commerce. Request for a demo now.',
//             keywords: '',
//         },
//         loadComponent: () => import('./components/clients/clients.component').then((m) => m.ClientsComponent),
//     },
//     {
//         path: 'contact-us',
//         data: {
//             entityType: 'contact-us',
//             title: 'Contact Us - MarketTime',
//             description: 'If you want to grow and expand your business in the Ecommerce industry and more, get in touch with MarketTime\'s expert team now. Call us!',
//             keywords: '',
//         },
//         loadComponent: () => import('./components/contact-us/contact-us.component').then((m) => m.ContactUsComponent),
//     },
//     {
//         path: 'support-download',
//         data: {
//             entityType: 'support-download',
//             title: 'Newest Updates And Support Guides - MarketTime',
//             description: 'Get the latest applications developed by our expert developers. Want more information about MarketTime? Contact for support.',
//             keywords: '',
//         },
//         loadComponent: () => import('./components/support-download/support-download.component').then((m) => m.SupportDownloadComponent),
//     },
//     {
//         path: 'privacy-policy',
//         data: {
//             entityType: 'privacy-policy',
//         },
//         loadChildren: () => import('./components/privacy-policy/privacy-policy-routing.module').then((m) => m.PrivacyPolicyRoutes),
//     },
//     {
//         path: 'industry',
//         data: {
//             entityType: 'industry',
//             title: 'MarketTime Global B2B Ecommerce Solution',
//             description: 'MarketTime is the most effective b2b ecommerce solution and omnichannel ecommerce platform. We have your industry covered. Want to see your business grow? Call us now.',
//             keywords: 'b2b ecommerce platform, b2b ecommerce solution, markettime',
//         },
//         loadComponent: () => import('./components/industry/industry.component').then((m) => m.IndustryComponent),
//     },
//     // {
//     //     path: 'company',
//     //     data: {
//     //         entityType: 'company',
//     //     },
//     //     loadComponent: () => import('./components/company/company.module').then(m => m.CompanyModule),
//     // },
//     // {
//     //     path: 'news',
//     //     data: {
//     //         entityType: 'news',
//     //     },
//     //     loadComponent: () => import('./components/latest-news/latest-news.module').then(m => m.LatestNewsModule),
//     // },
//     {
//         path: 'sellers',
//         data: {
//             entityType: 'sellers',
//             title: 'Order Management, Commission Tracking Software - Markettime',
//             description: 'MarketTime is a wholesale b2b platform trusted by companies everywhere. Learn more now to higher your sales!',
//             keywords: 'wholesale b2b platform, b2b online marketplace, markettime',
//         },
//         loadComponent: () => import('./components/seller/seller.component').then((m) => m.SellerComponent),
//     },
//     {
//         path: 'buyers',
//         data: {
//             entityType: 'buyers',
//             title: 'Best B2B Ecommerce Platform for Your Business',
//             description: 'Reach new customers through the best B2B ecommerce platform, it’s a huge platform for both buyers and sellers. For more information, contact us.',
//             keywords: 'best b2b ecommerce platform, markettime, b2b marketplace platform',
//         },
//         loadComponent: () => import('./components/buyer/buyer.component').then((m) => m.BuyerComponent),
//     },
//     {
//         path: 'connect-with-us',
//         data: {
//             entityType: 'connect-with-us',
//             title: 'Connect With Us - MarketTime ',
//             description: 'MarketTime loves to connect with its clients and solve your doubts. We offer the best customer support in the industry. Reach us for any queries.',
//             keywords: '',
//         },
//         loadComponent: () => import('./components/connect-with-us/connect-with-us.component').then((m) => m.ConnectWithUsComponent),
//     },
//     {
//         path: 'sales-agencies',
//         data: {
//             entityType: 'sales-agencies',
//         },
//         loadComponent: () => import('./components/sales-agencies/sales-agencies.component').then((m) => m.SalesAgenciesComponent),
//     },
//     {
//         path: 'manufacturer-brand',
//         data: {
//             entityType: 'manufacturer-brand',
//         },
//         loadComponent: () => import('./components/manufacturer-brand/manufacturer-brand.component').then((m) => m.ManufacturerBrandComponent),
//     },
//     {
//         path: 'b2b-e-commerce',
//         data: {
//             entityType: 'b2b-e-commerce',
//             title: 'B2B Ecommerce Platform And Wholesale Software - MarketTime',
//             description: 'MarketTime b2b wholesale software is trusted by companies everywhere. It is the best B2B ecommerce platform. Contact us for more information.',
//             keywords: 'b2b ecommerce platform, b2b omnichannel commerce platform, markettime',
//         },
//         loadComponent: () => import('./components/e-commerce/e-commerce.component').then((m) => m.ECommerceComponent),
//     },
//     {
//         path: 'public-api-list',
//         data: {
//             entityType: 'public-api-list',
//         },
//         loadComponent: () => import('./components/public-api-list/public-api-list.component').then((m) => m.PublicApiListComponent),
//     },
//     {
//         path: 'leadership',
//         data: {
//             entityType: 'leadership',
//             title: 'Leadership Team - MarketTime',
//             description: 'MarketTime located at the Dallas Market Center is run by a group of highly experienced and skilled professionals. Find more about them here!',
//             keywords: '',
//         },
//         loadComponent: () => import('./components/leadership/leadership.component').then((m) => m.LeadershipComponent),
//     },
//     {
//         path: 'press',
//         data: {
//             entityType: 'press',
//             title: 'MarketTime - Latest News',
//             description: 'Find out the latest happenings at MarketTime by checking our Press category. Here you will find everything you need to know. Check now!',
//             keywords: '',
//         },
//         loadComponent: () => import('./components/press/press.component').then((m) => m.PressComponent),
//     },
//     {
//         path: 'faq',
//         data: {
//             entityType: 'faq',
//         },
//         loadComponent: () => import('./components/faq/faq.component').then((m) => m.FaqComponent),
//     },
//     // {
//     //     path: 'all-with-markettime',
//     //     data: {
//     //         entityType: 'all-with-markettime'
//     //     },
//     //     loadComponent: () => import('./components/all-with-markettime/all-with-markettime.module').then(m => m.AllWithMarkettimeModule)
//     // },
//     {
//         path: 'one-place',
//         data: {
//             entityType: 'one-place',
//             title: 'One Place To Enter Data - MarketTime',
//             description: 'Why waste time entering the same data at different places? Hire MarketTime to reach your customers no matter where they shop. Call us!',
//             keywords: '',
//         },
//         loadComponent: () => import('./components/all-data-one-place/all-data-one-place.component').then((m) => m.AllDataOnePlaceComponent),
//     },
//     {
//         path: 'buying-group',
//         data: {
//             entityType: 'buying-group',
//             title: 'Digital Marketplace For Your Business - MarketTime',
//             description: 'MarketTime is a white-label marketplace platform. We are trusted by companies from everywhere. Want to drive your business\' sales? Visit us!',
//             keywords: '',
//         },
//         loadComponent: () => import('./components/buying-groups/buying-groups.component').then((m) => m.BuyingGroupsComponent),
//     },
//     {
//         path: 'associations',
//         data: {
//             entityType: 'associations',
//             title: 'Create Your Own Digital Marketplace - MarketTime',
//             description: 'Want your own digital marketplace? Come to MarketTime. Our customer success team will take care of the onboarding tasks. Contact us now.',
//             keywords: '',
//         },
//         loadComponent: () => import('./components/associations/associations.component').then((m) => m.AssociationsComponent),
//     },
//     {
//         path: 'trade-group',
//         data: {
//             entityType: 'trade-group',
//             title: 'A Branded Marketplace Platform - MarketTime',
//             description: 'MarketTime has devoted over 35 years of dedication to the wholesale industry. We value our customers. Want to connect with us? Call us now.',
//             keywords: '',
//         },
//         loadComponent: () => import('./components/trade-groups/trade-groups.component').then((m) => m.TradeGroupsComponent),
//     },
//     {
//         path: 'press-details',
//         data: {
//             entityType: 'press-details'
//         },
//         loadComponent: () => import('./components/press-details/press-details.component').then(m => m.PressDetailsComponent)
//     },
//     {
//         path: 'tradeshow-marketplace',
//         data: {
//             entityType: 'tradeshow-marketplace',
//             title: 'Digital Solution For A High Customer Engagement - MarketTime',
//             description: 'MarketTime provides a powerful digital solution to organizations. If you want to deliver value to your members, contact us.',
//             keywords: '',
//         },
//         loadComponent: () => import('./components/tradeshow-marketplace/tradeshow-marketplace.component').then((m) => m.TradeshowMarketplaceComponent),
//     },
//     {
//         path: 'switch-to-markettime',
//         data: {
//             entityType: 'switch-to-markettime',
//         },
//         loadComponent: () => import('./components/switch-to-markettime/switch-to-markettime.component').then((m) => m.SwitchToMarkettimeComponent),
//     },
//     {
//         path: 'industry-landing',
//         data: {
//             entityType: 'industry-landing',
//         },
//         loadComponent: () => import('./components/industry-landing/industry-landing.component').then((m) => m.IndustryLandingComponent),
//     },
//     {
//         path: 'tell-me-more',
//         data: {
//             entityType: 'tell-me-more',
//         },
//         loadComponent: () => import('./components/tell-me-more/tell-me-more.component').then((m) => m.TellMeMoreComponent),
//     },
//     {
//         path: 'team',
//         data: {
//             title: 'MarketTime Internal Use',
//             entityType: 'team',
//         },
//         loadComponent: () => import('./components/team/team.component').then((m) => m.TeamComponent),
//     },
//     {
//         path: 'marketplaceresources',
//         data: {
//             entityType: 'marketplaceresources',
//         },
//         loadComponent: () => import('./components/marketplace-resources/marketplace-resources.component').then((m) => m.MarketplaceResourcesComponent),
//     },
//     {
//         path: 'marketplace-sponsor',
//         data: {
//             entityType: 'marketplace-sponsor',
//         },
//         loadComponent: () => import('./components/marketplace-sponsor/marketplace-sponsor.component').then((m) => m.MarketplaceSponsorComponent),
//     },
//     {
//         path: 'api',
//         data: {
//             entityType: 'api',
//         },
//         loadComponent: () => import('./components/api/api.component').then((m) => m.ApiComponent),
//     },
//     {
//         path: '404', data: { entityType: '404' }, loadComponent: () => import('./components/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent),
//     },
//     { path: '**', data: { entityType: '**' }, redirectTo: '/404', pathMatch: 'full' },
// ];

@NgModule({
    // imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})],
    exports: [RouterModule],
})
export class AppRoutingModule { }
