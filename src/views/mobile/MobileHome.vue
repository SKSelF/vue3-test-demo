<template>
  <div>
    <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" @change="onSearch" />
  </div>
</template>

<script setup>
import { defineModel } from 'vue'

const value = defineModel()

const onSearch = () => {
  console.log('searching...')
}
</script>
