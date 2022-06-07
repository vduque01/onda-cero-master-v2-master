<template>
  <div>
    <h2>Episodios nuevos</h2>
    <div class="episodios">
      <div class="episodio" v-for="(podcast, i) in podcasts" :key="i">
        <play-home class="play_horizontal" @click.native="reproducir()"></play-home>
        <nuxt-link :to="`/podcasts/${podcast.id}/${podcast.episodios[podcast.episodios.length - 1].id
        }`">
          <card-horizontal :src="podcast.src" :texto1="
            podcast.episodios[podcast.episodios.length - 1].nombre
          " :texto2="podcast.nombre" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations} from "vuex";
export default {
  computed: {
    ...mapState({
      podcasts: (state) => state.podcasts,
    }),
  },
    methods: {
    ...mapMutations({
      reproducir: "reproducir",
    }),
  layout: "otros",
  }
};
</script>

<style lang="scss">
h2 {
  margin-bottom: 8px;
}

.episodio {
  margin-bottom: 16px;
  position: relative;
}

.play_horizontal {
  z-index: 5;
  position: absolute;
  right: 8px;
  top: 8px;
}
</style>
