<style src="./top-featured-movie.css"></style>

<script lang="ts" src="./top-featured-movie.ts"></script>

<template>
    <div class="top-movie-container">
        <i class="bi bi-film"></i>
        <p>Checkout Movies</p>
        <div class="title-container">
            <p class="title">Top Featured Movies</p>
            <p class="description">Phasellus non cursus ligula, sed mattis urna. Aenean ac tor gravida, volutpat quam eget, consequat elit.</p>
        </div>

        <div class="d-flex ">
            <div>
                <Splide class="mx-2" :options="splideSlideOptions" ref="thumbs" aria-label="My Favorite Images">
                    <SplideSlide :key="index" v-for="(item, index) in movies" class="d-flex flex-column align-items-center">
                        <img :src="item.image" class="movie-image"/>
                        <div class="infor-container">
                            <p class="infor-title cursor_pointer">{{ item.name }}</p>
                            <div class="d-flex" style="gap: 20px">
                                <div class="d-flex">
                                    <i class="bi bi-tags-fill color-icon" style="margin-right: 5px"></i>
                                    <p>{{ item.category.join(', ') }}</p>
                                </div>

                                <div class="d-flex">
                                    <i class="bi bi-clock-fill color-icon" style="margin-right: 5px"></i>
                                    <p>{{ item.duration }} Mins</p>
                                </div>
                            </div>

                            <div class="d-flex" style="gap: 20px">
                                <button class="btn-action">Watch Trailer</button>
                                <button class="btn-action">Get Ticket</button>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </div>
</template>