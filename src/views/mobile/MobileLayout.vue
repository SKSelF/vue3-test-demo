<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const active = defineModel('home')

const obj = ref({ a: 1, b: 2 })
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
    <RouterView />
    <van-tabbar v-model="active" @click="onChangeTab">
      <van-tabbar-item to="/mobile/home" name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="vip-card-o">会员</van-tabbar-item>
      <van-tabbar-item name="friends" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item name="setting" icon="list-switching">更多</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
