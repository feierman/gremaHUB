<!-- 路径 Section -->
<template>
  <div class="sectionBox">
    <SectionText class="titleText">
      <span v-for="(item, index) in SectionData[0].titles" :key="index">{{ item }}</span>
      <p v-for="desc in SectionData[0].descs" :key="desc">{{ desc }}</p>
    </SectionText>
    <ul class="content-box user-selector-none">
      <li
        v-for="(item, index) in filterSectionData"
        :key="index"
        class="content-item"
        @mouseenter="addAnimation"
      >
        <div class="icon">
          <span :class="`iconfont icon-${item.icon}`"></span>
        </div>
        <div class="title">
          <h2>{{ item.titles[0] }}</h2>
        </div>
        <div class="desc">
          <p>{{ item.descs[0] }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import SectionText from '@/components/solt/titleDescSolt.vue'
import { ref, computed } from 'vue'
import { SectionData } from '@/api/Section.js'
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
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 83rem;
    margin-top: 3rem;
    overflow: hidden;

    .content-item {
      position: relative;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 0.5rem;
      background-color: var(--primary-color-light);
      box-shadow: 0 0 0.5rem var(--primary-color-light, rgba(255, 255, 255, 0.5));
      transition: all 0.6s ease;
      overflow: hidden;
      z-index: 0;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        z-index: -1;

        background-color: var(--primary-color);
        transition: all 1s ease;
      }

      &:hover::before {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        transition: all 0.6s ease-in-out;
      }

      &:hover,
      &:hover .icon span,
      &:hover .title h2,
      &:hover .desc p {
        color: #fff;
        transition: all 0.6s ease-in-out;
      }
    }
  }
}

.icon {
  span {
    font-size: 3rem;
    color: var(--primary-color);
  }
}

.title {
  padding: 0.5rem 0;
  h2 {
    font:
      normal 600 1rem 'Poppins',
      sans-serif;
    color: #333;
  }
}

.desc {
  padding: 0.5rem 0;
  p {
    font:
      normal 400 0.9rem 'Poppins',
      sans-serif;
    color: gray;
  }
}
</style>
