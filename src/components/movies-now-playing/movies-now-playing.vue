<style src="./movies-now-playing.css"></style>

<script lang="ts" src="./movies-now-playing.ts"></script>

<template>
    <VideoIframe ref="video-iframe-component" :videoUrl="selectedMovieTrailer" @closeIframe="handleCloseIframe"/>

    <div class="movie-container">
        <i class="bi bi-film"></i>
        <p class="movie-subtitle">Watch New Movies</p>
        <p class="movie-boldtitle">Movies Now Playing</p>

        <router-link to="/moviesAll"
            class="w-100 text-end px-5 d-flex align-items-center justify-content-end gap-2 see-all-text">
            <p class="h-100">See all</p>
            <i class="bi bi-arrow-right h-100"></i>
        </router-link>

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
                      cursor: pointer;
                      " :style="{ 'background-image': 'url(' + item.image + ')' }">
                            <div class="info-container">
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <button class="btn-get-ticket" @click="handleNavigateDetailMovie(item.id)">Get
                                        Ticket</button>
                                    <button class="btn-trailer"
                                        @click="handleOpenTrailerPopup(item.trailer)">Trailer</button>
                                </div>
                            </div>

                            <p style="text-transform: capitalize; color: black;">{{ `${item.genre.join(', ')} /
                                                            ${item.duration} mins` }}
                            </p>
                            <p class="movie-name" style=" color: black;">{{ item.name }}</p>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
</template>
