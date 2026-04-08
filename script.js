document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (!contactForm) {
        return;
    }

    // 1. Variáveis dos campos e textos
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formStatus = document.getElementById("form-status");
    const languageToggle = document.getElementById("language-toggle");
    const navHome = document.getElementById("nav-home");
    const navAbout = document.getElementById("nav-about");
    const navContact = document.getElementById("nav-contact");
    const heroTitle = document.getElementById("hero-title");
    const heroText = document.getElementById("hero-text");
    const heroCta = document.getElementById("hero-cta");
    const aboutTitle = document.getElementById("about-title");
    const aboutWhyTitle = document.getElementById("about-why-title");
    const aboutWhyText = document.getElementById("about-why-text");
    const aboutWhyItem1 = document.getElementById("about-why-item-1");
    const aboutWhyItem2 = document.getElementById("about-why-item-2");
    const aboutWhyItem3 = document.getElementById("about-why-item-3");
    const aboutWhyItem4 = document.getElementById("about-why-item-4");
    const aboutStartTitle = document.getElementById("about-start-title");
    const aboutStartText = document.getElementById("about-start-text");
    const aboutStartItem1 = document.getElementById("about-start-item-1");
    const aboutStartItem2 = document.getElementById("about-start-item-2");
    const aboutStartItem3 = document.getElementById("about-start-item-3");
    const aboutStartItem4 = document.getElementById("about-start-item-4");
    const contactTitle = document.getElementById("contact-title");
    const nameLabel = document.getElementById("name-label");
    const emailLabel = document.getElementById("email-label");
    const messageLabel = document.getElementById("message-label");
    const submitButton = document.getElementById("submit-button");
    
    // PEGANDO OS ELEMENTOS DO RODAPÉ AQUI!
    const footerCopy = document.getElementById("footer-copy");
    const footerAuthor = document.getElementById("footer-author");

    // Validação de segurança para garantir que todos existem na tela
    if (!nameInput || !emailInput || !messageInput || !formStatus || !languageToggle || !navHome || !navAbout || !navContact || !heroTitle || !heroText || !heroCta || !aboutTitle || !aboutWhyTitle || !aboutWhyText || !aboutWhyItem1 || !aboutWhyItem2 || !aboutWhyItem3 || !aboutWhyItem4 || !aboutStartTitle || !aboutStartText || !aboutStartItem1 || !aboutStartItem2 || !aboutStartItem3 || !aboutStartItem4 || !contactTitle || !nameLabel || !emailLabel || !messageLabel || !submitButton || !footerCopy || !footerAuthor) {
        return;
    }

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    if (!nameError || !emailError || !messageError) {
        return;
    }

    // 2. Nosso Dicionário (Adicionei o rodapé no final das duas listas)
    const messages = {
        en: {
            documentTitle: "Fluentify - Language Course",
            navHome: "Home",
            navAbout: "About",
            navContact: "Contact",
            heroTitle: "Master a New Language Faster!",
            heroText: "Practical lessons focused on conversation so you can speak to the world. Open enrollments for English and Spanish classes.",
            heroCta: "Start Practicing for Free",
            aboutTitle: "About Our Course",
            aboutWhyTitle: "Why Choose Fluentify?",
            aboutWhyText: "Discover the benefits of learning with us:",
            aboutWhyItem1: "Native and highly experienced teachers.",
            aboutWhyItem2: "Flexible schedules tailored for busy people.",
            aboutWhyItem3: "Interactive, dynamic, and fun classes.",
            aboutWhyItem4: "Internationally recognized certificate upon completion.",
            aboutStartTitle: "How to Start?",
            aboutStartText: "Follow these simple steps to begin:",
            aboutStartItem1: "Sign up through our platform.",
            aboutStartItem2: "Take a quick, free placement test.",
            aboutStartItem3: "Choose your preferred schedule and teacher.",
            aboutStartItem4: "Start your journey to fluency!",
            contactTitle: "Contact Us",
            nameLabel: "Full Name",
            namePlaceholder: "Enter your full name",
            emailLabel: "Email Address",
            emailPlaceholder: "name@example.com",
            messageLabel: "Message",
            messagePlaceholder: "How can we help you?",
            submitButton: "Send Message",
            toggleButton: "PT",
            nameRequired: "Please enter your full name.",
            nameMinLength: "Your name must be at least 3 characters long.",
            nameInvalidChars: "Use only letters, spaces, apostrophes or hyphens.",
            emailRequired: "Please enter your email.",
            emailInvalid: "Enter a valid email, like name@domain.com.",
            messageRequired: "Describe your question or goal.",
            messageMinLength: "Your message must be at least 10 characters long.",
            messageMaxLength: "Your message must be at most 1000 characters.",
            reviewFields: "Please review the highlighted fields before sending.",
            validRedirecting: "Form is valid. Redirecting...",
            toggleAriaLabel: "Switch language to Portuguese",
            // TRADUÇÕES DO RODAPÉ EM INGLÊS:
            footerCopy: "&copy; 2026 Fluentify. All rights reserved.",
            footerAuthor: "Designed and coded by <strong>Nielson Gomes</strong>."
        },
        pt: {
            documentTitle: "Fluentify - Curso de Idiomas",
            navHome: "Inicio",
            navAbout: "Sobre",
            navContact: "Contato",
            heroTitle: "Domine um novo idioma mais rapido!",
            heroText: "Aulas praticas focadas em conversacao para voce falar com o mundo. Matriculas abertas para cursos de ingles e espanhol.",
            heroCta: "Comecar a praticar gratis",
            aboutTitle: "Sobre nosso curso",
            aboutWhyTitle: "Por que escolher a Fluentify?",
            aboutWhyText: "Descubra as vantagens de aprender com a gente:",
            aboutWhyItem1: "Professores nativos e altamente experientes.",
            aboutWhyItem2: "Horarios flexiveis para a rotina corrida.",
            aboutWhyItem3: "Aulas interativas, dinamicas e divertidas.",
            aboutWhyItem4: "Certificado reconhecido internacionalmente ao concluir.",
            aboutStartTitle: "Como comecar?",
            aboutStartText: "Siga estes passos simples para iniciar:",
            aboutStartItem1: "Cadastre-se na nossa plataforma.",
            aboutStartItem2: "Faca um teste de nivelamento rapido e gratuito.",
            aboutStartItem3: "Escolha o horario e o professor ideal para voce.",
            aboutStartItem4: "Comece sua jornada rumo a fluencia!",
            contactTitle: "Fale com a gente",
            nameLabel: "Nome completo",
            namePlaceholder: "Digite seu nome completo",
            emailLabel: "E-mail",
            emailPlaceholder: "nome@exemplo.com",
            messageLabel: "Mensagem",
            messagePlaceholder: "Como podemos ajudar voce?",
            submitButton: "Enviar mensagem",
            toggleButton: "EN",
            nameRequired: "Informe seu nome completo.",
            nameMinLength: "Seu nome deve ter pelo menos 3 caracteres.",
            nameInvalidChars: "Use apenas letras, espacos, apostrofo ou hifen.",
            emailRequired: "Informe seu e-mail.",
            emailInvalid: "Digite um e-mail valido, como nome@dominio.com.",
            messageRequired: "Descreva sua duvida ou objetivo.",
            messageMinLength: "Sua mensagem deve ter pelo menos 10 caracteres.",
            messageMaxLength: "Sua mensagem deve ter no maximo 1000 caracteres.",
            reviewFields: "Revise os campos destacados antes de enviar.",
            validRedirecting: "Formulario valido. Redirecionando...",
            toggleAriaLabel: "Trocar idioma para ingles",
            // TRADUÇÕES DO RODAPÉ EM PORTUGUÊS:
            footerCopy: "&copy; 2026 Fluentify. Todos os direitos reservados.",
            footerAuthor: "Projetado e codificado por <strong>Nielson Gomes</strong>."
        }
    };

    function getCurrentLanguage() {
        const pageLang = (document.documentElement.lang || "").trim().toLowerCase();
        const browserLang = (navigator.language || "").trim().toLowerCase();
        const rawLang = pageLang || browserLang;

        if (rawLang.startsWith("pt")) {
            return "pt";
        }

        return "en";
    }

    function t(key) {
        const lang = getCurrentLanguage();
        return messages[lang][key] || messages.en[key] || "";
    }

    function applyCurrentLanguageToUI() {
        document.title = t("documentTitle");
        navHome.textContent = t("navHome");
        navAbout.textContent = t("navAbout");
        navContact.textContent = t("navContact");
        heroTitle.textContent = t("heroTitle");
        heroText.textContent = t("heroText");
        heroCta.textContent = t("heroCta");
        aboutTitle.textContent = t("aboutTitle");
        aboutWhyTitle.textContent = t("aboutWhyTitle");
        aboutWhyText.textContent = t("aboutWhyText");
        aboutWhyItem1.textContent = t("aboutWhyItem1");
        aboutWhyItem2.textContent = t("aboutWhyItem2");
        aboutWhyItem3.textContent = t("aboutWhyItem3");
        aboutWhyItem4.textContent = t("aboutWhyItem4");
        aboutStartTitle.textContent = t("aboutStartTitle");
        aboutStartText.textContent = t("aboutStartText");
        aboutStartItem1.textContent = t("aboutStartItem1");
        aboutStartItem2.textContent = t("aboutStartItem2");
        aboutStartItem3.textContent = t("aboutStartItem3");
        aboutStartItem4.textContent = t("aboutStartItem4");
        contactTitle.textContent = t("contactTitle");
        nameLabel.textContent = t("nameLabel");
        emailLabel.textContent = t("emailLabel");
        messageLabel.textContent = t("messageLabel");
        submitButton.textContent = t("submitButton");
        nameInput.placeholder = t("namePlaceholder");
        emailInput.placeholder = t("emailPlaceholder");
        messageInput.placeholder = t("messagePlaceholder");
        languageToggle.textContent = t("toggleButton");
        languageToggle.setAttribute("aria-label", t("toggleAriaLabel"));
        
        // APLICANDO A TRADUÇÃO NO RODAPÉ:
        // Usamos innerHTML no lugar de textContent porque temos as tags &copy; e <strong>
        footerCopy.innerHTML = t("footerCopy");
        footerAuthor.innerHTML = t("footerAuthor");
    }

    function toggleLanguage() {
        const currentLang = getCurrentLanguage();
        document.documentElement.lang = currentLang === "pt" ? "en" : "pt-BR";
        applyCurrentLanguageToUI();
        clearFormStatus();
    }

    function setFieldState(input, errorElement, message) {
        if (message) {
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
            errorElement.textContent = message;
            return false;
        }

        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        errorElement.textContent = "";
        return true;
    }

    function validateName() {
        const value = nameInput.value.trim();
        const fullNameRegex = /^[A-Za-zÀ-ÿ' -]+$/;

        if (!value) {
            return setFieldState(nameInput, nameError, t("nameRequired"));
        }

        if (value.length < 3) {
            return setFieldState(nameInput, nameError, t("nameMinLength"));
        }

        if (!fullNameRegex.test(value)) {
            return setFieldState(nameInput, nameError, t("nameInvalidChars"));
        }

        return setFieldState(nameInput, nameError, "");
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        if (!value) {
            return setFieldState(emailInput, emailError, t("emailRequired"));
        }

        if (!emailRegex.test(value)) {
            return setFieldState(emailInput, emailError, t("emailInvalid"));
        }

        return setFieldState(emailInput, emailError, "");
    }

    function validateMessage() {
        const value = messageInput.value.trim();

        if (!value) {
            return setFieldState(messageInput, messageError, t("messageRequired"));
        }

        if (value.length < 10) {
            return setFieldState(messageInput, messageError, t("messageMinLength"));
        }

        if (value.length > 1000) {
            return setFieldState(messageInput, messageError, t("messageMaxLength"));
        }

        return setFieldState(messageInput, messageError, "");
    }

    function clearFormStatus() {
        formStatus.textContent = "";
        formStatus.className = "mb-3 small";
    }

    languageToggle.addEventListener("click", toggleLanguage);
    applyCurrentLanguageToUI();

    nameInput.addEventListener("input", function () {
        validateName();
        clearFormStatus();
    });

    emailInput.addEventListener("input", function () {
        validateEmail();
        clearFormStatus();
    });

    messageInput.addEventListener("input", function () {
        validateMessage();
        clearFormStatus();
    });

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        clearFormStatus();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            formStatus.textContent = t("reviewFields");
            formStatus.className = "mb-3 small text-danger";

            if (!isNameValid) {
                nameInput.focus();
            } else if (!isEmailValid) {
                emailInput.focus();
            } else {
                messageInput.focus();
            }

            return;
        }

        formStatus.textContent = t("validRedirecting");
        formStatus.className = "mb-3 small text-success";
        window.location.href = "obrigado.html";
    });
});