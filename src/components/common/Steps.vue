<template>
  <section id="section--steps"  class="content-wrapper" layout="row" layout-xs="column" layout-wrap layout-align="center center">
    <!-- <h3 flex-xs="grow">{{$t("component.steps.title")}}</h3> -->
    <div class="steps" layout="row" layout-xs="column">
      <div class="step" layout="column" layout-xs="row">
        <img class="svg" src="/assets/images/pantone_2.svg" alt="free estimate">
        <div class="text">
          <h4>{{$t("component.steps.estimate.title")}}</h4>
          <p>{{$t("component.steps.estimate.p")}}</p>
        </div>
      </div> <!-- End of Step -->

      <div class="step" layout="column" layout-xs="row">
        <img class="svg" src="/assets/images/design-tool.svg" alt="prepare">
        <div class="text">
          <h4>{{$t("component.steps.preparation.title")}}</h4>
          <p>{{$t("component.steps.preparation.p")}}</p>
        </div>
      </div> <!-- End of Step -->

      <div class="step" layout="column" layout-xs="row">
        <img class="svg" src="/assets/images/paint-roller_6.svg" alt="do the job">
        <div class="text">
          <h4>{{$t("component.steps.job.title")}}</h4>
          <p>{{$t("component.steps.job.p")}}</p>
        </div>
      </div> <!-- End of Step -->

      <div class="step" layout="column" layout-xs="row">
        <img class="svg" src="/assets/images/broom.svg" alt="clean up">
        <div class="text">
          <h4>{{$t("component.steps.cleanup.title")}}</h4>
          <p>{{$t("component.steps.cleanup.p")}}</p>
        </div>
      </div> <!-- End of Step -->
    </div> <!-- End of Steps -->
  </section>
</template>

<script>
export default {
  name: 'Steps',
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
#section--steps {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  user-select: none;

  background-repeat: no-repeat;
  background-position: 50% 33%;
  background-size: contain;

  h3 {
    flex: 1 1 100%;
    text-align: left;
    cursor: default;
    margin: 3em 1em 1em;
    @media screen and (min-width: 768px) {
      margin: 3em 1em 1em;
    }
  }

  .steps {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      margin: 4em 1em 3em;
    }
    margin: 2em 1em 1em;
  }
  .step {
    display: flex;
    flex-direction: row;
    @media screen and (min-width: 768px) {
      flex-direction: column;
      margin-right: 1em;
    }
    align-items: flex-start;
    min-width: 20%;

    &:last-child { margin-right: 0; }

    img.svg {
      max-width: 50px;
      margin: 1.2em 0.9em;
    }

    .text {
      text-align: left;
      cursor: default;
      h4 { margin-bottom: 5px; font-size: 123%; }
      p { margin-top: 0; }
    }
  }
}
</style>