<template>
    <div class="listas_container">
        <h2>Listas populares</h2>
        <div class="listas">
            <div class="lista" v-for="(playlist, i) in playlists" :key="i">
                <like-cards class="button_like"></like-cards>
                <nuxt-link :to="`/playlists/${playlist.id}`">
                    <card-vertical :src="`${playlist.src}`" :tipo="'lista'" :texto1="`${playlist.nombre}`" />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
// import VueHorizontal from "vue-horizontal";
export default {
    components: {
        // VueHorizontal
    },
    layout: "otros",
    computed: {
        ...mapState({
            playlists: (state) => state.playlists,
        }),
    },
};
</script>

<style lang="scss">
.listas_container {
    width: 336px;
    margin-top: 8px;

    .listas {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
.lista {
    position: relative;
}
.button_like {
  z-index: 5;
  position: absolute;
  left: 16px;
  top: 16px;
}
</style>
