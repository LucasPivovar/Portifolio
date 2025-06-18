<template>
    <body>
        <div class="content">
            <div class="box">
                <header-portifolio></header-portifolio>
                <main>
                    <!-- Lista de Projetos -->
                    <div class="projects-list">
                    <div 
                        class="project" 
                        v-for="project in projects" 
                        :key="project.id" 
                        @click="abrirProjeto(project.id)"
                    >
                        <img :src="project.image" alt="">
                        <h2>{{ project.title }}</h2>
                        <p>{{ project.subtitle }}</p>
                        <div class="project-footer">
                        <div class="tags">
                            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
                        </div>
                        <h3 :class="getStatusClass(project.progress)">{{ project.progress }}</h3>
                        </div>
                    </div>

                    <!-- Modal de Detalhes do Projeto -->
                    <div class="modal" v-if="showModal" @click.self="fecharModal">
                        <div class="modal-content" ref="modalContent">
                            <span class="close" @click="fecharModal">&times;</span>
                            <div class="project-detail" v-if="currentProject">
                            <h1>{{ currentProject.title }}</h1>
                            
                            <div class="project-detail-content">
                                <div class="project-image">
                                    <img :src="currentProject.img" alt="">
                                </div>
                                
                                <div class="project-website">
                                    <h2>{{ currentProject.name }}</h2>
                                    <p>{{ currentProject.description || currentProject.subtitle }}</p>
                                </div>
                                
                                <div class="project-contributions">
                                    <h2>Minha Contribuição</h2>
                                    <ul>
                                        <li v-for="contribution in currentProject.contributions || []" :key="contribution">
                                        {{ contribution }}
                                        </li>
                                    </ul>
                                </div>
                                
                                <div class="project-stacks">
                                    <h2>Stacks Tecnológicas</h2>
                                    <div class="stack-tags">
                                        <span v-for="tag in currentProject.tags" :key="tag" class="stack-tag">{{ tag }}</span>
                                    </div>
                                </div>
                                
                                <div class="project-links">
                                    <a v-if="currentProject.urlProject" :href="currentProject.urlProject" target="_blank" class="action-button view-online">Projeto Online</a>
                                    <a v-if="currentProject.urlCode" :href="currentProject.urlCode" target="_blank" class="action-button view-code">Código Fonte</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </main>
            </div>
        </div>
    </body>
</template>

<script>
import HeaderPortifolio from '@/components/HeaderPortifolio.vue'

export default {
  name: 'ProjectsView',
  components: { HeaderPortifolio },
  
  data() {
    return {
      projects: [],
      currentProject: null,
      showModal: false,
    }
  },
  
  mounted() {
    this.fetchProjects();
  },
  
  methods: {
    fetchProjects() {
      fetch('api/projects.json')
        .then(response => response.json())
        .then(data => this.projects = data)
        .catch(error => console.error('Erro ao carregar projetos:', error));
    },

    fetchProject(id) {
      const projectInList = this.projects.find(project => project.id === id);
      if (projectInList) {
        this.currentProject = projectInList;
        this.showModal = true;
        return;
      }
      
      fetch(`api/project/${id}/${id}.json`)
        .then(response => {
          if (!response.ok) throw new Error(`Erro HTTP! Status: ${response.status}`);
          return response.json();
        })
        .then(data => {
          this.currentProject = data;
          this.showModal = true;
        })
        .catch(error => {
          console.error(`Erro ao carregar projeto ${id}:`, error);
          if (projectInList) {
            this.currentProject = projectInList;
            this.showModal = true;
          } else {
            alert(`Não foi possível carregar o projeto ${id}.`);
          }
        });
    },

    abrirProjeto(id) {
      if (id) this.fetchProject(id);
    },

    fecharModal() {
      this.showModal = false;
      this.currentProject = null;
    },
    
    getStatusClass(status) {
      if (!status) return '';
      
      const normalizedStatus = status.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      
      if (normalizedStatus.includes('concluido') || normalizedStatus.includes('concluído')) {
        return 'status-completed';
      } else if (normalizedStatus.includes('desenvolvendo') || 
                normalizedStatus.includes('andamento') || 
                normalizedStatus.includes('em progresso')) {
        return 'status-in-progress';
      } else {
        return 'status-other';
      }
    },
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
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif;
    background: #0f1520;
    overflow-x: hidden;
    overflow-y: scroll;

}

.content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.box {
    min-height: 100vh;
    height: 100%;
    max-width: 1200px;
    width: 100%;
    position: relative;
    z-index: 10;
}

main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    width: 100%;
    margin-top: 10rem;
}

.projects-list {
    display: flex;
    gap: 20px;
    max-width: 1200px;
    flex-wrap: wrap;
}

