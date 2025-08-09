
const translations = {
    fr: { home: "Accueil", services: "Nos Services", contact: "Contact",
          maintenance: "Maintenance", cyber: "Cyber espace", advice: "Conseils" },
    en: { home: "Home", services: "Our Services", contact: "Contact",
          maintenance: "Maintenance", cyber: "Cyberspace", advice: "Advice" },
    es: { home: "Inicio", services: "Nuestros Servicios", contact: "Contacto",
          maintenance: "Mantenimiento", cyber: "Ciberespacio", advice: "Consejos" },
    pt: { home: "Início", services: "Nossos Serviços", contact: "Contato",
          maintenance: "Manutenção", cyber: "Ciberespaço", advice: "Conselhos" },
    ca: { home: "Inici", services: "Els Nostres Serveis", contact: "Contacte",
          maintenance: "Manteniment", cyber: "Ciberespai", advice: "Consells" }
};

document.getElementById("language-switcher").addEventListener("change", function() {
    const lang = this.value;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });
});
