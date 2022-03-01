<template>
  <header class="header navbar-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="nav-inner">
            <nav class="navbar navbar-expand-lg">
              <!-- -----!!Logo!!----- -->
              <NuxtLink :to="{ name: 'index' }" class="navbar-brand">
                Troca<span>LLC.</span>
              </NuxtLink>

              <!-- -----!!Mobile-View Button!!----- -->
              <button
                class="navbar-toggler mobile-menu-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <!-- -----!!Nav-Links!!----- -->
              <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" class="navbar-nav ms-auto">
                  <li class="nav-item"><NuxtLink :to="{ name: 'index' }">Home</NuxtLink></li>
                  <li class="nav-item"><NuxtLink :to="{ name: 'about' }" aria-label="Toggle navigation">About us</NuxtLink></li>
                  <li class="nav-item"><NuxtLink :to="{ name: 'categories' }" aria-label="Toggle navigation">Categories</NuxtLink></li>
                  <li class="nav-item"><NuxtLink :to="{ name: 'contact' }" aria-label="Toggle navigation">Contact us</NuxtLink></li>
                </ul>
              </div>
              <!-- --x---!!Nav-Links!!--x--- -->

              <!-- -----!!Authentication!!----- -->
              <div class="login-button">
                <ul>
                  <div v-if="isAuthenticated">
                    <li><NuxtLink :to="{ name: 'dashboard' }"><i class="fas fa-user"></i> Dashboard</NuxtLink></li>
                    <li><a href="#" @click="logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
                  </div>
                  <div v-else>
                    <li><NuxtLink :to="{ name: 'login' }"><i class="fas fa-sign-in-alt"></i> Login</NuxtLink></li>
                    <li><NuxtLink :to="{ name: 'register' }"><i class="fas fa-user-plus"></i> Register</NuxtLink></li>
                  </div>
                </ul>
              </div>

              <div class="button header-button">
                <NuxtLink :to="{ name: 'post-ad' }" class="btn">Post Ad</NuxtLink>
              </div>
              <!-- ---x--!!Authentication!!---x-- -->
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'TheHeader',

    methods: {
      async logout() {
        await this.$auth.logout();

        this.$toasted.global.defaultSuccess({
          msg: 'Logout successful!'
        })
      }
    },

    computed: {
      ...mapGetters(
        [
          'isAuthenticated'
        ]
      )
    }
  }
</script>

