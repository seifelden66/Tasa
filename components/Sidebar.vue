<template lang="pug">
div
    aside(@click.outside="handleOutsideClick")
        transition(
            enter-to-class="animate__animated animate__slideInLeft",
            leave-to-class="animate__animated animate__slideOutLeft"
        )
            div.side(v-show="side")
                button(@click="close" class="circ flex items-center justify-center w-10 h-10 rounded-full")
                    h1 x
                ul.list(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'")
                    li.listItem
                        NuxtLink.lin.col(
                            :to="localePath('/')" 
                            active-class="text-yellow-500 font-bold" 
                            @click="close"
                        ) {{$t('home')}}
                    li.listItem
                        NuxtLink.lin.col(
                            :to="localePath('/about')" 
                            active-class="text-yellow-500 font-bold" 
                            @click="close"
                        ) {{$t('about')}}
                    //- li.listItem
                    //-     NuxtLink.lin.col(
                    //-         :to="localePath('/team')" 
                    //-         active-class="text-yellow-500 font-bold" 
                    //-         @click="close"
                    //-     ) {{$t('team')}}
                    li.listItem
                        NuxtLink.lin.col(
                            :to="localePath('/menu')" 
                            active-class="text-yellow-500 font-bold" 
                            @click="close"
                        ) {{$t('pageTitle3')}}
                    li.listItem
                        NuxtLink.lin.col(
                            :to="localePath('/orders')" 
                            active-class="text-yellow-500 font-bold" 
                            @click="close"
                        ) {{$t('order now')}}
                    li.listItem
                        NuxtLink.lin.col(
                            :to="localePath('/social')" 
                            active-class="text-yellow-500 font-bold" 
                            @click="close"
                        ) {{$t('pageTitle4')}}
                    li.listItem
                        NuxtLink.lin.col(
                            :to="localePath('/contact')" 
                            active-class="text-yellow-500 font-bold" 
                            @click="close"
                        ) {{$t('contact')}}
</template>

<script setup lang="ts">
import { useI18nUtils } from "../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
const lang = ref(locale);
</script>
<style lang="scss" scoped>
.animate__animated.animate__slideInLeft,
.animate__animated.animate__slideOutLeft {
  animation-duration: 600ms;
}

.side {
  font-size: 26px;
  background: #12284c;
  color: #ffe5c7;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 270px;
  z-index: 999;
  padding: 0.75em;
  .social {
    margin-top: 20px;
    display: flex;
    gap: 4px;
    font-size: 18px;
    .it {
      &:hover {
        text-decoration: none;
        color: #e5bb8a;
        cursor: pointer;
      }
    }
  }
  .circ {
    color: #ffe5c7;
    // background: inherit;
    border: 1px solid #ffe5c7;
    cursor: pointer;
    transform: translatex(200px);
  }

  .list {
    list-style: none;
    text-decoration: none;
    color: #fff;
    .listItem {
      color: #fff;
      margin-top: 0.5em;
      .lin {
        text-decoration: none;
        color: inherit;

        &:hover {
          text-decoration: none;
          color: #e5bb8a;
        }
      }
    }
  }
}
</style>
