<template>
  <article id="booking">
    <section id="section--booking-hero">

      <div class="content-wrapper hero"
        layout="column"
        layout-align-xs="center center"
        layout-align-sm="center start"
        layout-align-md="center start">

        <SiteHeader/>

        <div class="text intro-message" v-show="!message">
          <h2>{{$t("page.booking.hero.title")}}</h2>
          <p>{{$t("page.booking.hero.p_1")}}</p>
          <p>{{$t("page.booking.hero.p_2")}} {{phone}}, {{email}}</p>
        </div>

        <!-- Success message -->
        <div class="text success-message" v-show="message" style="display:none;">
          <img src="/assets/images/goal.svg" class="svg" /> 
          <h2>{{$t("page.booking.hero.success.title")}}</h2>
          <p>{{$t("page.booking.hero.success.p")}} {{phone}}, {{email}}</p>
        </div>
      </div>

      <!-- BG Gradient -->
      <div class="bg-gradient"></div>
    </section>

    <form id="gform" class="content-wrapper" name="quoteForm"
          method="post"
          action="https://script.google.com/macros/s/AKfycbwvVjXFteNsBZkRNCMfIRFMUjAfTjGdsxfrAMeejgMXz3PvUm8/exec" 
          novalidate="true"
          v-show="!message">

      <!-- QUESTION Where would you like painting? -->
      <fieldset>
        <legend>{{$t("page.booking.form.where.title")}}</legend>

        <div class="field">
          <div class="control">
            <div class="radio">
              <input type="radio" id="r_w_home" value="Home" name="locationType" v-model="forma.location_type.selected">
              <label for="r_w_home">{{$t("page.booking.form.where.point_1")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_w_office" value="Office / commercial" name="locationType" v-model="forma.location_type.selected">
              <label for="r_w_office">{{$t("page.booking.form.where.point_2")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_w_rental" value="Rental unit(s)" name="locationType" v-model="forma.location_type.selected">
              <label for="r_w_rental">{{$t("page.booking.form.where.point_3")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_w_other" value="other" name="locationType" v-model="forma.location_type.selected">
              <label for="r_w_other">{{$t("page.booking.form.where.point_4")}}</label>
            </div>
          </div>
        </div>

        <!-- custom when_needed -->
        <div layout="column" class="margin-top" v-show="forma.location_type.selected == 'other'">
          <div class="block control" flex>
            <label class="label label-form">{{$t("page.booking.form.common.tell_more")}}</label>
            <textarea class="textarea" name="otherLocation" v-model="forma.location_type.other" maxlength="693" select-on-focus></textarea>
          </div>
        </div>
      </fieldset>

      <!-- QUESTION How much painting is involved? -->
      <fieldset>
        <legend>{{$t("page.booking.form.how_much.title")}}</legend>

        <div class="field">
          <div class="control">
            <div class="radio">
              <input type="radio" id="r_h_single" value="A single room or project" name="projectSize" v-model="forma.size_of_project">
              <label for="r_h_single">{{$t("page.booking.form.how_much.point_1")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_h_multi" value="Multiple rooms or projects" name="projectSize" v-model="forma.size_of_project">
              <label for="r_h_multi">{{$t("page.booking.form.how_much.point_2")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_h_notsure" value="I'm not sure" name="projectSize" v-model="forma.size_of_project">
              <label for="r_h_notsure">{{$t("page.booking.form.how_much.point_3")}}</label>
            </div>
          </div>
        </div>
      </fieldset>

      <!-- QUESTION What is the approximate square footage of the area(s) to be painted? -->
      <fieldset>
        <legend>{{$t("page.booking.form.how_big.title")}}</legend>

        <div class="field">
          <div class="control">
            <div class="radio">
              <input type="radio" id="r_w_100" value="Less than 100 sq meters" name="approximateArea" v-model="forma.approximate_area">
              <label for="r_w_100">{{$t("page.booking.form.how_big.point_1")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_w_500" value="100 - 500 sq meters" name="approximateArea" v-model="forma.approximate_area">
              <label for="r_w_500">{{$t("page.booking.form.how_big.point_2")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_w_1000" value="500 - 1,000 sq meters" name="approximateArea" v-model="forma.approximate_area">
              <label for="r_w_1000">{{$t("page.booking.form.how_big.point_3")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_w_more" value="More than 1,000 sq meters" name="approximateArea" v-model="forma.approximate_area">
              <label for="r_w_more">{{$t("page.booking.form.how_big.point_4")}}</label>
            </div>
          </div>
        </div>
      </fieldset>

      <!-- QUESTION When do you need painting? -->
      <fieldset>
        <legend>{{$t("page.booking.form.when.title")}}</legend>

        <div class="field">
          <div class="control">
            <div class="radio">
              <input type="radio" id="r_w_flexible" value="I'm flexible" name="timeFrame" v-model="forma.job_timeframe.selected">
              <label for="r_w_flexible">{{$t("page.booking.form.when.point_1")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_w_next" value="In the next few days" name="timeFrame" v-model="forma.job_timeframe.selected">
              <label for="r_w_next">{{$t("page.booking.form.when.point_2")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_w_soon" value="As soon as possible" name="timeFrame" v-model="forma.job_timeframe.selected">
              <label for="r_w_soon">{{$t("page.booking.form.when.point_3")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_w_ondate" value="On one particular date" name="timeFrame" v-model="forma.job_timeframe.selected">
              <label for="r_w_ondate">{{$t("page.booking.form.when.point_4")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_w_othertime" value="Other" name="timeFrame" v-model="forma.job_timeframe.selected">
              <label for="r_w_othertime">{{$t("page.booking.form.when.point_5")}}</label>
            </div>
          </div>
        </div>

        <div layout="column" class="margin-top">
          <div class="control input__wrapper" v-show="forma.job_timeframe.selected == 'On one particular date'">
            <label class="label label-form">{{$t("page.booking.form.when.day")}}</label>
            <input type="date" class="input input-form" v-model="forma.job_timeframe.date">
          </div>

          <!-- custom when_needed -->
          <div class="control" v-show="forma.job_timeframe.selected == 'Other'">
            <label class="label label-form">{{$t("page.booking.form.common.tell_more")}}</label>
            <textarea class="textarea" name="otherTime" v-model="forma.job_timeframe.other" maxlength="693" select-on-focus></textarea>
          </div>
        </div>
      </fieldset>

      <!-- QUESTION Anything else the painter should know? -->
      <fieldset>
        <legend>{{$t("page.booking.form.anything_else.title")}}</legend>

        <div class="field">
          <div class="control">
            <div class="radio">
              <input type="radio" id="r_a_no" value="no" checked name="additionalInfo" v-model="forma.additional_info">
              <label for="r_a_no">{{$t("page.booking.form.anything_else.point_1")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_a_yes" value="yes" name="additionalInfo" v-model="forma.additional_info">
              <label for="r_a_yes">{{$t("page.booking.form.anything_else.point_2")}}</label>
            </div>
          </div>
        </div>

        <!-- custom additional_info -->
        <div layout="column" class="margin-top" v-show="forma.additional_info == 'yes'">
          <div class="block control">
            <label class="label label-form">{{$t("page.booking.form.common.tell_more")}}</label>
            <textarea class="textarea" name="additionalInfoOther" v-model="forma.additional_details" maxlength="693" select-on-focus></textarea>
          </div>
        </div>
      </fieldset>

      <!-- QUESTION How would you like to receive quote? -->
      <fieldset>
        <legend>{{$t("page.booking.form.how_contact.title")}}</legend>

        <div class="field">
          <div class="control">
            <div class="radio">
              <input type="radio" id="r_h_email" value="email" checked name="contactBy" v-model="forma.contact_by.selected">
              <label for="r_h_email">{{$t("page.booking.form.how_contact.point_1")}}</label>
            </div>
            <div class="radio">
              <input type="radio" id="r_h_both" value="both" name="contactBy" v-model="forma.contact_by.selected">
              <label for="r_h_both">{{$t("page.booking.form.how_contact.point_2")}}</label>
            </div>
          </div>
        </div>

        <div class="margin-top" layout="column">
          <!-- Full name -->
          <div class="control input__wrapper">
            <label class="label label-form">{{$t("page.booking.form.how_contact.name")}}</label>
            <input class="input input-form" name="fullName" v-model="forma.full_name" aria-label="full name">
            <!-- <p class="feedback-form">A message here.</p> -->
          </div>

           <!-- Email -->
          <div class="control input__wrapper">
            <label class="label label-form">{{$t("page.booking.form.how_contact.email")}}</label>
            <input class="input input-form" name="email" type="email" v-model="forma.contact_by.email" aria-label="email">
            <p id="email-invalid" class="feedback-form">Email is required.</p>
          </div>

          <!-- custom phone -->
          <div class="control input__wrapper" v-show="forma.contact_by.selected == 'both'">
            <label class="label label-form">{{$t("page.booking.form.how_contact.phone")}}</label>
            <input class="input input-form" type="tel" name="phoneNumber" v-model="forma.contact_by.phone" aria-label="phone number">
            <!-- <p class="feedback-form">A message here.</p> -->
          </div>
        </div>
      </fieldset>

      <!-- BUTTONS -->
      <fieldset>
        <button type="reset" class="md-button md-raised"
          analytics-on="click"
          analytics-event="Form reset"
          ng-click="booking.cancelForm()">{{$t("page.booking.form.button.reset")}}</button>
        <button class="md-button md-raised md-primary" id="btnSubmit"
          ng-disabled="quoteForm.$pristine"
          analytics-on="click"
          analytics-event="Form submitted"
          type="submit">{{$t("page.booking.form.button.submit")}}</button>
      </fieldset>

      <input id="honeypot" type="text" name="honeypot" value="" hidden />
      <input id="language" type="text" name="language" :value="locale == 'en' ? 'English' : 'Spanish'" hidden />

      <!-- <pre>
        <h1>forma</h1>
        {{forma}}
      </pre> -->

      <!-- <pre><h1>quoteForm</h1>
      {{ quoteForm }}</pre> -->

      <!-- <h1>form status</h1>
      forma.$pristine = {{forma.$pristine}}<br />
      forma.$valid = {{forma.$valid}} -->
    </form>
  </article>
</template>

<script>
import SiteHeader from '@/components/basic/SiteHeader'

export default {
  name: 'booking',
  components: {
    SiteHeader
  },
  data: () => ({
    // FORM TEMPLATE
    forma: {
      "size_of_project": "",
      "approximate_area": "",
      "location_type": {
        "selected": "",
        "other": ""
      },
      "job_timeframe": {
        "selected": "",
        "date": "",
        "other": ""
      },
      "additional_info": "",
      "additional_details": "",
      "contact_by": {
        "selected": "",
        "email": "",
        "phone": ""
      },
      "full_name": ""
    },
    // DECLARATIONS
    message: false
  }),
  methods: {
    validEmail(email) { // see:
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
    },

    validateHuman(honeypot) {
      if (honeypot) {  //if hidden form filled up
        // console.log("Robot Detected!");
        return true;
      } else {
        // console.log("Welcome Human!");
      }
    },

    // get all data in form and return object
    getFormData() {
      var form = document.getElementById("gform");
      var elements = form.elements; // all form elements
      var fields = Object.keys(elements).map(function(k) {
        if(elements[k].name !== undefined) {
          return elements[k].name;
        // special case for Edge's html collection
        }else if(elements[k].length > 0){
          return elements[k].item(0).name;
        }
      }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });
      var data = {};
      fields.forEach(function(k){
        data[k] = elements[k].value;
        var str = ""; // declare empty string outside of loop to allow
                      // it to be appended to for each item in the loop
        if(elements[k].type === "checkbox"){ // special case for Edge's html collection
          str = str + elements[k].checked + ", "; // take the string and append
                                                  // the current checked value to
                                                  // the end of it, along with
                                                  // a comma and a space
          data[k] = str.slice(0, -2); // remove the last comma and space
                                      // from the  string to make the output
                                      // prettier in the spreadsheet
        }else if(elements[k].length){
          for(var i = 0; i < elements[k].length; i++){
            if(elements[k].item(i).checked){
              str = str + elements[k].item(i).value + ", "; // same as above
              data[k] = str.slice(0, -2);
            }
          }
        }
      });

      // add form-specific values into the data
      data.formDataNameOrder = JSON.stringify(fields);
      data.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      data.formGoogleSendEmail = form.dataset.email || ""; // no email by default

      // console.log(data);
      return data;
    },

    handleFormSubmit(event) {
      event.preventDefault();           // we are submitting via xhr below
      var data = this.getFormData();         // get the values submitted in the form

      /* OPTION: Remove this comment to enable SPAM prevention, see README.md */
      if (this.validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
        return false;
      }

      if( !this.validEmail(data.email) ) {   // if email is not valid show error
        document.getElementById('email-invalid').style.display = 'block';
        return false;
      } else {
        document.getElementById('btnSubmit').disabled = true;
        document.getElementById('btnSubmit').classList.add('disabled');
        document.getElementById('btnSubmit').innerHTML = "Sending..";
        var url = event.target.action;  //
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            // console.log( xhr.status, xhr.statusText )
            // console.log(xhr.responseText);
            document.getElementById('gform').style.display = 'none'; // hide form
            document.querySelector('.intro-message').style.display = 'none'; // hide intro
            document.querySelector('.success-message').style.display = 'block'; // show thank you
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&')
        xhr.send(encoded);
      }
    },

    loaded() {
      // console.log('contact form submission handler loaded successfully');
      // bind to the submit event of our form
      // console.log('Loaded!!')
      var form = document.getElementById('gform');
      form.addEventListener("submit", this.handleFormSubmit, false);
    },

    // Cancel form
    cancelForm(event) {
      this.message = true;
      // this.forma.setPristine();
      // this.forma = this.oriForma;
      event.target.reset();
      event.preventDefault();
    }
  },
  computed: {
    phone() {
      return this.$store.state.phone
    },
    email() {
      return this.$store.state.email
    },
    locale() {
      return this.$i18n.locale
    }
  },
  mounted(){
    this.loaded()
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

#booking {
  display: flex;
  flex-direction: column;
  text-align: left;

  // HERO
  #section--booking-hero {
    min-height: 600px;
    height: 81vh;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    
    background-image: url('~/assets/images/booking_blur.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 60% top;

    .content-wrapper.hero {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
      align-items: stretch;
      z-index: 1;
    }

    .text {
      margin: 2em;
      @media screen and (min-width: 768px) {
        margin: 3em;
      }
      text-align: left;
    }
    .text.success-message { 
      padding-bottom: 3em;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      img { width: 96px; }
    }
  }

  // FORM
  fieldset {
    border: 0;
    margin: 3em 2em;
    @media screen and (min-width: 768px) {
      margin: 3em 3em;
    }

    .control {
      display: flex;
      flex-direction: column;
    }
  }

  /*radio buttons*/
  .radio {
    margin: 10px 0;
    input {
      display: none;
      &:checked + label:after {
        transform: scale(1);
      }
    }
    label {
      position: relative;
      padding-left: 32px;
      padding-top: 6px;
      cursor: pointer;
      font-weight: 500;
      &:before {
        content: "";
        position: absolute;
        width: 22px;
        height: 22px;
        border: 1px solid darken($silver, 30%);
        border-radius: 50%;
        left: 0;
        top: 0;
      }
      &:after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: 4px;
        left: 4px;
        background: $pink_500;
        border-radius: 50%;
        transform: scale(0);
        transition: 0.3s ease;
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
    height: 42px;
    border: 2px solid darken($silver, 15%);
    // width: 100%;
    padding: 10px 15px;
    border-radius: 3px;
    color: $navy_hue;
    &:focus,
    &.active {
      outline: none;
      border-color: $pink_600;
    }
    &:disabled {
      cursor: not-allowed;
      background: darken($silver, 10%);
      opacity: 0.6;
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
    option {
      font-weight: 300;
    }
  }
  .feedback-form {
    margin-top: 6px;
    color: $pink_500;
    display: none;
  }

}
</style>