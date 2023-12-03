<style src="./movieDetails.css"></style>
<script lang="ts" src="./movieDetails.ts"></script>


<template>
    <VideoIframe ref="video-iframe-component" :videoUrl="isOpenIframe ? movieDetail?.trailer : ''" @closeIframe="handleCloseIframe"/>
    <div class="movieDetails-wrapper">
        <header>
            <Header/>
        </header>

        <div id="movieDetailsHeader">
            <nav class="navHeader" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ movieDetail?.name }}</li>
                </ol>
            </nav>
            <h1 class="movieName">{{ movieDetail?.name }}</h1>
        </div>

        <div id="movieContent">
            <div id="movieImageContainer">
                <img class="movieImage" :src="movieDetail?.image" alt="movieImage">
            </div>
            <div id="movieDescription">
                <h2 id="des-movieName">{{ movieDetail?.name }}</h2>
                <div class="des-line">
                    <h5 class="des-movieTitle">Start:</h5>
                    <p v-if="movieDetail.publishDate" class="des-movieInfo">From {{ formatDate(movieDetail?.publishDate) }}</p>
                </div>
                <div class="des-line">
                    <h5 class="des-movieTitle">Genre:</h5>
                    <p class="des-movieInfo" style="text-transform: capitalize;">{{ movieDetail?.genre?.join(', ') }}</p>
                </div>
                <div class="des-line">
                    <h5 class="des-movieTitle">Actors:</h5>
                    <p  class="des-movieInfo">{{ movieDetail?.actors }}</p>
                </div>
                <div class="des-line">
                    <h5 class="des-movieTitle">Director:</h5>
                    <p class="des-movieInfo">{{ movieDetail?.director }}</p>
                </div>
                <div class="des-line">
                    <h5 class="des-movieTitle">Time:</h5>
                    <p  class="des-movieInfo">{{ movieDetail?.duration }} Mins</p>
                </div>
                <img style="width: 48px; margin-bottom: 5vh;" src="@/assets/png/2dMovie.png"/>
                <p id="des-description">{{ movieDetail?.description }}</p>
                <div id="des-btn">
                    <button id="des-trailer" @click="handleOpenTrailerPopup">
                        <img style="width: 32px;" src="@/assets/png/youtube.png"/>  
                        Trailer</button>
                    <button @click="handleBookingSchedule" id="des-ticket">Get Ticket</button>
                </div>
            </div>
        </div>

        <MoviesNowPlaying/>
    </div>
</template>