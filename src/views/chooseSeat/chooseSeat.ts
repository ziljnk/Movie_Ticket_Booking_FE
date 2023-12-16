import { Vue, Options } from 'vue-class-component'
import Header from '@/components/header/header.vue'
import { MutationTypes } from '@/store/mutation-types'
@Options({
    components: {
        Header
    }
})
export default class ChooseSeat extends Vue {
    public rowArray: any = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    public selectedSeat: any = []
    public scheduleDetails: any = []
    public schedulId: any = ''
    public schedulPrice: any = ''
    public schedulBookedSeat: any = []

    beforeMount(): void {
        this.schedulId = this.$route.params.id;
        this.fetchscheduleDetail();
      }

    public fetchscheduleDetail() {
        let response = this.$store.dispatch(MutationTypes.GET_SCHEDULE_DETAIL, {
          id: this.schedulId,
        });
        response
          .then((result: any) => {
            this.scheduleDetails = result.data;
            this.schedulPrice=this.scheduleDetails[0].price
            this.schedulBookedSeat=this.scheduleDetails[0].bookedSeat
          })
          .catch((err: any) => {
            console.log("err", err);
          });
      }

    public handleSelectSeat(row: any, col: any) {
        if (this.selectedSeat.includes(`${this.rowArray[row-1]}${col}`)) {
            document.getElementById(`row-${row}-cell-${col}`)?.classList.remove('active')
            this.selectedSeat.splice(this.selectedSeat.indexOf(`${this.rowArray[row-1]}${col}`), 1)
        } else {
            document.getElementById(`row-${row}-cell-${col}`)?.classList.add('active')
            this.selectedSeat.push(`${this.rowArray[row-1]}${col}`)
        }
    }

    public isSeatBooked(row: string, number: number): boolean {
        return this.schedulBookedSeat.some(
          (seat: any) => seat?.seat?.row === row && seat?.seat?.number === number
        );
      }
}