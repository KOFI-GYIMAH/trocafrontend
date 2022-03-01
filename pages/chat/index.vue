<template>
  <div>
    <!-- -----!!Breadcrumbs!!----- -->
  <IncludesBreadCrumbs title="Messages"/>
    <!-- ---x--!!Breadcrumbs!!--x--- -->

    <!-- -----!!Messages!!----- -->
    <section class="dashboard section">
      <div class="container">
        <div class="row">

          <!-- -----!!DashBoard SideBar!!----- -->
          <IncludesProfileSideBar />
          <!-- --x---!!DashBoard SideBar!!---x-- -->

          <!-- -----!!Chat!!----- -->
          <ChatMessages />
          <!-- ---x--!!Chat!!-x---- -->

        </div>
      </div>
    </section>
    <!-- --x---!!Messages!!---x-- -->

    <!-- -----!!Newsletter!!----- -->
    <IncludesNewsletter />
    <!-- --x---!!Newsletter!!---x-- -->
  </div>
</template>

<script>
  export default {
    name: 'MyMessages',

    layout: 'main',

    head () {
      return {
        title: 'My Messages | Troca LLC.'
      }
    }
  }
</script>

<style scoped>

</style>