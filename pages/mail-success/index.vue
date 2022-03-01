<template>
  <div class="maill-success">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="success-content">
            <h1>Congratulations!</h1>
            <h2>Your Mail Sent Successfully</h2>
            <p>Thanks for contacting with us, We will get back to you asap.</p>
            <div class="button">
              <NuxtLink :to="{ name: 'index' }" class="btn">Home</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SuccessMail',

    layout: 'other',

    head () {
      return {
        title: 'Success Mail | Troca LLC.'
      }
    }
  }
</script>

<style scoped>
.maill-success {
  height: 100vh;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto
}

.maill-success .success-content h1 {
  font-size: 40px;
  color: #5830E0;
  margin-bottom: 10px;
  font-weight: 700
}

.maill-success .success-content h2 {
  font-size: 25px;
  margin-bottom: 10px;
  color: #081828
}

.maill-success .success-content p {
  font-weight: 500;
  margin-bottom: 20px
}

.d-table {
  width: 100%;
  height: 100%
}

.d-table {
  display: table!important
}

.d-table-cell {
  vertical-align: middle
}

.d-table-cell {
  display: table-cell!important
}

.d-table {
  width: 100%;
  height: 100%
}

.d-table {
  display: table!important
}

.d-table-cell {
  vertical-align: middle
}

.d-table-cell {
  display: table-cell!important
}

.d-table {
  width: 100%;
  height: 100%
}

.d-table {
  display: table!important
}

.d-table-cell {
  vertical-align: middle
}

.d-table-cell {
  display: table-cell!important
}
@media only screen and (max-width:767px) {
  .maill-success .success-content h1 {
    font-size: 28px!important
  }

  .maill-success .success-content h2 {
    font-size: 18px!important
  }
}
</style>