<template lang="pug">
  .div(class="pb-12" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .contain
      .card(class="flex pt-36 justify-between flex-col md:flex-row items-center bg-[#ffe5c7]")
        .left(class="p-5 md:w-1/2")
          h1(
            :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'"
            class="text-4xl md:text-5xl font-bold mb-4"
          ) {{$t('about_us')}}
        .image(class="md:w-1/2")
          NuxtImg(
            src="/maria.JPG"
            width="600"
            height="400"
            class="responsive-image"
            loading="lazy"
            quality="80"
          )
  
    .div3(style="background:#f8f8f8")
      .contain(class="mt-10 space-y-16")
        .ittem(
          v-for="(item, index) in items"
          :key="index"
          :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
          class="overflow-hidden"
          data-aos="fade-up"
        )
          .cont(class="p-4 md:p-8")
            h2(
              :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'"
              class="text-2xl md:text-3xl font-semibold mb-4"
            ) {{$t(item.title)}}
            p(
              :style="$i18n.locale === 'ar' ? 'text-align:right' : 'text-align:left'"
              class="text-gray-600 leading-relaxed"
            ) {{t(item.content)}}
          .line(v-if="!isMobile")
          // Apply rotate-90 class only on the last image
          .image(class="relative" :class="{ 'rotate-90': index === items.length - 1 }")
            NuxtImg(
              :src="item.image"
              width="700"
              height="500"
              class="responsive-image"
              loading="lazy"
              quality="75"
            )
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18nUtils } from "../i18n";
const { t, locale } = useI18nUtils();

const items = [
  {
    title: 'who',
    content: 'story1',
    image: '/green-plate.jpg'
  },
  {
    title: 'history',
    content: 'histo_content',
    image: '/boy.jpg'
  },
  {
    title: 'vision',
    content: 'ourVision',
    image: '/eat.jpg'
  }
];

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 768;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
});
</script>

<style lang="scss" scoped>
.contain {
  @apply container mx-auto px-4;
}

/* Default responsive image styling */
.responsive-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 16/9;
}

.ittem {
  @apply flex flex-col md:flex-row items-center gap-8;
  
  &:nth-child(even) {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }

  .line {
    @apply hidden md:block w-px h-64 bg-gray-300 mx-8 flex-shrink-0;
  }

  .cont, .image {
    @apply flex-1;
  }

  .image {
    @apply h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg;
  }
}

.card {
  .image {
    @apply h-[300px] md:h-[450px] w-full;
  }
}

/* 1) Rotate 90 degrees */
.rotate-90 {
  transform: rotate(90deg);
  transform-origin: center;
}
img{
  width: 100%;
}

/* 2) Override container sizing for the last rotated image
   to reduce height & increase width */
.image.rotate-90 {
  /* Example sizes — adjust as you see fit */
  @apply w-[300px] h-[500px] md:w-[600px] md:h-[400px];
  margin: 0 auto; /* center the container if desired */
  overflow: hidden;
}

/* 3) Override aspect-ratio and fit for the last image so
   it doesn't stay 16/9 inside the rotated container */
.image.rotate-90 .responsive-image {
  aspect-ratio: unset !important;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { 
  .responsive-image {
    transform: translateZ(0); /* Fix blurry images on retina */
  }
}
</style>
