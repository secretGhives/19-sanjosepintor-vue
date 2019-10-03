<template>
  <section id="section--exterior-steps" class="content-wrapper" layout="row" layout-xs="column" layout-wrap>
    <div class="head-text" flex-xs="grow">
      <h3>{{$t("component.exterior_steps.title")}}</h3>
      <p>{{$t("component.exterior_steps.p_1")}}</p>
      <p>{{$t("component.exterior_steps.p_2")}}</p>
      <p>{{$t("component.exterior_steps.p_3")}}</p>
      <p>{{$t("component.exterior_steps.p_4")}}</p>
      <p>{{$t("component.exterior_steps.p_5")}}</p>
      <p>{{$t("component.exterior_steps.p_6")}}</p>
    </div>

    <div class="steps" 
      layout="row" layout-xs="column"
      layout-align-xs="center center"
      layout-align-gt-xs="space-between start"
      layout-wrap>
      <div class="step" layout="row">
        <img hide-xs class="svg" src="/assets/images/surface-wash.svg" alt="surface wash">
        <div class="text">
          <h4>{{$t("component.exterior_steps.wash.title")}}</h4>
          <p>{{$t("component.exterior_steps.wash.p")}}</p>
        </div>
      </div> <!-- End of Step -->

      <div class="step" layout="row">
        <img hide-xs class="svg" src="/assets/images/design-tool.svg" alt="surface preparation">
        <div class="text">
          <h4>{{$t("component.exterior_steps.preparation.title")}}</h4>
          <p>{{$t("component.exterior_steps.preparation.p")}}</p>
        </div>
      </div> <!-- End of Step -->

      <div class="step" layout="row">
        <img hide-xs class="svg" src="/assets/images/paint-roller_6.svg" alt="paint application">
        <div class="text">
          <h4>{{$t("component.exterior_steps.paint.title")}}</h4>
          <p>{{$t("component.exterior_steps.paint.p")}}</p>
        </div>
      </div> <!-- End of Step -->

      <div class="step" layout="row">
        <img hide-xs class="svg" src="/assets/images/broom.svg" alt="clean up">
        <div class="text">
          <h4>{{$t("component.exterior_steps.cleanup.title")}}</h4>
          <p>{{$t("component.exterior_steps.cleanup.p")}}</p>
        </div>
      </div> <!-- End of Step -->

      <div class="step" layout="row">
        <img hide-xs class="svg" src="/assets/images/eye.svg" alt="inspection">
        <div class="text">
          <h4>{{$t("component.exterior_steps.inspection.title")}}</h4>
          <p>{{$t("component.exterior_steps.inspection.p")}}</p>
        </div>
      </div> <!-- End of Step -->
    </div> <!-- End of Steps -->
  </section>
</template>

<script>
export default {
  name: 'ExteriorSteps',
  components: {
    // TopToolbar,
  },
  data: () => ({
    //
  })
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

// STEPS
#section--exterior-steps {
  padding-bottom: 3em;
  background-repeat: no-repeat;
  background-position: 50% 33%;
  background-size: contain;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;

  .head-text {
    margin: 2em;
    @media screen and (min-width: 768px) {
      margin: 3em;
    }
    flex: 1 1 auto;
  }

  h3 { 
    margin: 2em 0 auto;
  }

  .steps { 
    margin: 0 1em;
    @media screen and (min-width: 768px) {
      margin: 0 2em;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .step {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-right: 1em;
    min-width: 20%;

    &:last-child { margin-right: 0; }

    img.svg {
      max-width: 50px;
      margin: 1.2em 0.9em;
    }

    .text {
      h4 { margin-bottom: 5px; font-size: 123%; }
      p { margin: 0; }
    }
  }
}



// @media screen and (max-width: 740px) and (orientation: landscape) {}
// @media screen and (max-width: 1099px) and (min-width: 940px) {}
// @media screen and (max-width: 939px) and (min-width: 640px) {}
// @media screen and (max-width: 639px) {}
// @media screen and (min-width: 640px) {}
</style>