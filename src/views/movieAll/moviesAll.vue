<style src="./moviesAll.css"></style>
<script lang="ts" src="./moviesAll.ts"></script>

<template>
    <div>
        <header>
            <Header />
        </header>

        <div id="movieDetailsHeader">
            <nav class="navHeader"
                style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">All Movies</li>
                </ol>
            </nav>
            <h1 class="movieName">All Movies</h1>
        </div>

        <div class="moviesList d-flex flex-column ">
            <div class="col-18 d-flex flex-column" style="padding:24px;"
                v-motion-slide-left>
                <div class="d-flex justify-content-center" style="padding: 2vh 0; margin-bottom: 5vh;">
                    <ul class="nav nav-pills mb-1" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-movie-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-movie" type="button" role="tab" aria-controls="pills-movie"
                                aria-selected="true">Current Movie</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-genre-tab" data-bs-toggle="pill" data-bs-target="#pills-genre"
                                type="button" role="tab" aria-controls="pills-genre" aria-selected="false">Upcoming Movie</button>
                        </li>
                    </ul>

                </div>
                <div class="tab-content" id="pills-tabContent"
                    style="background:#fff; border-radius: 16px;position: relative;">
                    <div class="tab-pane fade show active" id="pills-movie" role="tabpanel"
                        aria-labelledby="pills-movie-tab" style="min-height: 100vh;" v-motion-slide-left>
                        <ListMovies />
                    </div>
                    <div class="tab-pane fade" id="pills-genre" role="tabpanel" aria-labelledby="pills-genre-tab"
                        style="min-height: 100vh;" v-motion-slide-left>
                        <ListMoviesUp />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>