<template>
  < class="homeBox">
  <Menu :menuList="menuList" />
  <Banner :imgdataList="imgdataList" />
  <Section />
  <!-- 返回顶部 -->
  <div class="top" @click="scrollToTop">Top</div>
</template>

<script setup>
import Menu from '@/components/Menu.vue'
import Banner from '@/components/Banner.vue'
import Section from '@/components/Section.vue'
import { reactive, onMounted } from 'vue'
import { menuList as MenuDataList } from '@/api/MenuDataList.js'
import { bannerData as BannerDataList } from '@/api/BannerData.js'
const menuList = reactive(MenuDataList)
const imgdataList = reactive(BannerDataList)
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  gsap.fromTo(
    '.top',
    { y: -100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.homeBox',
        start: 'top 80%',
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'play pause resume reset',
        onEnter: () => gsap.to('.topBtns', { y: 0, opacity: 1, duration: 0.5 }),
        onLeave: () => gsap.to('.topBtns', { y: -100, opacity: 0, duration: 0.5 }),
        onEnterBack: () => gsap.to('.topBtns', { y: 0, opacity: 1, duration: 0.5 }),
        onLeaveBack: () => gsap.to('.topBtns', { y: -100, opacity: 0, duration: 0.5 })
      }
    }
  )
})
</script>

<style lang="scss" scoped>
.homeBox {
  position: relative;
  height: 100%;
  .topBtns {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 999;
    cursor: pointer;
    opacity: 0; /* 初始状态设为透明 */
    transform: translateY(-100px); /* 初始状态设为位移 */
    .top {
      width: 4rem;
      height: 4rem;
      background-color: var(--primary-color);
      border-radius: 50%;
      text-align: center;
      line-height: 4rem;
      color: var(--white-color);
    }
  }
}
</style>
