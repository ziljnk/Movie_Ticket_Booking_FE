import { MutationTypes } from '@/store/mutation-types';
import { Vue, Options } from 'vue-class-component'
import VideoIframe from '../iframe/iframe.vue';
@Options({
    components: {
        VideoIframe
    }
})
export default class ListMoviesUp extends Vue {
    public allMovies: any = []
    public selectedMovieTrailer: any = ''

    beforeMount(): void {
        const response = this.$store.dispatch(MutationTypes.GET_UPCOMMING_MOVIE, {
            page: 1,
            pageSize: 1000,
        })
        response.then((result: any) => {
            this.allMovies = result.data.data
            this.allMovies.forEach((movie: any) => {
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

    public handleNavigateDetailMovie(id: any) {
        window.location.href = `/movie-detail/${id}`
    }
}