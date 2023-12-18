<template>

  <div class="centrar-titulo" data-aos="fade-up"
     data-aos-offset="500"
     >
  <img src="/src/assets/img/logoGRVDEV22.png" style="width:100px" >

  <h1><span class="letraPrimary">M</span><span class="letraSecondary">UY</span> <span class="letraPrimary">P</span><span class="letraSecondary">RONTO</span></h1>

  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.letraPrimary{
  font-weight: 500;
  font-size: 2.6rem;
  color: #e43f5a;

}
.letraSecondary{
  font-weight: 500;
  font-size: 2.6rem;
  color: #1b1b2f;

}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
.centrar-titulo{
text-align: center;
}



</style>
