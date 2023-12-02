import { Vue, Options } from 'vue-class-component'
import Header from '@/components/header/header.vue'
@Options({
    components: {
        Header
    }
})
export default class ChooseSeat extends Vue {
    public rowArray: any = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    public selectedSeat: any = []

    public handleSelectSeat(row: any, col: any) {
        if (this.selectedSeat.includes(`${this.rowArray[row-1]}${col}`)) {
            document.getElementById(`row-${row}-cell-${col}`)?.classList.remove('active')
            this.selectedSeat.splice(this.selectedSeat.indexOf(`${this.rowArray[row-1]}${col}`), 1)
        } else {
            document.getElementById(`row-${row}-cell-${col}`)?.classList.add('active')
            this.selectedSeat.push(`${this.rowArray[row-1]}${col}`)
        }
    }
}