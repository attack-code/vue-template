// noinspection JSXNamespaceValidation
// noinspection JSXNamespaceValidation
import "@/App.scss";

import { defineComponent } from "vue";

const App = defineComponent({
  setup() {
    return () => (
      <>
        <router-view />
      </>
    );
  },
});

export default App;
