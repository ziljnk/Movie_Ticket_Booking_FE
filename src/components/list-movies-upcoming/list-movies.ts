import { MutationTypes } from '@/store/mutation-types';
import { Vue, Options } from 'vue-class-component'
@Options({
    emits: ['openTrailerPopup']
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
        this.$emit('openTrailerPopup', videoUrl)
    }

    public handleCloseIframe() {
        this.selectedMovieTrailer = ''
    }

    public handleNavigateDetailMovie(id: any) {
        window.location.href = `/movie-detail/${id}`
    }
}