<template>
    <li @click="clickVideo">
        <img :src="video.snippet.thumbnails.default.url">
        <span>{{ video.snippet.title }}</span>
    </li>
</template>

<script setup>
import {useYouTubeStore} from '@/stores/YouTube'

const store = useYouTubeStore();

const props = defineProps({
    video: {
        type: Object,
        required: true,
    },
});

const clickVideo=function(){
    store.clickVideo(props.video)
}

</script>

<style scoped>

</style>