import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as VueThreeJs from "vue-threejs";

createApp(App).use(router).use(VueThreeJs).mount("#app");
