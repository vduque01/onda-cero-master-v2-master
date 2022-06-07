<template>
  <div class="main_holder">
    <div class="holder">
      <div class="main">
        <div class="greet">
          <section-name>
            <h1 @click="nuevosEpisodios">Inicio</h1>
          </section-name>
          <p class="grande">Bienvenido, Víctor</p>
        </div>
        <deslizador />
        <div class="trending">
          <div class="section_header">
            <h3>Lo más escuchado</h3>
            <nuxt-link to="/podcasts/trending">
              <boton :tipo="'secundario'" :tamaño="'solo_icono_compacto'">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="#A976FF" stroke-width="1.8" stroke-linecap="square" />
                </svg>
              </boton>
            </nuxt-link>
          </div>

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

        <div class="new_episodes">
          <div class="section_header">
            <h3>Episodios nuevos</h3>
            <nuxt-link to="/podcasts/episodios/nuevos">
              <boton :tipo="'secundario'" :tamaño="'solo_icono_compacto'">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="#A976FF" stroke-width="1.8" stroke-linecap="square" />
                </svg>
              </boton>
            </nuxt-link>
          </div>
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

        <div class="popular_playlists">
          <div class="section_header">
            <h3>Listas populares</h3>
            <nuxt-link to="/playlists/">
              <boton :tipo="'secundario'" :tamaño="'solo_icono_compacto'">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="#A976FF" stroke-width="1.8" stroke-linecap="square" />
                </svg>
              </boton>
            </nuxt-link>
          </div>
          <vue-horizontal :button="false" class="listas">
            <div class="lista" v-for="(playlist, i) in playlists" :key="i">
            <like-cards class="button_like"></like-cards>
              <nuxt-link :to="`/playlists/${playlist.id}`">
                <card-vertical :src="`${playlist.src}`" :tipo="'lista'" :texto1="`${playlist.nombre}`" />
              </nuxt-link>
            </div>
          </vue-horizontal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import VueHorizontal from "vue-horizontal";
import Suscription from "../components/suscription.vue";
export default {
  components: { VueHorizontal, Suscription },
  data() {
    return {
      isLoading: true,
    };
  },
  name: "IndexPage",
  computed: {
    ...mapState({
      podcasts: (state) => state.podcasts,
      playlists: (state) => state.playlists,
      isLoggedIn: (state) => state.isLoggedIn,
    }),
  },
  methods: {
        ...mapMutations({
      reproducir: "reproducir",
    }),
    nuevosEpisodios() {
      for (let i = 0; i < this.podcasts.length; i++) {
        const episodios = this.podcasts[i].episodios;
        const lastEpisode = episodios[episodios.length - 1];
        return lastEpisode;
      }
    },
  },
  created() {
    setTimeout(() => {
      // Cambiar esto
      // if (!this.isLoggedIn) {
      //   this.$router.push("/login");
      // }
      this.isLoading = false;
    }, 2000);
  },
};
</script>


<style lang="scss" scoped>
.grande {
  margin-top: 8px;
}

.section_header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.episodio {
  margin-bottom: 16px;
  position: relative;
}

.trending {
  margin-bottom: 32px;
}

.new_episodes {
  margin-bottom: 32px;
}

.popular_playlists {
  margin-bottom: 32px;
}

.podcast {
  margin-right: 16px;
  position: relative;
}

.lista {
  margin-right: 16px;
  position: relative;
}

.button_sub {
  z-index: 5;
  position: absolute;
  left: 16px;
  top: 16px;
}

.button_like {
  z-index: 5;
  position: absolute;
  left: 16px;
  top: 16px;
}

.play_horizontal {
  z-index: 5;
  position: absolute;
  right: 8px;
  top: 8px;
}
</style>