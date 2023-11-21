import { Vue, Options } from 'vue-class-component'
import Header from '@/components/header/header.vue'
import NewsPost from './components/news-post/news-post.vue'
import LatestPostItem from './components/latest-post/latest-post.vue'

@Options({
    components: {
        Header,
        NewsPost,
        LatestPostItem
    }
})

export default class News extends Vue {}