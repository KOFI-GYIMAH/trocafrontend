<template>
  <a href="#" class="scroll-top btn-hover">
    <i class="lni lni-chevron-up">
    </i>
  </a>
</template>

<style scoped>
  .scroll-top {
    width: 45px;
    height: 45px;
    line-height: 45px;
    background: var(--lightGreen);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
    color: var(--white)!important;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 9;
    cursor: pointer;
    -webkit-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s;
    border-radius: 4px
  }

  .scroll-top:hover {
    -webkit-box-shadow: 0 1rem 3rem rgba(35, 38, 45, .15)!important;
    box-shadow: 0 1rem 3rem rgba(35, 38, 45, .15)!important;
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
    background-color: var(--primaryColor)
  }
</style>