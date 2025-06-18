// src/services/EmailService.js
import emailjs from '@emailjs/browser';

/**
 * Este serviço gerencia o envio de emails do formulário de contato
 * Configurado com sua conta do EmailJS
 */

// Função para enviar email usando EmailJS
export const enviarEmail = async (dados) => {
  try {
    // Service ID já configurado
    const serviceId = 'service_i2irzti';
    const templateId = 'template_hfx1pna'; // Substitua pelo ID do template que você criou
    const userId = 'b1RxCBfSDVq2kZZDo'; // Substitua pela sua Public Key
    
    const templateParams = {
      name: dados.nome,
      email: dados.email, // Para seu registro
      subject: dados.assunto, // Para seu registro
      message: dados.mensagem,
      time: new Date().toLocaleString('pt-BR') // Adiciona a data/hora atual formatada
    };
    
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      userId
    );
    
    console.log('Email enviado!', response.status, response.text);
    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error };
  }
};

// Alternativa: enviar para sua própria API backend
export const enviarParaBackend = async (dados) => {
  try {
    // Substitua com a URL da sua API
    const response = await fetch('https://sua-api.com/enviar-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });
    
    const result = await response.json();
    return { success: response.ok, data: result };
  } catch (error) {
    console.error('Erro ao enviar para o backend:', error);
    return { success: false, error };
  }
};