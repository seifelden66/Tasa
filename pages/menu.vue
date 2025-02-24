<template lang="pug">
div(class="section bg-gray-100 py-32 mt-32")
    div(class="contain mx-auto px-4")
        h1(class="text-3xl md:text-4xl font-bold text-center mb-8 text-[#262c27]") {{ $t('pageTitle3') }}
        p(class="text-lg text-gray-600 text-center mb-12") {{ $t('pageContent3') }}
        div(class="categories flex flex-col gap-12")
            div(class="category flex flex-col md:flex-row items-center gap-6 bg-[#12284c] text-[#ffe5c7]")
                img(src="/main-dishes.jpeg" alt="altText" class="w-full md:w-1/2 h-auto object-cover rounded-md")
                div(class="category-content flex-1 text-center pb-2" dir="auto" :class="{'md:text-left': dir === 'ltr', 'md:text-right': dir === 'rtl'}")
                    h2(class="text-2xl font-semibold mb-4") {{ $t('mainDishes') }}
                    p(class="") {{ $t('mainDishesDescription') }}

            div(class="category flex flex-col md:flex-row-reverse items-center gap-6")
                img(src="/main-dishes.jpeg" alt="altText" class="w-full md:w-1/2 h-auto object-cover rounded-md")
                div(class="category-content flex-1 text-center pb-2" dir="auto" :class="{'md:text-left': dir === 'ltr', 'md:text-right': dir === 'rtl'}")
                    h2(class="text-2xl font-semibold text-[#262c27] mb-4") {{ $t('appetizers') }}
                    p(class="text-gray-600") {{ $t('appetizersDescription') }}
        div(class="sizes bg-white shadow-md rounded-lg p-6 mt-12")
            h2(class="text-2xl font-semibold text-[#262c27] mb-4 text-center") {{ $t('sizesOfDishes') }}
            div(class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6")
                div(class="size-card flex flex-col items-center text-center bg-gray-50 shadow-sm rounded-md p-4")
                    h3(class="font-bold text-lg text-[#262c27] mb-2") {{ $t('regularTasa') }}
                    p(class="text-gray-600 text-sm") {{ $t('regularTasaDescription') }}
                div(class="size-card flex flex-col items-center text-center bg-gray-50 shadow-sm rounded-md p-4")
                    h3(class="font-bold text-lg text-[#262c27] mb-2") {{ $t('tawisa') }}
                    p(class="text-gray-600 text-sm") {{ $t('tawisaDescription') }}
                div(class="size-card flex flex-col items-center text-center bg-gray-50 shadow-sm rounded-md p-4")
                    h3(class="font-bold text-lg text-[#262c27] mb-2") {{ $t('tasaAlHilween') }}
                    p(class="text-gray-600 text-sm") {{ $t('tasaAlHilweenDescription') }}
                div(class="size-card flex flex-col items-center text-center bg-gray-50 shadow-sm rounded-md p-4")
                    h3(class="font-bold text-lg text-[#262c27] mb-2") {{ $t('platters') }}
                    p(class="text-gray-600 text-sm") {{ $t('plattersDescription') }}
</template>
