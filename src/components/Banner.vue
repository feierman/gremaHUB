<!-- 路径 @/components/Banner.vue  -->
<template>
  <div class="carouserl-content">
    <Swiper
      :modules="modules"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :loop="true"
      :navigation="true"
      :pagination="true"
      class="mySwiper"
    >
      <SwiperSlide v-for="item in dataList" :key="item.id"><img :src="item.img" /> </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import banner from '@/assets/banner.png'
import banner2 from '@/assets/banner2.png'
import { reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
const modules = [Navigation, Pagination, Autoplay]
const dataList = reactive([
  { id: 1, img: banner, path: '/' },
  { id: 2, img: banner2, path: '/' }
])
</script>

<style scoped>
.carouserl-content {
  width: 100%;
  height: 110vh;
  position: absolute;
  z-index: 0;
  .mySwiper {
    height: 100%;

    img {
      width: 100%;

      height: 100%;

      object-fit: cover;
    }
  }
}
</style>
