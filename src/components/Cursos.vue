<template >
  <div>
    <div data-aos="fade-up">
      <div class="container-fluid principal">
        <div class="card mb-3 micard-body" style="max-width: 1100px">
          <div class="row g-0">
            <div class="col-md-12">
              <div class="card-body micard-body">
                <div class="row g-0">
                  <div class="col-md-6 col-sm-11 titulo-izquierda">
                    <h2 class="sub-title">./Cursos academicos</h2>
                  </div>
                  <div class="col-md-6 col-sm-1 titulo-derecha">
                    <img
                      src="/src/assets/img/fondoAcademico.png"
                      class="iconoAcademico"
                      title="Certificados de cursos"
                    />
                  </div>
                </div>
                <h1 class="title">Desarrollo Aplicaciones Web (DAW)</h1>
                <h2 class="sub-title-h2">2021 - 2022</h2>
                <p class="presentacion_sobre_mi">
                  <a href="https://politecnics.barcelona/">{{ cep }}</a
                  ><br />
                  Desarrollo de aplicaciones web con distintos frameworks tanto
                  de frontend como de backend. Método de aprendizaje basado en
                  proyectos, pudiendo así simular entornos de trabajo reales.
                </p>
                <h1 class="title">
                  Desarrollo Aplicaciones Multiplataforma (DAM)
                </h1>
                <h2 class="sub-title-h2">2019 - 2021</h2>
                <p class="presentacion_sobre_mi">
                  <a href="https://politecnics.barcelona/">{{ cep }}</a
                  ><br />
                  Desarrollo de aplicaciones multiplataforma con distintos
                  lenguajes de programación y frameworks. Método de aprendizaje
                  basado en proyectos pudiendo asi simular entornos de trabajo
                  reales.
                </p>
                <h1 class="title">
                  Realización de audiovisuales y espectáculos multimédia
                </h1>
                <h2 class="sub-title-h2">2008 - 2010</h2>
                <p class="presentacion_sobre_mi">
                  <a href="https://www.lamerce.com/">{{ mareDeDeu }} </a><br />
                  Desarrollo de productos audiovisuales, tanto imágenes de
                  fotografía como videos y efectos especiales. Enseñanzas sobre
                  color y composición en entornos audiovisuales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

export default {
  data() {
    return {
      cep: "Centre d'estudis Politècnics, Barcelona (España)",
      mareDeDeu: "Mare de Déu de la Mercè, Barcelona (España)",
    };
  },
};

</script>

<style scoped>

.titulo-derecha {
  text-align: end;
}
a {
  color: #ffffff;
}
a:hover {
  color: #e43f5a;
}
.iconoAcademico {
  width: 8%;
}
.principal {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.micard-body {
  background-color: rgb(0, 0, 0, 0.3);
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  margin-top: 30px;
}
.sub-title {
  opacity: 50%;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  z-index: 999;
  text-align: start;
}
.sub-title-h2 {
  opacity: 50%;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  z-index: 999;
  text-align: start;
}
.title {
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  z-index: 999;
  text-align: start;
}
</style>
