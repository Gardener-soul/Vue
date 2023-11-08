<template>
    <div>
        <h2>YouTubeView입니다.</h2>
        <YouTubeVideoSearch/>
        <hr>
        <YouTubeVideoDetail/>
        <hr>
        <YouTubeVideoList/>
    </div>
</template>

<script setup>
import YouTubeVideoSearch from '@/components/YouTube/YouTubeVideoSearch.vue';
import YouTubeVideoList from '@/components/YouTube/YouTubeVideoList.vue';
import YouTubeVideoDetail from '@/components/YouTube/YouTubeVideoDetail.vue';

</script>

<style scoped>

</style>