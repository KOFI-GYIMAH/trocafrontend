<template>
  <div>
    <!-- -----!!Jumbotron!!----- -->
    <HomeJumbotron />
    <!-- ---x--!!Jumbotron!!---x-- -->

    <!-- -----!!Latest Products!!----- -->
    <HomeLatestProducts />
    <!-- --x---!!Latest Products!!--x--- -->

    <!-- -----!!Notice!!----- -->
    <HomeNotice />
    <!-- ---x--!!Notice!!--x--- -->

    <!-- -----!!Trending Adds!!----- -->
    <HomeTrendingAds />
    <!-- ---x--!!Trending Adds!!--x--- -->

    <!-- -----!!Testimonials!!----- -->
    <IncludesTestimonials />
    <!-- ---x--!!Testimonials!!---x-- -->

    <!-- -----!!How It Works!!----- -->
    <IncludesHowItWorks />
    <!-- ---x--!!How It Works!!---x-- -->

    <!-- -----!!Newsletter!!----- -->
    <IncludesNewsletter />
    <!-- ---x--!!Newsletter!!---x-- -->
  </div>
</template>

<script>
  export default {
    name: 'HomePage',

    auth: false,

    layout: 'main',

    head () {
      return {
        title: 'Troca LLC. - Buy & Sell Anything Here!'
      }
    }
  }
</script>