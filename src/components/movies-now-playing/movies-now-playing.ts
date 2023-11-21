import { Vue } from 'vue-class-component'

export default class MoviesNowPlaying extends Vue {
    public movies: any = [
        {
            category: ['Animation', 'Comedy'],
            duration: '190',
            name: 'Black and White Twins',
            image: 'https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner-10-768x660.jpg'
        },
        {
            category: ['Thriller'],
            duration: '180',
            name: 'The Scariest Dream',
            image: 'https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-09-768x513.jpg'
        },
        {
            category: ['Animation', 'Thriller'],
            duration: '180',
            name: 'The Seventh Day',
            image: 'https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-05-768x520.jpg'
        },
        {
            category: ['Thriller'],
            duration: '180',
            name: 'Behind The Mask',
            image: 'https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/movie-image-04-768x513.jpg'
        },
    ]
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
}