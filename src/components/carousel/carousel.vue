<style src="./carousel.css"></style>

<script lang="ts" src="./carousel.ts"></script>

<template>
<div id="carouselExampleRide" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
            <img src="@/assets/homepage/jpeg/homepage-background.jpeg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="4000">
            <img src="@/assets/homepage/jpeg/banner.jpeg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="4000">
            <img src="@/assets/homepage/jpeg/banner3.jpeg" class="d-block w-100" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
</template>
