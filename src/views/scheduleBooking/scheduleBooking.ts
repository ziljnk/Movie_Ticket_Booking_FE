import { Vue, Options } from "vue-class-component";
import Header from "@/components/header/header.vue";
import MoviesNowPlaying from "@/components/movies-now-playing/movies-now-playing.vue";
import { MutationTypes } from "@/store/mutation-types";

@Options({
  components: {
    Header,
    MoviesNowPlaying,
  },
  watch: {
    selectedDate: {
      handler(val, oldVal) {
        this.handleChangeSchedule();
      },
      deep: true,
    },
  },
})
export default class ScheduleBooking extends Vue {
  public movieId: any = "";
  public scheduleDetails: any = [];
  public selectedScheduleDetails: any = [];
  public selectedDate: string = "";
  public movieImage: string = "";
  public movieID: string = "";
  public movieName: string = "";
  public date: any[] = [];

  mounted() {
    this.generateDateArray();
    if (this.date.length > 0) {
      this.selectedDate = this.date[0].value;
    }
  }

  beforeMount(): void {
    this.movieId = this.$route.params.id;
    this.fetchscheduleDetail();
    this.fetchMovie();
  }

  public generateDateArray() {
    const today: Date = new Date();

    for (let i: number = 0; i < 7; i++) {
      const currentDate: Date = new Date(today);

      currentDate.setDate(today.getDate() + i);

      const formattedDate: string = this.formatDate(currentDate.toISOString());

      const formattedDateValue: string = this.formatDateValue(
        currentDate.toISOString()
      );

      this.date.push({
        day: this.getDayName(currentDate.getDay()),
        date: formattedDate,
        value: formattedDateValue,
      });
    }
  }

  public fetchscheduleDetail() {
    let response = this.$store.dispatch(MutationTypes.GET_MOVIE_SCHEDULE, {
      movieId: this.movieId,
    });
    response
      .then((result: any) => {
        this.scheduleDetails = result.data;

        this.handleChangeSchedule();
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  }

  public fetchMovie() {
    let response = this.$store.dispatch(MutationTypes.GET_DETAIL_MOVIE, {
      id: this.movieId,
    });
    response
      .then((result: any) => {
        this.movieID = result.data[0].id;
        this.movieImage = result.data[0].image;
        this.movieName = result.data[0].name;
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  }

  public formatDate(inputDateString: any) {
    const inputDate = new Date(inputDateString);

    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");

    return `${day}/${month}/${year}`;
  }

  public formatDateValue(inputDateString: any) {
    const inputDate = new Date(inputDateString);

    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const day = inputDate.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  public getDayName(dayIndex: number): string {
    const daysOfWeek: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[dayIndex];
  }

  public handleChooseTime(id:any) {
    window.location.href = `/choose-seat/${id}`
  }

  public handleChangeSchedule() {
    this.selectedScheduleDetails=[]
    this.scheduleDetails.forEach((schedule: any) => {
      if (
        schedule.startTime &&
        schedule.startTime.slice(0, 10) === this.selectedDate
      ) {
        this.selectedScheduleDetails.push(schedule);
      }
    });
    console.log(this.selectedScheduleDetails, 2);
  }
}
