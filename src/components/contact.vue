<template>
<div>
  <nav-bar
    :home-page="homePage"
    :language="language"
    :static="true"
    @changeLogo="logoUrl = $event"
  />

  <div class="contact-container" >
      <img id="logo-text" :src="logoUrl" alt="Logo" />
      <div class="header-container">
        <h1>{{ $t('contact.main_title')}}</h1>
        <img src="../assets/svg/heart.svg" alt="heart icon"/>
      </div>

    <div class="main-container"> 
      <span> {{ emailAddress }}</span>
      <!--<span>03.555.5555</span>-->
      <span>{{ $t('contact.sub_title')}}</span>

    <form class="contact-form" @submit.prevent="sendEmail">
      <input type="text" name="fromName" :placeholder="$t('contact.form.name')" required />
      <input type="email" name="fromEmail" :placeholder="$t('contact.form.email')" required />
      <input type="text" name="formSubject" :placeholder="$t('contact.form.subject')" required />
      <textarea name="message" :placeholder="$t('contact.form.content')"></textarea>
      <button type="submit">
        {{ $t('contact.form.send_btn') }}
      </button>
    </form>
    </div>

    <div class="sub-container">

    </div>
  </div>    
</div>
</template>


<script>
import emailjs from "emailjs-com";
import navBar from "../components/nav-bar";
import contactStyle from "../design/components/contact.scss";
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      homePage: false,
      logoUrl: require("../assets/svg/logo_text_white_he.svg"),
      emailAddress: "voiceup.hl@gmail.com"
    };
  },
  created(){
  },
  computed: {
    language: function () {
      return this.$route.params.lang
    }
  },
  methods: {
    showSuccessAlert() {
      switch (this.language) {
        case "he":
          Swal.fire(
            'מעולה!',
            'ההודעה נשלחה בהצלחה',
            'success'
          )
          break;
        case "en":
           Swal.fire(
            'Great!',
            'The message has been sent successfully',
            'success'
          )
          break;
      }
    },
    showErrorAlert() {
      switch (this.language) {
        case "he":
          Swal.fire(
            'מצטערים',
            'קרתה תקלה בזמן שליחת ההודעה.<br/> אפשר לשלוח לנו מייל לכתובת '+this.emailAddress,
            'error'
          )
          break;
        case "en":
           Swal.fire(
            'Sorry',
            'There was a problem with sending the message. <br/> You can send us a mail to the following address - '+this.emailAddress,
            'error'
          )
          break;
      }
    },
    sendEmail(e) {
      emailjs
        .sendForm(
          "gmail",
          "template_5kzNEUem",
          e.target,
          "user_3KurY4mLcaxvpG1rPLi7h"
        )
        .then(
          result => {
            this.showSuccessAlert();
            document.getElementsByClassName("contact-form")[0].reset();
          },
          error => {
            console.log("Failed to send the email", error);
            this.showErrorAlert();
          }
        );
    }
  },
  components: {
    navBar
  }
};
</script>