
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/js/bootstrap.js"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos'
import 'aos/dist/aos.css'

library.add(fas);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)

  .mount("#app");
AOS.init({
  duration: 1300
}

);
