<template>
  <div class="col-lg-3 col-md-4 col-12">
    <div class="dashboard-sidebar">
      <div class="user-image">
        <img src="~assets/images/dashboard/user-image.jpg" alt="#">
        <h3> {{ loggedInUser.first_name + ' ' + loggedInUser.last_name }}
          <span><NuxtLink :to="{ name: 'settings' }">@{{ loggedInUser.last_name }}</NuxtLink></span>
        </h3>
      </div>

      <div class="dashboard-menu">
        <ul>
          <li><NuxtLink :to="{ name: 'dashboard' }"><i class="fas fa-tachometer-alt"></i> Dashboard</NuxtLink></li>
          <li><NuxtLink :to="{ name: 'settings' }"><i class="fas fa-user-edit"></i> Edit Profile</NuxtLink></li>
          <li><NuxtLink :to="{ name: 'my-ads' }"><i class="fas fa-star"></i> My Ads</NuxtLink></li>
          <li><NuxtLink :to="{ name: 'favourite-ads' }"><i class="fas fa-heart"></i> Favourite Ads</NuxtLink></li>
          <li><NuxtLink :to="{ name: 'post-ad' }" class="active"><i class="fas fa-plus"></i> Post An Ad</NuxtLink></li>
          <li><NuxtLink :to="{ name: 'chat' }"><i class="fas fa-comments"></i> Messages</NuxtLink></li>
          <li><NuxtLink :to="{ name: 'close-account' }"><i class="fas fa-times"></i> Close account</NuxtLink></li>
        </ul>
        <div class="button">
          <a class="btn" href="#" @click="logout"><i class="fas fa-sign-out-alt"></i> Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'ProfileSideBar',

    methods: {
      async logout() {
        await this.$auth.logout();

        this.$toasted.global.defaultSuccess({
          msg: 'Logout successful!'
        })
      },
    },

    computed: {
      ...mapGetters(
        [
          'loggedInUser'
        ]
      )
    }
  }
</script>

<style scoped>
  .dashboard-sidebar {
    background: var(--primaryColor)
  }

  .dashboard-sidebar .user-image {
    position: relative;
    padding: 30px;
    border-bottom: 1px solid var(--lightGreen);
    padding-left: 100px;
    padding-bottom: 40px
  }

  .dashboard-sidebar .user-image img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    position: absolute;
    left: 30px;
    top: 30px
  }

  .dashboard-sidebar .user-image h3 {
    font-size: 15px;
    font-weight: 600;
    color: var(--white);
    margin-top: 5px
  }

  .dashboard-sidebar .user-image h3 span {
    display: block;
    margin-top: 3px
  }

  .dashboard-sidebar .user-image h3 span a {
    font-weight: 400;
    color: var(--lightGray);
    font-size: 15px
  }

  .dashboard-sidebar .user-image h3 span a:hover {
    color: var(--lightGreen)
  }

  .dashboard-sidebar .dashboard-menu {
    padding: 30px 0
  }

  .dashboard-sidebar .dashboard-menu ul li {
    display: block;
    margin-bottom: 15px
  }

  .dashboard-sidebar .dashboard-menu ul li:last-child {
    margin: 0
  }

  .dashboard-sidebar .dashboard-menu ul li a {
    color: var(--lightGray);
    font-weight: 500;
    font-size: 15px;
    display: block;
    position: relative;
    padding: 6px 30px
  }

  .dashboard-sidebar .dashboard-menu ul li a i {
    display: inline-block;
    margin-right: 10px;
    font-size: 15px;
    position: relative;
    top: 1px;
    color: var(--lightGreen)
  }

  .dashboard-sidebar .dashboard-menu ul li:last-child a i {
    color: var(--red)
  }

  .dashboard-sidebar .dashboard-menu ul li a::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 5px;
    border-radius: 0 3px 3px 0;
    background: var(--lightGreen);
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all .4s ease;
    transition: all .4s ease
  }

  .dashboard-sidebar .dashboard-menu ul li a.active {
    color: var(--lightGreen)
  }

  .dashboard-sidebar .dashboard-menu ul li a.active::before {
    opacity: 1;
    visibility: visible
  }

  .dashboard-sidebar .dashboard-menu ul li a:hover {
    color: var(--lightGreen)
  }

  .dashboard-sidebar .dashboard-menu ul li a:hover::before {
    opacity: 1;
    visibility: visible
  }

  .dashboard-sidebar .dashboard-menu .button {
    margin-top: 60px;
    padding: 0 30px
  }

  .dashboard-sidebar .dashboard-menu .button .btn {
    background: var(--lightRed);
    color: var(--white);
    padding: 13px 35px;
    font-size: 14px;
    font-weight: 600
  }

  .dashboard-sidebar .dashboard-menu .button .btn:hover {
    color: #fff;
    background: var(--deemRed)
  }
</style>
