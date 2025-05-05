<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
  <body>
    <background-bubble></background-bubble>
    <div class="box">
      <header-portifolio></header-portifolio>
      <main>
        <aside>
          <h1>Porque me contratar?</h1>
          <p>Eu sou um desenvolvedor Full Stack, que gosto de construir soluções eficientes, que possui habilidades em Front-end e Back-end.</p>
          <div class="buttons">
            <a href="#" @click.prevent="deixarAtivo('div1')" class="botoes" :style="{ backgroundColor: mostrar === 'div1' ? '#00B2FF' : '#444' }">Meu Perfil</a>
            <a href="#" @click.prevent="deixarAtivo('div2')" class="botoes" :style="{ backgroundColor: mostrar === 'div2' ? '#00B2FF' : '#444' }">Experiência</a>
            <a href="#" @click.prevent="deixarAtivo('div3')" class="botoes" :style="{ backgroundColor: mostrar === 'div3' ? '#00B2FF' : '#444' }">Skills</a>
            <a href="#" @click.prevent="deixarAtivo('div4')" class="botoes" :style="{ backgroundColor: mostrar === 'div4' ? '#00B2FF' : '#444' }">Educação</a>
          </div>
        </aside>
        <div class="main-box">
          <div class="div1" v-show="estaAtivo('div1')">
            <h2>Meu Perfil</h2>
            <p>gosto de construir soluções eficientes, que possui habilidades em Front-end e Back-end.</p>
          </div>

          <div class="div2" v-show="estaAtivo('div2')">
            <h2>Experiência</h2>
            <p>2024 - 2025 ● Freelancer</p>
            <p><strong>Cargo/Função:</strong> Desenvolver full Stack</p>
            <ul>
              <li> Desenvolvimento de APIs RESTful</li>
              <li> Criação de front end responsivo </li>
              <li>Manipulção de banco de dados MySQL</li>
            </ul>
          </div>

          <div class="div3" v-show="estaAtivo('div3')">
            <h2>Minhas habilidades</h2>
            <p>Construo interfaces interativas e responsivas, 
              desenvolvo soluções robustas no servidor e gerencio bancos de dados relacionais com eficiência.  Algumas das linguagens que mais utilizo:</p>
              <div class="skills grid">
                <div class="item">
                  <img src="../assets/skills/vue.svg" alt="Vue.js">
                  <span class="tooltip">Vue.js</span>
                </div>
                <div class="item">
                  <img src="../assets/skills/php.svg" alt="PHP">
                  <span class="tooltip">PHP</span>
                </div>
                <div class="item">
                  <img src="../assets/skills/mysql.svg" alt="MySQL">
                  <span class="tooltip">MySQL</span>
                </div>
                <div class="item">
                  <img src="../assets/skills/js.svg" alt="JavaScript">
                  <span class="tooltip">JavaScript</span>
                </div>
                <div class="item">
                  <img src="../assets/skills/css.svg" alt="CSS">
                  <span class="tooltip">CSS</span>
                </div>
                <div class="item">
                  <img src="../assets/skills/html.svg" alt="HTML">
                  <span class="tooltip">HTML</span>
                </div>
                <div class="item">
                  <img src="../assets/skills/figma.svg" alt="Figma">
                  <span class="tooltip">Figma</span>
                </div>
              </div>
          </div>

          <div class="div4" v-show="estaAtivo('div4')">
            <h2>Educação</h2>
            <h3>CEEP Curitiba | 2023 - 2025(Cursando)</h3>
            <h4>Ensino Médio - Técnico em Desenvolvimento de Sistemas</h4>
           
          </div>
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
    HeaderPortifolio,
  },

  data() {
    return{
      mostrar:'div1',
    }
  },

  methods:{
    deixarAtivo(val){
      this.mostrar = val;
    },

    estaAtivo(val){
      return this.mostrar === val;
    },
  }

};
</script>

<style scoped>
body {
  background-color: #0f1520;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
}

.box {
  height: 100vh;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

main {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10rem;
  padding: 0 2rem;
}

/*Aside*/
aside{
  text-align: left;
  color: #fff;
  max-width: 400px;
}

aside h1{
  font-size: 2rem;
  font-weight: 600;
}

aside p{
  color: #8F8F8F;
}

.buttons{
  display: flex;
  flex-direction: column;
  text-align: center;
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.buttons a {
  padding: 0.7rem 1.5rem;
  background-color: #444;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  border-radius: 15px;
}

.buttons a:hover {
  background-color: #555;
}

/*Div que muda de conteudo dinamicamente*/
.main-box {
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #333;
  color: #fff;
  border-radius: 8px;
  padding: 2rem;
  width: 50%;
  min-height: 300px;
}

.div1, .div2, div3 {
  padding: 1rem;
}

/*div2 - Experiência*/

.div2 h2{
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  border-bottom: 2px solid #8F8F8F;
}

.div2 p strong{
  font-weight: 300;
  color: rgb(255, 255, 255);
}

.div2 p{
  color: #ffffff;
  line-height: 22px;
  font-weight: 300;
}

.div2 ul{
  color: #bbbbbb;
  padding: 1rem;
  
  font-weight: 300;
}
/*terceiro botao - Skills*/


.div3 h2{
  margin-top: 0;
  font-size: 2rem;
}

.div3 p{
  color: #9e9d9d;
  margin-bottom: 2rem;
}
.grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(1, 100px);
  gap: 1rem;

}

.item-2, .item-3 {
	grid-row: span 2;
}

.item-5 {
	grid-column: span 2;
}

.item {
	margin: 5px;
  background: #4E4E4E;
	text-align: center;
	font-size: 1.5em;
  width: 80px;
  height: 80px;
  padding: 1rem;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item:hover {
  scale: 1.05;
  transition: all 0.3s ease-in-out;
}

.item:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

.skills img {
  width: 50px;
  height: 50px;
}

.tooltip {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #0f1520;
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 100;
}

.div4 {
  padding: 1rem;
}

.div4 h2{
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  border-bottom: 2px solid #8F8F8F;
}

.div4 h3{
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1rem;
}

.div4 h4{
  font-size: 1.2rem;
  font-weight: 400;
  color: #bbbbbb;
}

</style>