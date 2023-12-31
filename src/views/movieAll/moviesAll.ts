import { Vue, Options } from 'vue-class-component'
import Header from '@/components/header/header.vue'
import MoviesNowPlaying from '@/components/movies-now-playing/movies-now-playing.vue'
import ListMovies from '@/components/list-movies/list-movies.vue'
import ListMoviesUp from '@/components/list-movies-upcoming/list-movies.vue'
import VideoIframe from '@/components/iframe/iframe.vue'

@Options({
    components: {
        Header,
        MoviesNowPlaying,
        ListMovies,
        ListMoviesUp,
        VideoIframe
    }
})
export default class MoviesAll extends Vue{
    public selectedVideoUrl: any = ''

    public handleOpenIframe(videoUrl: any) {
        this.selectedVideoUrl = videoUrl;
        (this.$refs['video-iframe-component'] as any).openModal()
    }

    public handleCloseIframe() {
        this.selectedVideoUrl = ''
    }
}