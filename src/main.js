import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CreateAccount from '@/components/CreateAccount.vue';
import AuthentificationPage from '@/components/AuthentificationForm.vue';
import ajouterC from '@/components/ajouterC.vue';
import LoadingPage from './components/LoadingPage.vue';
import MesActes from './components/mesCertificat.vue';
import detailsCertificat from './components/detailsCertificat.vue';
import detailsDece from './components/detailsDece.vue';
import detailsMariage from './components/detailsMariage.vue';
import detailsNaissance from './components/detailsNaissance.vue';
import side_barre from './components/layouts/side_barre.vue';
import acte_deces from './components/actes/ajouterActeDeces.vue';
import acte_mariages from './components/actes/ajouterActeMariage.vue';
import acte_naissance from './components/actes/ajouterActeNaissance.vue';
import modifierUser from './components/modifierUser.vue';
import PasswordReset from './components/ForgotPassword.vue';
const routes = [
  { path: '/CreateAccount', component: CreateAccount },
  { path: '/', component: LoadingPage },
  { path: '/auth', component: AuthentificationPage },
  { path: '/ajouterC', component: ajouterC },
  { path: '/acte_deces', component: acte_deces },
  { path: '/acte_mariages', component: acte_mariages },
  { path: '/acte_naissance', component: acte_naissance },
  {
    path: '/modifier-user/:userId?',
    name: 'modifierUser',
    component: modifierUser
  },
  {
    path: '/password-reset',
    name: 'password-reset',
    component: PasswordReset,
  },
  { path: '/MesActes', component: MesActes },
  { path: '/detailsCertificat/:id', component: detailsCertificat },
  { path: '/detailsDece/:id', component: detailsDece },
  { path: '/detailsMariage/:id', component: detailsMariage },
  { path: '/detailsNaissance/:id', component: detailsNaissance },
  { path: '/side_barre', component: side_barre },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

