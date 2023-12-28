import { Vue, Options } from 'vue-class-component'
import Header from '@/components/header/header.vue'
import NewsPost from './components/news-post/news-post.vue'
import LatestPostItem from './components/latest-post/latest-post.vue'
import { MutationTypes } from '@/store/mutation-types';

@Options({
    components: {
        Header,
        NewsPost,
        LatestPostItem
    }
})

export default class News extends Vue {
    public currentPage: number = 1
    public News:any=[]
    public totalPages: number = 1
    
    beforeMount(): void {
        this.fetchNews();
      }
      public fetchNews() {
        let response = this.$store.dispatch(MutationTypes.GET_NEWS, {
            page: this.currentPage,
            pageSize:10,
        });
        response
          .then((result: any) => {
            this.News = result.data.data;
            this.totalPages = result.data.totalPages
            console.log("news", this.News)
          })
          .catch((err: any) => {
            console.log("err", err);
          });
      }

      public handleNextPage(index:any){
        this.currentPage= index+1;
        this.fetchNews()
        
      }
}