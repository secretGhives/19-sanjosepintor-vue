<template>
  <section id="section--beforeafter" class="content-wrapper">
    <figure :style="'background-image: url(' + after + ')'">
      <div id="handle"></div>
      <div id="divisor" :style="'background-image: url(' + before + ')'"></div>
    </figure>
    <input type="range" min="0" max="100" value="50" id="slider" @input="moveDivisor" aria-label="slider">
  </section>
</template>

<script>
export default {
  name: 'BeforeAfter',
  props: {
    before: String,
    after: String
  },
  components: {
    // TopToolbar,
  },
  data: () => ({
    //
  }),
  computed: {
    divisor() {
      return this.$el.querySelector("#divisor");
    },
    handle() {
      return this.$el.querySelector("#handle");
    },
    slider() {
      return this.$el.querySelector("#slider");
    }
  },
  methods: {
    moveDivisor() {
      this.handle.style.left = this.slider.value+"%";
      this.divisor.style.width = this.slider.value+"%";
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/vars.scss';

#section--beforeafter {
  height: 270px;
  @media screen and (min-width: 768px) { height: 420px; }
  position: relative;
  overflow: hidden;

  figure { 
    position: absolute;
    background-size: cover;
    font-size: 0;
    width: 100%;
    height: 100%;
    margin: 0; 
  }

  #divisor { 
    background-size: cover;
    position: absolute;
    width: 50%; 
    box-shadow: 0 5px 10px -2px rgba(0,0,0,0.3);
    bottom: 0; height: 100%;
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      right: -2px;
      width: 4px;
      height: calc(50% - 25px);
      background: white;
      z-index: 3;
    }
    &::before {
      top: 0;
      box-shadow: 0 -3px 8px 1px rgba(0,0,0,.3);
    }
    &::after {
      bottom: 0;
      box-shadow: 0 3px 8px 1px rgba(0,0,0,.3);
    }
  }
  #handle {
    position: absolute;
    height: 50px;
    width: 50px;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 1;
    
    &::before,
    &::after {
      content: '';
      width: 0;
      height: 0;
      border: 6px inset transparent;
      position: absolute;
      top: 50%;
      margin-top: -6px;
    }
    &::before {
      border-right: 6px solid white;
      left: 50%;
      margin-left: -17px;
    }
    &::after {
      border-left: 6px solid white;
      right: 50%;
      margin-right: -17px;
    }
  }

  input[type=range]{
    -webkit-appearance:none;
    -moz-appearance:none;
    position: absolute;
    top: 0; bottom: 0; left: -25px;
    background-color: transparent;
    width: calc(100% + 50px); 
    z-index: 2;
    
    &:focus,
    &:active {
      border: none;
      outline: none;
    }
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: transparent;
    border: 4px solid white;
    box-shadow: 0 0 8px 1px rgba(0,0,0,.3);
  }
  input[type=range]::-moz-range-track {
    -moz-appearance:none;
    height:15px;
    width: 100%;
    background-color: transparent; 
    position: relative;
    outline: none;    
  }
}

</style>