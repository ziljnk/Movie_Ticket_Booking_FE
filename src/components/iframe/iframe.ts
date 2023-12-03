import { Options, Vue } from "vue-class-component";
import { Modal } from "bootstrap";

@Options({
    props: {
        videoUrl: String,
    }
})
export default class VideoIframe extends Vue {
    public videoUrl!: string
    public openModal() {
        const myModal = new Modal(this.$refs["video-iframe-modal"] as any)
        myModal.show()
    }

    public getYouTubeVideoId() {
        if (this.videoUrl.includes('youtu.be/')) {
            const parts = this.videoUrl.split('youtu.be/');
            return parts[1];
        }
    
        if (this.videoUrl.includes('youtube.com/')) {
            const parts = this.videoUrl.split('v=');
            if (parts.length > 1) {
                const ampersandPosition = parts[1].indexOf('&');
                return ampersandPosition !== -1 ? parts[1].substring(0, ampersandPosition) : parts[1];
            }
        }
        return null;
    }
}
