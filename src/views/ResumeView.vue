<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
  <body>
    <div class="box">
      <header-portifolio></header-portifolio>
      <main>
        <aside>
          <h1>Porque me contratar?</h1>
          <p>Eu sou um desenvolvedor Full Stack, que gosto de construir soluções eficientesm, que possui habilidades em Front-end e Back-end.</p>
          <div class="buttons">
            <button >Sobre mim</button>

          </div>
        </aside>

        <div class="main-box">

        </div>
      </main>
    </div>
  </body>
  <router-view/>
</template>

<script>
  // @ is an alias to /src
  import HeaderPortifolio from '@/components/HeaderPortifolio.vue'
  export default {
    name: 'ResumeView',
    components: {
      HeaderPortifolio
    },

  }
</script>

<style scoped>
  body {
    background-color: #262626;
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box{
    height: 100vh;
    max-width: 1300px;
  }

  main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10rem;
  }

  .main-box {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

</style>