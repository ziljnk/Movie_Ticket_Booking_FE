<style scoped src="./latest-news.css"></style>
<script lang="ts" src="./latest-news.ts"></script>

<template>
    <div class="news-container">
        <i class="bi bi-film"></i>
        <p class="description">Directly Blog Posts</p>
        <p class="title">Latest News & Articles from the Posts</p>

        <div class="news-item-wrapper">
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
    </div>
</template>