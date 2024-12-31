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
.div.h-screen.flex.items-center
    .contain.flex.items-center.relative(
        :data-aos="fade-up"
        :data-aos-duration="550"
        :data-aos-delay="100"
        :class="{ 'flex-col-reverse md:flex-row-reverse': $i18n.locale === 'ar', 'flex-col-reverse md:flex-row': $i18n.locale === 'en' }"
    )
        div.my-auto.flex.items-center.justify-center.bg-amber-300(
            class="h-[350px] md:h-[550px] flex-grow-0 p-6 md:p-10 w-full md:w-auto"
        )
            .relative.z-10(
                :class="{ 'text-right': $i18n.locale === 'ar', 'text-left': $i18n.locale === 'en' }"
            )
                h3(class="text-3xl md:text-5xl text-[#262c27] font-bold mb-4 md:mb-6") {{$t('tasa welcome')}}
                p(class="text-base md:text-xl text-[#262c27]") {{ $t('tasa content') }}
                .flex.flex-wrap.items-center.gap-4.mx-auto.justify-center.mt-6
                    NuxtLink(
                      :to="localePath('about')", class="bg-[#262c27] text-amber-300 py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg hover:bg-[#241b24] hover:shadow-xl transition-transform transform hover:scale-105 font-medium text-sm md:text-lg"
                    ) {{$t('who_we')}}
                    NuxtLink(
                      :to="localePath('orders')",class="bg-[#262c27] text-amber-300 py-2 md:py-3 px-4 md:px-6 rounded-full shadow-lg hover:bg-[#241b24] hover:shadow-xl transition-transform transform hover:scale-105 font-medium text-sm md:text-lg"
                    ) {{$t('order now')}}

        div.flex.items-center.justify-center(
            class="h-[250px] md:h-[550px] w-full md:w-[650px] flex-shrink-0 p-4 md:p-0"
        )
            NuxtImg(src="/heroside.jpg" alt="Hero Image" class="object-cover w-full h-full rounded-lg md:rounded-none")






                
</template>

<script setup lang="ts">
import { useI18nUtils } from "../i18n";
const { localePath, changeLanguageEN } = useI18nUtils();
</script>

<style lang="scss" scoped>
.div {
  //   height: 500px;
  .container-fluid {
    .fr {
      display: grid;
      gap: 1em;
      grid-template-columns: 1fr;

      .card {
        padding: 0;
        border: none;
        background: #fbc30c;
        color: black;
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 450px;

        .image {
          width: 100%;
          height: 450px;
        }
        .left {
          padding: 1em;
          .but {
            width: 120px;
            margin-top: 1em;
            .lin {
              width: 120px;
              .smoothBox {
                width: 120px;
                display: flex;
                text-align: center;
                align-items: center;
                justify-content: center;
              }
            }
          }

          h5 {
            font-weight: 400 !important;
          }
          width: 80%;
          display: flex;
          flex-direction: column;
          margin: 1em;
          justify-content: center;
        }
      }
    }
  }
}
@media (max-width: 992px) {
  .div {
    height: 650px;
    .card {
      font-size: smaller;
      height: 620px !important;
      display: grid;
      grid-template-columns: 1fr !important;
      .left {
        height: 300px;

        h5 {
          font-weight: 400 !important;
        }
      }
    }
  }
}
</style>
