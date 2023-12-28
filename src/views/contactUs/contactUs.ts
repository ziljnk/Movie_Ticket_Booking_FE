import { Vue, Options } from "vue-class-component";
import Header from "@/components/header/header.vue";

@Options({
  components: {
    Header,
  },
})
export default class ContactUs extends Vue {}
