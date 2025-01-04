<template lang="pug">
div(class="bg-[#12284c] text-white py-4" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
  div(class="w-[85%]").mx-auto.flex.flex-col.gap-4
    .flex.justify-between.items-center
      .flex.flex-col.items-start
        div.logo(class="md:w-28 w-24")
          //- img(src="/public/large stickers v.3.svg" alt="Logo")
          NuxtImg(src="/tasa-logo.png")
        //- p.text-xs.mt-2.text-gray-400 {{ $i18n.locale }}

      .flex.items-center.relative
        div(class="absolute right-4 hidden md:block")
          i(class="fas fa-search text-gray-400 cursor-pointer")
      div(class="md:hidden flex gap-2 text-[#ffe5c7]")
        button(@click="open" class=" text-xl ")
          MenuIcon/
        button(
        @click="changeLanguageEN" 
        class="border-[#ffe5c7] rounded-full w-8 h-8 border grid place-items-center"
        )
          span {{$i18n.locale === 'ar' ? 'EN' : 'ع'}}

      div(class="items-center space-x-6 hidden md:flex")
        .flex.items-center.space-x-2
          i(class="fab fa-whatsapp text-lg")
          span.text-sm +20 1012230000
        button(@click="changeLanguageEN").rounded-full.w-10.h-10.border.border-white.grid.place-content-center
          span {{$i18n.locale === 'ar' ? 'EN' : 'ع'}}

    // Dropdown menu for small screens
  
    div(class="justify-center gap-6 items-center border-t border-gray-700 pt-4 space-x-6 text-sm hidden md:flex")
      NuxtLink(:to="localePath('/')" active-class="text-text-[#ffe5c7] font-bold" class="hover:text-[#ffe5c7]") {{$t('home')}}
      NuxtLink(:to="localePath('about')" active-class="text-text-[#ffe5c7] font-bold" class="hover:text-[#ffe5c7]") {{$t('about')}}
      NuxtLink(:to="localePath('team')" active-class="text-[#ffe5c7] font-bold" class="hover:text-[#ffe5c7]") {{$t('team')}}
      NuxtLink(:to="localePath('menu')" active-class="text-[#ffe5c7] font-bold" class="hover:text-[#ffe5c7]") {{$t('pageTitle3')}}
      NuxtLink(:to="localePath('orders')" active-class="text-[#ffe5c7] font-bold" class="hover:text-[#ffe5c7]") {{$t('order now')}}
      NuxtLink(:to="localePath('social')" active-class="text-[#ffe5c7] font-bold" class="hover:text-[#ffe5c7]") {{$t('pageTitle4')}}
      NuxtLink(:to="localePath('contact')" active-class="text-[#ffe5c7] font-bold" class="hover:text-[#ffe5c7]") {{$t('contact')}}




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