import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Victor",
    lastName: "Cortés",
  },
});

export default app;
