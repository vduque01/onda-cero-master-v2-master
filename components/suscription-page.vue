<template>
<div>
    <boton
      class="boton_sub_podcast"
      v-if="!isSub"
      :tipo="'primario'"
      :tamaño="'pequeño'"
      :activado="false"
      @click.native="sub()"
    > SUSCRIBIRSE
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 8H13.5" stroke="#325340" stroke-width="1.8" stroke-linecap="square" stroke-linejoin="round" />
            <path d="M8 2.5V13.5" stroke="#325340" stroke-width="1.8" stroke-linecap="square" stroke-linejoin="round" />
          </svg>
    </boton>
    <boton
      class="boton_sub_podcast"
      v-if="isSub"
      :tipo="'primario'"
      :tamaño="'pequeño'"
      :activado="true"
      @click.native="unsub()"
    > SUSCRITO
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 8H13.5" stroke="#DAFF01" stroke-width="1.8" stroke-linecap="square" stroke-linejoin="round" />
          </svg>
    </boton>
</div>
</template>

<script>
export default {
  data() {
    return {
      isSub: false,
    };
  },
  methods: {
    sub() {
      this.isSub = true;
    },
    unsub() {
      this.isSub = false;
    }
  },
};
</script>

<style  lang="scss">
</style>