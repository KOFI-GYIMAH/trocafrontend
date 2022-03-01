<template>
  <div>
    <!-- -----!!Breadcrumbs!!----- -->
    <IncludesBreadCrumbs title="About us"/>
    <!-- ---x--!!Breadcrumbs!!--x--- -->

    <!-- -----!!About Us!!----- -->
    <AboutOurIdentity />
    <!-- ---x--!!About Us!!---x-- -->

    <!-- -----!!Achievement!!----- -->
    <AboutAchievement />
    <!-- ---x--!!Achievement!!--x--- -->

    <!-- -----!!How It Works!!----- -->
    <IncludesHowItWorks />
    <!-- ---x--!!How It Works!!---x-- -->

    <!-- -----!!Testimonials!!----- -->
    <IncludesTestimonials />
    <!-- ---x--!!Testimonials!!---x-- -->

    <!-- -----!!Newsletter!!----- -->
    <IncludesNewsletter />
    <!-- ---x--!!Newsletter!!---x-- -->
  </div>
</template>

<script>
export default {
  name: 'AboutUs',

  auth: false,

  layout: 'main',

  head () {
    return {
      title: 'About us | Troca LLC.'
    }
  }
}
</script>

<style scoped>

</style>
