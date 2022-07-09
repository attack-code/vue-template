// noinspection JSXNamespaceValidation

import { defineComponent } from "vue";

const PageNotFound = defineComponent({
  setup() {
    return () => <h1>Oooooops, your page seems to go to Mars!</h1>;
  },
});

export default PageNotFound;
