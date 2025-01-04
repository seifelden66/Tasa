<template lang="pug">

.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .contain
        .left
            .image
                .loh(:style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'")
                    div.logo.w-28
                        NuxtImg(src="/tasa-logo.png")           

            
        .right(class='flex items-center flex-wrap gap-11')
            NuxtLink.lin.col(:to="localePath('/')")
                h6 {{$t('home')}}
            NuxtLink.lin.col(:to="localePath('about')")
                h6 {{$t('about')}}
            NuxtLink.lin.col(:to="localePath('team')")
                h6 {{$t('team')}}
            NuxtLink.lin.col(:to="localePath('menu')")
                h6 {{$t('pageTitle3')}}
            NuxtLink.lin.col(:to="localePath('orders')") 
                h6 {{$t('order now')}}
            NuxtLink.lin.col(:to="localePath('social')") 
                h6 {{$t('pageTitle4')}}
            NuxtLink.lin.col(:to="localePath('/contact')")
                h6 {{$t('contact')}}
               
          
</template>

<script setup lang="ts">
import { useI18nUtils } from "../i18n";

const { localePath } = useI18nUtils();
// const lang = ref(locale);
</script>

<style lang="scss" scoped>
.div {
    margin: 0 !important;
    // background: #f8f8f8;
    color: #ffe5c7;
    padding-top: 2em;
    padding-bottom: 1em;
    .contain {
        display: flex;
        justify-content: space-between;
        @media (max-width:768px) {
            // gap: 100px;
            flex-direction: column;
        }
        .left{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.5em;
            @media (max-width: 768px) {
                gap: 1em;                
            }

        }
        
       
    }
}

</style>