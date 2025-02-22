<template lang="pug">
.div(:dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'")
    .contain
        .btm 
            .left
              <!-- google maps -->
              iframe(
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.4528540916244!2d48.0457768!3d29.1991471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf91cebe1fab35%3A0xe19019d196a2ee6a!2z2KjYr9mK2YLYqSDZhti22YTZhNmF2YrZhtipICBUYXNhIEV4cHJlc3PhuA!5e0!3m2!1sen!2sus!4v1681948743034!5m2!1sen!2sus"
                width="100%"
                height="400"
                style="border:0; pointer-events: none;"
                allowfullscreen=""
                loading="lazy"
                )
            .right 
                .title 
                    h1 {{$t('contact')}}
                .circle 
                    InstagramLoge/
                .circle 
                    TiktokLogo/
                .circle
                    LogosInsta/
                        
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.circle {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: white 1px solid;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #00000000;
  &:hover {
    cursor: pointer;
  }
}
.div {
  margin: 0 !important;
  background: #f8f8f8;
  padding-top: 7em;
  padding-bottom: 1em;
  .contain {
    .navBar {
      margin-bottom: 2em;
    }
    .btm {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      .left {
        display: flex;
        flex-direction: column;
        gap: 1em;
        .bb {
          display: flex;
          width: 10vw;
          .smoothBoxWhite {
            background: #12284c;
            border: none;
            color: #ffe5c7;
            width: 100%;
            display: flex;
            justify-content: center;
            transition: 300ms;
            &:hover {
              background: #0c1d39;
            }
          }
        }
        .item {
          display: flex;
          flex-direction: column;
          width: 100%;
          input {
            width: 100%;
          }
          textarea {
            width: 100%;
          }
        }
      }
      .right {
        position: relative;
        background: linear-gradient(135deg, #12284c, #0c1d39);
        color: #ffe5c7;
        padding: 2em;
        border-radius: 15px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          h1 {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            color: #ffe5c7;
          }
        }

        .circle {
          color: #12284c;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #ffe5c7;
          height: 50px;
          width: 50px;
          border-radius: 50%;
          background: #ffe5c7;
          margin: 1rem 0;
          transition: all 0.3s ease-in-out;

          &:hover {
            background: #ffe5c7;
            color: #12284c;
            transform: scale(1.1);
            box-shadow: 0 4px 10px rgba(255, 229, 199, 0.5);
            cursor: pointer;
          }
        }

        .social {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .div {
    padding-top: 5em;
    .contain {
      .btm {
        display: grid;
        grid-template-columns: 1fr;

        .left {
          display: flex;
          flex-direction: column;
          gap: 1em;
          .bb {
            width: 30vw;
          }
        }
        .right {
          .social {
            margin-top: 1em;
            position: static;
          }
        }
      }
    }
  }
}
</style>
