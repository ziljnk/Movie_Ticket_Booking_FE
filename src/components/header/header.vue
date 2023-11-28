<style src="./header.css"></style>
<script lang="ts" src="./header.ts"></script>

<template>
    <div class="header-wrapper">
        <div class="logo-container">
            <img src="@/assets/png/movie-logo.png"/>
        </div>

        <div class="nav-container">
            <router-link to="/" class="nav-item">
                <p>Home</p>
                <i class="bi bi-chevron-down"></i>
            </router-link>

            <div class="nav-item">
                <p>Movies</p>
                <i class="bi bi-chevron-down"></i>
            </div>

            <div class="nav-item">
                <p>Events</p>
                <i class="bi bi-chevron-down"></i>
            </div>

            <router-link to="/news" class="nav-item">
                <p>News</p>
                <i class="bi bi-chevron-down"></i>
            </router-link>

            <div class="nav-item">
                <p>Contact us</p>
            </div>
        </div>

        <div class="action-container">
            <div class="search-bar">
                <input type="text" placeholder="Search..."/>
                <i class="bi bi-search search-icon"></i>
            </div>
            <i class="bi bi-person profile-icon"></i>
        </div>
    </div>
</template>