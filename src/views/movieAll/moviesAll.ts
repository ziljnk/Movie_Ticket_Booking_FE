import { Vue, Options } from 'vue-class-component'
import Header from '@/components/header/header.vue'
import MoviesNowPlaying from '@/components/movies-now-playing/movies-now-playing.vue'
import ListMovies from '@/components/list-movies/list-movies.vue'

@Options({
    components: {
        Header,
        MoviesNowPlaying,
        ListMovies,
    }
})
export default class MoviesAll extends Vue{}