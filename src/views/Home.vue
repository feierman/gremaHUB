<!-- 路径 Home.uve -->
<template>
  <Menu :menuList="menuList" />
  <Banner :imgdataList="imgdataList" />
</template>

<script setup lang="ts">
import Menu from '@/components/Menu.vue'
import Banner from '@/components/Banner.vue'
import { reactive } from 'vue'
import { menuList as rawMenuList, imgdataList } from '../api/Datalist.js'
const menuList = reactive(rawMenuList);
const imgdataList = reactive(imgdataList);
</script>

<style lang="scss" scoped></style>
