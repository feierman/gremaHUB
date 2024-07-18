<!-- 路径 Home.uve -->
<template>
  <Menu :menuList="menuList" />
  <Banner :imgdataList="imgdataList" />
  <Section />
</template>

<script setup>
import Menu from '@/components/Menu.vue'
import Banner from '@/components/Banner.vue'
import Section from '@/components/Section.vue'
import { reactive } from 'vue'
import { menuList as MenuDataList } from '@/api/MenuDataList.js'
import { bannerData as BannerDataList } from '@/api/BannerData.js'
const menuList = reactive(MenuDataList)
const imgdataList = reactive(BannerDataList)
</script>

<style lang="scss" scoped></style>
