<template>
  <div>
	<!-- -----!!Breadcrumbs!!----- -->
  <IncludesBreadCrumbs title="Add Ads"/>
	<!-- ---x--!!Breadcrumbs!!--x--- -->

	<!-- -----!!Item Details!!----- -->
  <AdetailsItemDetails />
	<!-- ---x--!!Item Details!!---x-- -->

	<!-- -----!!Newsletter!!----- -->
  <IncludesNewsletter />
	<!-- --x---!!Newsletter!!---x-- -->
  </div>
</template>

<script>
  export default {
    name: 'AdDetails',

    auth: false,

    layout: 'main',

    head () {
      return {
        title: 'Ad Details | Troca LLC.'
      }
    }
  }
</script>