<template lang="pug">
.main
    Hero/
    div( data-aos="fade-up" :data-aos-duration="550" :data-aos-delay="100")
        FeaturedMeals/
    div(data-aos="fade-up" :data-aos-duration="450" :data-aos-delay="200")
        AboutSection(imageSrc="/aboutTasa.jpg"
                    :aboutHeader="'aboutHeader'"
                    :aboutContent="'aboutContent'")/
    div( data-aos="fade-up" :data-aos-duration="550" :data-aos-delay="100")
        Contact/
      
</template>
<style lang="scss" scoped>
.main {
  margin-top: 180px;
}
@media (max-width: 992px) {
  .main {
    margin-top: 100px;
  }
}
</style>
