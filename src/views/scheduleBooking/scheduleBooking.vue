<style src="./scheduleBooking.css"></style>
<script lang="ts" src="./scheduleBooking.ts"></script>


<template>
    <div class="schedule-wrapper">
        <header>
            <Header />
        </header>

        <div id="scheduleHeader">
            <nav class="navHeader"
                style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/movieDetails">Harry Potter and the Philosopher's
                            Stone</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page" style="font-weight: bold;">Schedule</li>
                </ol>
            </nav>
            <h1 class="scheduleName">Schedule</h1>
        </div>

        <div id="schedule-content">
            <div id="select-container">
                <select id="schedule-select-date" v-model="selectedDate">
                    <option v-for="(item, index) in date" :key="index" :value="item.date">{{ item.day }}: {{ item.date }}
                    </option>
                </select>
            </div>
            <div id="schedule-main">
                <div id="schedule-movie-image">
                    <img id="schedule-image"
                        src="https://cinestar.com.vn/pictures/Cinestar/11-2023/poster-nguoi-vo-cuoi-cung.jpg"
                        alt="movieImage">
                </div>
                <div id="schedule-movie-main">
                    <h3 id="sch-movieName">Harry Potter and the Philosopher's Stone</h3>
                    <h5 id="sch-movieTime">( Monday - 28/11/2023 )</h5>
                    <div v-for="(detail, index) in scheduleDetails" :key="index" class="sch-detail">
                        <div class="sch-location">
                            <h6 class="sch-location-title">Location:</h6>
                            <h6 class="sch-location-name">{{ detail.location }}</h6>
                        </div>

                        <!-- sử dụng v-for cho sch-time -->
                        <div class="sch-time-container">
                            <div v-for="time in detail.times" :key="time" class="sch-time">{{ time }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>