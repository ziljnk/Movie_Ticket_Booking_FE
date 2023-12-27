<style src="./top-featured-movie.css"></style>

<script lang="ts" src="./top-featured-movie.ts"></script>

<template>
    <VideoIframe ref="video-iframe-component" :videoUrl="selectedMovieTrailer" @closeIframe="handleCloseIframe"/>

    <div class="top-movie-container">
        <i class="bi bi-film"></i>
        <p>New Movies</p>
        <div class="title-container">
            <p class="title">Upcoming Movie</p>
        </div>

        <!-- <div class="d-flex "> -->
                <Splide class="mx-2 w-100" :options="splideSlideOptionsUpcoming" ref="thumbs" aria-label="My Favorite Images">
                    <SplideSlide :key="index" v-for="(item, index) in allMovies" class="d-flex flex-column align-items-center">
                        <img :src="item.image" class="movie-image"/>
                        <div class="infor-container">
                            <p class="infor-title cursor_pointer" @click="handleNavigateDetailMovie(item.id)">{{ item.name }}</p>
                            <div class="d-flex flex-row justify-content-between" style="gap: 20px">
                                <div class="d-flex">
                                    <i class="bi bi-tags-fill color-icon" style="margin-right: 5px"></i>
                                    <p>{{ item.genre.join(', ') }}</p>
                                </div>

                                <div class="d-flex">
                                    <i class="bi bi-clock-fill color-icon" style="margin-right: 5px"></i>
                                    <p>{{ item.duration }} Mins</p>
                                </div>
                            </div>

                            <div class="d-flex" style="gap: 20px ">
                                <button class="btn-action" @click="handleOpenTrailerPopup(item.trailer)">Watch Trailer</button>
                                <button class="btn-action"  @click="handleNavigateDetailMovie(item.id)">Get Ticket</button>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
        <!-- </div> -->
    </div>
</template>