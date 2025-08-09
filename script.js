const translations = {
    fr: {
        home: "Accueil",
        services: "Nos Services",
        contact: "Contact",
        welcome: "Bienvenue chez 3T Services Technology",
        intro: "Nous offrons des solutions innovantes pour la maintenance, le cyberspace et le conseil.",
        maintenance: "Maintenance",
        cyber: "Cyber espace",
        advice: "Conseils"
    },
    en: {
        home: "Home",
        services: "Our Services",
        contact: "Contact",
        welcome: "Welcome to 3T Services Technology",
        intro: "We provide innovative solutions for maintenance, cyberspace, and consulting.",
        maintenance: "Maintenance",
        cyber: "Cyberspace",
        advice: "Consulting"
    },
    es: {
        home: "Inicio",
        services: "Nuestros Servicios",
        contact: "Contacto",
        welcome: "Bienvenido a 3T Services Technology",
        intro: "Ofrecemos soluciones innovadoras para mantenimiento, ciberespacio y consultoría.",
        maintenance: "Mantenimiento",
        cyber: "Ciberespacio",
        advice: "Consultoría"
    },
    pt: {
        home: "Início",
        services: "Nossos Serviços",
        contact: "Contato",
        welcome: "Bem-vindo à 3T Services Technology",
        intro: "Oferecemos soluções inovadoras para manutenção, ciberespaço e consultoria.",
        maintenance: "Manutenção",
        cyber: "Ciberespaço",
        advice: "Consultoria"
    },
    ca: {
        home: "Inici",
        services: "Els Nostres Serveis",
        contact: "Contacte",
        welcome: "Benvingut a 3T Services Technology",
        intro: "Oferim solucions innovadores per al manteniment, ciberespai i consultoria.",
        maintenance: "Manteniment",
        cyber: "Ciberespai",
        advice: "Consultoria"
    }
};

document.getElementById("lang-switcher").addEventListener("change", function() {
    const lang = this.value;
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        el.textContent = translations[lang][key];
    });
});
