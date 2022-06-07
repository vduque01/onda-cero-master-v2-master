<template>
  <div>
    <img class="img_playlist" 
    :src="playlists[playlistNumber].src" alt="">
    <h2>{{ playlists[playlistNumber].nombre }}</h2>
    <div class="creator_container">
      <p class="pequeño bold text-G7">Hecha por {{ playlists[playlistNumber].autor }}</p>
      <p class="pequeño text-G7">{{ playlists[playlistNumber].duracion }}</p>
    </div>
    <p>{{ playlists[playlistNumber].descripcion }}</p>
    <div class="buttons_playlist">
      <play-ep class="boton_play_ep" @click.native="reproducir()"></play-ep>
      <like-playlist class="like"></like-playlist>
    </div>
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
        <div class="episodio" v-for="(episodio, i) in returnEpisodios()" :key="i">
          <play-home class="play_horizontal" @click.native="reproducir()"></play-home>
          <nuxt-link :to="`/podcasts/${episodio.idPrograma}/${episodio.id}`">
            <card-horizontal :src="`/podcasts/${episodio.idPrograma}.jpg`" :texto1="`${episodio.nombre}`"
              :texto2="`${episodio.programa}`" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import CardHorizontal from "../../../components/CardHorizontal.vue";
import LikePlaylist from "../../../components/like-playlist.vue";
export default {
  layout: "playlist",
  components: { CardHorizontal, LikePlaylist },
  data: function () {
    return {
      playlistNumber: this.$route.params.playlist,
    };
  },
  computed: {
    ...mapState({
      podcasts: (state) => state.podcasts,
      playlists: (state) => state.playlists,
    }),
  },
  methods: {
    ...mapMutations({
      reproducir: "reproducir",
    }),
    returnEpisodios() {
      const arrayEpisodiosLista = [];
      const podcastsLista = this.playlists[this.playlistNumber].podcastsLista;
      for (let i = 0; i < podcastsLista.length; i++) {
        const podcastLista = podcastsLista[i];
        arrayEpisodiosLista.push(...podcastLista.episodios);
      }
      return arrayEpisodiosLista;
    },
  },
};
</script>

<style lang="scss">
.img_playlist {
  width: 200px;
  margin-top: 32px;
  margin-bottom: 16px;
}

h2 {
  margin-bottom: 8px;
}

.creator_container {
  display: flex;
  margin-bottom: 16px;
  .pequeño {
    margin-right: 16px;
  }
}

.buttons_playlist {
  display: flex;
  margin-top: 24px;
  margin-bottom: 40px;
}

.like {
  margin-left: 16px;
  width: 48px;
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
    margin-bottom: 16px;
    position: relative;
  }

  .play_horizontal {
  z-index: 5;
  position: absolute;
  right: 8px;
  top: 8px;
}
}
</style>
