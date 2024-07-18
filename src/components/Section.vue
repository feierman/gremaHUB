<!-- 路径 Section -->
<template>
  <div class="sectionBox">
    <SectionText class="titleText">
      <span v-for="(item, index) in SectionData[0].titles" :key="index">{{ item }}</span>
      <p v-for="desc in SectionData[0].descs" :key="desc">{{ desc }}</p>
    </SectionText>
    <ul class="content-box">
      <li v-for="(item, index) in filterSectionData" :key="index" class="content-item">
        <div class="icon">
          <span class="iconfont icon-xiaoxi"></span>
        </div>
        <div class="title">{{ item.titles[0] }}</div>
        <div class="desc">{{ item.descs[0] }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import SectionText from '@/components/solt/titleDescSolt.vue'
import { ref, computed } from 'vue'
const SectionData = ref([
  {
    id: 1,
    icon: '',
    titles: ['Giving Your Awesome Business', 'Fresh Start With US'],
    descs: [
      'Whatever the level of support you require, we are sure that we will',
      'have a package that meets your needs.'
    ]
  },
  {
    id: 2,
    icon: '',
    titles: ['Get a Better Overview'],
    descs: [
      'This should be used to tell a story and let your users know a little more about your product.'
    ]
  },
  {
    id: 3,
    icon: '',
    titles: ['Get a Better Results'],
    descs: [
      'This should be used to tell a story and let your users know a little more about your product.'
    ]
  },
  {
    id: 4,
    icon: '',
    titles: [' Protect your business'],
    descs: [
      ' This should be used to tell a story and let your users know a little more about your product.'
    ]
  },
  {
    id: 5,
    icon: '',
    titles: [' Drag and Drop'],
    descs: [
      'This should be used to tell a story and let your users know a little more about your product.'
    ]
  },
  {
    id: 6,

    icon: '',
    titles: ['Get a Better Analytics'],
    descs: [
      'This should be used to tell a story and let your users know a little more about your product.'
    ]
  },
  {
    id: 7,
    icon: '',
    titles: ['Upsell your product'],
    descs: [
      'This should be used to tell a story and let your users know a little more about your product.'
    ]
  }
])
//过滤数组
const filterSectionData = computed(() => SectionData.value.filter((item) => item.id !== 1))
</script>

<style lang="scss" scoped>
.sectionBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;

  .titleText {
    span {
      font:
        normal 600 2rem 'Poppins',
        sans-serif;
      color: var(--Gray-text-color);
    }
  }
  .content-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 83rem;
    margin-top: 3rem;
    .content-item {
      padding: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 0.5rem;
      background-color: var(--primary-color-light);
      box-shadow: 0 0 0.1rem 0.1rem rgba(255, 255, 255, 0.1);
      overflow: hidden;
      .icon {
        span {
          font-size: 2rem;
          color: var(--primary-color);
          background-color: transparent;
        }
      }
      .title {
        font:
          normal 600 1rem 'Poppins',
          sans-serif;
        color: var(--Gray-text-color);
        padding: 0.5rem 0;
      }
      .desc {
        font:
          normal 400 0.8rem 'Poppins',
          sans-serif;
        color: var(--Gray-text-color);
        padding: 0.5rem 0;
      }
    }
  }
}
</style>
