<template>
  <div class="card">
    <div class="card_img">
      <img :src="src" alt="" />
    </div>
    <div class="card_info">
      <div class="texto1">
        <p class="bold">{{ texto1 }}</p>
      </div>
      <div class="texto2" v-if="!isLista()">
        <p class="pequeño">{{ texto2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tipo", "texto1", "texto2", "src"],
  data() {
    return {
      isSuscribed: false,
      isLiked: false,
    };
  },
  methods: {
    isLista() {
      const isLista = this.tipo == "lista";
      return isLista;
    },
    suscribe() {
      this.isSuscribed = true;
    },
    unsuscribe() {
      this.isSuscribed = false;
    },
    like() {
      this.isLiked = true;
    },
    dislike() {
      this.isLiked = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply relative;
  width: 160px;
  .boton {
    @apply absolute left-2 top-2;
  }
  .card_img {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
    img {
      width: 160px;
      z-index: -1;
      display: block;
      position: relative;
    }
  }
  .card_info {
    max-width: 160px;
    height: 56px;
    .texto1 {
      @apply bg-G7  py-1 px-3;
      width: 160px;
      p {
        @apply text-B1;
        width: 136px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .texto2 {
      @apply bg-P4 py-[2px] px-3;
      display: inline-block;
      p {
        @apply text-P9;
        max-width: 136px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
