import { MutationTypes } from '@/store/mutation-types';
import { Vue,Options } from 'vue-class-component'
import VideoIframe from '../iframe/iframe.vue';

@Options({
  components: {
      VideoIframe
  }
})
export default class MoviesNowPlaying extends Vue {

    
    public movies: any = []
    public selectedMovieTrailer: any = ''

    public splideSlideOptions = {
        arrows: true,
        autoWidth: true,
        rewind: true,
        perPage: 4,      // Số lượng hiển thị trên mỗi trang
        perMove: 1,      // Số lượng item được chuyển đến khi trượt
        gap: "0.6rem",
        breakpoints: {
          4: {
            perPage: 4,  // Số lượng hiển thị trên mỗi trang khi độ rộng màn hình là 4 hoặc lớn hơn
          },
        },
        pagination: false,
      };
      

    public handleNavigateDetailMovie(id: any) {
        this.$router.push(`/movie-detail/${id}`)
    }

    beforeMount(): void {
        const response = this.$store.dispatch(MutationTypes.GET_CURRENT_MOVIE, {
            page: 1,
            pageSize: 10,
        })
        response.then((result: any) => {
            this.movies = result.data.data
            this.movies.forEach((movie: any) => {
                movie.genre = movie.genre.map((item: any) => item.name);
              });
        }).catch((err: any) => {
            console.log("err", err)
        });
    }

    public async handleOpenTrailerPopup(videoUrl: any) {
      this.selectedMovieTrailer = await videoUrl;
      await (this.$refs['video-iframe-component'] as any).openModal()
  }
  public handleCloseIframe() {
    this.selectedMovieTrailer = ''
}

    
}