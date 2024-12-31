<template lang="pug">
.section(class="bg-gray-100 py-32 mt-32")
    .contain(class="mx-auto px-4")
        h1(class="text-3xl md:text-4xl font-bold text-center mb-8 text-[#262c27]") {{ $t('pageTitle2') }}

        p(class="text-lg text-gray-600 text-center mb-12") {{ $t('pageContent2') }}

        .buttons(class="flex flex-col md:flex-row justify-center gap-4")
            a(href="/order" class="bg-green-600 text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition duration-300") {{ $t('orderNow') }}
            a(href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" class="bg-[#25D366] text-white font-semibold text-lg py-3 px-8 rounded-lg shadow-lg hover:bg-green-500 transition duration-300") {{ $t('whatsApp') }}

        .delivery-apps(class="mt-16 text-center")
            h2(class="text-2xl font-semibold text-[#262c27] mb-4") {{ $t('deliveryVia') }}
            ul(class="flex flex-wrap justify-center gap-4")
                li
                    a(href="https://deliveroo.com" target="_blank" rel="noopener noreferrer" class="text-lg text-blue-600 hover:underline") {{ $t('deliveroo') }}
                li
                    a(href="https://jahez.com" target="_blank" rel="noopener noreferrer" class="text-lg text-blue-600 hover:underline") {{ $t('jahez') }}
                li
                    a(href="https://kareem.com" target="_blank" rel="noopener noreferrer" class="text-lg text-blue-600 hover:underline") {{ $t('kareem') }}
                li
                    a(href="https://talabat.com" target="_blank" rel="noopener noreferrer" class="text-lg text-blue-600 hover:underline") {{ $t('talabat') }}
</template>
