<template>
  <div>
    <!-- -----!!Breadcrumbs!!----- -->
  <IncludesBreadCrumbs title="FAQ"/>
    <!-- ---x--!!Breadcrumbs!!--x--- -->
    
    <!-- -----!!FAQ!!----- -->
    <FaqContent/>
    <!-- -----!!FAQ!!----- -->

    <!-- -----!!Newsletter!!----- -->
    <IncludesNewsletter />
    <!-- --x---!!Newsletter!!---x-- -->
  </div>
</template>

<script>
  export default {
    name:  'FAQ',

    auth: false,

    layout: 'main',

    head () {
      return {
        title: 'FAQ | Troca LLC.'
      }
    }
  }
</script>