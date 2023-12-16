<style src="./header.css"></style>
<script lang="ts" src="./header.ts"></script>

<template>
    <div class="header-wrapper">
        <div class="logo-container">
            <router-link to="/" class="nav-item">
                <img src="@/assets/png/movie-logo.png" />

            </router-link>
        </div>

        <div class="nav-container">
            <router-link to="/" class="nav-item">
                <p>Home</p>
            </router-link>

            <router-link to="/moviesAll" class="nav-item">
                <p>Movies</p>
            </router-link>

            <router-link to="/news" class="nav-item">
                <p>News</p>
            </router-link>

            <div class="nav-item">
                <p>Contact us</p>
            </div>
        </div>

        <div class="action-container" style="position: relative;">
            <div class="search-bar">
                <input type="text" v-model="searchQuery" placeholder="Search..." />
                <i class="bi bi-search search-icon"></i>
            </div>
            <div class="search-result">
                <div class="d-flex flex-row search-container" v-for="(item, index) in movieInput" @click="handleNavigateDetailMovie(item.id)">
                    <div class="image-search">
                        <img :src="item.image" :alt="item.name" style="width: 100%; object-fit: cover;">
                    </div>
                    <div class="movie-infor d-flex flex-column">
                        <h6>{{ item.name }}</h6>
                        <p >{{ item.studio }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>