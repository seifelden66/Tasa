<template lang="pug">
.section(class="bg-gray-100 py-32 mt-32")
    .contain(class="mx-auto px-4")
        // Page Title
        h1(class="text-3xl md:text-4xl font-bold text-center mb-8 text-[#262c27]") {{ $t('pageTitle4') }}

        // Introductory Content
        p(class="text-lg text-gray-600 text-center mb-12") {{ $t('pageContent4') }}

        // Social Responsibility Activities
        .activities(class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8")
            // Our Offers for Events
            .activity(class="bg-white shadow-md rounded-lg p-6")
                h2(class="text-2xl font-semibold text-[#262c27] mb-4") {{ $t('ourOffersForEvents') }}
                p(class="text-gray-600") {{ $t('ourOffersForEventsDescription') }}

            // Engagement with Local and Global Events
            .activity(class="bg-white shadow-md rounded-lg p-6")
                h2(class="text-2xl font-semibold text-[#262c27] mb-4") {{ $t('engagementWithEvents') }}
                p(class="text-gray-600") {{ $t('engagementWithEventsDescription') }}

        // Sponsorship Section
        .sponsorship(class="bg-white shadow-md rounded-lg p-6 mt-12")
            h2(class="text-2xl font-semibold text-[#262c27] mb-4") {{ $t('sponsorshipTitle') }}
            p(class="text-gray-600 mb-4") {{ $t('sponsorshipDescription') }}

        // Contributions to Cultural and Educational Programs
        .programs(class="bg-white shadow-md rounded-lg p-6 mt-12")
            h2(class="text-2xl font-semibold text-[#262c27] mb-4") {{ $t('contributionsTitle') }}
            ul
                li(class="mb-4")
                    h3(class="font-bold text-lg text-[#262c27]") {{ $t('supportingCulturalPrograms') }}
                    p(class="text-gray-600") {{ $t('supportingCulturalProgramsDescription') }}
                li
                    h3(class="font-bold text-lg text-[#262c27]") {{ $t('contributingToEducationalPrograms') }}
                    p(class="text-gray-600") {{ $t('contributingToEducationalProgramsDescription') }}

        // Closing Content
        p(class="text-lg text-gray-600 text-center mt-12") {{ $t('closingContent') }}
</template>

<script setup>
const { t } = useI18n()
</script>
