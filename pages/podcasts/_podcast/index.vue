<template>
  <div>
    <div class="podcast_img">
      <img :src="podcasts[podcastNumber].src" alt="" />
    </div>
    <div class="main">
      <Category class="category">
        {{ podcasts[podcastNumber].categoria }}
      </Category>

      <h2>{{ podcasts[podcastNumber].nombre }}</h2>
      <div class="interaction_container">
        <suscription-page class="boton_sub_podcast"></suscription-page>
        <Play-Podcast class="play" @click.native="reproducir()"></Play-Podcast>
      </div>
      <p>{{ podcasts[podcastNumber].descripcion }}</p>
      <svg class="arrow_more" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 11L16 21L6 11" stroke="white" stroke-width="1.8" stroke-linecap="square" />
      </svg>

      <div class="todos_ep_container">
        <div class="header_ep">
          <p class="grande bold">Todos los episodios</p>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 11L23 6L28 11" stroke="white" stroke-width="2" stroke-linecap="square" />
            <path d="M23 18V8" stroke="white" stroke-width="2" stroke-linecap="square" />
            <path d="M6 16H15" stroke="white" stroke-width="2" stroke-linecap="square" />
            <path d="M6 8H13" stroke="white" stroke-width="2" stroke-linecap="square" />
            <path d="M6 24H23" stroke="white" stroke-width="2" stroke-linecap="square" />
          </svg>
        </div>
        <div class="episodios">
          <div class="episodio" v-for="(episodio, i) in podcasts[podcastNumber].episodios" :key="i">
            <play-home class="play_horizontal" @click.native="reproducir()"></play-home>
            <nuxt-link :to="`/podcasts/${podcasts[podcastNumber].id}/${episodio.id}`">
              <CardHorizontal :src="podcasts[podcastNumber].src" alt=""
                :texto1="`${podcasts[podcastNumber].episodios[i].nombre}`"
                :texto2="`${podcasts[podcastNumber].episodios[i].duracion}`" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- !! -->
<!-- !! -->
<!-- CREO QUE TIENE QUE HABER ALGO MAL AQUI PORQUE NO FUNCIONA NINGÚN LAYOUT -->
<!-- !! -->
<!-- !! -->

<script>
import { mapState, mapMutations } from "vuex";
import CardHorizontal from "../../../components/CardHorizontal.vue";
import Boton from "../../../components/Boton.vue";
import SuscriptionPage from '../../../components/suscription-page.vue';

export default {
  layout: "podcast",
  components: { CardHorizontal, Boton, SuscriptionPage },
    data: function () {
    return {
      podcastNumber: this.$route.params.podcast,
    };
  },
  computed: {
    ...mapState({
      podcasts: (state) => state.podcasts,
    }),
  },
  methods: {
    ...mapMutations({
      reproducir: "reproducir",
    }),
}};
</script>

<style lang="scss" scoped>
.podcast_img {
  position: absolute;
  top: 0;
  left: 50%;
  width: 368px;
  margin-left: -184px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #192a20 100%);

  img {
    width: 368px;
    z-index: -1;
    display: block;
    position: relative;
  }
}

.main {
  padding-top: 310px;
}

.category {
  margin-bottom: 8px;
}

h2 {
  margin-bottom: 16px;
}

.interaction_container {
  display: flex;
  margin-bottom: 40px;
}

.play {
  margin-left: 16px;
  width: 48px;
  justify-content: center;
}

.arrow_more {
  margin-top: 8px;
  width: 100%;
  justify-content: center;
}

.todos_ep_container {
  margin-top: 40px;
  .header_ep {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .episodio {
    position: relative;
    margin-bottom: 16px;
  }
}

.play_horizontal {
  z-index: 5;
  position: absolute;
  right: 8px;
  top: 8px;
}

.sub {
   &.activado{}
}
</style>