<style scoped>
  .header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background: var(--primaryColor)
  }

  .header .login-button {
    margin-left: 40px
  }

  .header .login-button ul {
    padding: 14px 20px;
    border-radius: 30px
  }

  .header .login-button ul li {
    display: inline-block;
    margin-right: 10px;
    padding-right: 10px;
    height: 100%
  }

  .header .login-button ul li:last-child {
    margin: 0;
    padding: 0
  }

  .header .login-button ul li a {
    color: var(--white);
    font-size: 14px;
    font-weight: 600
  }

  .header .login-button ul li a:hover {
    color: var(--lightGreen)
  }

  .header .login-button ul li a i {
    display: inline-block;
    color: var(--lightGreen);
    margin-right: 4px;
    font-size: 15px;
    font-weight: 600
  }

  /* !!sticky Class Used By JS!! */
  .sticky {
    position: fixed;
    z-index: 99;
    -webkit-box-shadow: 0 20px 50px 0 rgba(0, 0, 0, .05);
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, .05);
    -webkit-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s;
    top: 0
  }

  .navbar-expand-lg .navbar-nav {
    margin-left: auto
  }

  /* .header .navbar .navbar-nav .nav-item a.active {
    color: var(--lightGreen)
  } */

  .sticky .navbar .mobile-menu-btn .toggler-icon {
    background: var(--black)
  }

  .navbar-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    -webkit-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s;
    padding: 0
  }

  .navbar-area.sticky {
    position: fixed;
    z-index: 99;
    -webkit-box-shadow: 0 20px 50px 0 rgba(0, 0, 0, .05);
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, .05);
    -webkit-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s;
    padding: 0 0
  }

  .navbar-area.sticky .toolbar-area {
    display: none
  }

  .navbar {
    padding: 0;
    position: relative;
    -webkit-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s
  }

  .navbar-brand {
    padding: 0;
    color: var(--lightGreen);
    font-weight: 600
  }

  .navbar-brand span {
    color: var(--white)
  }

  .mobile-menu-btn {
    padding: 0
  }

  .mobile-menu-btn:focus {
    text-decoration: none;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .mobile-menu-btn .toggler-icon {
    width: 30px;
    height: 2px;
    background-color: var(--white);
    display: block;
    margin: 5px 0;
    position: relative;
    -webkit-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s
  }

  .mobile-menu-btn.active .toggler-icon:nth-of-type(1) {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 7px
  }

  .mobile-menu-btn.active .toggler-icon:nth-of-type(2) {
    opacity: 0
  }

  .mobile-menu-btn.active .toggler-icon:nth-of-type(3) {
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    top: -7px
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .navbar-collapse {
      position: absolute;
      top: 66px!important;
      left: 0;
      width: 100%;
      background-color: var(--white);
      z-index: 9;
      -webkit-box-shadow: 0 15px 20px 0 rgba(0, 0, 0, .1);
      box-shadow: 0 15px 20px 0 rgba(0, 0, 0, .1);
      padding: 10px 20px;
      max-height: 350px;
      overflow-y: scroll;
      border-top: 1px solid #eee
    }
  }

  @media(max-width:767px) {
    .navbar-collapse {
      position: absolute;
      top: 165%!important;
      left: 0;
      width: 100%;
      background-color: var(--white);
      z-index: 9;
      -webkit-box-shadow: 0 15px 20px 0 rgba(0, 0, 0, .1);
      box-shadow: 0 15px 20px 0 rgba(0, 0, 0, .1);
      padding: 10px 20px;
      max-height: 350px;
      overflow-y: scroll
    }
  }

  .navbar-expand-lg .navbar-nav {
    margin: 0;
    margin-right: auto!important
  }

  .navbar-nav .nav-item {
    z-index: 1;
    position: relative;
    margin-right: 40px
  }

  .navbar-nav .nav-item:last-child {
    margin-right: 0!important
  }

  .navbar-nav .nav-item:hover a {
    color: var(--lightGreen)
  }

  .navbar-nav .nav-item a {
    font-size: 15px;
    color: var(--white);
    -webkit-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s;
    position: relative;
    padding: 38px 0;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 500;
    transition: all .3s ease-out 0s;
    position: relative
  }

  .navbar-nav .nav-item a::after {
    opacity: 0;
    visibility: hidden
  }

  .navbar-nav .nav-item a::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 0%;
    background: var(--lightGreen);
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out
  }

  /* !!Change Active Link Property!! */
  a.nuxt-link-exact-active.nuxt-link-active {
    color: var(--lightGreen);
    font-weight: 600
  }

  .navbar-nav .nav-item a.active:before {
    width: 100%
  }

  .navbar-nav .nav-item:hover a:before {
    width: 100%
  }

  @media only screen and (min-width:992px) and (max-width:1199px) {
    .navbar-nav .nav-item a.dd-menu {
      padding-right: 30px
    }
  }

  .navbar-nav .nav-item a.dd-menu::after {
    content: "\ea58";
    font: normal normal normal 1em/1 "LineIcons";
    position: absolute;
    right: 17px;
    font-size: 10px;
    top: 50%;
    margin-left: 5px;
    margin-top: 0;
    -webkit-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s;
    height: 10px;
    margin-top: -5px
  }

  @media only screen and (min-width:992px) and (max-width:1199px) {
    .navbar-nav .nav-item a.dd-menu::after {
      right: 13px
    }
  }

  @media only screen and (min-width:768px) and (max-width:991px),
  (max-width:767px) {
    .navbar-nav .nav-item a.dd-menu::after {
      top: 16px;
      right: 0;
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg)
    }
  }

  @media only screen and (min-width:768px) and (max-width:991px),
  (max-width:767px) {
    .navbar-nav .nav-item a.collapsed::after {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg)
    }
  }

  @media only screen and (min-width:768px) and (max-width:991px),
  (max-width:767px) {
    .navbar-nav .nav-item {
      margin: 0
    }
    .navbar-nav .nav-item a {
      padding: 12px 16px!important
    }
    .navbar-nav .nav-item a::before {
      display: none
    }
  }

  @media only screen and (min-width:768px) and (max-width:991px),
  (max-width:767px) {
    .navbar-nav .nav-item a {
      color: #051441;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 10px 0
    }
    .navbar-nav .nav-item a::after {
      opacity: 1;
      visibility: visible
    }
  }

  .header-button {
    display: inline-block;
    margin-left: 10px
  }

  .header-button .btn i {
    font-size: 14px;
    display: inline-block;
    margin-right: 5px
  }

  @media only screen and (min-width:991px) and (max-width:1200px) {
    .header .header .login-button {
      margin-left: 20px
    }
    .header .login-button ul {
      padding: 0
    }
    .header .nav-item {
      margin-right: 30px
    }
    .header .nav-item a {
      padding: 32px 0!important
    }
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .header {
      padding: 15px 0
    }

    .navbar-area.sticky {
      padding: 15px 0
   }
  }

  @media only screen and (max-width:767px) {
    .header-button {
      display: none
    }

    .header {
      padding: 20px 0
    }

    .header .add-list-button {
      display: none
    }

    .header .login-button {
      display: none
    }

    .header .navbar-collapse {
      top: 59px!important;
      border-top: 1px solid #eee
    }

    .navbar-area.sticky {
      padding: 20px 0
    }
  }
</style>
