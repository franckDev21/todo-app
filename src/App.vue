<script setup>
import {ref,onMounted} from 'vue'

const isOpen = ref(false)
const theme  = ref('dark')
let body = null

onMounted(()=>{
  body = document.querySelector('body')
})

const toggleTheme = () => {
  if(theme.value === 'dark') {
    theme.value = 'light'
    body.style.backgroundColor = 'hsl(236, 33%, 92%)'
  }else{
    theme.value = 'dark'
    body.style.backgroundColor = 'hsl(235, 21%, 11%)'
  }
}

</script>
<template>
  <div class="header">
    <img v-if="theme === 'dark'" class="header__img"
         srcset="./assets/bg-desktop-dark.jpg 1440w, ./assets/bg-mobile-dark.jpg 375w "
         src="./assets/bg-desktop-dark.jpg" alt="">
    <img v-if="theme === 'light'" class="header__img"
         srcset="./assets/bg-desktop-light.jpg 1440w, ./assets/bg-mobile-light.jpg 375w "
         src="./assets/bg-desktop-light.jpg" alt="">

    <nav class="nav container">
      <div class="nav__logo">TODO</div>
      <div class="nav__icon" @click="toggleTheme">
        <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
        <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
      </div>
    </nav>

    <form class="header__form container" :class="theme === 'light' ? 'header__form--light':''">
      <input type="checkbox" id="btn" hidden>
      <label for="btn" @click="isOpen = !isOpen">
        <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
      </label>
      <input type="text" placeholder="Create a new todo...">
    </form>

  </div>

  <div class="content ">
    <form class="card container" :class="theme === 'light' ? 'card--light':''">

      <div class="card__field card__field--completed">
        <input type="checkbox" id="btn2" hidden>
        <label for="btn2">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
        </label>
        <div class="text">my toto task 1</div>
        <svg class="croix" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </div>
      <div class="card__field">
        <input type="checkbox" id="btn3" hidden>
        <label for="btn3">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
        </label>
        <div class="text">my toto task 2</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </div>

      <div class="card__field card__field--end">
        <div class="complete">5 items left</div>
        <div class="links">
          <a href="#" class="active">All</a>
          <a href="#">Active</a>
          <a href="#">Completed</a>
        </div>
        <div class="clear">Clear Completed</div>
      </div>
    </form>

    <div class="content__footer container" :class="theme === 'light' ? 'content__footer--light':''">
      <a href="#" class="active">All</a>
      <a href="#">Active</a>
      <a href="#">Completed</a>
    </div>

    <footer>Drag and drop to reorder list</footer>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import './assets/scss/main.scss';

.header{
  @media (min-width: 590px) {
    height: 300px;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content{
  padding: 0 21.600px ;
  &__footer{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .3rem;
    overflow: hidden;
    background-color: $very-dark-desaturated-blue;
    padding: 1rem .5rem;
    & > a{
      display: inline-block;
      margin: 0 1rem;
      font-size: 15px;
      color: $dark-grayish-blue;
      font-weight: bold;
      &.active{
        color: $bright-blue;
      }
    }
    @media (min-width: 590px) {
      display: none;
      height: 0;
      width: 0;
      overflow: hidden;
    }
    &--light{
      background-color: $very-light-gray;
    }
  }

}

footer{
  margin-top: 4rem;
  color: $dark-grayish-blue;
  font-size: 16px;
  margin-bottom: 2rem;
}
</style>
