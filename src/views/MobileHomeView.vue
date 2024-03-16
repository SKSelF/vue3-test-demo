<script setup lang="ts">
import { ref } from 'vue'

const value = defineModel()
const active = defineModel('home')

const obj = ref({ a: 1, b: 2 })

const onSearch = () => {
  console.log('searching...')
}
const onChangeTab = () => {
  let { a } = obj.value
  a++
  console.log(obj)
  console.log(a)
  console.log(obj.value.a)
}
</script>

<template>
  <div>
    <van-search v-model="value" shape="round" background="#FFD100" placeholder="请输入搜索关键词" />
    <van-tabbar v-model="active" @click="onChangeTab">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="vip-card-o">会员</van-tabbar-item>
      <van-tabbar-item name="friends" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item name="setting" icon="list-switching">更多</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
