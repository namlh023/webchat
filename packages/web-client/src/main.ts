import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import vi from "element-plus/dist/locale/vi.mjs";
import { createPinia } from "pinia";
import "./style.css";
import "./assets/styles/main.scss";
import App from "@/App.vue";
import router from "@/router";
import { setup as setupFirebase } from "@/services/firebase.service";

setupFirebase();
const app = createApp(App);
const pinia = createPinia();

app.use(ElementPlus, { locale: vi });
app.use(pinia);
app.use(router);

app.mount("#app");
