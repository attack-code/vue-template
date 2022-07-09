// noinspection JSXNamespaceValidation

import { ElButton } from "element-plus";
import { defineComponent, ref } from "vue";

import useAxiosService from "@/axios";

import styles from "./HelloWorld.module.scss";

const HelloWorld = defineComponent({
  components: {
    ElButton,
  },
  setup() {
    const isShow = ref(true);
    const toggleShow = () => {
      useAxiosService()
        .post("list", { name: "tabuyos" })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      isShow.value = !isShow.value;
    };
    return () => (
      <div className={styles.helloWorldBc}>
        <ElButton onClick={toggleShow}>显示/隐藏</ElButton>
        <p v-show={isShow.value}>Hello World!</p>
      </div>
    );
  },
});

export default HelloWorld;
