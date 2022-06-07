<template>
    <div>
        <Boton class="play" 
            v-if="!isPlay"
            :tipo="'secundario'" 
            :tamaño="'solo_icono_pequeño'"
            :activado="false" 
            @click.native="play()">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 1.875L16.875 10L3.75 18.125V1.875Z" stroke="#A976FF" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
        </Boton>

        <Boton class="play"
            v-if="isPlay"
            :tipo="'secundario'" 
            :tamaño="'solo_icono_pequeño'"
            :activado="true" 
            @click.native="pause()">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.25 3.125H12.1875V16.25V16.875H15.625H16.25V3.125Z" stroke="#9354FF" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M7.8125 3.125H3.75015L3.75 16.8751H7.8125V3.125Z" stroke="#9354FF" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
        </Boton>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Boton from "./Boton.vue";
export default {
    components: { Boton },
    computed: {
        ...mapState({
            podcasts: (state) => state.podcasts,
        }),
    },
    data() {
        return {
            isPlay: false,
        };
    },

    methods: {
        ...mapMutations({
            reproducir: "reproducir",
        }),

        play() {
            this.isPlay = true;
        },
        pause() {
            this.isPlay = false;
        }

    },
};
</script>

<style  lang="scss">
</style>

