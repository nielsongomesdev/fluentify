document.addEventListener("DOMContentLoaded", function () {
	const languageToggle = document.getElementById("language-toggle");
	const thanksTitle = document.getElementById("thanks-title");
	const thanksText = document.getElementById("thanks-text");
	const thanksCta = document.getElementById("thanks-cta");

	if (!languageToggle || !thanksTitle || !thanksText || !thanksCta) {
		return;
	}

	const messages = {
		en: {
			documentTitle: "Thank You! - Fluentify",
			title: "Thank You!",
			text: "Your message has been sent successfully. We will get back to you soon.",
			cta: "Back to Home",
			toggleButton: "PT",
			toggleAriaLabel: "Switch language to Portuguese"
		},
		pt: {
			documentTitle: "Obrigado! - Fluentify",
			title: "Obrigado!",
			text: "Sua mensagem foi enviada com sucesso. Em breve entraremos em contato.",
			cta: "Voltar para o inicio",
			toggleButton: "EN",
			toggleAriaLabel: "Trocar idioma para ingles"
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
		thanksTitle.textContent = t("title");
		thanksText.textContent = t("text");
		thanksCta.textContent = t("cta");
		languageToggle.textContent = t("toggleButton");
		languageToggle.setAttribute("aria-label", t("toggleAriaLabel"));
	}

	function toggleLanguage() {
		const currentLang = getCurrentLanguage();
		document.documentElement.lang = currentLang === "pt" ? "en" : "pt-BR";
		applyCurrentLanguageToUI();
	}

	languageToggle.addEventListener("click", toggleLanguage);
	applyCurrentLanguageToUI();
});
