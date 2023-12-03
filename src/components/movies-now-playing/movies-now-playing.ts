import { MutationTypes } from '@/store/mutation-types';
import { Vue } from 'vue-class-component'

export default class MoviesNowPlaying extends Vue {
    public movies: any = []
    public splideSlideOptions = {

        arrows: false,
        autoWidth: true,
        rewind: true,
        perPage: 1,
        gap: "0.6rem",
        perMove: 1,
        // height : '15rem',
        breakpoints: {
            1000: {
                perPage: 1,
            },
        },
        pagination: false,
    };

    public handleNavigateDetailMovie(id: any) {
        this.$router.push(`/movie-detail/${id}`)
    }

    beforeMount(): void {
        const response = this.$store.dispatch(MutationTypes.GET_ALL_MOVIES, {
            page: 1,
            pageSize: 4
        })
        response.then((result: any) => {
            this.movies = result.data.data
            this.movies.forEach((movie: any) => {
                movie.genre = movie.genre.map((item: any) => item.name);
              });
            console.log("this.movies", this.movies)
        }).catch((err: any) => {
            console.log("err", err)
        });
    }
}