<template>
    <div ref="video-iframe-modal" class="modal" tabindex="-1" @click="$emit('closeIframe')">
        <div class="modal-dialog modal-dialog-centered d-flex align-items-center justify-content-center" role="document"
            style="height: 70%; min-width: 80%">
            <div class="modal-content container" style="border-radius: 16px; padding: 0; height: 90%; width: 100%">
                <iframe :src="`https://www.youtube.com/embed/${getYouTubeVideoId()}?autoplay=1&loop=1`"
                    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                    style="width: 100%; height: 100%; border-radius: 16px"></iframe>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./iframe.ts"></script>
<style lang="">

</style>