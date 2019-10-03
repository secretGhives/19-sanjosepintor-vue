<template>
  <section id="section--calculator" class="content-wrapper" layout="row" layout-xs="column">
    <div theme="dark" class="left-side"
      layout="column" layout-align="start stretch"
      layout-wrap flex-gt-xs="50" layout-padding>

      <fieldset layout="column" layout-align="center stretch">
        <legend>{{$t("component.calc.area.title")}} 
          <select v-model="unitsType" :input="calculate()" :change="calculate()" aria-label="units">
            <option value="feet">{{$t("component.calc.title.feet")}}</option>
            <option value="meters">{{$t("component.calc.title.meters")}}</option>
          </select>
        </legend>

        <!-- Length -->
        <div class="control input__wrapper">
          <label class="label label-form">{{$t("component.calc.area.length")}}</label>
          <input type="number" class="input input-form" v-model="areaLength" :input="calculate()" :change="calculate()" aria-label="length">
        </div>

        <!-- Width -->
        <div class="control input__wrapper">
          <label class="label label-form">{{$t("component.calc.area.width")}}</label>
          <input type="number" class="input input-form" v-model="areaWidth" :input="calculate()" :change="calculate()" aria-label="width">
        </div>

        <div class="control input__wrapper">
          <label class="label label-form">{{$t("component.calc.area.height")}}</label>
          <input type="number" class="input input-form" v-model="areaHeight" :input="calculate()" :change="calculate()" aria-label="height">
        </div>

        <div class="input__wrapper">
          <label class="label-form">{{$t("component.calc.area.surface_type.title")}} </label>
          <select v-model="surface" :input="calculate()" :change="calculate()" aria-label="surface">
            <option value="smooth">{{$t("component.calc.area.surface_type.smooth")}}</option>
            <option value="textured">{{$t("component.calc.area.surface_type.textured")}}</option>
            <option value="siding">{{$t("component.calc.area.surface_type.siding")}}</option>
          </select>
        </div>
      </fieldset>

      <fieldset layout="column" layout-align="center stretch">
        <legend>{{$t("component.calc.extra.title")}}</legend>

        <div flex="grow" class="input__wrapper">
          <label class="label-form">{{$t("component.calc.extra.paint_quality.title")}}</label>
          <select v-model="quality" :input="calculate()" :change="calculate()" aria-label="quality">
            <option value="luxury">{{$t("component.calc.extra.paint_quality.luxury")}}</option>
            <option value="premium">{{$t("component.calc.extra.paint_quality.premium")}}</option>
            <option value="economy">{{$t("component.calc.extra.paint_quality.economy")}}</option>
          </select>
        </div>

        <div class="input__wrapper">
          <label class="label-form">{{$t("component.calc.extra.coats")}}</label>
          <select v-model="coats" :input="calculate()" :change="calculate()" aria-label="coats">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <!-- <div class="checkbox" v-if="areaWidth > 0 && areaLength > 0">
          <input type="checkbox" id="ceiling" v-model="ceiling" :input="calculate()" :change="calculate()" aria-label="Ceiling"/>
          <label for="ceiling">{{$t("component.calc.extra.ceiling")}} <span class="box"></span></label>
        </div> -->
      </fieldset>

      <fieldset layout="column" layout-align="center stretch" class="right">
        <legend>
          <select v-model="weightType" :input="calculate()" :change="calculate()" aria-label="weight type">
            <option value="gallons">{{$t("component.calc.results.gallons")}}</option>
            <option value="liters">{{$t("component.calc.results.liters")}}</option>
          </select>

          <select v-model="currencyType" :input="calculate()" :change="calculate()" class="currency-type" aria-label="currency type">
            <option value="colones">{{$t("component.calc.results.colones")}}</option>
            <option value="dollars">{{$t("component.calc.results.dollars")}}</option>
          </select>
        </legend>

        {{$t("component.calc.results.area_title")}}
        <h3>
          <span>{{ area }}</span>
          <small v-if="unitsType == 'feet'">{{$t("component.calc.results.sq_feet")}}<sup>2</sup></small>
          <small v-if="unitsType == 'meters'">{{$t("component.calc.results.sq_meters")}}<sup>2</sup></small>
        </h3>

        {{$t("component.calc.results.paint_title")}}
        <h3>
          <span>{{ paint | round }}</span>
          <small v-if="weightType == 'gallons'">{{$t("component.calc.results.gallons")}}</small>
          <small v-if="weightType == 'liters'">{{$t("component.calc.results.liters")}}</small>
        </h3>

        {{$t("component.calc.results.price_title")}}
        <h3>
          <span>{{ cost | round | fixed }}</span>
          <small v-if="currencyType == 'colones'">{{$t("component.calc.results.colones")}}</small>
          <small v-if="currencyType == 'dollars'">{{$t("component.calc.results.dollars")}}</small>
        </h3>
      </fieldset>
    </div>

    <div class="right-side"
      layout="column" layout-align="start center" 
      flex-gt-xs="50" flex-order-xs="-1">

      <fieldset class="disclamer">
        <h2>{{$t("component.calc.title.title")}}</h2>
        
        <p>{{$t("component.calc.disclaimer.p")}}</p>

        <h4>{{$t("component.calc.disclaimer.included.title")}}</h4>
        <p>
          <ul class="styled">
            <li>{{$t("component.calc.disclaimer.included.item_1")}}</li>
            <li>{{$t("component.calc.disclaimer.included.item_2")}}</li>
            <li>{{$t("component.calc.disclaimer.included.item_3")}}</li>
            <li>{{$t("component.calc.disclaimer.included.item_4")}}</li>
          </ul>
        </p>

        <h4>{{$t("component.calc.disclaimer.not_included.title")}}</h4>
        <p>
          <ul class="styled">
            <li>{{$t("component.calc.disclaimer.not_included.item_1")}}</li>
            <li>{{$t("component.calc.disclaimer.not_included.item_2")}}</li>
            <li>{{$t("component.calc.disclaimer.not_included.item_3")}}</li>
          </ul>
        </p>
      </fieldset>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Calculator',
  components: {
    // TopToolbar,
  },
  data: () => ({
    // defining variables
    weightType: 'gallons',
    unitsType: 'feet',
    currencyType: 'colones',
    areaLength: 0,
    areaWidth: 0,
    areaHeight: 0,
    surface: 'smooth',
    surfaceOptions: {
      'siding': 1.8,
      'textured': 1.2,
      'smooth': 1
    },
    ceiling: false,
    coats: 2,
    quality: 'economy',
    qualityOptions: {
      'luxury': 1.8,
      'premium': 1.2,
      'economy': 0.8
    },
    area: 0,
    paint: 0,
    cost: 0
  }),
  filters: {
    round(f) {
      // return Math.floor(f * 10) / 10;
      return Math.ceil(f * 10) / 10;
    },
    fixed(f) {
      return f.toFixed(0)
    }
  },
  methods: {
    calculate() {
    this.area = this.calculateAREA(this.areaLength, this.areaWidth, this.areaHeight, this.coats, this.surfaceOptions[this.surface], this.ceiling);
    this.paint = this.calculatePAINT(this.area, this.qualityOptions[this.quality], this.surfaceOptions[this.surface], this.weightType, this.unitsType);
    this.cost = this.calculateCOST(this.area, this.qualityOptions[this.quality], this.surfaceOptions[this.surface], this.currencyType, this.unitsType);
    },

    // calculate total area
    calculateAREA(length, width, height, coats, surface, ceiling) {
      var ceiling_area;

      if (ceiling) {
        ceiling_area = length * width;
      } else {
        ceiling_area = 0;
      }

      // combine surface area
      var surface_area = height * ( parseInt(length) + parseInt(width) );
      // combine ceiling with surface
      var total_surface_area = ceiling_area + surface_area;
      // combine total area with surface type and coats amount
      var total = total_surface_area * coats;

      return total;
    },

    // calculate paint required
    calculatePAINT(area, quality, surface, weightType, unitsType) {
      // declare paint coverage per gallon in feet
      if (unitsType == 'meters') {
        var paint_coverage = 35;
      } else {
        paint_coverage = 350;
      }
      
      // combine area with paint surface
      var area_surface = area * surface;
      // calculate paint required in gallons
      var paint_required_gallons =  area_surface / paint_coverage;

      if (weightType == 'liters') {
        var paint_required_liters = this.toLITERS(paint_required_gallons);
      }

      return weightType == 'liters' ? paint_required_liters : paint_required_gallons;
    },

    // calculate cost
    calculateCOST(area, quality, surface, currencyType, unitsType) {
      // declare paint coverage per gallon in feet
      if (unitsType == 'meters') {
        var price = 3681.54;
      } else {
        price = 1512.81;
      }

      var price_colones = area * quality * surface * price;

      if (currencyType == 'dollars') {
        var price_dollars = this.toDOLLARS(price_colones);
      }

      return currencyType == 'dollars' ? price_dollars : price_colones;
    },

    // convert feet to meters
    toMETERS(feet) {
      return feet * 0.3048;
    },

    // convert gallons to liters
    toLITERS(gallons) {
      return gallons * 3.785411784;
    },

    // convert colones to dollars
    toDOLLARS(colones) {
      return colones * 0.0018;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

#section--calculator {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) { flex-direction: row; }
  text-align: left;

  .left-side {
    // background: $navy_hue;
    // color: $silver;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    flex: 1 1 100%;
    order: 1;
    padding: 2em 1em;

    fieldset {
      // background: $dark / 1.2;
      border: 1px solid ($navy_hue / 1.2);
    }

    fieldset > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
    }
  }

  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    order: 0;
    flex: 1 1 100%;

    fieldset {
      border: 0;
    }
  }

  h3 {
    color: $navy_hue;
    margin-top: 0.3em;
    font-size: 2em;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    small {
      font-size: 33%;
      text-transform: uppercase;
      margin-left: 1em;
    }
  }
  fieldset {
    padding-top: 2em;
    margin-bottom: 2em;
    &.right { text-align: right; }
  }

  fieldset.disclamer {
    //background: $silver;
    // margin-bottom: 0;
    // p { margin-bottom: 0; }
    ul { margin-top: 0; }
    ul li { width: auto; }
  }
  legend { padding-left: 0.45em; }
  legend select { display: inline-block; }

  /*checkboxes*/
  .checkbox {
    position: relative;
    user-select: none;
    margin-bottom: 10px;
    input { display: none; }
    label {
      position: relative;
      vertical-align: middle;
      cursor: pointer;
      font-weight: 500;
      padding-left: 36px;
    }
    span.box {
      display: inline-block;
      border: 1px solid $silver;
      width: 24px;
      height: 24px;
      vertical-align: middle;
      transition: 0.3s ease;
      position: absolute;
      left: 0; top: 0;
      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 4px;
        height: 16px;
        border-radius: 40px;
        background: $navy_hue;
        transition: all 0.3s ease;
      }
      &:before {
        transform: rotate(45deg) translateY(-6px) translateX(12px) scale(0);
      }
      &:after {
        height: 8px;
        transform: rotate(-45deg) translateY(11px) translateX(-3px) scale(0);
      }
    }
    input:checked {
      + label {
        span.box {
          background: $silver;
          border-color: $silver;
          color: $navy_hue;
          &:before {
            transform: rotate(45deg) translateY(-6px) translateX(12px) scale(1);
          }
          &:after {
            height: 8px;
            transform: rotate(-45deg) translateY(11px) translateX(-3px) scale(1);
          }
        }
      }
    }
  }

  /*inputs*/
  .input__wrapper {
    margin-bottom: 30px;
  }

  .label-form {
    font-weight: 500;
    display: block;
    margin-bottom: 6px;
  }

  input.input-form,
  select,
  textarea {
    border: 1px solid $navy_hue;
    padding: 10px 15px;
    color: $navy_hue;
    background: $white;
    &:focus {
      outline: none;
      border-color: $navy_hue;
    }
  }
  textarea {
    resize: vertical;
    min-height: 117px;
  }
  select {
    height: 45px;
    padding: 9px 12px;
    cursor: pointer;
    &.currency-type { border-left: 0; }
    option {
      font-weight: 300;
    }
  }

}
</style>