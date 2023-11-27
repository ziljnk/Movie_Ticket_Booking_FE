import { Vue, Options } from 'vue-class-component'
import Header from '@/components/header/header.vue'
import MoviesNowPlaying from '@/components/movies-now-playing/movies-now-playing.vue'


@Options({
    components: {
        Header,
        MoviesNowPlaying,
    }
})
export default class MovieDetails extends Vue {}