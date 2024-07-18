<!-- titleDescSolt.vue -->
<template>
  <div class="title-content" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script setup>
import { useAttrs } from 'vue'
const attrs = useAttrs()
</script>

<style lang="scss" scoped>
.title-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 800px;
  height: 100%;
  gap: 1rem;

}
::v-deep span {
  font:
    normal 300 3rem 'Poppins',
    sans-serif;
}
::v-deep p {
  font:
    normal 300 1rem 'Poppins',
    sans-serif;
}
</style>
