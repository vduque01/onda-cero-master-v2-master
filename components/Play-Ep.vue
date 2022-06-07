<template>
<div>
    <boton
      class="boton_play_ep"
      v-if="!isPlay"
      :tipo="'primario'"
      :tamaño="'pequeño'"
      :activado="false"
      @click.native="play()"
    > PLAY
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 2.5L13.5 9L3 15.5V2.5Z" stroke="#325340" stroke-width="1.8" stroke-linecap="round"/>
      </svg>

    </boton>
    <boton
      class="boton_play_ep"
      v-if="isPlay"
      :tipo="'primario'"
      :tamaño="'pequeño'"
      :activado="true"
      @click.native="pause()"
    > PAUSE
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2.5H9.75V13V13.5H12.5H13V2.5Z" stroke="#DAFF01" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M6.25 2.5H3.00012L3 13.5H6.25V2.5Z" stroke="#E1FF34" stroke-width="1.8" stroke-linecap="round"/>
      </svg> 
    </boton>
</div>
</template>

<script>
export default {
  data() {
    return {
      isPlay: false,
    };
  },
  methods: {
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
