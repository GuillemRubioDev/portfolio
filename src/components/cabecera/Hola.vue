<template>
  <div>
    <h1 class="title title-animation titulo">
      <span class="letra_hover title"></span>
      <span class="letra_hover title">H</span>
      <span class="letra_hover title">O</span>
      <span class="letra_hover title">L</span>
      <span class="letra_hover title">A</span>
      <span class="letra_hover title">! </span>
      <span class="letra_hover title">S</span>
      <span class="letra_hover title">o</span>
      <span class="letra_hover title">y </span>
      <span class="letra_hover title">G</span>
      <span class="letra_hover title">u</span>
      <span class="letra_hover title">i</span>
      <span class="letra_hover title">l</span>
      <span class="letra_hover title">l</span>
      <span class="letra_hover title">e</span>
      <span class="letra_hover title">m </span>
      <span class="letra_hover title">R</span>
      <span class="letra_hover title">u</span>
      <span class="letra_hover title">b</span>
      <span class="letra_hover title">i</span>
      <span class="letra_hover title">o </span>
      <span class="letra_hover title">w</span>
      <span class="letra_hover title">e</span>
      <span class="letra_hover title">b </span>
      <span class="letra_hover title">d</span>
      <span class="letra_hover title">e</span>
      <span class="letra_hover title">v</span>
      <span class="letra_hover title">e</span>
      <span class="letra_hover title">l</span>
      <span class="letra_hover title">o</span>
      <span class="letra_hover title">p</span>
      <span class="letra_hover title">e</span>
      <span class="letra_hover title">r </span>
      <span class="letra_hover title">;</span>
      <span class="letra_hover title">-</span>
      <span class="sonrisa">)</span>
    </h1>
    <hr class="linea" />
  </div>
</template>

<script setup>
</script>

<style scoped>
.letra_hover:hover {
  color: #e43f5a;
  animation: bubble-anim 1s;
 
 
}

.sonrisa {
  animation: blink 2s infinite;
}
@keyframes blink {
  0% {
    opacity: 100%;
    color: #e43f5a;
  }
  49% {
    color: #e43f5a;
  }
  50% {
    opacity: 10%;
    color: #e43f5a;
  }
  99% {
    color: #e43f5a;
  }
  100% {
    color: #e43f5a;
  }
}

.titulo:hover {
  color: #e43f5a;

}
.title {
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
  z-index: 999;
}
.linea {
  border: 2px solid #ffffff;
  border-radius: 300px/10px;
  height: 0px;
  text-align: center;
}

</style>
