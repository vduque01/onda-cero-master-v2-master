<template>
  <div class="input_form">
    <slot />
    <input type="text" :placeholder="`${placeholder}`" :class="{
      hasNoIcons: (hasIcon = true),
      hasRightIcon: hasRightIcon == true,
      hasLeftIcon: hasLeftIcon == true,
    
    }" @input="handleInput" />
    <button v-show="isPassword">
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 4.875C3.75 4.875 1.25 10.5 1.25 10.5C1.25 10.5 3.75 16.125 10 16.125C16.25 16.125 18.75 10.5 18.75 10.5C18.75 10.5 16.25 4.875 10 4.875Z"
          stroke="#7943D5" stroke-width="1.8" stroke-linecap="square" />
        <path
          d="M10 13.625C11.7259 13.625 13.125 12.2259 13.125 10.5C13.125 8.77411 11.7259 7.375 10 7.375C8.27411 7.375 6.875 8.77411 6.875 10.5C6.875 12.2259 8.27411 13.625 10 13.625Z"
          stroke="#7943D5" stroke-width="1.8" stroke-linecap="square" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: [
    "isPassword",
    "placeholder",
    "hasNoIcons",
    "hasRightIcon",
    "hasLeftIcon",
    'value'
  ],
  data() {
    return {
      content: this.value
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', this.content)
    }
  }
};
</script>

<style lang="scss" scoped>
.input_form {
  width: 248px;
  height: 48px;
  position: relative;

  >svg {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 12px;
  }

  button {
    position: absolute;
    right: 20px;
    top: 12px;
  }

  ::placeholder {
    color: #AECC01;

    &:focus {
      @apply outline-none bg-P10 text-P5;
    }
  }

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    color: #AECC01;

    @apply bg-B3;
    border-radius: 8px;

    &.hasNoIcons {
      @apply px-5;
    }

    &.hasRightIcon {
      @apply pl-5 pr-[60px];
    }

    &.hasLeftIcon {
      @apply pr-5 pl-[60px];
    }

    &:focus {
      @apply outline-none bg-P10 text-P5;
    }

    ::placeholder {
      @apply text-P5;
    }

    // COMO SE CAMBIA?
    &:focus~svg {
    }
  }

  svg {
    color:#AECC01;
  }    &:focus {
      color: purple;
    }
}
</style>
