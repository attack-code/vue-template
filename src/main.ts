import "./registerServiceWorker";
import "element-plus/dist/index.css";

import ElementPlus from "element-plus";
import { createApp } from "vue";

import { AxiosService } from "@/axios";

import App from "./App";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).use(ElementPlus).use(AxiosService).mount("#app");
