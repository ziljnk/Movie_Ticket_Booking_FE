<style src="./movies-now-playing.css"></style>

<script lang="ts" src="./movies-now-playing.ts"></script>

<template>
<div class="movie-container">
    <i class="bi bi-film"></i>
    <p class="movie-subtitle">Watch New Movies</p>
    <p class="movie-boldtitle">Movies Now Playing</p>

    <div class="d-flex ">
        <div class="w-100 d-flex justify-content-center align-items-center">
            <Splide class="mx-2" :options="splideSlideOptions" ref="thumbs" aria-label="My Favorite Images">
                <SplideSlide :key="index" v-for="(item, index) in movies">
                    <div class="m-1 movie-item" style="
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
                      "
                      :style="{ 'background-image': 'url(' + item.image + ')' }"
                    >
                        <div class="info-container">
                            <p>{{ `${item.category.join(', ')} / ${item.duration} mins` }}</p>
                            <p class="movie-name">{{ item.name }}</p>
                            <button class="btn-get-ticket">Get Ticket</button>
                        </div>
                </div>
                </SplideSlide>
            </Splide>
        </div>
    </div>
</div>
</template>
