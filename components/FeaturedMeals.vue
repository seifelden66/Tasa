<template lang="pug">
ClientOnly
    .contain.flex.items-center.flex-col.justify-center(class="h-[55vh] md:h-screen")
        h1.text-3xl.text-center {{$t('Featuered_meals')}}
        .relative.flex.items-center.justify-center.w-full
            button.left-0.absolute.bg-gray-800.text-white.px-4.py-2.rounded-full.z-10(@click="swiper.prev()") 
                LeftArrow/
            swiper-container( ref="containerRef" class="swiper w-full h-full")
                swiper-slide(v-for="i in meals" :key="i.id" class="flex justify-center items-center p-4")
                    .card.bg-white.shadow-lg.rounded-lg.max-w-xs.w-full.text-center.p-5
                        .img
                            NuxtImg(:src="i.image_url")
                        h2.text-lg.font-bold.mb-2 {{ $t(i.name) }}
            button.right-0.absolute.bg-gray-800.text-white.px-4.py-2.rounded-full.z-10(@click="swiper.next()") 
                RightArrow/
</template>

<script setup lang="ts">
import mealsData from "../meals.json";

const containerRef = ref(null);
const meals = mealsData.meals;
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 3,
  spaceBetween: 16,
  breakpoints: {
    640: { slidesPerView: 1, spaceBetween: 8 },
    768: { slidesPerView: 2, spaceBetween: 12 },
    1024: { slidesPerView: 3, spaceBetween: 16 },
  },
  on: {
    resize: () => {
      swiper.update();
    },
  },
});
</script>

<style lang="scss" scoped>
.div {
  height: 600px;
  margin: 0 !important;
  background: #f8f8f8;
  padding-top: 7em;
  @media (max-width: 768px) {
  height: fit-content;
  }
  .contain {
    @media (max-width: 768px) {
  height: fit-content;
  }
    .navBar {
      margin-bottom: 2em;
      display: flex;
      justify-content: space-between;
      .right {
        display: flex;
        gap: 10px;
        .smoothBox {
          background: white;
          color: black;
          border: 1px black solid;
          &:hover {
            color: green;
            cursor: pointer;
          }
        }
      }
    }
    .swiper {
      height: auto !important;
    }

    .swiper-slide {
      width: auto !important;
    }
    .cards {
      .card {
        height: 330px;

        .image {
          height: 150px;
        }
        .bottom {
          margin-top: 5px;
          align-items: center;
          padding: 0.5em;
          p {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
