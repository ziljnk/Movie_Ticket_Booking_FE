import { Vue, Options } from 'vue-class-component'
import Header from '@/components/header/header.vue'
import MoviesNowPlaying from '@/components/movies-now-playing/movies-now-playing.vue'
import { MutationTypes } from '@/store/mutation-types'
import VideoIframe from '@/components/iframe/iframe.vue'

@Options({
    components: {
        Header,
        MoviesNowPlaying,
        VideoIframe
    },
    watch: {
        movieId: {
          handler(val, oldVal) {
            this.fetchMovieDetail()
          },
          deep: true,
        },
      },
})
export default class MovieDetails extends Vue {
    public movieId: any = ''
    public movieDetail: any = {}
    public isOpenIframe: boolean = false

    beforeMount(): void {
        this.movieId = this.$route.params.id
        this.fetchMovieDetail()
    }

    public fetchMovieDetail() {
        let response = this.$store.dispatch(MutationTypes.GET_DETAIL_MOVIE, {
            id: this.movieId
        })
        response.then((result: any) => {
            this.movieDetail = result.data[0]
            this.movieDetail.genre = this.movieDetail.genre.map((item: any) => item.name);
        }).catch((err: any) => {
            console.log("err", err)
        })
    }

    public handleCloseIframe() {
        this.isOpenIframe = false
    }

    public async handleOpenTrailerPopup() {
        this.isOpenIframe = true
        await (this.$refs['video-iframe-component'] as any).openModal()
    }

    public formatDate(inputDateString: any) {
        const inputDate = new Date(inputDateString);
      
        const options: any = { year: 'numeric', month: 'short', day: 'numeric' };
      
        return new Intl.DateTimeFormat('en-US', options).format(inputDate);
    }

    public handleBookingSchedule() {
        window.location.href = `/scheduleBooking/${this.movieId}`
    }
}