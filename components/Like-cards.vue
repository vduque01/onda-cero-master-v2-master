<template>
  <div>
    <boton class="boton" v-if="!isLiked" 
    :tipo="'primario-oscuro'" 
    :tamaño="'solo_icono_compacto'" 
    :activado="false"
    @click.native="like()">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 13.5C8 13.5 1.75 10 1.75 5.75001C1.75 4.99868 2.01031 4.27057 2.48664 3.68954C2.96297 3.10851 3.62589 2.71046 4.36262 2.56312C5.09935 2.41577 5.86438 2.52823 6.52754 2.88136C7.1907 3.23449 7.71103 3.80648 8 4.50001C8.28897 3.80648 8.8093 3.23449 9.47246 2.88136C10.1356 2.52823 10.9006 2.41577 11.6374 2.56312C12.3741 2.71046 13.037 3.10851 13.5134 3.68954C13.9897 4.27057 14.25 4.99868 14.25 5.75001C14.25 10 8 13.5 8 13.5Z"
          stroke="#DAFF01" stroke-width="2" stroke-linecap="round" />
      </svg>
    </boton>

    <boton class="boton" v-if="isLiked" 
    :tipo="'primario-oscuro'" 
    :tamaño="'solo_icono_compacto'" 
    :activado="true"
    @click.native="dislike()">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.75 4C7.25 3.44979 7.01953 3.09267 6.35579 2.788C5.69205 2.48334 4.94504 2.41111 4.23522 2.58297C3.5254 2.75482 2.89416 3.16075 2.44328 3.73529C1.99241 4.30982 1.74819 5.01947 1.75001 5.74979C1.75001 9.99979 8.00001 13.4998 8.00001 13.4998C8.00001 13.4998 14.25 9.99979 14.25 5.74979C14.2508 5.10645 14.0606 4.47736 13.7035 3.94219C13.3464 3.40703 12.8386 2.98989 12.2442 2.74359C11.6499 2.49729 10.9959 2.43292 10.3649 2.55864C9.73398 2.68436 9.15454 2.9945 8.70001 3.44979L6.70001 5.44979L8.70001 7.44979L7.70001 8.44979"
          stroke="#DAFF01" stroke-width="1.8" stroke-linecap="square" />
      </svg>
    </boton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLiked: false,
    };
  },
  methods: {
    like() {
      this.isLiked = true;
    },
    dislike() {
      this.isLiked = false;
    }
  },
};
</script>

<style  lang="scss">
</style>