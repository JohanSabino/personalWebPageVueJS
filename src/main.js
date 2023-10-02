import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import {
    faUserSecret,
    faHouse,
    faBars,
    faStar,
    faHandHoldingHeart,
    faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faUserSecret);
library.add(faHouse);
library.add(faBars);
library.add(faStar);
library.add(faHandHoldingHeart);
library.add(faChevronUp);
library.add(faLinkedin);
library.add(faGithub);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
