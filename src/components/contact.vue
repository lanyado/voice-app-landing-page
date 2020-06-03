<template>
  <div>
    <nav-bar :homePage="homePage" :language="language" :static="true" @changeLogo="logoUrl = $event"/>


    <div class="contact-container" >
      <img id="logo-text" :src="logoUrl" alt="Logo" />
      <div class="header-container">
        <h1>{{ $t('contact.main_title')}}</h1>
        <img src="../assets/svg/heart.svg" alt="heart icon"/>
      </div>

      <div class="main-container"> 
        <span>mail@mail.com</span>
        <span>03.555.5555</span>
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
import cintactStyles from "../design/components/contact.scss";

export default {
  data() {
    return {
      homePage: false,
      logoUrl: require("../assets/svg/logo_text_white_he.svg"),
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
    sendEmail: e => {
      emailjs
        .sendForm(
          "gmail",
          "template_5kzNEUem",
          e.target,
          "user_3KurY4mLcaxvpG1rPLi7h"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            console.log("FAILED...", error);
          }
        );
    }
  },
  components: {
    navBar
  }
};
</script>