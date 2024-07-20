<!-- 路径 @/components/Banner.vue -->
<template>
  <div class="carouserl-content">
    <Swiper
      ref="SwiperRef"
      :modules="modules"
      :autoplay="autoplayOptions"
      :loop="true"
      :navigation="true"
      :pagination="true"
      class="mySwiper"
      @mouseover="handleMouseover"
      @mouseleave="handleMouseleave"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="item in imgdataList" :key="item.id" :class="item.class">
        <img :src="item.img" />
        <Bannertext class="title-content">
          <span>{{ item.title }}</span>
          <span>{{ item.title1 }}</span>
          <p>{{ item.desc }}</p>
          <p>{{ item.desc1 }}</p>
          <div class="btns">
            <button class="btn-bdradius">Call To Action</button>
            <button v-if="item.class !== 'side1'" class="bofang">▶</button>
            <span v-if="item.class !== 'side1'" v-for="n in 5" class="ripple bowen"></span>
          </div>
        </Bannertext>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import 'swiper/swiper-bundle.css'
import { defineProps, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Bannertext from '@/components/solt/titleDescSolt.vue'

const modules = [Navigation, Pagination, Autoplay]
const props = defineProps({
  imgdataList: Array
})

const SwiperRef = ref(null)
const swiperInstance = ref(null)

const autoplayOptions = { delay: 3000, disableOnInteraction: false }

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const handleMouseover = () => {
  if (swiperInstance.value && swiperInstance.value.autoplay) {
    swiperInstance.value.autoplay.stop()
  }
}

const handleMouseleave = () => {
  if (swiperInstance.value && swiperInstance.value.autoplay) {
    swiperInstance.value.autoplay.start()
  }
}
</script>

<style scoped>
.carouserl-content {
  position: relative;
  width: 100%;
  height: 100vh;
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

      .btns {
        position: relative;
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        gap: 3rem;

        .bofang {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          background-color: var(--white-color);
          color: var(--primary-color);
        }
      }
    }

    .side2 .title-content {
      position: absolute;
      left: 0;
      right: 0;
      transform: translate(-1rem, -25rem);

      .btns {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .bowen {
          position: absolute;
          left: 91%;
        }
      }
    }
  }
}
</style>
