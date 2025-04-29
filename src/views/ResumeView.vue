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
            oil
          </div>

          <div class="div3" v-show="estaAtivo('div3')">
            <h2>Minhas habilidades</h2>
            <p>Construo interfaces interativas e responsivas, 
              desenvolvo soluções robustas no servidor e gerencio bancos de dados relacionais com eficiência.  Algumas das linguagens que mais utilizo:</p>
            <div class="skills grid">
              <img src="../assets/skills/vue.svg" alt="vue" class="item">
              <img src="../assets/skills/php.svg" alt="" class="item">
              <img src="../assets/skills/mysql.svg" alt="" class="item">
              <img src="../assets/skills/js.svg" alt="" class="item">
              <img src="../assets/skills/css.svg" alt="" class="item">
              <img src="../assets/skills/html.svg" alt="" class="item">
              <img src="../assets/skills/figma.svg" alt="" class="item">
            </div>
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
  background-color: #262626;
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

/*terceiro botao - Skills*/


.div3 h2{
  margin-top: 0;
  margin-bottom: -0.5rem;
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
  width: 60px;
  padding: 1rem;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.item:hover{
  scale: 1.1;
  transition: all 0.3s ease-in-out;

}

.skills img{
  width: 60px;
  height: 60px;
}
</style>