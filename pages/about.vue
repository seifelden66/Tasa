<template lang="pug">
.div(class="pb-12" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .contain
        .card(class="flex pt-36 justify-between flex-col md:flex-row items-center bg-[#ffe5c7]")
            .left(class="p-5")
                h1(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'" class="text-5xl font-bold") {{$t('about_us')}}
            .image
                img(src="/maria.JPG" class="responsive-image")

.div3(style="background:#f8f8f8") 
    .contain(class="mt-10")
        .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400") 
            .cont 
                h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{$t('who')}}      
                p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('story1')}}
            .line 
            .image
                img(src="/green-plate.jpg" class="responsive-image")
            
        .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400") 
            .image
                img(src="/boy.jpg" class="responsive-image")
            .line
            .cont 
                h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{$t('history')}}
                p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('histo_content')}}
        .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400") 
            .cont 
                h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{$t('vision')}}      
                p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('ourVision')}}
            .line 
            .image
                img(src="/eat.jpg" class="responsive-image")
</template>

<script setup lang="ts">
import { useI18nUtils } from "../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
</script>

<style lang="scss" scoped>
.ittem {
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-align: center;
  }
  @media (min-width: 768px) {
    flex-direction: row;

  }
  &:nth-child(2) {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }
  .cont,
  .image {
    flex: 1;
  }

  .line {
    width: 1px;
    height: 320px;
    border-right: 1px dotted #b5b4b4;
    margin: 0 20px;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .image {
    height: 340px;
    width: 100%;
    @media (max-width: 768px) {
      height: 300px;
      flex:auto;
    }
  }
}
</style>
