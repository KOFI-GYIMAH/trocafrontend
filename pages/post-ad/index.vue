<template>
  <div>
    <!-- -----!!Breadcrumbs!!----- -->
  <IncludesBreadCrumbs title="Post Ads"/>
    <!-- ---x--!!Breadcrumbs!!--x--- -->

    <!-- -----!!Post Ad!!----- -->
    <section class="dashboard section">
      <div class="container">
        <div class="row">

          <!-- -----!!DashBoard SideBar!!----- -->
          <IncludesProfileSideBar />
          <!-- --x---!!DashBoard SideBar!!---x-- -->

          <!-- -----!!Ad Details!!----- -->
           <PostadDetails />
          <!-- ---x--!!Ad Details!!--x--- -->

        </div>
      </div>
    </section>
    <!-- --x---!!Post Ad!!--x-- -->
  </div>
</template>

<script>
export default {
  name: 'PostAds',

  layout: 'main',

  head () {
    return {
      title: 'Post An Ad | Traco LLC.'
    }
  }
}
</script>