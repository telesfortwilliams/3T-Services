const translations = {
  fr: {
    nav_home: "Accueil", nav_services:"Nos Services", nav_about:"À propos", nav_contact:"Contact",
    hero_title:"Innovation et sécurité pour votre croissance", hero_sub:"Solutions sur mesure : maintenance, cybersécurité, conseils.", hero_cta:"Découvrir nos services",
    services_title:"Nos Services",
    srv_maintenance:"Maintenance", srv_maintenance_desc:"Assurer la continuité et la performance de vos systèmes.",
    srv_cyber:"Cyber espace", srv_cyber_desc:"Protection avancée contre les menaces numériques.",
    srv_consulting:"Conseils", srv_consulting_desc:"Accompagnement stratégique pour vos projets technologiques."
  },
  en: {
    nav_home:"Home", nav_services:"Our Services", nav_about:"About", nav_contact:"Contact",
    hero_title:"Innovation and security for your growth", hero_sub:"Tailor-made solutions: maintenance, cybersecurity, consulting.", hero_cta:"Discover our services",
    services_title:"Our Services",
    srv_maintenance:"Maintenance", srv_maintenance_desc:"Ensure continuity and performance of your systems.",
    srv_cyber:"Cyberspace", srv_cyber_desc:"Advanced protection against digital threats.",
    srv_consulting:"Consulting", srv_consulting_desc:"Strategic support for your technology projects."
  },
  es: {
    nav_home:"Inicio", nav_services:"Nuestros Servicios", nav_about:"Acerca de", nav_contact:"Contacto",
    hero_title:"Innovación y seguridad para tu crecimiento", hero_sub:"Soluciones a medida: mantenimiento, ciberseguridad, consultoría.", hero_cta:"Descubre nuestros servicios",
    services_title:"Nuestros Servicios",
    srv_maintenance:"Mantenimiento", srv_maintenance_desc:"Garantizar la continuidad y el rendimiento de sus sistemas.",
    srv_cyber:"Ciberespacio", srv_cyber_desc:"Protección avanzada contra amenazas digitales.",
    srv_consulting:"Consultoría", srv_consulting_desc:"Asesoramiento estratégico para sus proyectos tecnológicos."
  },
  pt: {
    nav_home:"Início", nav_services:"Nossos Serviços", nav_about:"Sobre", nav_contact:"Contato",
    hero_title:"Inovação e segurança para o seu crescimento", hero_sub:"Soluções sob medida: manutenção, cibersegurança, consultoria.", hero_cta:"Conheça nossos serviços",
    services_title:"Nossos Serviços",
    srv_maintenance:"Manutenção", srv_maintenance_desc:"Garantir a continuidade e o desempenho dos seus sistemas.",
    srv_cyber:"Ciberespaço", srv_cyber_desc:"Proteção avançada contra ameaças digitais.",
    srv_consulting:"Consultoria", srv_consulting_desc:"Apoio estratégico para seus projetos tecnológicos."
  },
  ca: {
    nav_home:"Inici", nav_services:"Els Nostres Serveis", nav_about:"Sobre", nav_contact:"Contacte",
    hero_title:"Innovació i seguretat per al teu creixement", hero_sub:"Solucions a mida: manteniment, ciberseguretat, consultoria.", hero_cta:"Descobreix els nostres serveis",
    services_title:"Els Nostres Serveis",
    srv_maintenance:"Manteniment", srv_maintenance_desc:"Garantir la continuïtat i el rendiment dels teus sistemes.",
    srv_cyber:"Ciberespai", srv_cyber_desc:"Protecció avançada contra amenaces digitals.",
    srv_consulting:"Consells", srv_consulting_desc:"Suport estratègic per als teus projectes tecnològics."
  }
};

document.getElementById('lang').addEventListener('change', function(){
  const lang = this.value;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
  });
});
