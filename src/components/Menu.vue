<template>
    <div class="menu-box">
        <div class="menu-logo">
            <h2>DreamHUB</h2>
            <router-link to="/">
                <img src="@/assets/logo.png" alt="">
            </router-link>
        </div>
        <div class="menu-content">
            <div class="menu-list">
                <div class="menu-list-item" v-for="(item, path) in menuList" :key="item.path">
                    <router-link to="/">{{ item.text }}</router-link>
                    <div class="sub-menu">
                        <div class="sub-menu-item" v-for="(subItem, path) in item.subMenu" :key="subItem.path">
                            <!-- <router-link to="/">{{ subItem.text }}</router-link> -->
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

<script setup lang="ts">
import { ref } from 'vue';
interface MenuItem {
    text: string;
    path: string;
    subMenu?: MenuItem[];
}
const menuList = ref<MenuItem[]>([
    { text: 'Home', path: '/' },
    { text: 'About', path: '/' },
    {
        text: 'Services', path: '/', subMenu: [
            { text: 'Web Development', path: '/' },
            { text: 'Mobile Development', path: '/' },
            { text: 'Graphic Design', path: '/' },
        ]
    },
    { text: 'Login', path: '/' },
]);
</script>

<style scoped lang="scss">
.menu-box {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    transition: all 0.3s ease-in-out;
    height: 5rem;
    margin: 0 5rem;

    .menu-logo {
        flex: 2;
        display: flex;
        align-items: center;
        height: 5rem;
        width: 10rem;

        h2 {
            display: none;
        }

        a {
            height: 100%;
            width: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }


    }

    .menu-content {
        flex: 10;
        display: flex;
        justify-content: flex-end;
        

        .menu-list {
            display: flex;
            align-items: center;
            color:var(--Gray-text-color);
            font: normal 300 1.2rem 'PingFang SC';
            
            .menu-list-item {
                display: flex;
                justify-content: center;
                align-items: center;
                a{
                    display: flex;
                    padding: 1.5rem;
                    &:hover{
                        color: var(--primary-color);
                    }
                }
            }

        }

    }
}
</style>