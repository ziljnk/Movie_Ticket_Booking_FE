<style src="./header.css"></style>
<script lang="ts" src="./header.ts"></script>

<template>
    <div class="header-wrapper">
        <div class="logo-container">
            <router-link to="/" class="nav-item">
                <img src="@/assets/png/movie-logo.png"/>

            </router-link>
        </div>

        <div class="nav-container">
            <router-link to="/" class="nav-item">
                <p>Home</p>
            </router-link>

            <router-link to="/moviesAll" class="nav-item">
                <p>Movies</p>
            </router-link>

            <div class="nav-item">
                <p>Events</p>
                <i class="bi bi-chevron-down"></i>
            </div>

            <router-link to="/news" class="nav-item">
                <p>News</p>
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