<template>
<div>
    <nav-bar />
  <h1>{{ $t('contact.main_title')}}</h1>
  <div class="contact-container">

    <span>mail@mail.com</span>
    <span>03.555.5555</span>
    <span>{{ $t('contact.sub_title')}}</span>

    <form class="contact-form" @submit.prevent="sendEmail">
      <input type="text" name="fromName" :placeholder="$t('contact.form.name')" required>
      <input type="email" name="fromEmail" :placeholder="$t('contact.form.email')" required>
      <input type="text" name="subject" :placeholder="$t('contact.form.subject')" required>
      <textarea name="message" :placeholder="$t('contact.form.content')"></textarea>
      <input type="submit" :value="$t('contact.form.send_btn')">
    </form>
  </div>
</div>
</template>

<script>
import emailjs from 'emailjs-com';
import navBar from "../components/nav-bar";
import cintactStyles from '../design/components/contact.css';


export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('gmail', 'template_5kzNEUem', e.target, 'user_3KurY4mLcaxvpG1rPLi7h')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  },
  components: {
    navBar
  }
}
</script>