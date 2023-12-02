<style src="./chooseSeat.css"></style>
<script lang="ts" src="./chooseSeat.ts"></script>

<template>
    <div class="choose-seat-wrapper">
        <header>
            <Header/>
        </header>

        <div class="choose-seat-header">
            <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Cart Movies</li>
                </ol>
            </nav>
        </div>

        <div class="choose-seat-container">
            <table class="seat-table">
                <tr class="seat-row" style="margin-left: 40px">
                    <td class="seat-row-label" style="width: 40px" v-for="(item, index) in 10" :key="index">{{ item }}</td>
                </tr>
                <tr class="seat-row" v-for="(itemRow, index) in 10" :key="index">
                    <td class="seat-column-label">{{ rowArray[itemRow - 1] }}</td>
                    <td @click="handleSelectSeat(itemRow, itemCell)" :id="`row-${itemRow}-cell-${itemCell}`" class="seat-cell" v-for="(itemCell, index) in 10" :key="index"></td>
                </tr>
            </table>

            <div class="screen">
                SCREEN
            </div>

            <div class="seat-legend">
                <div class="seat-legend-item">
                    <div class="seat-legend-item-color seat-legend-item-available"></div>
                    <p>Available</p>
                </div>

                <div class="seat-legend-item">
                    <div class="seat-legend-item-color seat-legend-item-selected"></div>
                    <p>Selected</p>
                </div>
            </div>

            <hr style="width: 80%; height: 1px"/>

            <div class="selected-seat-container">
                <table>
                    <tr>
                        <td class="seat-col header-checkout">Seat</td>
                        <td class="header-checkout">Price</td>
                    </tr>
                    <tr>
                        <td class="seat-col">{{ selectedSeat.join(' | ') }}</td>
                        <td>${{ selectedSeat.length * 30 }}</td>
                    </tr>
                </table>
            </div>
            <button class="button-primary mt-5">Check out</button>
        </div>
    </div>
</template>