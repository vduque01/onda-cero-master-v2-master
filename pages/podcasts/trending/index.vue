<template>
  <div class="podcasts_container">
    <h2>Lo más escuchado</h2>
    <div class="podcasts">
      <vue-horizontal :button="false" class="podcasts">
        <div class="podcast" v-for="(podcast, i) in podcasts" :key="i">
          <suscription class="button_sub"></suscription>
          <nuxt-link :to="`/podcasts/${podcast.id}`">
            <card-vertical :src="`${podcast.src}`" :tipo="'programa'" :texto1="`${podcast.nombre}`"
              :texto2="`${podcast.autor.join(', ')}`" />
          </nuxt-link>
        </div>
      </vue-horizontal>

    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import VueHorizontal from "vue-horizontal";
export default {
  components: {
    // VueHorizontal
  },
  layout: "otros",
  computed: {
    ...mapState({
      podcasts: (state) => state.podcasts,
    }),
  },
};
</script>

<style lang="scss">
.podcasts_container {
  width: 336px;
  margin-top: 8px;

  .podcasts {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    .podcast {
      margin-bottom: 16px;
      position: relative;
    }
  }
}

.button_sub {
  z-index: 5;
  position: absolute;
  left: 16px;
  top: 16px;
}
</style>
