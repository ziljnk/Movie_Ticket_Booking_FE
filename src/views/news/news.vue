<style scoped src="./news.css"></style>

<script lang="ts" src="./news.ts"></script>

<template>
    <header>
        <Header />
    </header>
    <div class="news-container">
        <div class="news-header">
            <div class="news-header-infor">
                <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                    aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">News</li>
                    </ol>
                </nav>

                <h1 class="blog">News</h1>
            </div>
        </div>

        <div class="d-flex flex-column justify-content-center" style="gap: 30px; padding: 15vh 25vw;">
            <div class="post-container d-flex flex-column justify-content-center" v-for="(item, index) in News">
                <img class="post-image" :src="item.imageURL" />

                <p class="post-title">{{ item.title }}</p>

                <div class="action-container">
                    <div class="action-item">
                        <i class="bi bi-calendar3"></i>
                        <p>{{ item.updatedAt.slice(0, 10) }}</p>
                    </div>

                    <div class="action-item">
                        <i class="bi bi-person"></i>
                        <p>{{ item.creator.account }}</p>
                    </div>

                </div>

                <div class="post-description" v-html="item.content"></div>
            </div>

            <div class="count-page">
                <div :class="[currentPage === index + 1 ? 'current-page-number' : '', 'page-number']"
                    v-for="(item, index) in totalPages" :key="index" @click="handleNextPage(index)">
                    <p>{{ index + 1 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
