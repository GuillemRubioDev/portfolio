

<template>
  <div>
    <div class="centrar">
      <div class="cube">
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
        <div class="side"></div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scope>
.centrar {
  width: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  padding-left: 60px;
}
.cube {
  height: 150px;
  width: 150px;
  position: relative;
  transform-style: preserve-3d;
  animation-name: girar;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.side {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4em;
  border: 1px solid #000;
}

.side:nth-child(1) {
  background-image: url("/src/assets/img/cubo150.png");
  transform: translateZ(75px);
}

.side:nth-child(2) {
  background-image: url("/src/assets/img/cubo150.png");
  transform: rotateX(90deg) translateZ(75px);
}

.side:nth-child(3) {
  background-image: url("/src/assets/img/cubo150.png");
  transform: rotateY(90deg) translateZ(75px);
}

.side:nth-child(4) {
  background-image: url("/src/assets/img/cubo150.png");
  transform: translateZ(-75px);
}

.side:nth-child(5) {
  background-image: url("/src/assets/img/cubo150R.png");
  transform: rotateX(90deg) translateZ(-75px);
}

.side:nth-child(6) {
  background-image: url("/src/assets/img/cubo150.png");
  transform: rotateY(90deg) translateZ(-75px);
}

@keyframes girar {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}
</style>