<template>
  <div>
    <div data-aos="fade-up">
      <div class="container-fluid principal">
        <div class="card mb-3 micard-body" style="max-width: 1100px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/src/assets/img/logo-g009a1634a_1920.png"
                class="yo"
                title="Imagen mia tratada con photoshop"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body micard-body">
                <h2 class="sub-title">./Contacto</h2>
                <form
                  action="https://formsubmit.co/guillemrubiovaron@gmail.com"
                  method="POST"
                >
                  <input type="text" name="name"  />
                  <input type="text" name="email"  />
                  <button type="submit">Send</button>
                </form>
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
    return {};
  },
};
</script>

<style scoped>
.input {
  background-color: #e43f5a2f;
  border: 0;
}
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
