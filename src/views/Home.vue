<template>
  <div>
     <meta http-equiv="refresh" content="500">

<p>{{ $t('message')}}</p>

    <nav-bar />

    <div class="welcome-container">
      <div class="title-container">
        <h1>{{ $t('welcome-container.title.main')}}</h1>
        <h2>{{ $t('welcome-container.title.sub')}}</h2>        
      </div>
      <img class="logo" src="../assets/svg/logo_big.svg" alt="Logo" />   
      <button>{{ $t('welcome-container.btn')}}</button>
    </div>

    <div class="illustration-container"></div>

    <div class="explanation-container">
      <h3>{{ $t('explanation-container.title')}}</h3>
      <ul>
        <li>
          <img src="../assets/png/how_it_works_3.png" />
          <h4>{{ $t('explanation-container.action1.title')}}</h4>
          <span>{{ $t('explanation-container.action1.sub1')}}</span>
          <span>{{ $t('explanation-container.action1.sub2')}}</span>
        </li>

        <li>
          <img src="../assets/png/how_it_works_2.png" />
          <h4>{{ $t('explanation-container.action2.title')}}</h4>
          <span>{{ $t('explanation-container.action2.sub1')}}</span>
          <span>{{ $t('explanation-container.action2.sub2')}}</span>
        </li>

        <li>
          <img src="../assets/png/how_it_works_1.png" />
          <h4>{{ $t('explanation-container.action3.title')}}</h4>
          <span>{{ $t('explanation-container.action3.sub1')}}</span>
          <span>{{ $t('explanation-container.action3.sub2')}}</span>
        </li>
      </ul>

      <button class="read-more">{{ $t('explanation-container.read_btn')}}</button>
    </div>

    <div class="actions-container">
      <h2>{{ $t('actions-container.title')}}</h2>

      <div class="card">
        <img src="../assets/svg/calendar.svg" class="icon"/>
        <span>{{ $t('actions-container.card2.sub1')}}</span>
        <span>{{ $t('actions-container.card2.sub2')}}</span>
        <button>
         {{$t('actions-container.card2.appointment_btn')}} 
          <img src="../assets/svg/clock.svg" alt="clock icon"/>
        </button>
      </div>
    </div>

    <div class="card">
        <img src="../assets/svg/hearts.svg" class="icon"/>
        <span>{{ $t('actions-container.card1.sub1')}}</span>
        <span>{{ $t('actions-container.card1.sub2')}}</span>
        <button>
          {{ $t('actions-container.card1.share_btn')}}
          <img src="../assets/svg/share.svg" alt="share icon"/>
        </button>
      </div>

    <div class="sponsors-container">
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
    </div>

    <div class="members-container">
      <h5>{{$t('members-container.title')}} </h5>
      <ul class="special-members">
        <li>
          <img src="../assets/jpeg/member_1.jpeg" alt />
          רועי אילן
        </li>
        <li>
          <img src="../assets/jpeg/member_1.jpeg" alt />
          רועי אילן
        </li>
        <li>
          <img src="../assets/jpeg/member_1.jpeg" alt />
          רועי אילן
        </li>
        <li>
          <img src="../assets/jpeg/member_1.jpeg" alt />
          רועי אילן
        </li>
      </ul>

      <ul class="members">
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
        <li>עמית גבסו</li>
      </ul>
    </div>
  <button class="read-more">{{$t('more_details_btn')}}</button>

    <main-footer />
  </div>
</template>

<script>

import navBar from "../components/nav-bar";
import mainFooter from "../components/main-footer";
import globalStyles from '../design/global.css';
import homeStyles from '../design/components/home.css';

export default {
  name: "Home",
  components: {
    navBar,
    mainFooter
  },
  
};
</script>
