<template>
<div>
  <nav-bar
    :home-page="homePage"
    :language="language"
    :static="false"
    @changeLogo="logoUrl = $event"
  />

  <section class="welcome-container">
    <img id="logo-text" :src="logoUrl" alt="Logo" />
    <div class="title-container">
      <h1>{{ $t('welcome-container.title.main')}}</h1>
      <h2>{{ $t('welcome-container.title.sub')}}</h2>        
    </div>
    <img id="logo-icon" src="../assets/svg/logo_big.svg" alt="Logo" />   
    <button @click="open(appLink)">
      <img src="../assets/svg/white-circle.svg" alt="white circle"/>
      {{ $t('welcome-container.btn')}}
    </button>
    <img id="illustration" src="../assets/png/illustration.png" alt="illustration" />
  </section>

  <section class="explanation-container">
    <h2>{{ $t('explanation-container.title')}}</h2>
    <ul>
      <li>
        <img src="../assets/png/how_it_works_1.png" alt="Explanation - step 1"/>
        <h4>{{ $t('explanation-container.step1.title')}}</h4>
        <span>{{ $t('explanation-container.step1.sub1')}}</span>
      </li>

      <li>
        <img src="../assets/png/how_it_works_2.png"  alt="Explanation - step 2"/>
        <h4>{{ $t('explanation-container.step2.title')}}</h4>
        <span>{{ $t('explanation-container.step2.sub1')}}</span>
        <span>{{ $t('explanation-container.step2.sub2')}}</span>
      </li>

      <li>
        <img src="../assets/png/how_it_works_3.png"  alt="Explanation - step 3"/>
        <h4>{{ $t('explanation-container.step3.title')}}</h4>
        <span>{{ $t('explanation-container.step3.sub1')}}</span>
        <span>{{ $t('explanation-container.step3.sub2')}}</span>
      </li>
    </ul>
    <!--
    <button class="read-more">{{ $t('explanation-container.read_btn')}}</button>
    -->
  </section>

  <section class="actions-container">
    <h2>{{ $t('actions-container.title')}}</h2>
    <ul>
      <li class="card">
        <img src="../assets/svg/calendar.svg" class="icon" alt="calendar icon"/>
        <span>{{ $t('actions-container.card1.sub1')}}</span>
        <span>{{ $t('actions-container.card1.sub2')}}</span>
        <button @click="open(calendarLink)">
          <img src="../assets/svg/clock.svg" alt="clock icon"/>
            {{ $t('actions-container.card1.appointment_btn') }} 
        </button>
      </li>

      <li class="card">
        <img src="../assets/svg/hearts.svg" class="icon" alt="hearts icon"/>
        <span>{{ $t('actions-container.card2.sub1')}}</span>
        <span>{{ $t('actions-container.card2.sub2')}}</span>
        <button @click="openShareDialog()" id="share-dialog-button">
          <img src="../assets/svg/share.svg" alt="share icon"/>
          {{ $t('actions-container.card2.share_btn') }}      
        </button>
        <div id="share-dialog" class="share-dialog">
          <img src="../assets/svg/close.svg" 
              alt="x" 
              class="close-icon"
              onclick="window.location='##';"
          />
          <span> {{ $t('actions-container.card2.share_dialog') }}       </span>
          <ul>
            <li>
              <a :href="whatsappLink" data-action="share/whatsapp/share" target="_blank">
                <img src="../assets/svg/whatsapp.svg" alt="whatsapp icon"/>
              </a>
            </li>
            <li>
              <a :href="telegramLink" target="_blank" >
                <img src="../assets/svg/telegram.svg" alt="telegram icon"/>
              </a>
            </li>
            <li>
            <a :href="facebookLink" target="_blank">
              <img src="../assets/svg/facebook.svg" alt="facebook icon"/>
            </a>
          </li>
        </ul>
      </div>
      <a href="##" class="close-popup"></a>
    </li>
  </ul>
  </section>
  <!--
  <section class="sponsors-container">
    <h4>{{$t('sponsors-container.title')}} </h4>
    <ul>
      <li>
        <span>Platinum</span>
        <img src="../assets/svg/sponsor.svg" alt="Platinum sponsor" />
      </li>

      <li>
        <span>Gold</span>
        <img src="../assets/svg/sponsor.svg" alt="Gold sponsor" />
      </li>

      <li>
        <span>Silver</span>
        <img src="../assets/svg/sponsor.svg" alt="Silver sponsor" />
      </li>
    </ul>
  </section>
  -->
  <section class="members-container">
    <h2> {{$t('members-container.title')}} </h2>
    <ul class="special-members">
      
      <li v-for="(n, i) in specialMembersCount" :key="i">
        <div class="memberImageDiv" :style="{ backgroundImage: 'url('+ memberImage(n-1)+')' }">
            <!--<img :src="memberImage(i)" :alt="'member number '+i" />-->
        </div>
        <p>
        {{$t(`members-container.special-members.${n-1}`)}}
        </p>
      </li>
    </ul>

    <ul class="members">        
      <li v-for="index in membersCount" :key="index">
        {{$t(`members-container.members.${index}`)}}
      </li>
    </ul>
  </section>
