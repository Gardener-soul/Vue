<template>
    <div>
        <h4>검색 컴포넌트</h4>
        <input type="text" v-model="keyword">
        <button @click="search">검색</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useYouTubeStore} from '@/stores/YouTube'
    
    const keyword = ref('')

    const store = useYouTubeStore();

    const search = function(){
        store.youtubeSearch(keyword.value)
        // console.log(keyword.value)
    }

</script>

<style scoped>

</style>