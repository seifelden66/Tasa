<template lang="pug">
div(class="bg-[#262c27] text-white py-4" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
  div(class="w-[85%]").mx-auto.flex.flex-col.gap-4
    .flex.justify-between.items-center
      .flex.flex-col.items-start
        div.logo.w-28
          img(src="/public/large stickers v.3.svg" alt="Logo")
        //- p.text-xs.mt-2.text-gray-400 {{ $i18n.locale }}

      .flex.items-center.relative
        input(
          type="text" 
          placeholder="search" 
          class="rounded-lg border border-gray-500 bg-transparent text-white px-3 py-1 w-80 hidden md:block"
        )
        div(class="absolute right-4 hidden md:block")
          i(class="fas fa-search text-gray-400 cursor-pointer")

      // Menu icon for small screens
      button(@click="open" class="text-white text-xl md:hidden")
        MenuIcon/

      div(class="items-center space-x-6 hidden md:flex")
        .flex.items-center.space-x-2
          i(class="fab fa-whatsapp text-lg")
          span.text-sm +20 1012230000
        button(@click="changeLanguageEN").rounded-full.w-10.h-10.border.border-white.grid.place-content-center
          span {{$i18n.locale === 'ar' ? 'EN' : 'ع'}}

    // Dropdown menu for small screens
  
    div(class="justify-center gap-6 items-center border-t border-gray-700 pt-4 space-x-6 text-sm hidden md:flex")
      NuxtLink(:to="localePath('/')", class="hover:text-yellow-500") {{$t('home')}}
      NuxtLink(:to="localePath('about')", class="hover:text-yellow-500") {{$t('about')}}
      NuxtLink(:to="localePath('team')", class="hover:text-yellow-500") {{$t('team')}}
      NuxtLink(:to="localePath('menu')", class="hover:text-yellow-500") {{$t('pageTitle3')}}
      NuxtLink(:to="localePath('orders')", class="hover:text-yellow-500") {{$t('order now')}}
      NuxtLink(:to="localePath('social')", class="hover:text-yellow-500") {{$t('pageTitle4')}}
      NuxtLink(:to="localePath('contact')", class="hover:text-yellow-500") {{$t('contact')}}



</template>

<script setup lang="ts">
import { useI18nUtils } from "../i18n";
const { localePath, changeLanguageEN } = useI18nUtils();

const dropDown = ref(false)
function showDropdown() {
    dropDown.value = true
}
function hideDropdown(){
    dropDown.value = false
}
</script>

<style lang="scss" scoped>
.div {
    height: 180px;

    .all {
        
        .upper {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .srch {
            align-items: center;
            display: flex;
            position: relative;
            input {
            background: #00000000;
            border-radius: 5px;
            border: rgb(255, 255, 255) solid 1px;
            width: 550px;
            height: 35px;
            padding-left: 5px;
            }
            .srchicon {
            margin: auto -25px;
            &:hover {
                color: #4d614f;
            }
            }
        }
        .right {
            display: flex;
            gap: 1.5em;
            align-items: center;
            .whats {
            display: flex;
            gap: 0.35em;
            align-items: center;
            }
        }
        }
        .lower {
        border-top: 1px rgba(92, 92, 92, 0.486) solid;
        margin-top: 2.1em;
        .links {
            margin-top: 1em;
            display: flex;
            gap: 1.5em;
            .lin {
            &:hover {
                color: #fbc30c;
            }
            }
        }
        }
    }
    }
@media (min-width: 1180px) {
    .div{
    
    .right {
    .menu {
        display: none !important;
    }
    }
}}
@media (max-width: 1180px) {
    .div{
    height: 117px !important;
    .upper {
        .loh{
        p{
            font-size: 11px !important;
        }
        }
        .srch {
        display: none !important;
        }
        .right {
        gap: 1em !important;
        .whats {
            display: none !important;
        }
        }
    }
    .lower {
        display: none;
    }
    }
    
}
</style>