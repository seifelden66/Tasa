<template lang="pug">
.div.text-white
    .contain
        div(class="about-section py-10 ")
            div(class="container  mx-auto flex flex-col md:flex-row items-center gap-8")
                div(class="about-image w-full md:w-1/2")
                    NuxtImg(
                    :src="imageSrc"
                    alt="About Tasa Express"
                    class="rounded-lg object-cover w-full h-64 md:h-full"
                    )
                div(class="about-content w-full md:w-1/2"
                    :class="{ 'text-right': $i18n.locale === 'ar', 'text-left': $i18n.locale === 'en' }"
                )
                    h2(class="text-3xl md:text-5xl font-bold  mb-4") {{ $t(aboutHeader) }}
                    p(dir="auto").text-lg.mb-6 {{ $t(aboutContent).slice(0, 150) }}...
                    NuxtLink(
                    to="/about"
                    class="bg-white text-[#262c27] py-2 px-6 rounded-full shadow-md hover:bg-[#241b24] transition duration-300 inline-block"
                    ) {{ $t('read_more') }}
</template>

<script setup>
defineProps({
    imageSrc: {
    type: String,
    required: true,
    },
    aboutHeader: {
    type: String,
    required: true,
    },
    aboutContent: {
    type: String,
    required: true,
    },
});
</script>

<style scoped>

.about-image img {
    max-height: 500px;
}
</style>
