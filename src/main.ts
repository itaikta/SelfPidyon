import { createApp } from "vue";
import router from "./router/index.ts";
import App from "./App.vue";
import "./style.css";

const app = createApp(App);

// Basic global error handling
app.config.errorHandler = (err, instance, info) => {
  // eslint-disable-next-line no-console
  console.error("Global Vue error:", { err, info, instance });
};

// Handle unhandled promise rejections
window.addEventListener("unhandledrejection", (event) => {
  // eslint-disable-next-line no-console
  console.error("Unhandled promise rejection:", event.reason);
});

app
  .use(router)
  .mount("#app");
