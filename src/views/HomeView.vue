<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
  <body>
    <div class="box">
      <header-portifolio></header-portifolio>
      <main>
        <div class="main-box">

          <h3>Desenvolvedor Full Stack</h3>
          <h2>Olá Eu sou o <br><span id="typing-text"></span><span class="cursor">|</span></h2>
          <p>Eu transformo ideias em experiências, do front ao back-end</p>

          <div class="buttons" >
            <button id="dowload" @click="downloadCV">download CV <span><img src="../assets/download.svg" alt="download"></span></button>
            <a href="https://github.com/LucasPivovar" target="_blank" ><img src="../assets/github.svg" alt="github"></a>
            <a href="https://www.linkedin.com/in/lucas-pivovar-a25b71337/" target="_blank" ><img src="../assets/linkedin.svg" alt="linkedin"></a>
          </div>
        </div>

        <img src="../assets/lucas.jpg" alt="Lucas Pivovar" class="lucas" id="lucas">
      </main>
    </div>
  </body>
  <router-view/>
</template>

<script>
  // @ is an alias to /src
  import HeaderPortifolio from '@/components/HeaderPortifolio.vue'
  export default {
    name: 'HomeView',
    components: {
      HeaderPortifolio
    },
    data() {
      return {    
        sliceText: "",
        fullText: "Lucas Pivovar",
        typeSpeed: 150, // Velocidade de digitação em ms
        currentIndex: 0
      }
    },
    mounted() {
      this.typeText();
    },
    methods: {
      typeText() {
        if (this.currentIndex < this.fullText.length) {
          document.getElementById("typing-text").innerHTML += this.fullText[this.currentIndex];
          this.currentIndex++;
          setTimeout(this.typeText, this.typeSpeed);
        } 
      },

      downloadCV() {
        const link = document.createElement('a');
        link.href = '/cv.pdf'; // Arquivo na pasta public fica disponível na raiz
        link.download = 'LucasPivovar_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
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

  #lucas {
    background-color: transparent;
    border-radius: 50%;
    border: none;
    width: 100%;
    max-width: 400px;
  }

  h2, h3{
    color: #fff;
  }

  h2 span{
    color: #00B2FF;
  }

  h2 {
    margin-top: 0;
    font-size: 4rem;
    line-height: 60px;
  }

  h3, p {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }

  p{
    color: #c5c5c5;
    font-weight: 400;
    width: 65%;
    margin-top: -1rem;
    margin-bottom: 2rem;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }

  a {
    border: 2px solid #00B2FF;
    border-radius: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    scale: 1.05;
    transition: all 0.3s ease-in-out;
  }

  #dowload {
    padding: 1rem 2rem;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    border: 1px solid #00B2FF;
    background-color: transparent;
    border: 2px solid #00B2FF;
    color: #00B2FF;
    border-radius: 30px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }

  #dowload:hover {
    scale: 1.05;
    transition: all 0.3s ease-in-out;
  }
  
  /* Estilos para o efeito de digitação */
  #typing-text {
    color: #00B2FF;
  }
  
  .cursor {
    color: #00B2FF;
    font-weight: bold;
    animation: blink 1.5s infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
</style>