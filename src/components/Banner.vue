<!-- 路径 @/components/Banner.vue  -->
<template>
  <div class="carouserl-content">
    <Swiper
      :modules="modules"
      autoplay="{ delay: 5000, disableOnInteraction: false }"
      :loop="true"
      :navigation="true"
      :pagination="true"
      class="mySwiper"
    >
      <SwiperSlide v-for="item in props.imgdataList" :key="item.id" :class="item.class">
        <img :src="item.img" />
        <div class="title-content">
          <span class="title">{{ item.title }}</span>
          <span class="title">{{ item.title1 }}</span>
          <p>{{ item.desc }}</p>
          <p>{{ item.desc1 }}</p>
          <button class="btn-bdradius">Call To Action</button>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
const modules = [Navigation, Pagination, Autoplay]

interface ImgData {
  id: number
  img: string
  path: string
  title: string
  title1: string
  desc: string
  desc1: string
  class: string
}
const props = defineProps<{
  imgdataList: ImgData[]
}>()
</script>

<style scoped>
.carouserl-content {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 0;

  .mySwiper {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .title-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      width: 800px;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--white-color);
      gap: 1rem;
      span {
        font:
          normal 700 3rem 'Poppins',
          sans-serif;
      }
      p {
        font:
          normal 300 1rem 'Poppins',
          sans-serif;
      }
    }
    .side2 .title-content {
      /* 定位左下角 */
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translate(-1rem, -25rem);
    }
  }
}
</style>
