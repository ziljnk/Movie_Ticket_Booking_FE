import { Vue, Options } from 'vue-class-component'
import NewsItem from './components/news-item/news-item.vue'

@Options({
    components: {
        NewsItem
    }
})

export default class LatestNews extends Vue {}