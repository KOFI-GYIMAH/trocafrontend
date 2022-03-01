<template>
  <div>
    <!-- -----!!Breadcrumbs!!----- -->
    <IncludesBreadCrumbs title="Favourite Ads"/>
    <!-- ---x--!!Breadcrumbs!!--x--- -->

    <!-- -----!!Fav-Ads!!----- -->
    <FavouriteFavads />
    <!-- -----!!Fav-Ads!!----- -->

    <!-- -----!!Newsletter!!----- -->
    {% include '../includes/newsletter.html' %}
    <!-- --x---!!Newsletter!!---x-- -->
  </div>
</template>

<script>
  export default {
    name: 'FavouriteAds',

    layout: 'main',

    head () {
      return {
        title: 'Favourite Ads | Troca LLC.'
      }
    }
  }
</script>

<style scoped>

</style>