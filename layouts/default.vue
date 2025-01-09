<template>
  <div class="main">
    <Nav class="fixed-nav" />
    <Sidebar />
    <slot class="main-content" />
    <div class="fixed-icons">
      <BagLogo class="icon" />
      <WhatsappLogo class="icon" />
    </div>
    <Footer />
  </div>
</template>

<style>
.main {
  position: relative;
}

.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
}

.fixed-icons {
  position: fixed;
  bottom: 75px;
  right: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 150;
}


.icon {
  width: 60px;
  height: 60px;
}
html[dir="rtl"] .fixed-icons {
  right: auto;
  left: 50px;
}
@media(max-width:768px){
    .fixed-icons{
        right:30px
    }
    .icon{
        width:45px;
        height:45px
    }
    html[dir="rtl"] .fixed-icons {
  right: auto;
  left: 30px;
}
}
</style>
