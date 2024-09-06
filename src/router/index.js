import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobView from '@/views/JobView.vue';
import AddJobView from '@/views/AddJobView.vue';
import EditJobView from '@/views/EditJobView.vue';
import login from "@/views/login.vue";
import PaymentsView from '@/views/PaymentsView.vue';
import CompletePaymentsView from '@/views/CompletePaymentsView.vue';
import Register from "@/views/register.vue";
import BalanceSummaryView from '@/views/BalanceSummaryView.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobView,
    },
    {
      path: '/jobs/add',
      name: 'add-job',
      component: AddJobView,
    },
    {
      path: '/jobs/edit/:id',
      name: 'edit-job',
      component: EditJobView,
    },
    {
      path: '/payments',
      name: 'payments',
      component: PaymentsView,
    },

    {
      path: '/completePayments',
      name: 'completePayments',
      component: CompletePaymentsView,
    },
    {
      path: '/summary',
      name: 'summary',
      component: BalanceSummaryView,
    },
  //     {
  //   path: '/completePayments',
  //   name: 'completePayments',
  //   component: CompletePaymentsView,
  // },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    }
  ],
});

export default router;
