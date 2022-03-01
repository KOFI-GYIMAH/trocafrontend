<template>
  <div>
    <!-- -----!!Breadcrumbs!!----- -->
    <IncludesBreadCrumbs title="Contact us"/>
    <!-- ---x--!!Breadcrumbs!!--x--- -->

    <!-- -----!!Contact!!----- -->
    <ContactForm />
    <!-- ---x--!!Contact!!---x-- -->
  </div>
</template>

<script>
  export default {
    name: 'ContactUs',

    auth: false,

    layout: 'main',

    head () {
      return {
        title: 'Contact us | Troca LLC.',
      }
    }
  }
</script>
