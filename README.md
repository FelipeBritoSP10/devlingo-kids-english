# 🐶 DevLingo Kids English

> Plataforma gamificada e inclusiva para aprendizado de inglês, desenvolvida com arquitetura modular limpa, alta performance e foco em acessibilidade cognitiva (TEA / ASD).

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=flat-square&logo=javascript)
![Web Components](https://img.shields.io/badge/Vanilla-Web%20Components-blue?style=flat-square)
![A11y / TEA](https://img.shields.io/badge/A11y-TEA%20%2F%20ASD%20Friendly-green?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-brightgreen?style=flat-square)

---

## 📌 Sobre o Projeto

O **DevLingo Kids** é uma aplicação web interativa focada no ensino de vocabulário básico do idioma inglês para crianças. A experiência utiliza o reconhecimento de padrões visuais, feedback auditivo em tempo real e verificação de pronúncia oral utilizando as APIs nativas do navegador (Web Speech API).

O projeto adota a filosofia **Elite Engineering**, sendo construído em **Vanilla Web Components** puro sem a sobrecarga (*overhead*) de frameworks reativos pesados.

---

## 🎯 Objetivo

O **DevLingo Kids** tem como objetivo ensinar vocabulário básico de inglês para crianças de forma acessível, previsível e livre de estresse, com foco especial em crianças neurodivergentes e com Transtorno do Espectro Autista (TEA).

Para isso, o projeto se propõe a:

| Princípio | Descrição |
|---|---|
| 🧠 **Ensino Multissensorial** | Combina imagem, texto, síntese de voz e reconhecimento de fala ao mesmo tempo, reforçando o aprendizado por associação. |
| 🧘 **Baixa Carga Sensorial e Cognitiva** | Evita elementos que gerem ansiedade, sobrecarga ou distração — sem sons de alerta, sem piscar de tela, sem pressão de tempo. |
| 🔁 **Previsibilidade no Fluxo de Interação** | Mantém sempre a mesma estrutura de etapas, para que a criança saiba o que esperar a cada momento. |
| 🌱 **Reforço Positivo** | Incentiva o progresso sem punições, cronômetros ou comparações competitivas. |
| ⚙️ **Simplicidade Técnica** | Demonstra que acessibilidade de qualidade não exige complexidade, sendo construído inteiramente com Web Components nativos, sem frameworks pesados. |

Em resumo: unir **ensino de idiomas, inclusão real e engenharia enxuta**, colocando a acessibilidade cognitiva no centro do design — e não como um recurso adicional.

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologias & Recursos |
| :--- | :--- |
| **Core** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) |
| **Componentização** | ![Web Components](https://img.shields.io/badge/Web_Components-1976D2?style=for-the-badge&logo=codeforces&logoColor=white) |
| **Estilização** | ![Bootstrap](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white) |
| **Áudio & Voz** | ![Web Speech API](https://img.shields.io/badge/Web_Speech_API-000000?style=for-the-badge&logo=googlechrome&logoColor=white) |
| **Efeitos Visuais** | ![Canvas Confetti](https://img.shields.io/badge/Canvas_Confetti-FFD700?style=for-the-badge&logo=sparkles&logoColor=black) |

---

## 🧩 Acessibilidade Cognitiva & Inclusão (TEA)

O projeto foi estruturado considerando diretrizes de acessibilidade para crianças neurodivergentes e com Transtorno do Espectro Autista (TEA):

| Diretriz | Descrição |
|---|---|
| 🎨 **Interface de Baixa Carga Sensorial** | Design limpo no padrão *Industrial Minimalist*, utilizando contraste adequado, paleta suave e sem elementos ruidosos. |
| 🔁 **Previsibilidade de Interação** | Estrutura clara e padronizada em duas etapas (Escolha Visual → Pronúncia Verbal), evitando surpresas no fluxo. |
| 🔊 **Comunicação Multissensorial** | Estímulos síncronos através de imagem/emoji, texto simples, síntese de voz (Text-to-Speech) e reconhecimento de fala (Speech-to-Text). |
| ❤️ **Reforço Positivo Sem Estresse** | Ausência de cronômetros, contadores de tempo regressivos ou alertas sonoros/visuais punitivos. |
| ♿ **Suporte a Leitores de Tela** | Anúncios de estado em tempo real via regiões dinâmicas ARIA (`aria-live="polite"`). |

---

## 🎮 Como o Mini-Jogo Ajuda Crianças com TEA a Aprender Inglês

| Mecânica | Benefício para TEA |
|---|---|
| 🖼️ Imagem + texto + áudio + fala juntos | Reforça aprendizado por múltiplos sentidos |
| 🔁 Fluxo fixo (Escolha → Pronúncia) | Reduz carga cognitiva, sem surpresas |
| ✅ Feedback imediato e sem julgamento | Evita frustração e medo de errar |
| ⏱️ Sem cronômetro ou pressão de tempo | Reduz ansiedade e sobrecarga sensorial |
| 🏆 Progresso sem ranking/competição | Motiva com reforço positivo genuíno |
| 🎨 Visual calmo, sem estímulos abruptos | Mantém o foco na aprendizagem |

Em resumo: o jogo ensina inglês através de **repetição previsível + multissensorialidade + reforço positivo**, ao invés de competição e pressão de tempo.

## ⚙️ Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/FelipeBritoSP10/devlingo-kids-english

# Acesse a pasta
cd devlingo-kids-english

# Suba um servidor local (necessário para ES Modules)
npx serve .
# ou
python3 -m http.server 8080
```

Acesse em `http://localhost:8080`.

> ⚠️ **Nota:** A Web Speech API requer HTTPS ou `localhost` para funcionar corretamente na maioria dos navegadores.

---

## 🗺️ Roadmap

- [ ] Suporte a múltiplos idiomas de interface (PT-BR / EN / ES)
- [ ] Modo de alto contraste adicional
- [ ] Exportação de relatório de progresso em PDF para terapeutas
- [ ] Integração com LocalStorage/IndexedDB para persistência offline completa
- [ ] Testes de usabilidade com famílias e terapeutas ocupacionais

---