.project {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;
    background: #333333;
    padding: 20px;
    width: 360px;
}

.project:hover {
    transform: scale(1.02);
}

.project h2 {
    font-size: 1.5rem;
    color: #ffffff;
    margin-top: 1rem;
    text-align: left;
    font-weight: 500;
}

.project img {
    width: 320px;
    height: 160px;
    object-fit:fill;
    border-radius: 8px;
}

.project p {
    font-size: 1.2rem;
    color: #aaa5a5;
    margin-bottom: 1rem;
    text-align: left;
}

.project-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.project-footer h3 {
    font-size: 0.9rem;
    color: #ffffff;
    font-weight: 200;
}

/* Status Classes */
.status-in-progress {
    color: #FFD700 !important;
    font-weight: bold;
}

.status-completed {
    color: #4CAF50 !important;
    font-weight: bold;
}

.status-other {
    color: #FFFFFF;
}

/* Tags Styles */
.tags {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}

.tags span {
    font-size: 14px;
    color: #929292;
    font-weight: 600;
}

/* Modal Styles - FIXED */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: #1A1A1A;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    max-width: 900px;
    position: relative;
    text-align: left;
    max-height: 90vh;
    overflow-y: auto;
    margin: auto;
    scrollbar-width: thin; /* For Firefox */
    scrollbar-color: #555 #333; /* For Firefox */
}

/* Webkit scrollbar styling (Chrome, Safari, Edge) */
.modal-content::-webkit-scrollbar {
    width: 8px;
}

.modal-content::-webkit-scrollbar-track {
    background: #333;
    border-radius: 4px;
}

.modal-content::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
    background: #777;
}

.close {
    position: absolute;
    
    top: 30px;
    right: 35px;
    font-size: 30px;
    cursor: pointer;
    color: #FFFFFF;
}

/* Project Detail Styles */
.project-detail {
    padding: 15px 15px 0px 15px;
}

.project-detail h1 {
    color: #FFFFFF;
    font-size: 2rem;
    margin-bottom: 15px;
    padding: 5px;
    border-bottom: 2px solid #353434;
    margin-top: -1rem;
}

.project-detail hr {
    border: none;
    height: 1px;
    background-color: #333;
    margin-bottom: 20px;
}

.project-detail-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}

.project-image {
    grid-column: 1 / -1;
}

.project-image img {
    width: 100%;
    height: auto;
    font-size: 0.9rem;
    font-weight: 200;
    border-radius: 8px;
}

/* Action Links Styles */
.project-links {
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 20px;
}

.action-button {
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
}

.view-online {
    background-color: #00A1FF;
    color: #FFFFFF;
}

.view-code {
    color: #FFFFFF;
    border: 2px solid #00A1FF;
}

.view-online:hover, 
.view-code:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.status-badge {
    padding: 8px 15px;
    border-radius: 20px;
    font-weight: bold;
    text-align: center;
}

.project-website, .project-contributions {
    color : #aaa5a5;
}

.project-website h2, .project-contributions h2{
    color : #ffffff;
}

.project-website p{
    width: 90%;
}

.project-contributions ul{
    width: 100%;
    padding-left: 20px;
    list-style-type: disc;
}

.stack-tags{
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5rem;
    margin-bottom: -1rem;
}

.stack-tag{
    color: #ffffff;
    border: 2px solid #ffffff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    margin-right: 5px;
}

.project-links{
    display: flex;
    width: auto;
    
    border-top: 2px solid #353434;
    padding-top: 10px;
    margin-bottom: -10px;
}


@media screen and (max-width: 1000px) {
    main{
        margin-top: 0;
    }
    body {
        overflow-x: hidden;
        width: 100vw;
    }

    .box, .content,  .projects, .projects-list {
        overflow-x: hidden;
        width: 100vw;
    }

    .projects-list {
        display: flex;
        gap: 20px;
        max-width: 100%;
        flex-wrap: wrap;
        padding: 20px;
    }

    .project {
        width: 100%;  
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 8px;
        cursor: pointer;
        background: #333333;
    }

    .project img{
        width: 100%;
    }

    .project p{
        font-size: 1rem;
    }

    .project-footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }        

    .project-footer h3{
        font-size: 0.8rem;
    }   

    .modal{
        background-color: rgba(0, 0, 0, 0.8);
    }

    .modal-content {
        max-height: 85vh;
        padding: 15px;
    }

    .border{
        border-top: 2px solid #353434;
        border-bottom: 2px solid #353434;
        padding-top: 5px; padding-bottom: 5px;
    }

    
    .project-detail-content {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }       

    .project-image {
        grid-column: 1 / -1;
    }

    .project-image img {
        width: 100%;
        height: auto;
    }    

    .project-links{
        margin-bottom: 5px;
    }
}
</style>