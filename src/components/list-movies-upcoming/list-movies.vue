<style src="./list-movies.css"></style>

<script lang="ts" src="./list-movies.ts"></script>

<template>
    <div class="d-flex flex-wrap" >
        <div v-for="(item, index) in allMovies" :key="index" style="margin-bottom: 5vh;">
            <div class="m-1 movie-item cursor_pointer movie-content" style="
                            padding: 8px 12px;
                            font-size: 12px;
                            width: 272px;
                            height: 389px;
                            background: #ffffff;
                            border-radius: 8px;
                            border: 0;
                            background-size: contain;
                            background-repeat: no-repeat;
                            background-position: center;
                        " :style="{ 'background-image': 'url(' + item.image + ')' }">
                <div class="info-container">
                    <div class="d-flex justify-content-between align-items-center w-100">
                        <button class="btn-trailer" @click="handleOpenTrailerPopup(item.trailer)">Trailer</button>
                        <button class="btn-get-ticket" @click="handleNavigateDetailMovie(item.id)">Get Ticket</button>
                    </div>
                </div>
                
            </div>
            <div class="d-flex flex-column" style="width: 272px; ">
                <p style="text-transform: capitalize;">{{ `${item.genre.join(', ')} / ${item.duration} mins` }}</p>
                <p class="movie-name">{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>
