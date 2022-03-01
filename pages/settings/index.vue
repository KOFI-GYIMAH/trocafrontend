<template>
  <div>
    <!-- -----!!Breadcrumbs!!----- -->
  <IncludesBreadCrumbs title="Settings"/>
    <!-- ---x--!!Breadcrumbs!!--x--- -->

    <!-- -----!!Contact!!----- -->
    <section class="dashboard section">
      <div class="container">
        <div class="row">

          <!-- -----!!DashBoard SideBar!!----- -->
          <IncludesProfileSideBar />
          <!-- --x---!!DashBoard SideBar!!---x-- -->

          <!-- -----!!Main Forms!!----- -->
          <SettingsForms />
          <!-- ---x--!!Main Forms!!---x-- -->

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
    name: 'ProfileSettings',

    layout: 'main',

    head () {
      return {
        title: 'Profile Settings'
      }
    }
  }
</script>
