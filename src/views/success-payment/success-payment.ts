import { Vue } from 'vue-class-component'

export default class SuccessPayment extends Vue {
    public transactionId: string = '';

    public generateRandomString() {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
      
        for (let i = 0; i < 16; i++) {
          randomString += characters.charAt(Math.floor(Math.random() * characters.length));
      
          // Add hyphen after every 4 characters (except the last group)
          if ((i + 1) % 4 === 0 && i !== 15) {
            randomString += '-';
          }
        }
        this.transactionId = randomString;
        return `Your transaction ID is: <span style="font-weight: bold;">${randomString}</span>`;
      }

    public handleCopy() {
        navigator.clipboard.writeText(this.transactionId);
    }
}