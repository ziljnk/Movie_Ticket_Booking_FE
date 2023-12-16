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
                    <li class="breadcrumb-item">
                        <router-link :to="'/movie-detail/' + (movieID)">
                            {{ movieName }}
                        </router-link>
                    </li>

                    <li class="breadcrumb-item active" aria-current="page" style="font-weight: bold;">Schedule</li>
                </ol>
            </nav>
            <h1 class="scheduleName">Schedule</h1>
        </div>

        <div id="schedule-content">
            <div id="select-container">
                <select id="schedule-select-date" v-model="selectedDate">
                    <option v-for="(item, index) in date" :key="index" :value="item.value">{{ item.day }}: {{ item.date }}
                    </option>
                </select>
            </div>
            <div id="schedule-main">
                <div id="schedule-movie-image">
                    <img id="schedule-image" :src="movieImage" alt="movieImage">
                </div>
                <div id="schedule-movie-main">
                    <h3 id="sch-movieName">{{ movieName }}</h3>
                    <h5 v-if="selectedDate" id="sch-movieTime">( {{ formatDate(selectedDate) }} )</h5>
                    <div class="sch-detail d-flex flex-row align-items-center">
                        <div class="sch-location d-flex ">
                            <h6>Schedule:</h6>
                        </div>

                        <!-- sử dụng v-for cho sch-time -->
                        <div class="sch-time-container d-flex flex-row align-items-center flex-wrap">
                            <div  v-for="(schedule, index) in selectedScheduleDetails" @click="handleChooseTime(schedule.id)"
                                :key="schedule.id" class="sch-time">{{ schedule.startTime.slice(11, 16) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>