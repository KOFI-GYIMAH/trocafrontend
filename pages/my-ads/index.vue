<template>
  <div>
  <!-- -----!!Breadcrumbs!!----- -->
  <IncludesBreadCrumbs title="My Ads"/>
  <!-- ---x--!!Breadcrumbs!!--x--- -->

  <!-- -----!!Contact!!----- -->
  <section class="dashboard section">
    <div class="container">
      <div class="row">

        <!-- -----!!DashBoard SideBar!!----- -->
        <IncludesProfileSideBar />
        <!-- --x---!!DashBoard SideBar!!---x-- -->

        <!-- -----!!My Posted Ads!!----- -->
        <MyadsPostedAds />
        <!-- --x---!!My Posted Ads!!--x--- -->

      </div>
    </div>
  </section>
  <!-- -----!!Contact!!----- -->

  <!-- -----!!Newsletter!!----- -->
  <IncludesNewsletter />
  <!-- --x---!!Newsletter!!---x-- -->
  </div>
</template>

<script>
  export default {
    name: 'MyAds',

    layout: 'main',

    head () {
      return {
        title: 'My Ads | Troca LLC.'
      }
    }
  }
</script>
