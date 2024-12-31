<template lang="pug">
.section(class="bg-gray-100 py-32 mt-32")
    .contain(class="mx-auto px-4")
        h1(class="text-3xl md:text-4xl font-bold text-center mb-8 text-[#262c27]") {{ $t('pageTitle3') }}

        p(class="text-lg text-gray-600 text-center mb-12") {{ $t('pageContent3') }}

        .categories(class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8")
            .category(class="bg-white shadow-md rounded-lg p-6")
                h2(class="text-2xl font-semibold text-[#262c27] mb-4") {{ $t('mainDishes') }}
                p(class="text-gray-600") {{ $t('mainDishesDescription') }}
            .category(class="bg-white shadow-md rounded-lg p-6")
                h2(class="text-2xl font-semibold text-[#262c27] mb-4") {{ $t('appetizers') }}
                p(class="text-gray-600") {{ $t('appetizersDescription') }}

        .sizes(class="bg-white shadow-md rounded-lg p-6 mt-12")
            h2(class="text-2xl font-semibold text-[#262c27] mb-4") {{ $t('sizesOfDishes') }}
            ul
                li(class="mb-4")
                    h3(class="font-bold text-lg text-[#262c27]") {{ $t('regularTasa') }}
                    p(class="text-gray-600") {{ $t('regularTasaDescription') }}
                li(class="mb-4")
                    h3(class="font-bold text-lg text-[#262c27]") {{ $t('tawisa') }}
                    p(class="text-gray-600") {{ $t('tawisaDescription') }}
                li(class="mb-4")
                    h3(class="font-bold text-lg text-[#262c27]") {{ $t('tasaAlHilween') }}
                    p(class="text-gray-600") {{ $t('tasaAlHilweenDescription') }}
                li
                    h3(class="font-bold text-lg text-[#262c27]") {{ $t('platters') }}
                    p(class="text-gray-600") {{ $t('plattersDescription') }}
</template>

