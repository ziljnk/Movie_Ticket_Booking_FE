<style scoped src="./news.css"></style>

<script lang="ts" src="./news.ts"></script>

<template>
<header>
    <Header />
</header>
<div class="news-container">
    <div class="news-header">
        <div class="news-header-infor">
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">News</li>
                </ol>
            </nav>
    
            <h1 class="blog">Blog</h1>
        </div>
    </div>

    <div class="content-container">
        <div class="left-column">
            <NewsPost/>
            <NewsPost/>
            <NewsPost/>
            <NewsPost/>
        </div>

        <div class="right-column">
            <div class="search-bar-container">
                <input placeholder="Search ..."/>
                <i class="bi bi-search"></i>
            </div>

            <div class="d-flex flex-column justify-content-start align-items-center gap-4 mt-4">
                <div class="box-container">
                    <p class="mb-3 text-start box-title">Latest Posts</p>
                    <div class="d-flex flex-column justify-content-center align--items-center gap-2">
                        <LatestPostItem/>
                        <LatestPostItem/>
                        <LatestPostItem/>
                    </div>
                </div>

                <div class="box-container">
                    <p class="mb-3 text-start box-title">Categories</p>
                    <div class="d-flex flex-column justify-content-start align-items-center gap-3">
                        <div class="w-100 d-flex justify-content-start align-items-center gap-2 category-item">
                            <i class="bi bi-folder"></i>
                            <p>Fantasy</p>
                        </div>

                        <div class="w-100 d-flex justify-content-start align-items-center gap-2 category-item">
                            <i class="bi bi-folder"></i>
                            <p>Film</p>
                        </div>

                        <div class="w-100 d-flex justify-content-start align-items-center gap-2 category-item">
                            <i class="bi bi-folder"></i>
                            <p>Movie</p>
                        </div>

                        <div class="w-100 d-flex justify-content-start align-items-center gap-2 category-item">
                            <i class="bi bi-folder"></i>
                            <p>TV Drama</p>
                        </div>

                        <div class="w-100 d-flex justify-content-start align-items-center gap-2 category-item">
                            <i class="bi bi-folder"></i>
                            <p>Uncategorized</p>
                        </div>
                    </div>
                </div>

                <div class="box-container">
                    <p class="mb-3 text-start box-title">Tags</p>
                    <div class="d-flex justify-content-start align-items-center flex-wrap gap-2">
                        <button class="button-tags">Adventure</button>
                        <button class="button-tags">Film</button>
                        <button class="button-tags">Movie</button>
                        <button class="button-tags">TV Show</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
