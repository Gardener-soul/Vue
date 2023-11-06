<template>
  <div>
    <h2>AppView</h2>
    <header>
      <RouterLink to="/">Home</RouterLink> 
      <RouterLink :to="{name:'home'}">HomeName</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink :to="{name: 'user', params:{id:'gardener'}}">박은수</RouterLink>
      <RouterLink :to="{name: 'user', params:{id:'ssafy'}}">박싸피</RouterLink>
      <RouterLink :to="{name:'login'}">login</RouterLink>
      <RouterLink to="/board">게시판</RouterLink>
    </header>
  <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style scoped>
  header{
    display: flex;
    justify-content: space-around;
  }
  a{
    text-decoration: none;
  }
</style>