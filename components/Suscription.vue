<template>
<div>
    <boton
      class="boton"
      v-if="!isSuscribed"
      :tipo="'primario-oscuro'"
      :tamaño="'solo_icono_compacto'"
      :activado="false"
      @click.native="suscribe()"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 8H13.5"
          stroke="#DAFF01"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M8 2.5V13.5"
          stroke="#DAFF01"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    </boton>
    <boton
      class="boton"
      v-if="isSuscribed"
      :tipo="'primario-oscuro'"
      :tamaño="'solo_icono_compacto'"
      :activado="true"
      @click.native="unsuscribe()"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 8H13.5"
          stroke="#DAFF01"
          stroke-width="1.8"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    </boton>
</div>
</template>

<script>
export default {
  data() {
    return {
      isSuscribed: false,
    };
  },
  methods: {
    suscribe() {
      this.isSuscribed = true;
    },
    unsuscribe() {
      this.isSuscribed = false;
    }
  },
};
</script>

<style  lang="scss">
</style>

