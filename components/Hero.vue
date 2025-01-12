<template lang="pug">
div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    div(class="hero bg-black text-white h-[35rem] flex items-center justify-center relative overflow-hidden")
        video(
            src="/public/tasa-vid1.mp4"
            autoplay
            muted
            loop
            playsinline
            class="absolute top-0 left-0 w-full h-full object-cover"
    )
.div(class="min-h-screen flex items-center justify-center relative overflow-hidden pt-5") 
    .contain(class="grid grid-cols-1 gap-6 px-6 md:px-12 py-12 items-center z-10 relative")
        div(class="bg-[#ffe5c7] p-4 md:p-12 rounded-lg shadow-2xl ")
            h3(class="text-4xl md:text-5xl font-extrabold text-[#12284c] mb-4") {{$t('tasa welcome')}}
            p(class="text-lg md:text-xl text-[#12284c] leading-relaxed mb-6") {{ $t('tasa content') }}
            .flex.flex-wrap.gap-4
                NuxtLink(
                    :to="localePath('about')"
                    class="bg-[#12284c] text-[#ffe5c7] py-3 px-6 rounded-full shadow-md hover:bg-[#1e3a57] transition-transform transform hover:scale-105 font-medium text-lg"
                ) {{$t('who_we')}}
                NuxtLink(
                    :to="localePath('orders')"
                    class="bg-[#12284c] text-[#ffe5c7] py-3 px-6 rounded-full shadow-md hover:bg-[#1e3a57] transition-transform transform hover:scale-105 font-medium text-lg"
                ) {{$t('order now')}}

        //- div(class="relative w-full h-[500px] md:h-[500px] flex justify-center items-center overflow-hidden z-20 bg-white ") 
        //-     .absolute.top-0.w-full.h-1/2(class="bg-[#12284c]")
        //-         NuxtImg(
        //-             src="/png-tasa.png"
        //-             alt="Tasa Food Image"
        //-             class="object-cover w-full h-full rounded-lg shadow-lg"
        //-             style="object-position: center;"
        //-         )



                
</template>

<script setup lang="ts">
import { useI18nUtils } from "../i18n";
const { localePath, changeLanguageEN } = useI18nUtils();
</script>

<style lang="scss" scoped>

</style>
