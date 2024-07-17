<template>
  <Menu :menuList="menuList" />
  <Banner />
</template>

<script setup lang="ts">
import Menu from '@/components/Menu.vue'
import Banner from '@/components/Banner.vue'
import { reactive } from 'vue'
import { menuList as rawMenuList } from '../api/DataMenu.ts'
const menuList = reactive(rawMenuList)
</script>

<style lang="scss" scoped></style>
