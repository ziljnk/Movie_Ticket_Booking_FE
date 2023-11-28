<style src="./list-movies.css"></style>

<script lang="ts" src="./list-movies.ts"></script>

<template>
    <div class="d-flex ">
        <div class="w-100 d-flex justify-content-center align-items-center">
            <div v-for="(movieRow, rowIndex) in chunkedMovies" :key="rowIndex"
                class="d-flex flex-wrap justify-content-center">
                <div v-for="(item, index) in movieRow" :key="index" class="m-1 movie-item" style="
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
                        <p>{{ `${item.category.join(', ')} / ${item.duration} mins` }}</p>
                        <p class="movie-name">{{ item.name }}</p>
                        <button class="btn-get-ticket">Get Ticket</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
