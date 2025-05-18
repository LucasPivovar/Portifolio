<template>
    <div class="content">
        <main>
            <header-portifolio></header-portifolio>
        
            <div class="contact-page">
                <div class="contact-container">
                    <h2 class="contact-title">Vamos Trabalhar Juntos</h2>
                    
                    <div class="contact-form-grid">
                        <div class="contact-form">
                        <form @submit.prevent="enviarMensagem">
                            <div class="form-group">
                            <label for="nome">Nome Completo</label>
                            <input 
                                type="text" 
                                id="nome" 
                                v-model="formData.nome" 
                                class="form-input" 
                                placeholder="Seu nome completo"
                                required
                            />
                            </div>
                            
                            <div class="form-group">
                            <label for="email">E-mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                v-model="formData.email" 
                                class="form-input" 
                                placeholder="seu-email@exemplo.com"
                                required
                            />
                            </div>
                            
                            <div class="form-group">
                            <label for="assunto">Assunto</label>
                            <div class="select-wrapper">
                                <select 
                                id="assunto" 
                                v-model="formData.assunto" 
                                class="form-select" 
                                required
                                >
                                <option value="" disabled selected>Selecione uma opção</option>
                                <option value="Freelance">Freelance</option>
                                <option value="Dev Web">Dev Web</option>
                                <option value="UI/UX Designer">UI/UX Designer</option>
                                </select>
                            </div>
                            </div>
                            
                            <div class="form-group">
                            <label for="mensagem">Mensagem</label>
                            <textarea 
                                id="mensagem" 
                                v-model="formData.mensagem" 
                                class="form-textarea" 
                                rows="5" 
                                placeholder="Descreva seu projeto ou sua necessidade aqui..."
                                required
                            ></textarea>
                            </div>
                            
                            <button 
                            type="submit" 
                            class="submit-button" 
                            :disabled="enviando"
                            >
                            {{ enviando ? 'Enviando...' : 'Enviar Mensagem' }}
                            </button>
                        </form>
                        </div>
                        
                        <div class="contact-info">
                            <h3>Informações de Contato</h3>
                        
                            <div class="info-item">
                                <div class="info-icon-circle">
                                    <span class="info-icon">
                                        <img src="@/assets/email.svg" alt="Email" />
                                    </span>
                                </div>
                                <span class="info-text">lucaspivovarcaetano@gmail.com</span>
                            </div>
                        
                            <div class="info-item">
                                <div class="info-icon-circle">
                                    <span class="info-icon">
                                        <img src="@/assets/location.svg" alt="Location" />
                                    </span>
                                </div>
                                <span class="info-text">Tatuquara - Curitiba PR</span>
                            </div>
                        
                            <div class="social-icons">
                                <a href="https://wa.me/5541988188085" class="social-icon whatsapp">
                                    <img src="@/assets/whatsapp-icon.svg" alt="WhatsApp" />
                                </a>
                                <a href="https://www.linkedin.com/in/lucas-pivovar-a25b71337/" class="social-icon linkedin">
                                    <img src="@/assets/linkedin-icon.svg" alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { enviarEmail } from '@/services/EmailService';
import HeaderPortifolio from '@/components/HeaderPortifolio.vue'

export default {
  components: { HeaderPortifolio },
  name: 'ContactView',
  data() {
    return {
        formData: {
            nome: '',
            email: '',
            assunto: '',
            mensagem: ''
        },
        enviando: false,
        mensagemStatus: ''
    };
    },
    methods: {
        async enviarMensagem() {
        this.enviando = true;
        this.mensagemStatus = 'Enviando...';
        
        try {
            const resultado = await enviarEmail(this.formData);
            
            if (resultado.success) {
            this.mensagemStatus = 'Mensagem enviada com sucesso!';
            alert('Mensagem enviada com sucesso!');
            this.limparFormulario();
            } else {
            this.mensagemStatus = 'Erro ao enviar mensagem. Tente novamente.';
            alert('Erro ao enviar mensagem. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro:', error);
            this.mensagemStatus = 'Ocorreu um erro inesperado.';
            alert('Ocorreu um erro inesperado.');
        } finally {
            this.enviando = false;
        }
    },
    limparFormulario() {
      this.formData = {
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      };
    }
  }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.content{
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif;
    background: #0f1520;
    display: flex;
    justify-content: center;
}

main{
    max-width: 1200px;
    width: 100%;
    padding: 0 1rem;
}

.contact-page {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: 5rem;
    margin-bottom: 3rem;
}

.contact-container {
    width: 100%;
    max-width: 1000px;
    background-color: #2a2a2a;
    border-radius: 8px;
    padding: 2rem;
}

.contact-title {
    text-align: center;
    color: #00acff;
    margin-bottom: 2rem;
    font-size: 1.8rem;
}

.contact-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

label {
    display: block;
    text-align: left;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #fff;
}

.form-input::placeholder,
.form-textarea::placeholder {
    color: #999;
    opacity: 0.7;
    font-size: 0.9rem;  
}

.select-wrapper {
    position: relative;

}

.select-wrapper::after {
    content: "";
}

.form-input,
.form-select,
.form-textarea {
    width: 100%;
    padding: 0.8rem;
    background-color: #3a3a3a;
    border: none;
    border-radius: 4px;
    color: #fff;
}

.submit-button {
    width: 100%;
    padding: 0.8rem;
    background-color: #00acff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #0090d8;
}

.contact-info {
    background-color: #222;
    padding: 1.5rem;
    border-radius: 8px;
}

.contact-info h3 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    color: #00acff;
}

.info-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.info-icon-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border: 2px solid #ffffff;
    flex-shrink: 0;
}

.info-text {
    word-break: break-word;
}

span.info-icon {
   height: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
}

.info-icon img {
    width: 20px;
    height: 20px;
}

.social-icons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: transform 0.3s;
}

.social-icon:hover {
    transform: scale(1.1);
}

.whatsapp {
    background-color: #25D366;
}

.linkedin {
    background-color: #0077B5;
}

.social-icon img {
    width: 24px;
    height: 24px;
}

/* Responsive styles */
@media (max-width: 768px) {
    .contact-form-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-container {
        padding: 1.5rem;
    }
    
    .contact-page {
        margin-top: 3rem;
    }
    
    .contact-title {
        font-size: 1.5rem;
    }
    
    .info-item {
        margin-bottom: 1rem;
    }
    
    .info-text {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .contact-container {
        padding: 1rem;
    }
    
    .form-input,
    .form-select,
    .form-textarea {
        padding: 0.7rem;
    }
    
    .submit-button {
        padding: 0.7rem;
    }
    
    .info-item {
        flex-direction: row;
        align-items: center;
        font-size: 0.1rem;
    }

    .info-icon-circle{
        display: none;
    }
    
    .social-icons {
        justify-content: center;
    }
}
</style>