<!--
<button class="read-more">{{$t('more_details_btn')}}</button>
<main-footer />
-->
</div>
</template>

<script>
import navBar from "../components/nav-bar";
import mainFooter from "../components/main-footer";
import homeStyles from '../design/components/home.scss';

export default {
  created(){
      window.addEventListener('keyup', function(event) {
      if(event.keyCode === 27)
          document.getElementsByClassName('close-popup')[0].click();
    })
  },
  data(){
    return{
      homePage: true,
      logoUrl: require("../assets/svg/logo_text_white_he.svg"),
      specialMembersCount: 18,
      membersCount: 6
    }
  },
  computed: {
    language: function () {
      return this.$route.params.lang;
    },
    appLink: function () {
      switch (this.language) {
        case "he":
          return "https://corona.voca.ai/he/login";
          break;
        case "en":
          return "https://corona.voca.ai/en/login";
          break;
      }
    },
    calendarLink: function () {
        switch (this.language) {
        case "he":
          return "https://calendar.google.com/calendar/r/eventedit?text=%D7%96%D7%9E%D7%9F+%D7%9C%D7%94%D7%A7%D7%9C%D7%99%D7%98+-+%D7%94%D7%A7%D7%95%D7%9C+%D7%9C%D7%98%D7%95%D7%91%D7%94&location=https://corona.voca.ai/he/login&pli=1&sf=true";
          break;
        case "en":
          return "https://calendar.google.com/calendar/r/eventedit?text=VoiceUp+Reminder&location=https://corona.voca.ai/login&sf=true";
          break;
      }
    },
    whatsappLink: function () {
      switch (this.language) {
        case "he":
          return "whatsapp://send?text=גם אני תרמתי את הקול שלי לטובת המאבק בקורונה ואחזור לתרום גם מחר - זה לוקח רק דקה. https://corona.voca.ai/he/login";
          break;
        case "en":
          return "whatsapp://send?text=I donated my voice to fight COVID-19 and I will donate again tomorrow - It only takes a minute. Sign in and record - It is our responsibility https://corona.voca.ai/login";
          break;
      }
    },
    telegramLink: function () {
      switch (this.language) {
        case "he":
          return "https://telegram.me/share/url?url=https://corona.voca.ai/he/login&text=גם אני תרמתי את הקול שלי לטובת המאבק בקורונה ואחזור לתרום גם מחר - זה לוקח רק דקה.";
          break;
        case "en":
          return "https://telegram.me/share/url?url=https://corona.voca.ai/he/login&text=I donated my voice to fight COVID-19 and I will donate again tomorrow - It only takes a minute. Sign in and record - It is our responsibility.";
          break;
      }
    },
    facebookLink: function () {
      switch (this.language) {
        case "he":
          return "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcorona.voca.ai%2Fhe%2Flogin&amp;src=sdkpreparse";
          break;
        case "en":
          return "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcorona.voca.ai%2Fhe%2Flogin&amp;src=sdkpreparse";
          break;
      }
    }
  },
  methods: {
    open: link => {
      window.open(link);
    },
    openShareDialog: () => {
      location.href ="#share-dialog";
      //document.getElementById('share-button').click();
    },
    memberImage(memberNumber) {
      if (typeof memberNumber === 'number'){
        return require(`../assets/members/${memberNumber}.jpeg`);
      } 
    }
  },
  components: {
    navBar,
    mainFooter
  },
};
</script>
