import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import BackHeader from "./components/Header.vue"; // Import Component เข้ามา

import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App); // สร้าง App
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // เรียกใช้ plugin เก็บ state ลง local

app.use(pinia);
app.use(router); // ใช้งาน Router

// ลงทะเบียน Global Component ใน Vue 3
app.component("back-header", BackHeader);

app.mount("#app"); // แปะลงไปที่ id="app" ใน index.html
