<template lang="pug">
.section(class="bg-gray-100 py-32 mt-32" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .contain(class="mx-auto px-4")
        h1(class="text-3xl md:text-4xl font-bold text-center mb-8 text-[#262c27]") {{ $t('pageTitle') }}
    
        .section-board(class="bg-white shadow-md rounded-lg p-6 mb-8")
            h2(class="text-2xl font-semibold text-[#262c27] mb-4") {{ $t('boardOfDirectors') }}
            ul
                li(class="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 border-b pb-4 border-gray-200")
                    .icon(class="flex-shrink-0")
                        NuxtImg(src="/Fatoosh-Salad.jpg" alt="CEO" class="w-16 h-16 rounded-full object-cover")
                    .info
                        h3(class="font-bold text-lg") {{ $t('ceo') }}
                        p(class="text-gray-600 mt-2") {{ $t('ceoDescription') }}
                li(class="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6")
                    .icon(class="flex-shrink-0")
                        NuxtImg(src="/Fatoosh-Salad.jpg" alt="Board Member" class="w-16 h-16 rounded-full object-cover")
                    .info
                        h3(class="font-bold text-lg") {{ $t('boardMember') }}
                        p(class="text-gray-600 mt-2") {{ $t('boardMemberDescription') }}

        //- Executive Team Section
        .section-executive(class="bg-white shadow-md rounded-lg p-6")
            h2(class="text-2xl font-semibold text-[#262c27] mb-4") {{ $t('executiveTeam') }}
            ul
                li(class="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 border-b pb-4 border-gray-200")
                    .icon(class="flex-shrink-0")
                        NuxtImg(src="/Fatoosh-Salad.jpg" alt="Executive CEO" class="w-16 h-16 rounded-full object-cover")
                    .info
                        h3(class="font-bold text-lg") {{ $t('executiveCeo') }}
                        p(class="text-gray-600 mt-2") {{ $t('executiveCeoDescription') }}
                li(class="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 border-b pb-4 border-gray-200")
                    .icon(class="flex-shrink-0")
                        NuxtImg(src="/Fatoosh-Salad.jpg" alt="Marketing Manager" class="w-16 h-16 rounded-full object-cover")
                    .info
                        h3(class="font-bold text-lg") {{ $t('marketingManager') }}
                        p(class="text-gray-600 mt-2") {{ $t('marketingManagerDescription') }}
                li(class="flex flex-col md:flex-row items-start md:items-center gap-4")
                    .icon(class="flex-shrink-0")
                        NuxtImg(src="/Fatoosh-Salad.jpg" alt="Operations Manager" class="w-16 h-16 rounded-full object-cover")
                    .info
                        h3(class="font-bold text-lg") {{ $t('operationsManager') }}
                        p(class="text-gray-600 mt-2") {{ $t('operationsManagerDescription') }}
</template>


<style scoped>
.section-board, .section-executive {
@apply bg-white shadow-md rounded-lg p-6;
}

.icon img {
@apply w-16 h-16 rounded-full object-cover;
}
</style>
