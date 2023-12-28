<script lang="ts" src="./success-payment.ts"></script>

<style scoped src="./success-payment.css"></style>

<template>
    <div class="card">
        <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
            <i class="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
        <div class="button-container">
            <router-link to="/" class="button">Back to Home</router-link>
        </div>
        <div class="d-flex align-items-center gap-3">
            <p v-html="generateRandomString()"></p>
            <p class="cursor_pointer" style="color: orange;" @click="handleCopy">Copy</p>
        </div>
    </div>
</template>
