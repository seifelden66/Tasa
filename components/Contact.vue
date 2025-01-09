
<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .contain
        .navBar(:style="$i18n.locale === 'ar' ? 'display:flex; justify-content:right' : 'direction:ltr'")  
                h1 {{$t('contact')}}
        .btm 
            .left
              <!-- google maps -->

            .right 
                .title 
                    h1 contact
                
                    .circle 
                        LogosTwitter
                    .circle 
                        LogosFace/
                    .circle 
                        LogosInsta/
                        
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.div {
    margin: 0 !important;
    background: #f8f8f8;
    padding-top: 7em;
    padding-bottom: 1em;
    .contain {
        .navBar {
        margin-bottom: 2em;
        }
        .btm{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        .left{
            display: flex;
            flex-direction: column;
            gap: 1em;
            .bb{
                display: flex;
                width: 10vw;
                .smoothBoxWhite{
                    background: #12284c;
                    border: none;
                    color: #ffe5c7;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    transition: 300ms;
                    &:hover{
                        background: #0c1d39;
                    }
                }
            }
        .item{
            display: flex;
            flex-direction: column;
            width: 100%;
            input{
                width: 100%;
            }
            textarea{
                width: 100%; 
            }
        }
        }
        .right{
            position: relative;
            background: #12284c;
            color: #ffe5c7;
            padding: 1em;
            border-radius: 10px;
            .btmbtm{
                display: flex;
                flex-direction: column;
                gap: 1em;
                margin-top: 1.7em;
            }
            .social{
                position: absolute;
                bottom: 1.5em;
                left: 1.3em;
                display: flex;
                gap: 0.7em;
                .circle{
                    background:white;
                    color:#262c27;
                    transition: 300ms;
                    &:hover{
                        background: rgb(22, 109, 22);
                        border: none;
                    }
                }
            }
            
        }
        }
    }
}
@media (max-width:768px) {
    .div {
padding-top: 5em;
        .contain {
        
            .btm{
            display: grid;
            grid-template-columns: 1fr ;
            
            .left{
                display: flex;
                flex-direction: column;
                gap: 1em;
            .bb{
                width: 30vw;
            }
            }
            .right{
                .social{
                    margin-top: 1em;
                    position: static;
                }
            }
            
            }
        }
    }
}
</style>
