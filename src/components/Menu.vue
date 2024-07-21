<template>
  <div class="menu-box" ref="menuBox">
    <div class="menu-logo">
      <h2>DreamHUB</h2>
      <router-link to="/">
        <img src="@/assets/logo.png" alt="" />
      </router-link>
    </div>
    <div class="menu-content">
      <div class="menu-list">
        <div
          class="menu-list-item"
          v-for="(item, index) in menuList"
          :key="index"
          @mousemove="handleMouseMove(index)"
          @mouseleave="handleMouseLeave(index)"
        >
          <router-link :to="item.path" class="menu-link">{{ item.text }}</router-link>
          <div class="sub-menu" v-if="item.showsubMenu">
            <div class="sub-menu-item" v-for="(subItem, subIndex) in item.subMenu" :key="subIndex">
              <router-link :to="subItem.path" class="sub-link">{{ subItem.text }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="getBtn">
      <button>Get Quote</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  menuList: Array
})
const menuBox = ref(null)

const handleMouseMove = (index) => {
  props.menuList[index].showsubMenu = true
}

const handleMouseLeave = (index) => {
  props.menuList[index].showsubMenu = false
}

onMounted(() => {
  gsap.to('.menu-box', {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.menu-box',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  })
})
</script>

<style scoped lang="scss">
.menu-box {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  transition: all 0.3s ease-in-out;
  height: 5rem;
  padding: 0 5rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--white-color);

  .menu-logo {
    flex: 2;
    display: flex;
    align-items: center;
    height: 5rem;
    width: 10rem;

    h2 {
      display: none;
    }

    img {
      height: 100%;
      object-fit: scale-down;
    }
  }

  .menu-content {
    flex: 10;
    display: flex;
    justify-content: flex-end;

    .menu-list {
      display: flex;
      align-items: center;
      color: var(--Gray-text-color);
      font: normal 300 1.2rem 'PingFang SC';

      .menu-list-item {
        position: relative;
        height: 100%;

        .menu-link {
          padding: 2rem 1.2rem;

          &:hover {
            color: var(--primary-color);
          }
        }

        .sub-menu {
          position: absolute;
          top: 3.5rem;
          left: 50%;
          transform: translateX(-50%);
          min-width: 10rem;
          background-color: var(--white-color);
          box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
          border-radius: 0.5rem;
          z-index: 1;

          .sub-menu-item {
            font: normal 300 0.9rem 'PingFang SC';
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.8rem 1.2rem;

            // 气泡样式
            &::before {
              content: '';
              position: absolute;
              top: -0.5rem;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 0;
              border-left: 0.5rem solid transparent;
              border-right: 0.5rem solid transparent;
              border-bottom: 0.5rem solid var(--white-color);
            }

            &:hover {
              background-color: var(--primary-color);
              color: var(--white-color);
              transition: all 0.3s ease-in-out;

              &:first-child {
                border-radius: 0.5rem 0.5rem 0 0;
              }

              &:last-child {
                border-radius: 0 0 0.5rem 0.5rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
