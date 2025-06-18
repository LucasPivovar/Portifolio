
<template>
  <div class="content">
    <temp-bubble></temp-bubble>
    
    <div class="box">
      <header-portifolio></header-portifolio>
      <main>
        <div class="main-box">
          <h3>Desenvolvedor Full Stack</h3>
          <h2>Olá, eu sou o <br><span>{{ displayedText }}</span><span class="cursor">|</span></h2>
          <p>Transformo ideias em experiências. <br> Desde o front-end até o back-end.</p>

          <div class="buttons">
            <button id="dowload" @click="downloadCV">Download CV <span><img src="../assets/download.svg" alt="download"></span></button>
            <a href="https://github.com/LucasPivovar" target="_blank"><img src="../assets/github.svg" alt="github"></a>
            <a href="https://www.linkedin.com/in/lucas-pivovar-a25b71337/" target="_blank"><img src="../assets/linkedin.svg" alt="linkedin"></a>
          </div>
        </div>

        <div class="card">
          <img src="../assets/lucas.jpg" alt="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderPortifolio from '@/components/HeaderPortifolio.vue'
import TempBubble from '@/components/TempBubble.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderPortifolio,
    TempBubble,
  },
  data() {
    return {
      fullText: "Lucas Pivovar",
      displayedText: "",
      typeSpeed: 150,
      currentIndex: 0
    }
  },
  mounted() {
    this.typeText();
  },
  methods: {
    typeText() {
      if (this.currentIndex < this.fullText.length) {
        this.displayedText += this.fullText[this.currentIndex];
        this.currentIndex++;
        setTimeout(this.typeText, this.typeSpeed);
      }
    },
    downloadCV() {
      const link = document.createElement('a');
      link.href = '/cv.pdf';
      link.download = 'LucasPivovar_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
}

.content {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {

  height: 100vh;
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 10; /* Ensure content is above bubbles */
}

main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 10rem;
  overflow: hidden;
}

.main-box {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50%;
}

.card {
  position: relative;
  background: #555;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;

}

.card img {
  width: 100%;
  height: 100%;
}

/* Remove the existing span styles and animations */
.card span {
  position: absolute;
  border-radius: 50%;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 7.5px solid transparent;
}

.card span:first-of-type {
  border-top-color: #00B2FF;
  animation: rotate 2s linear infinite;
}

.card span:nth-of-type(2) {
  border-right-color: #00B2FF;
  animation: rotate 2s linear infinite;
  animation-delay: 0.5s;
}

.card span:nth-of-type(3) {
  border-bottom-color: #00B2FF;
  animation: rotate 2s linear infinite;
  animation-delay: 2s;
}

.card span:nth-of-type(4) {
  border-left-color: #00B2FF;
  animation: rotate 2s linear infinite;
  animation-delay: 0.5s;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

h2, h3 {
  color: #fff;
}

h2 span {
  color: #00B2FF;
  font-size: 4.1rem;
}

h2 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 3.9rem;
  line-height: 60px;
}

h3, p {
  font-size: 1.3rem;
  margin-bottom: 20px;
}

p {
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
  margin-bottom: 1rem
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
  padding: 1rem 1rem;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  border: 2px solid #00B2FF;
  background-color: transparent;
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

@media screen and (max-width: 1000px) {
  .content{
    min-height: 100vh;
    padding: 0;
    height: 100%;
    overflow: scroll;
  }
  main{
    flex-direction: column;
    width: 90%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh;
    margin-top: 0;
    margin-bottom: 1rem;
    height: 100%;
  }

  .main-box {
    width: 100%;
  } 

  .card {
    width: 100%;
    height: 100%;
  }


  h2 {
    font-size: 2rem;
    line-height: 40px;
  }

  h2 span {
    font-size: 3.2rem;
  }

  h3, p {
    font-size: 1.2rem;
    width: 100%;
  }

  .card {
    width: 300px;
    height: 300px;
  }
}
</style>