import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';


const app = createApp(App);

// global components register, will load when app init
app.component('base-badge', BaseBadge);

app.mount('#app');
