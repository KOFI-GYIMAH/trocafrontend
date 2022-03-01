<template>
  <div>
    <!-- -----!!Breadcrumbs!!----- -->
    <IncludesBreadCrumbs title="Login"/>
    <!-- ---x--!!Breadcrumbs!!--x--- -->

    <!-- -----!!Form!!----- -->
    <LoginForm />
    <!-- --x---!!Form!!-x---- -->
  </div>
</template>

<script>
  export default {
    name: 'LogIn',

    layout: 'main',

    auth : 'guest',

    head () {
      return {
        title: 'Log In | Troca LLC.'
      }
    }
  }
</script>