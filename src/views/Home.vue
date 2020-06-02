<template>
  <div>
     <meta http-equiv="refresh" content="500">
<!--
<p>{{ $t('message')}}</p>
-->
    <nav-bar :homePage="homePage" @changeLogo="logoUrl = $event"/>

    <section class="welcome-container">
      <img id="logo-text" :src="logoUrl" alt="Logo" />
      <div class="title-container">
        <h1>{{ $t('welcome-container.title.main')}}</h1>
        <h2>{{ $t('welcome-container.title.sub')}}</h2>        
      </div>
      <img id="logo-icon" src="../assets/svg/logo_big.svg" alt="Logo" />   
      <button>
        <img src="../assets/svg/white-circle.svg" alt="white circle"/>
        {{ $t('welcome-container.btn')}}
      </button>
      <img id="illustration" src="../assets/png/illustration.png" alt="illustration" />
    </section>


    <section class="explanation-container">
      <h2>{{ $t('explanation-container.title')}}</h2>
      <ul>
        <li>
          <img src="../assets/png/how_it_works_1.png" />
          <h4>{{ $t('explanation-container.step1.title')}}</h4>
          <span>{{ $t('explanation-container.step1.sub1')}}</span>
          <span>{{ $t('explanation-container.step1.sub2')}}</span>
        </li>

        <li>
          <img src="../assets/png/how_it_works_2.png" />
          <h4>{{ $t('explanation-container.step2.title')}}</h4>
          <span>{{ $t('explanation-container.step2.sub1')}}</span>
          <span>{{ $t('explanation-container.step2.sub2')}}</span>
        </li>

        <li>
          <img src="../assets/png/how_it_works_3.png" />
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
        <img src="../assets/svg/calendar.svg" class="icon"/>
        <span>{{ $t('actions-container.card1.sub1')}}</span>
        <span>{{ $t('actions-container.card1.sub2')}}</span>
        <button @click="calendarClick()">
           <img src="../assets/svg/clock.svg" alt="clock icon"/>
            {{ $t('actions-container.card1.appointment_btn') }} 
        </button>
      </li>

    <li class="card">
        <img src="../assets/svg/hearts.svg" class="icon"/>
        <span>{{ $t('actions-container.card2.sub1')}}</span>
        <span>{{ $t('actions-container.card2.sub2')}}</span>
        <button>
           <img src="../assets/svg/share.svg" alt="share icon"/>
            {{ $t('actions-container.card2.share_btn') }}      
        </button>
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
        <li v-for="index in specialMembersCount" :key="index">
          <img :src="memberImage(index)" :alt="'member number '+index" />
          {{$t(`members-container.special-members.member${index}`)}}
        </li>
      </ul>

      <ul class="members">        
        <li v-for="index in membersCount" :key="index">
          {{$t(`members-container.members.member${index}`)}}
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
  data(){
    return{
      homePage: true,
      logoUrl: require("../assets/svg/logo_text_white_he.svg"),
      specialMembersCount: 14,
      membersCount: 7,
    }
  },
  methods: {
    calendarClick(){      
      let language = this.$route.params.lang;     
      switch (language) {
        case "he":
          window.open("https://calendar.google.com/calendar/r/eventedit?text=%D7%96%D7%9E%D7%9F+%D7%9C%D7%94%D7%A7%D7%9C%D7%99%D7%98+-+%D7%94%D7%A7%D7%95%D7%9C+%D7%9C%D7%98%D7%95%D7%91%D7%94&location=https://corona.voca.ai/he/login&pli=1&sf=true");
          break;
        case "en":
          window.open("https://calendar.google.com/calendar/r/eventedit?text=VoiceUp+Reminder&location=https://corona.voca.ai/login&sf=true");
          break;
      }
    },
    memberImage(memberNumber) {
      return require(`../assets/members/member${memberNumber}.jpeg`);
    }
  },
  components: {
    navBar,
    mainFooter
  },
};
</script>
