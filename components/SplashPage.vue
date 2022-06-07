<template>
  <div :class="{ 
      loader: true, 
      fadeout: !isLoading 
      }"><img class="splash_page" src="/splash_page.gif" alt=""></div>
</template>

<script>
export default {
  name: "SplashPage",
  props: ["isLoading"],
};
</script>

<style>
.loader {
  background-color: #DAFF01;
  color: white;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  text-align: center;
  top:0;
  z-index: 2;
  width: 368px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.splash_page {
}

.fadeout {
  animation: fadeout forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
