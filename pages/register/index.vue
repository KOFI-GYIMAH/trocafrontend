<template>
  <div>
    <!-- -----!!Breadcrumbs!!----- -->
  <IncludesBreadCrumbs title="Register"/>
    <!-- ---x--!!Breadcrumbs!!--x--- -->

    <!-- -----!!Form!!----- -->
    <RegisterForm />
    <!-- --x---!!Form!!-x---- -->
  </div>
</template>

<script>
  export default {
    name: 'RegisterAnAccount',

    layout: 'main',

    auth : 'guest',

    head () {
      return {
        title: 'Register An Account | Troca LLC.'
      }
    }
  }
</script>
