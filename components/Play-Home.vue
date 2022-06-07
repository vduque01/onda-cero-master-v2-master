<template>
    <div>
        <Boton class="play_horizontal" 
            v-if="!isPlay"
            :tipo="'primario'" 
            :tamaño="'solo_icono_medio'"
            :activado="false" 
            @click.native="play()">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3L27 16L6 29V3Z" stroke="#325340" stroke-width="1.8" stroke-linecap="round" />
                </svg>
        </Boton>

        <Boton class="play_horizontal"
            v-if="isPlay"
            :tipo="'primario-oscuro'" 
            :tamaño="'solo_icono_medio'"
            :activado="true" 
            @click.native="pause()">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 5H19.5V26V27H25H26V5Z" stroke="#DAFF01" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M12.5 5H6.00024L6 27.0001H12.5V5Z" stroke="#DAFF01" stroke-width="1.8" stroke-linecap="round"/>
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
            isSelectionVisible: (state) => state.isSelectionvisible,
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

