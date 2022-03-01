<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="breadcrumbs-content">
            <h1 class="page-title">{{ title }}</h1>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-12">
          <ul class="breadcrumb-nav">
            <li><NuxtLink :to="{ name: 'index' }">Home</NuxtLink></li>
            <li>{{ title }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbs',

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .breadcrumbs {
    position: relative;
    padding-bottom: 45px;
    padding-top: 140px;
    background: #0F1724;
    z-index: 2;
    text-align: left
  }

  .breadcrumbs .breadcrumbs-content {
    position: relative;
    text-align: left
  }

  .breadcrumbs .breadcrumbs-content .page-title {
    font-size: 20px;
    color: var(--lightGreen);
    font-weight: 600;
    position: relative;
    line-height: 50px
  }

  .breadcrumbs .breadcrumbs-content .breadcrumb-nav {
    background: 0 0;
    border-radius: 0;
    margin-bottom: 0;
    padding: 0;
    display: inline-block
  }

  .breadcrumbs .breadcrumb-nav {
    text-align: right
  }

  .breadcrumbs .breadcrumb-nav li {
    display: inline-block;
    position: relative;
    padding-right: 15px;
    margin-right: 15px
  }

  .breadcrumbs .breadcrumb-nav li:after {
    font-family: "Font Awesome 5 Free";
    content: "\f0da";
    font-weight: 900;
    font-size: 20px;
    position: absolute;
    top: -3px;
    right: -7px;
    color: var(--lightGreen)
  }

  .breadcrumbs .breadcrumb-nav li:last-child {
    margin: 0;
    padding: 0
  }

  .breadcrumbs .breadcrumb-nav li:last-child::after {
    display: none
  }

  .breadcrumbs .breadcrumb-nav li,
  .breadcrumbs .breadcrumb-nav li a {
    color: var(--white);
    font-size: 15px;
    font-weight: 500
  }

  .breadcrumbs .breadcrumb-nav li a {
    position: relative
  }

  .breadcrumbs .breadcrumb-nav li a:hover {
    color: var(--lightGreen)
  }

  @media only screen and (min-width:768px) and (max-width:991px) {
    .breadcrumbs {
      padding-top: 120px;
      padding-bottom: 50px
    }

    .breadcrumbs .page-title {
      font-size: 28px
    }

    .breadcrumbs .bread-list {
      margin-top: 8px
    }
  }

  @media only screen and (max-width:767px) {
    .breadcrumbs {
      padding-top: 120px;
      padding-bottom: 50px
    }

    .breadcrumbs .breadcrumbs-content {
      text-align: center
    }

    .breadcrumbs .page-title {
      font-size: 22px;
      line-height: 30px!important
    }

    .breadcrumbs .breadcrumb-nav {
      float: none!important;
      margin-top: 15px;
      text-align: center
    }

    .breadcrumbs .bread-list {
      margin-top: 8px
    }
  }
</style>