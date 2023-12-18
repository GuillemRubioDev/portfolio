<template>
  <div>
    <div class="container-fluid contenedor-principal">
      <div class="row">
        <div class="col-md-12 col-lg-6">
          <div class="centrar">
            <div class="presentacion">
              <Hola />
              <p class="presentacion_sobre_mi">
                {{ sobreMi }}
              </p>

              <div class="centrar_llaves">
                <div class="llaves">
                  <h1>&#60;/&#62;</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-0 col-lg-6">
          <div class="centrar">
            <div class="presentacion_img presentacion">
              <!-- <img class="img_shadow" src="/src/assets/img/logoGRVDEV22.png" /> -->
              <cubo-logo />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Hola from "./Hola.vue";
import CuboLogo from "../CuboLogo.vue";
import Weave from "../Weave.vue";
</script>

<script >
export default {
  data() {
    return {
      sobreMi:
        "Desarrollador web full stack. Abierto a aprender cada día. Un apasionado de mi trabajo.",
    };
  },
};
</script>

<style scoped>
.weave {
  opacity: 20%;
  z-index: -10;
}
.contenedor-principal {
  padding-top: 200px;
  z-index: 10;
  background-image: url("/src/assets/img/weave.svg");
  background-repeat: no-repeat;
  background-size: auto;
  background-size: 100vw;
}
.container {
  display: flex;
}
.centrar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 15%;
  padding-top: 5%;
  padding-bottom: 5%;
}
.colorPrimario {
  color: #e43f5a;
}
.centrar_llaves {
  width: 100%;
  text-align: start;
}
.llaves {
  color: #e43f5a;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
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
    opacity: 0%;
    color: #e43f5a;
  }
  99% {
    color: #e43f5a;
  }
  100% {
    color: #e43f5a;
  }
}

.presentacion {
  width: 100%;
  overflow: visible !important;
  animation: aparecer 3.5s;
}
@keyframes aparecer {
  0% {
    top: -800px;

    opacity: 0%;
  }
  49% {
  }
  50% {
  }
  99% {
  }
  100% {
    top: 0px;
    opacity: 100%;
  }
}

.presentacion_container {
  width: 90% !important;
  height: 90vh;
  max-width: 1160px;
  margin: auto;
  display: grid;
  grid-template-columns: 55% 45%;
  align-items: center;
}
.presentacion_content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.presentacion_img img {
  padding: 15%;
  width: 100%;
  animation: moverLogo 3.5s infinite;
}
@keyframes moverLogo {
  0% {
    transform: rotate(0deg);
  }
  49% {
  }
  50% {
    transform: rotate(3deg);
  }
  99% {
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
