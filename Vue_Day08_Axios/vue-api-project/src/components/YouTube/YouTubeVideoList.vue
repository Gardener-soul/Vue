<template>
    <div>
        <h4>검색 결과</h4>
    </div>
    <ul>
        <YouTubeVideoListItem 
            v-for="video in store.videos" 
            :key="video.id.videoId" 
            :video="video"
            />
    </ul>
</template>

<script setup>
import {useYouTubeStore} from '@/stores/YouTube'
import YouTubeVideoListItem from '@/components/YouTube/YouTubeVideoListItem.vue'

const store = useYouTubeStore();

</script>

<style scoped>

</style>