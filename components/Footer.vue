<template lang="pug">

.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .contain
        .left
            .image
                .loh(:style="$i18n.locale === 'ar' ? 'text-align: right;': 'text-align: left;'")
                    div.logo.w-28
                        NuxtImg(src="/large stickers v.3.svg" alt="Logo")
           

            
        .right(class='flex items-center gap-11')
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
    background: #f8f8f8;
    padding-top: 7em;
    padding-bottom: 1em;
    .contain {
        display: flex;
        justify-content: space-between;
        .left{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.5em;

        }
        
       
    }
}
// @media (max-width:768px) {
//     .div{
//         padding-top: 5em;
//         .container-fluid{
//             display: grid;
//             grid-template-columns: 1fr;
//             place-content: center;
//             gap: 3em;
            
//             .right{
//                 display: grid;
//                 grid-template-columns: 1fr 1fr;
//                 gap: 5em;
//             }
//         }
//     }
// }
</style>