<template>
  <div>
    <div data-aos="fade-up">
      <div class="container-fluid principal">
        <div class="card mb-3 micard-body" style="max-width: 1100px">
          <div class="row g-0">
            <div class="col-md-12">
              <div class="card-body micard-body">
                <div class="row g-0">
                  <div class="col-md-6 col-sm-11 titulo-izquierda">
                    <h2 class="sub-title">./Lenguajes y otros programas</h2>
                  </div>
                  <div class="col-md-6 col-sm-1 titulo-derecha">
                    <img
                      src="/src/assets/img/fondoHabilidades.png"
                      class="iconoAcademico"
                      title="Habilidades"
                      alt="Habilidades"
                    />
                  </div>
                </div>

                <h1 class="title">Backend</h1>
                <div class="row row-cols-md-3 row-cols-xl-7 row-cols-sm-7">
                  <div class="col" data-aos="zoom-in">
                    >
                    <img
                      src="../assets/img/imgSkills/java.png"
                      class="svgSkills"
                      title="Java"
                      alt="Java"
                    />
                  </div>
                 <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/c++.png"
                      class="svgSkills"
                      title="C++"
                      alt="C++"
                    />
                  </div>
                  <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/csharp.png"
                      class="svgSkills"
                      title="C#"
                      alt="C#"
                    />
                  </div>

                 <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/php.png"
                      class="svgSkills"
                      title="PHP"
                      alt="PHP"
                    />
                  </div>
                  <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/node.png"
                      class="svgSkills"
                      title="Node JS"
                      alt="Node JS"
                    />
                  </div>
                  <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/laravel.png"
                      class="svgSkills"
                      title="Laravel"
                      alt="Laravel"
                    />
                  </div>
                </div>

                <h1 class="title">Frontend</h1>
                <div class="row row-cols-md-3 row-cols-xl-7 row-cols-sm-7">
                  <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/js.png"
                      class="svgSkills"
                      title="Javascript"
                      alt="Javascript"
                    />
                  </div>
                 <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/vue.png"
                      class="svgSkills"
                      title="Vue"
                      alt="Vue"
                    />
                  </div>
                  <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/react.png"
                      class="svgSkills"
                      title="React"
                      alt="React"
                    />
                  </div>
                  <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/angular.png"
                      class="svgSkills"
                      title="Angular"
                      alt="Angular"
                    />
                  </div>
                  <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/bootstrap.png"
                      class="svgSkills"
                      title="Bootstrap 5"
                      altt="Bootstrap 5"
                    />
                  </div>
                  <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/html.png"
                      class="svgSkills"
                      title="HTML"
                      alt="HTML"
                    />
                  </div>
                  <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/css.png"
                      class="svgSkills"
                      title="CSS"
                      alt="CSS"
                    />
                  </div>
                </div>
                <h1 class="title">Acceso a datos</h1>
                <div class="row row-cols-md-3 row-cols-xl-7 row-cols-sm-7">
                  <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/mysql.png"
                      class="svgSkills"
                      title="MySql"
                      alt="MySql"
                    />
                  </div>
                <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/sqlserver.png"
                      class="svgSkills"
                      title="Sql Server"
                      alt="Sql Server"
                    />
                  </div>
                </div>

                <h1 class="title">Otros</h1>
                <div class="row row-cols-md-3 row-cols-xl-7 row-cols-sm-7">
                  <div class="col" data-aos="zoom-in">
                    <img
                      src="../assets/img/imgSkills/photoshop.png"
                      class="svgSkills "
                      title="Photoshop"
                      alt="Photoshop"
                    />
                  </div>
                  <div class="col" data-aos="zoom-in">
                  
                    <img
                      src="../assets/img/imgSkills/illustrator.png"
                      class="svgSkills img-personalizada"
                      title="Illustrator"
                      alt="Illustrator"
                      
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.personal-col {
  opacity: 0.5;
  border-radius: 10px;
}
.col-personalizada{
 
}

.svgSkills {
  width: 70px; 

  /*filter: grayscale(100%);*/
}
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
  width: 100%;
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
.sub-title-h3 {
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
<script>
</script>
