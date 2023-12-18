<template>
  <div>
    <div data-aos="fade-up">
      <div class="container-fluid principal">
        <div class="card mb-3 micard-body" style="max-width: 1100px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/src/assets/img/yo3.png"
                class="yo"
                title="Imagen mia tratada con photoshop"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body micard-body">
                <h2 class="sub-title">./Sobre mí</h2>
                <h1 class="title">
                  <span class="color-letra">G</span>uillem
                  <span class="color-letra">R</span>ubio
                  <span class="color-letra">V</span>arón
                </h1>
                <p class="presentacion_sobre_mi">
                  {{ descripcion }}
                </p>
                <p class="card-text">
                  <small class="text-muted frase">{{ frase }}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      frase:
        "< Me gustan más los sueños del futuro que la historia del pasado. />",
      descripcion:
        "Hola, soy desarrollador Web Junior, hace unos años decidí cambiar mi vida. Trabajaba en un puesto de trabajo rutinario, el cual no me permitía experimentar la satisfacción de aprender y desarrollar cosas nuevas. Es por eso que a mis 33 años de edad empece un largo camino para llegar a mis objetivos. Empecé cursando el grado superior de DAM (Desarrollo Aplicaciones Multiplataforma), y posteriormente cursé DAW (Desarrollo de Aplicaciones Web). Es en este segundo curso, donde entendí que mi nuevo camino iba a ir más enfocado a las aplicaciones web. Mi objetivo actualmente es encontrar un trabajo en el que pueda aprender y realizar nuevos retos cada día.",
    };
  },
};
</script>

<style scoped>
.frase,
.color-letra {
  color: #e43f5a !important;
}

.micard-body {
  background-color: rgb(0, 0, 0, 0.3);
  height: 100%;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  margin-top: 30px;
}

.yo {
  max-width: 90%;
  transition: 1s;
  margin: 10px;
  image-rendering: pi;
}

.yo:hover {
  transform: scale(110%);
}

.principal {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.sub-title {
  opacity: 50%;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  z-index: 999;
  text-align: start;
}

.title {
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
  z-index: 999;
  text-align: start;
}
</style>
