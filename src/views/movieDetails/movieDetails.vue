<style src="./movieDetails.css"></style>
<script lang="ts" src="./movieDetails.ts"></script>


<template>
    <div class="movieDetails-wrapper">
        <header>
            <Header/>
        </header>

        <div id="movieDetailsHeader">
            <nav class="navHeader" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Harry Potter and the Philosopher's Stone</li>
                </ol>
            </nav>
            <h1 class="movieName">Harry Potter and the Philosopher's Stone</h1>
        </div>

        <div id="movieContent">
            <div id="movieImageContainer">
                <img class="movieImage" src="https://cinestar.com.vn/pictures/Cinestar/11-2023/poster-nguoi-vo-cuoi-cung.jpg" alt="movieImage">
            </div>
            <div id="movieDescription">
                <h2 id="des-movieName">Harry Potter and the Philosopher's Stone</h2>
                <div class="des-line">
                    <h5 class="des-movieTitle">Start:</h5>
                    <p class="des-movieInfo">From 11/12/2023</p>
                </div>
                <div class="des-line">
                    <h5 class="des-movieTitle">Genre:</h5>
                    <p class="des-movieInfo">Horror, Comedy</p>
                </div>
                <div class="des-line">
                    <h5 class="des-movieTitle">Actors:</h5>
                    <p  class="des-movieInfo">Kaity Nguyễn, Thuận Nguyễn, NSƯT Quang Thắng,...</p>
                </div>
                <div class="des-line">
                    <h5 class="des-movieTitle">Director:</h5>
                    <p class="des-movieInfo">Victor Vũ</p>
                </div>
                <div class="des-line">
                    <h5 class="des-movieTitle">Time:</h5>
                    <p  class="des-movieInfo">180 Mins</p>
                </div>
                <img style="width: 48px; margin-bottom: 5vh;" src="@/assets/png/2dMovie.png"/>
                <p id="des-description">In a small town where everyone knows everyone, a peculiar incident starts 
                    a chain of events that leads to a child’s disappearance, which begins to tear at the fabric of 
                    an otherwise-peaceful community. Dark government agencies and seemingly malevolent supernatural forces converge on the town,
                     while a few of the locals begin to understand that more is going on than meets the eye.</p>
                <div id="des-btn">
                    <button id="des-trailer">
                        <img style="width: 32px;" src="@/assets/png/youtube.png"/>  
                        Trailer</button>
                    <button id="des-ticket">Get Ticket</button>
                </div>
            </div>
        </div>

        <MoviesNowPlaying/>
    </div>
</template>