<template>
<div>
    <nav-bar />
  <h1>צור קשר</h1>
  <div class="contact-container">

    <span>mail@mail.com</span>
    <span>03.555.5555</span>
    <span>או כתבו לנו -</span>

    <form class="contact-form" @submit.prevent="sendEmail">
      <input type="text" name="fromName" placeholder="שם*" required>
      <input type="email" name="fromEmail" placeholder="מייל*" required>
      <input type="text" name="subject" placeholder="נושא הפנייה*" required>
      <textarea name="message" placeholder="תוכן ההודעה"></textarea>
      <input type="submit" value="שלח">
    </form>
  </div>
</div>

</template>

<script>
import emailjs from 'emailjs-com';
import globalStyles from '../design/global.css';
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