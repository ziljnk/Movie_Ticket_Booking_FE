import { Vue,Options } from 'vue-class-component'
@Options({
    watch: {
        searchQuery: {
          handler(val, oldVal) {
            this.handleSearch();
          },
          deep: true,
        },
      },
})
export default class Header extends Vue {
    public searchQuery :any='';
    public movieInput:any=[];

}