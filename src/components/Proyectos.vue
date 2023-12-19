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
                    <h2 class="sub-title">./Proyectos</h2>
                  </div>
                  <div class="col-md-6 col-sm-1 titulo-derecha">
                    <img
                      src="/src/assets/img/ico1.png"
                      class="iconoAcademico"
                      title="Proyectos"
                      alt="Proyectos"
                    />
                  </div>
                </div>
                <div
                  id="carouselExampleCaptions"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="card mb-3 mi-card" style="width: 100%">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="../assets/img/imgProyectos/proyectocomidas.png"
                              class="img-fluid rounded-start"
                              alt="Foto proyecto comidas"
                              title="Foto proyecto comida"
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title title">
                                {{ ecomerceComida.nombre }}
                              </h5>
                              <p class="presentacion_sobre_mi">
                                {{ ecomerceComida.descripcion }}
                              </p>
                              <img
                                src="../assets/img/imgSkills/html.png"
                                title="HTML"
                                alt="HTML"
                                class="img-fluid imgTecnologiA"
                                style="width: 70px"
                              />
                              <img
                                src="../assets/img/imgSkills/css.png"
                                class="img-fluid"
                                style="width: 70px"
                                title="CSS"
                                alt="CSS"
                              />
                              <img
                                src="../assets/img/imgSkills/js.png"
                                class="img-fluid"
                                style="width: 70px"
                                title="JavaScript"
                                alt="JavaScript"
                              />
                              <img
                                src="../assets/img/imgSkills/bootstrap.png"
                                class="img-fluid"
                                style="width: 70px"
                                title="Bootstrap"
                                alt="Bootstrap"
                              />
                            </div>
                            <div class="enlacesProyecto">
                              <a href="https://guille-foodcard.herokuapp.com/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                  class="color-svg"
                                  alt="Enlace a la app"
                                  title="Enlace a la app"
                                >
                                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                  <path
                                    d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"
                                  />
                                </svg>
                              </a>
                              <a
                                href="https://github.com/guillemrubiovaron/guillemrubiovaron.github.io/tree/master/comidas-card"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  class="color-svg"
                                  alt="Enlace al proyecto en git hub"
                                  title="Enlace al proyecto en git hub"
                                >
                                  <path
                                    d="M100.59 334.24c48.57 3.31 58.95 2.11 58.95 11.94 0 20-65.55 20.06-65.55 1.52.01-5.09 3.29-9.4 6.6-13.46zm27.95-116.64c-32.29 0-33.75 44.47-.75 44.47 32.51 0 31.71-44.47.75-44.47zM448 80v352a48 48 0 0 1-48 48H48a48 48 0 0 1-48-48V80a48 48 0 0 1 48-48h352a48 48 0 0 1 48 48zm-227 69.31c0 14.49 8.38 22.88 22.86 22.88 14.74 0 23.13-8.39 23.13-22.88S258.62 127 243.88 127c-14.48 0-22.88 7.84-22.88 22.31zM199.18 195h-49.55c-25-6.55-81.56-4.85-81.56 46.75 0 18.8 9.4 32 21.85 38.11C74.23 294.23 66.8 301 66.8 310.6c0 6.87 2.79 13.22 11.18 16.76-8.9 8.4-14 14.48-14 25.92C64 373.35 81.53 385 127.52 385c44.22 0 69.87-16.51 69.87-45.73 0-36.67-28.23-35.32-94.77-39.38l8.38-13.43c17 4.74 74.19 6.23 74.19-42.43 0-11.69-4.83-19.82-9.4-25.67l23.38-1.78zm84.34 109.84l-13-1.78c-3.82-.51-4.07-1-4.07-5.09V192.52h-52.6l-2.79 20.57c15.75 5.55 17 4.86 17 10.17V298c0 5.62-.31 4.58-17 6.87v20.06h72.42zM384 315l-6.87-22.37c-40.93 15.37-37.85-12.41-37.85-16.73v-60.72h37.85v-25.41h-35.82c-2.87 0-2 2.52-2-38.63h-24.18c-2.79 27.7-11.68 38.88-34 41.42v22.62c20.47 0 19.82-.85 19.82 2.54v66.57c0 28.72 11.43 40.91 41.67 40.91 14.45 0 30.45-4.83 41.38-10.2z"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <div class="card mb-3 mi-card" style="width: 100%">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="../assets/img/imgProyectos/proyectoEcoworld.png"
                              class="img-fluid rounded-start"
                              alt="Foto proyecto criptomonedas"
                              title="Foto proyecto criptomonedas"
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title title">
                                {{ ecoworld.nombre }}
                              </h5>
                              <p class="presentacion_sobre_mi">
                                {{ ecoworld.descripcion }}
                              </p>
                              <img
                                src="../assets/img/imgSkills/android.png"
                                title="HTML"
                                alt="HTML"
                                class="img-fluid imgTecnologiA"
                                style="width: 70px"
                              />
                              <img
                                src="../assets/img/imgSkills/java.png"
                                class="img-fluid"
                                style="width: 70px"
                                title="CSS"
                                alt="CSS"
                              />
                              <img
                                src="../assets/img/imgSkills/csharp.png"
                                class="img-fluid"
                                style="width: 70px"
                                title="JavaScript"
                                alt="JavaScript"
                              />
                            </div>
                            <div class="enlacesProyecto">
                              <a
                                href="https://www.youtube.com/watch?v=ZpNIxTM1Bx0"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 576 512"
                                  class="color-svg"
                                  alt="Enlace al video de youtube de Ecoworld"
                                  title="Enlace al video de youtube de Ecoworld"
                                >
                                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                  <path
                                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <div class="card mb-3 mi-card" style="width: 100%">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="../assets/img/imgProyectos/proyectoPortfolio.png"
                              class="img-fluid rounded-start"
                              alt="Foto proyecto portfolio"
                              title="Foto proyecto portfolio"
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title title">
                                {{ portfolio.nombre }}
                              </h5>
                              <p class="presentacion_sobre_mi">
                                {{ portfolio.descripcion }}
                              </p>
                              <img
                                src="../assets/img/imgSkills/html.png"
                                title="HTML"
                                alt="HTML"
                                class="img-fluid imgTecnologiA"
                                style="width: 70px"
                              />
                              <img
                                src="../assets/img/imgSkills/css.png"
                                class="img-fluid"
                                style="width: 70px"
                                title="CSS"
                                alt="CSS"
                              />
                              <img
                                src="../assets/img/imgSkills/js.png"
                                class="img-fluid"
                                style="width: 70px"
                                title="JavaScript"
                                alt="JavaScript"
                              />
                              <img
                                src="../assets/img/imgSkills/vue.png"
                                class="img-fluid"
                                style="width: 70px"
                                title="Vue"
                                alt="Vue"
                              />
                              <img
                                src="../assets/img/imgSkills/bootstrap.png"
                                class="img-fluid"
                                style="width: 70px"
                                title="Bootstrap"
                                alt="Bootstrap"
                              />
                            </div>
                            <div class="enlacesProyecto">
                              <a href="https://guille-foodcard.herokuapp.com/">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                  class="color-svg"
                                  alt="Enlace a la app"
                                  title="Enlace a la app"
                                >
                                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                  <path
                                    d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"
                                  />
                                </svg>
                              </a>
                              <a
                                href="https://github.com/guillemrubiovaron/guillemrubiovaron.github.io/tree/master/comidas-card"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  class="color-svg"
                                  alt="Enlace al proyecto en git hub"
                                  title="Enlace al proyecto en git hub"
                                >
                                  <path
                                    d="M100.59 334.24c48.57 3.31 58.95 2.11 58.95 11.94 0 20-65.55 20.06-65.55 1.52.01-5.09 3.29-9.4 6.6-13.46zm27.95-116.64c-32.29 0-33.75 44.47-.75 44.47 32.51 0 31.71-44.47.75-44.47zM448 80v352a48 48 0 0 1-48 48H48a48 48 0 0 1-48-48V80a48 48 0 0 1 48-48h352a48 48 0 0 1 48 48zm-227 69.31c0 14.49 8.38 22.88 22.86 22.88 14.74 0 23.13-8.39 23.13-22.88S258.62 127 243.88 127c-14.48 0-22.88 7.84-22.88 22.31zM199.18 195h-49.55c-25-6.55-81.56-4.85-81.56 46.75 0 18.8 9.4 32 21.85 38.11C74.23 294.23 66.8 301 66.8 310.6c0 6.87 2.79 13.22 11.18 16.76-8.9 8.4-14 14.48-14 25.92C64 373.35 81.53 385 127.52 385c44.22 0 69.87-16.51 69.87-45.73 0-36.67-28.23-35.32-94.77-39.38l8.38-13.43c17 4.74 74.19 6.23 74.19-42.43 0-11.69-4.83-19.82-9.4-25.67l23.38-1.78zm84.34 109.84l-13-1.78c-3.82-.51-4.07-1-4.07-5.09V192.52h-52.6l-2.79 20.57c15.75 5.55 17 4.86 17 10.17V298c0 5.62-.31 4.58-17 6.87v20.06h72.42zM384 315l-6.87-22.37c-40.93 15.37-37.85-12.41-37.85-16.73v-60.72h37.85v-25.41h-35.82c-2.87 0-2 2.52-2-38.63h-24.18c-2.79 27.7-11.68 38.88-34 41.42v22.62c20.47 0 19.82-.85 19.82 2.54v66.57c0 28.72 11.43 40.91 41.67 40.91 14.45 0 30.45-4.83 41.38-10.2z"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <div class="card mb-3 mi-card" style="width: 100%">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src="../assets/img/imgProyectos/proyectoCoin.png"
                              class="img-fluid rounded-start"
                              alt="Foto proyecto criptomonedas"
                              title="Foto proyecto criptomonedas"
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title title">
                                {{ cripto.nombre }}
                              </h5>
                              <p class="presentacion_sobre_mi">
                                {{ cripto.descripcion }}
                              </p>
                              <img
                                src="../assets/img/imgSkills/html.png"
                                title="HTML"
                                alt="HTML"
                                class="img-fluid imgTecnologiA"
                                style="width: 70px"
                              />
                              <img
                                src="../assets/img/imgSkills/css.png"
                                class="img-fluid"
                                style="width: 70px"
                                title="CSS"
                                alt="CSS"
                              />
                              <img
                                src="../assets/img/imgSkills/js.png"
                                class="img-fluid"
                                style="width: 70px"
                                title="JavaScript"
                                alt="JavaScript"
                              />
                              <img
                                src="../assets/img/imgSkills/react.png"
                                class="img-fluid"
                                style="width: 70px"
                                title="Vue"
                                alt="Vue"
                              />
                              <img
                                src="../assets/img/imgSkills/bootstrap.png"
                                class="img-fluid"
                                style="width: 70px"
                                title="Bootstrap"
                                alt="Bootstrap"
                              />
                            </div>
                            <div class="enlacesProyecto">
                              <a
                                href="https://cripto-guille-app.herokuapp.com/"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                  class="color-svg"
                                  alt="Enlace a la app"
                                  title="Enlace a la app"
                                >
                                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                  <path
                                    d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"
                                  />
                                </svg>
                              </a>
                              <a
                                href="https://github.com/guillemrubiovaron/guillemrubiovaron.github.io/tree/master/comidas-card"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  class="color-svg"
                                  alt="Enlace al proyecto en git hub"
                                  title="Enlace al proyecto en git hub"
                                >
                                  <path
                                    d="M100.59 334.24c48.57 3.31 58.95 2.11 58.95 11.94 0 20-65.55 20.06-65.55 1.52.01-5.09 3.29-9.4 6.6-13.46zm27.95-116.64c-32.29 0-33.75 44.47-.75 44.47 32.51 0 31.71-44.47.75-44.47zM448 80v352a48 48 0 0 1-48 48H48a48 48 0 0 1-48-48V80a48 48 0 0 1 48-48h352a48 48 0 0 1 48 48zm-227 69.31c0 14.49 8.38 22.88 22.86 22.88 14.74 0 23.13-8.39 23.13-22.88S258.62 127 243.88 127c-14.48 0-22.88 7.84-22.88 22.31zM199.18 195h-49.55c-25-6.55-81.56-4.85-81.56 46.75 0 18.8 9.4 32 21.85 38.11C74.23 294.23 66.8 301 66.8 310.6c0 6.87 2.79 13.22 11.18 16.76-8.9 8.4-14 14.48-14 25.92C64 373.35 81.53 385 127.52 385c44.22 0 69.87-16.51 69.87-45.73 0-36.67-28.23-35.32-94.77-39.38l8.38-13.43c17 4.74 74.19 6.23 74.19-42.43 0-11.69-4.83-19.82-9.4-25.67l23.38-1.78zm84.34 109.84l-13-1.78c-3.82-.51-4.07-1-4.07-5.09V192.52h-52.6l-2.79 20.57c15.75 5.55 17 4.86 17 10.17V298c0 5.62-.31 4.58-17 6.87v20.06h72.42zM384 315l-6.87-22.37c-40.93 15.37-37.85-12.41-37.85-16.73v-60.72h37.85v-25.41h-35.82c-2.87 0-2 2.52-2-38.63h-24.18c-2.79 27.7-11.68 38.88-34 41.42v22.62c20.47 0 19.82-.85 19.82 2.54v66.57c0 28.72 11.43 40.91 41.67 40.91 14.45 0 30.45-4.83 41.38-10.2z"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
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
      ecomerceComida: {
        nombre: "Comida app",
        descripcion:
          " App SPA que simula un e-comerce de comida creada solamente con vanilla JavaScript y web componentes propios. Para darle un poco de estilo a la app se ha utilizado Bootstrap5.",
      },
      portfolio: {
        nombre: "Portafolio personal",
        descripcion:
          "Portafolio personal para darme a conocer. Desde este portafolio podrán conocerme mejor e incluso contactar conmigo.",
      },
      cripto: {
        nombre: "Cripto app",
        descripcion:
          "App SPA creada con React donde se hace uso de una api externa para consultar y buscar criptomonedas y exchanges.",
      },
      ecoworld: {
        nombre: "Eco world",
        descripcion:
          "Juego de preguntas que consta de 2 partes. Una parte android donde se puede jugar, y otra parte de escritorio donde gestionamos usuarios y las preguntas del juego.",
      },
    };
  },
};
</script>

<style scoped>
.imgTecnologiA {
  width: 200px;
}

.mi-card {
  background-color: #e43f5a23;
}

.color-svg {
  fill: #b6b6b7;
  width: 40px;
  margin: 10px;
  margin-bottom: 25px;
}

.color-svg:hover {
  fill: #e43f5a;
  animation: cambiarColoresLink 0.75s;
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

.title {
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  z-index: 999;
  text-align: start;
}
</style>
