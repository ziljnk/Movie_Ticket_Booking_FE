<style src="./list-movies.css"></style>

<script lang="ts" src="./list-movies.ts"></script>

<template>
    <VideoIframe ref="video-iframe-component" :videoUrl="selectedMovieTrailer" @closeIframe="handleCloseIframe"/>
    <div class="d-flex ">
        <div class="d-flex justify-content-center align-items-center flex-wrap" style="max-width: 1200px;">
            <div v-for="(item, index) in allMovies" :key="index" class="m-1 movie-item cursor_pointer" style="
                            padding: 8px 12px;
                            font-size: 12px;
                            width: 272px;
                            height: 389px;
                            background: #ffffff;
                            border-radius: 8px;
                            border: 0;
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: center;
                        " :style="{ 'background-image': 'url(' + item.image + ')' }">
                <div class="info-container">
                    <p style="text-transform: capitalize;">{{ `${item.genre.join(', ')} / ${item.duration} mins` }}</p>
                    <p class="movie-name">{{ item.name }}</p>
                    <div class="d-flex justify-content-between align-items-center w-100">
                        <button class="btn-get-ticket">Get Ticket</button>
                        <button class="btn-trailer" @click="handleOpenTrailerPopup(item.trailer)">Trailer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
