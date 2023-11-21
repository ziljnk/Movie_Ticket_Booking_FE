import { Vue, Options } from 'vue-class-component'
import Header from '@/components/header/header.vue'
import Carousel from '@/components/carousel/carousel.vue'
import MoviesNowPlaying from '@/components/movies-now-playing/movies-now-playing.vue'
import TopFeaturedMovie from '@/components/top-featured-movie/top-featured-movie.vue'
import LatestNews from '@/components/latest-news/latest-news.vue'

@Options({
    components: {
        Header,
        Carousel,
        MoviesNowPlaying,
        TopFeaturedMovie,
        LatestNews
    }
})
export default class Homepage extends Vue {}