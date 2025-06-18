<template>
  <div class="resume-wrapper">
    <background-bubble></background-bubble>
    <div class="box">
      <header-portifolio></header-portifolio>
      <main>
        <aside>
          <h1>Como posso contribuir?</h1>
          <p>Sou um desenvolvedor Full Stack que gosta de construir soluções eficientes e tenho habilidades em Front-end e Back-end.</p>
          <div class="buttons">
            <a
              v-for="(label, key) in botoes"
              :key="key"
              href="#"
              @click.prevent="deixarAtivo(key)"
              class="botoes"
              :style="{ backgroundColor: mostrar === key ? '#00B2FF' : '#444' }"
            >{{ label }}</a>
          </div>
        </aside>

        <div class="main-box">
          <section v-show="estaAtivo('div1')" class="div1">
            <h2>Meu Perfil</h2>
            <p>Olá! Sou Lucas Pivovar, desenvolvedor Full Stack apaixonado por criar soluções digitais eficientes. Minha jornada na programação começou junto com o Ensino Médio há 2 anos, e busco crescer profissionalmente em projetos desafiadores.</p>
          </section>

          <section v-show="estaAtivo('div2')" class="div2">
            <h2>Experiência</h2>
            <p>2024 - 2025 ● Freelancer</p>
            <p><strong>Cargo/Função:</strong> Desenvolvedor Full Stack</p>
            <ul>

              <li>Desenvolvimento de APIs RESTful</li>
              <li>Criação de front-end responsivo</li>
              <li>Desenvolvimento de um sistema de CRUD</li>
              <li>Manipulação de banco de dados MySQL</li>
            </ul>
          </section>

          <section v-show="estaAtivo('div3')" class="div3">
            <h2>Minhas habilidades</h2>
            <p>Construo interfaces interativas e responsivas, desenvolvo soluções robustas no servidor e gerencio bancos de dados relacionais com eficiência. Algumas das linguagens que mais utilizo:</p>
            <div class="skills grid">
              <div class="item" v-for="skill in skills" :key="skill.alt">
                <img :src="skill.src" :alt="skill.alt">
                <span class="tooltip">{{ skill.alt }}</span>
              </div>
            </div>
          </section>

          <section v-show="estaAtivo('div4')" class="div4">
            <h2>Educação</h2>
            <h3>CEEP Curitiba | 2023 - 2025 (Cursando)</h3>
            <h4>Ensino Médio - Técnico em Desenvolvimento de Sistemas</h4>
          </section>
        </div>
      </main>
    </div>
  </div>  
</template>

<script>
import HeaderPortifolio from '@/components/HeaderPortifolio.vue'

export default {
  name: 'ResumeView',
  components: {
    HeaderPortifolio,
  },
  data() {
    return {
      mostrar: 'div1',
      botoes: {
        div1: 'Meu Perfil',
        div2: 'Experiência',
        div3: 'Skills',
        div4: 'Educação',
      },
      skills: [
        { src: require('@/assets/skills/vue.svg'), alt: 'Vue.js' },
        { src: require('@/assets/skills/php.svg'), alt: 'PHP' },
        { src: require('@/assets/skills/mysql.svg'), alt: 'MySQL' },
        { src: require('@/assets/skills/js.svg'), alt: 'JavaScript' },
        { src: require('@/assets/skills/css.svg'), alt: 'CSS' },
        { src: require('@/assets/skills/html.svg'), alt: 'HTML' },
        { src: require('@/assets/skills/figma.svg'), alt: 'Figma' },
      ],
    }
  },
  methods: {
    deixarAtivo(val) {
      this.mostrar = val;
    },
    estaAtivo(val) {
      return this.mostrar === val;
    },
  },
}
</script>

<style scoped>
.resume-wrapper {
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
  color: #9a9a9c;
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
  transition: all 0.3s ease;
  border-radius: 15px;
}

.buttons a:hover {
  background-color: #555;
  transform: scale(1.02);
    transition: all 0.3s ease;

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
  padding: 0;
}

/*div2 - Experiência*/

h2{
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 2rem;
  border-bottom: 2px solid #8F8F8F;
}

p strong{
  font-weight: 300;
  color: rgb(255, 255, 255);
}

p{
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

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 100px);
  gap: 1rem;
  margin-top: 1.1rem;
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

.div4 h2{
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  border-bottom: 2px solid #8F8F8F;
}

.div4 h3{
  font-size: 1.5rem;
  font-weight: 400;
}

.div4 h4{
  font-size: 1.2rem;
  font-weight: 400;
  color: #bbbbbb;
}

@media screen and (max-width: 1000px) {
  .box {
    min-height: 100vh;
    overflow: scroll;
  }
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin-top: 0;
  }

  .main-box {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 100px);
    gap: 1rem;
  }
}
</style>
