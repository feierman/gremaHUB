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
      <SwiperSlide v-for="item in imgdataList" :key="item.id" :class="item.class">
        <img :src="item.img" />
        <Bannertext class="title-content">
          <span>{{ item.title }}</span>
          <span>{{ item.title1 }}</span>
          <p>{{ item.desc }}</p>
          <p>{{ item.desc1 }}</p>
          <button class="btn-bdradius">Call To Action</button>
        </Bannertext>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import 'swiper/swiper-bundle.css'
import { defineProps } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Bannertext from '@/components/solt/titleDescSolt.vue'
const modules = [Navigation, Pagination, Autoplay]

const props = defineProps({
  imgdataList: Array
})
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
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--white-color);
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
