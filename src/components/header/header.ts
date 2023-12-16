import { MutationTypes } from "@/store/mutation-types";
import { Vue, Options } from "vue-class-component";
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
  public searchQuery: any = "";
  public movieInput: any = [];

  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  }

  public async handleSearch() {
      let res = await this.$store.dispatch(MutationTypes.SEARCH_MOVIE, {
        query: this.searchQuery,
        page: 1,
        pageSize: 4,
      });

      this.movieInput = res.data.data;
  }

  public handleClickOutside = (event: any) => {
    if (!event.target.closest('.search-bar')) {
      this.searchQuery = ''
    }
  };

  public handleNavigateDetailMovie(id: any) {
    window.location.href = `/movie-detail/${id}`
}
}
