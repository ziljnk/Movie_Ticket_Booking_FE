import { Vue, Options } from 'vue-class-component'
import Header from '@/components/header/header.vue'
import MoviesNowPlaying from '@/components/movies-now-playing/movies-now-playing.vue'


@Options({
    components: {
        Header,
        MoviesNowPlaying,
    }
})
export default class ScheduleBooking extends Vue {
    public date: any = [
        {
            day: "Monday",
            date:'28/11/2023'
        },
        {
            day: "Tuesday",
            date:'29/11/2023'
        },
        {
            day: "Wednesday",
            date:'30/11/2023'
        },
        {
            day: "Thursday",
            date:'01/12/2023'    
        },
    ];
    public scheduleDetails: any = [
        {
          location: 'Theatre 1',
          times: ['11:30', '16:30', '21:00'],
        },
        {
            location: 'Theatre 2',
            times: ['11:30', '16:30'],
        },
        {
            location: 'Theatre 3',
            times: ['11:30', '16:30', '21:00', '23:30'],
        },
        
        
      ];
    public selectedDate: string = "";

    mounted() {
        if (this.date.length > 0) {
          this.selectedDate = this.date[0].date;
        }
      }
}