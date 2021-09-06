import { createRouter, createWebHistory } from 'vue-router';
import main from '../components/routComponents/MainPage';
import notFound from '../components/routComponents/404Page';
import consortium from '../components/routComponents/ConsortiumPage';
import ways from '../components/routComponents/WaysPage';
import news from '../components/routComponents/NewsPage';
import ResearchPage from '../components/routComponents/ResearchPage';
import ResearchAllPage from '../components/routComponents/ResearchAllPage';
import newsItem from '../components/routComponents/NewsItemsPage';
import party from '../components/routComponents/PartyPage';
import contacts from '../components/routComponents/ContactsPage';
import form from '../components/routComponents/FormPage';
import progress from '../components/routComponents/ProgressPage';
import colleagues from '../components/routComponents/ColleaguesPage';
import account from '../components/routComponents/AccountPage';
import project from '../components/routComponents/ProjectPage';
import auth from '../components/unitComponents/AuthorizationeSection';
import documents from '../components/routComponents/DocumentsPage';
import privateDocuments from '../components/routComponents/PrivateDocumentsPage';
import presentation from '../components/routComponents/PresentationPage';
import recovery from '../components/routComponents/RecoveryPage';
import knowledgeBase from '../components/routComponents/KnowledgeBasePage';
import dynamics from '../components/routComponents/DynamicsPage';
import calendar from '../components/routComponents/CalendarPage';
import educational from '../components/routComponents/EducationalProgramsPage';
import participantNews from '../components/routComponents/ParticipantNewsPage';
import KBMediaList from '../components/routComponents/KBMediaList.vue';
import KBMediaPage from '../components/routComponents/KBMediaPage.vue';
import MarketingPage from '../components/routComponents/MarketingPage.vue';
import OffersPage from '../components/routComponents/OffersPage.vue';
import TransferPage from '../components/routComponents/TransferPage';
import AppliedResultsPage from '../components/routComponents/AppliedResultsPage.vue';

import AdminNewsPage from '../components/routComponents/AdminNewslPage';
import AdminDocumentPage from '../components/routComponents/AdminDocumentPage';
import AdminCalendarPage from '../components/routComponents/AdminCalendarPage';
import AdminPartyPage from '../components/routComponents/AdminPartyPage';
import AdminResearchPage from '../components/routComponents/AdminResearchPage';
import FormNews from '../components/routComponents/FormNews.vue';
import FormResearcher from '../components/routComponents/admin/FormResearcher.vue';
import FormResearch from '../components/routComponents/admin/FormResearch.vue';
import UI_calendar from '../components/routComponents/UI_calendar';

const routes = [
    {
        path: '/',
        name: 'Main',
        component: main,
    },
    {
        path: '/consortium',
        name: 'Consortium',
        component: consortium,
    },
    {
        path: '/404',
        name: 'notFound',
        component: notFound,
    },
    {
        path: '/ways',
        name: 'ways',
        component: ways,
    },
    {
        path: '/news',
        name: 'news',
        component: news,
    },
    {
        path: '/participantNews/:tag',
        name: 'participantNews',
        component: participantNews,
        props: true,
    },
    {
        path: '/research/:pageId',
        name: 'research',
        component: ResearchPage,
        props: true,
    },
    {
        path: '/all-research/:pageId',
        name: 'all-research',
        component: ResearchAllPage,
        props: true,
    },
    {
        path: '/newsItem/:pageId',
        name: 'newsItem',
        component: newsItem,
        props: true,
    },
    {
        path: '/party/:pageId',
        name: 'party',
        component: party,
        props: true,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: contacts,
    },

    {
        path: '/auth',
        name: 'auth',
        component: auth,
    },
    {
        path: '/documents',
        name: 'documents',
        component: documents,
    },
    {
        path: '/privateDocuments',
        name: 'privateDocuments',
        component: privateDocuments,
    },
    {
        path: '/presentation',
        name: 'presentation',
        component: presentation,
    },
    {
        path: '/recovery',
        name: 'recovery',
        component: recovery,
    },
    {
        path: '/knowledgeBase',
        name: 'knowledgeBase',
        component: knowledgeBase,
    },
    {
        path: '/dynamics',
        name: 'dynamics',
        component: dynamics,
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: calendar,
    },
    {
        path: '/educational',
        name: 'educational',
        component: educational,
    },

    {
        path: '/auth',
        name: 'auth',
        component: auth,
    },
    {
        path: '/documents',
        name: 'documents',
        component: documents,
    },
    {
        path: '/presentation',
        name: 'presentation',
        component: presentation,
    },
    {
        path: '/recovery',
        name: 'recovery',
        component: recovery,
    },
    {
        path: '/knowledgeBase',
        name: 'knowledgeBase',
        component: knowledgeBase,
    },
    {
        path: '/dynamics',
        name: 'dynamics',
        component: dynamics,
    },
    {
        path: '/appliedResults',
        name: 'appliedResults',
        component: AppliedResultsPage,
    },
    {
        path: '/calendar/:pageId',
        name: 'calendar',
        component: calendar,
        props: true,
    },
    {
        path: '/KBMediaList',
        name: 'KBMediaList',
        component: KBMediaList,
    },

    {
        path: '/KBMediaPage/:pageId',
        name: 'KBMediaPage',
        component: KBMediaPage,
        props: true,
    },
    {
        path: '/MarketingPage/',
        name: 'MarketingPage',
        component: MarketingPage,
    },
    {
        path: '/OffersPage/',
        name: 'OffersPage',
        component: OffersPage,
    },
    {
        path: '/TransferPage/',
        name: 'TransferPage',
        component: TransferPage,
    },
    {
        path: '/AdminNewsPage/',
        name: 'AdminNewsPage',
        component: AdminNewsPage,
    },
    {
        path: '/AdminDocumentPage/',
        name: 'AdminDocumentPage',
        component: AdminDocumentPage,
    },
    {
        path: '/AdminCalendarPage/',
        name: 'AdminCalendarPage',
        component: AdminCalendarPage,
    },
    {
        path: '/AdminPartyPage/',
        name: 'AdminPartyPage',
        component: AdminPartyPage,
    },
    {
        path: '/AdminResearchPage/',
        name: 'AdminResearchPage',
        component: AdminResearchPage,
    },
    {
        path: '/FormNews/:entityId?/:mode',
        name: 'FormNews',
        component: FormNews,
        props: true,
    },
    {
        path: '/FormResearcher/:entityId?/:status?/:mode',
        // path: '/FormResearcher/:mode',
        name: 'FormResearcher',
        component: FormResearcher,
        props: true,
    },
    {
        path: '/FormResearch/:entityId?/:mode',
        name: 'FormResearch',
        component: FormResearch,
        props: true,
    },
    {
        path: '/UI_calendar/:entityId?/:mode',
        name: 'UI_calendar',
        component: UI_calendar,
        props: true,
    },

    /**
     * Анкета пользователя
     */

    {
        path: '/colleagues/:pageId',
        name: 'colleagues',
        component: colleagues,
        props: true,
    },
    {
        path: '/account/:pageId',
        name: 'account',
        component: account,
        props: true,
    },
    {
        path: '/project/:pageId',
        name: 'project',
        component: project,
        props: true,
    },
    {
        path: '/form/:pageId',
        name: 'form',
        component: form,
        props: true,
    },
    {
        path: '/progress/:pageId',
        name: 'progress',
        component: progress,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
