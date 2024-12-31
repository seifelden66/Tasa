<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .contain
        .card()
            .left
                h1(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'" class="text-5xl font-bold") {{$t('about_us')}}
            .image
                    //- img(:src="'https://board.rockal.org/assets/' + item.slider[0].cover_id")
                    NuxtImg(src="/Fatoosh-Salad.jpg")


.div3(style="background:#f8f8f8") 
    .contain
        .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400") 
            .cont 
                h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{$t('who')}}      
                p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('story1')}}
            .line 
            .image.flex-shrink-0
                NuxtImg(src="/Fatoosh-Salad.jpg")
                    //- img(src="/story1.jpg")
            
        .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400") 
            .image.flex-shrink-0
                NuxtImg(src="/Fatoosh-Salad.jpg")

                //- img(src="/story2.png")
            .line
            .cont 
                h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{$t('history')}}
                p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('histo_content')}}
        .ittem(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"  data-aos="fade-up" :data-aos-duration="400" :data-aos-delay="400") 
            .cont 
                h2(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{$t('vision')}}      
                p(:style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'") {{t('ourVision')}}
            .line 
            .image.flex-shrink-0
                NuxtImg(src="/Fatoosh-Salad.jpg")
                    //- img(src="/story1.jpg")
            
       

    
</template>

<script setup lang="ts">
import { useI18nUtils } from "../i18n";
const { t, locale, setLocale, localePath, changeLanguageEN } = useI18nUtils();
</script>

<style lang="scss" scoped>
.div {
  padding-top: 12em;
  padding-bottom: 5em;
  .contain {
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

        width: 80%;
        display: flex;
        flex-direction: column;
        margin: 1em;
        justify-content: center;
      }
    }
  }
}
.div3 {
  padding-top: 2em;

  .ittem {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 50px 1fr;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    .cont {
      padding: 2em;
      padding-right: 2em;
      display: flex;
      flex-direction: column;
      gap: 0.7em;
    }
    .line {
      transform: translateY(7px);
      background-color: #00000000;
      border-left: rgb(156, 156, 156) 1px dashed;
      width: 0.1px;
      height: 105%;
    }
    .image {
      padding: 2em;
      width: 500px;
      border: rgb(156, 156, 156) 1px dashed;
    }
  }
  @media (max-width: 768px) {
    .ittem {
      justify-content: center;
      display: flex;
      flex-direction: column;
      .cont {
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        p {
          text-align: center !important;
        }
      }
      &:nth-child(odd) {
        flex-direction: column-reverse;
      }
    }
  }
}

.secmid {
  background: #f8f8f8;
  padding-top: 5em;
  padding-bottom: 5em;
  .container-fluid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
    .it {
      background: #ffffff;
      padding: 1em;
      .image {
        width: 50px;
        margin-bottom: 1em;
      }
    }
  }
}

@media (max-width: 768px) {
  .div {
    .container-fluid {
      .card {
        display: grid;
        grid-template-columns: 1fr;
        height: 570px;
        .image {
          height: 300px;
        }
      }
    }
  }
}
</style>
