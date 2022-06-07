<template>
  <div class="card">
    <div class="card_img">
      <img :src="`${src}`" alt="" />
    </div>
    <!-- <slot /> -->
    <div class="card_body">
      <div class="card_info">
        <div class="texto1">
          <p class="bold">{{ texto1 }}</p>
        </div>
        <div class="texto2">
          <p class="pequeño">{{ texto2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["src", "texto1", "texto2"],
  computed: {
    ...mapState({
      isSelectionVisible: (state) => state.isSelectionvisible,
    }),
  },
  // methods: {
  //   ...mapMutations({
  //     reproducir: "reproducir",
  //   }),

  // },
};
</script>

<style lang="scss" scoped>
.card {
  @apply flex bg-B3;
  .card_img {
    img {
      width: 80px;
    }
  }
  .card_body {
    @apply flex p-4;
    align-items: center;
    gap: 16px;
    .card_info {
      @apply flex flex-col;
      .texto1 {
        width: 160px;
        p {
          width: 136px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .texto2 {
        @apply inline-block;
        p {
          max-width: 136px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          @apply text-G7;
        }
      }
    }
  }
}
</style>
