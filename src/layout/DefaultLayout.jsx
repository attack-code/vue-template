// noinspection JSXNamespaceValidation

import { defineComponent } from "vue";

const DefaultLayout = defineComponent({
  props: {
    name: {
      default: "world",
    },
  },
  setup(props) {
    return () => (
      <>
        <div>Hello, {props.name}</div>
        <router-view />
      </>
    );
  },
});

export default DefaultLayout;
