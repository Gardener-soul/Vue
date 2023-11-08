import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useYouTubeStore = defineStore('YouTube', () => {
  const videos = ref([])
  const selectedVideo = ref(null)

  const youtubeSearch = function(keyword){
    console.log(keyword)
    const URL = 'https://www.googleapis.com/youtube/v3/search';
    const API_KEY = '';

    axios({
      url:URL,
      method:"GET",
      params: {
        key: API_KEY,
        part : "snippet",
        q: keyword,
        type: 'video',
        maxResults: 10,
      }
    })
    .then((response)=>{
      // console.log(response);
      videos.value = response.data.items
    })
    .catch(()=>{})

  }
  const clickVideo = function(video){
    console.log(video)
    selectedVideo.value=video
  }
  
  return {videos,youtubeSearch,clickVideo,selectedVideo }
})
