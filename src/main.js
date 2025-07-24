import router from "./router";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createHead } from "@vueuse/head";

const app = createApp(App);

const head = createHead();

app.use(head);

app.use(router);

app.mount("#app");

// main.js or main.ts
