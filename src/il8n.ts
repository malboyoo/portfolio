import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          header: {
            home: "Home",
            projects: "Projects",
            resume: "Resume",
          },
          topSection: {
            stack: "Full-stack developer",
            main: `Code is not just a job,
            it's a passion.`,
            quote: "The most important thing is to have a good time doing it.",
            contact: "Contact Me",
          },
          bottomSection: {
            skills: "Skills & Others",
            introduce: "Introduction",
            name: "Hello, I'm Thibaut Lefevre",
            description: `A full-stack React developer with a passion for building intuitive and dynamic web applications.`,
            longText: `As a developer specialized in React, TypeScript, and NodeJS technologies, I am excited to use my skills and knowledge to contribute to your project. I am a self-motivated, responsive, proactive person, always looking for new challenges. I am ready to fully commit to your company and adapt to your needs to contribute to its success.`,
          },
          projects: {
            alt: "Preview of the website",
            preview: "Preview",
            siteasso: `A complete associative website for the Stade Cubzaguais Athlétisme sports club. Built with modern technologies including 
            Vite, React, React Query, ShadCN, TailwindCSS, and Supabase for the backend. Features a comprehensive back office for managing 
            news, important site messages, events, user management, a member directory, sections, and registrations. 
            This project demonstrates full-stack development skills with a focus on user experience and administrative efficiency.`,
            pharmacie: `A custom web application for a pharmacy group. Ongoing development for over 2 years. Working in a team with a backend developer, 
            I use React, Tailwind CSS, and Ant Design. This project showcases advanced frontend skills including 
            custom data visualizations, sophisticated UI components, interactive dashboards 
            and geolocation features. Private enterprise project.`,
            crm: `An internal CRM for an IT services company built with Vue.js. This comprehensive platform manages 
            clients across multiple business units (Management Solutions, Telecom, Cloud, Digital Transformation, Software Engineering, Web Marketing). 
            Features include subscription management, internal challenges, performance analytics, competitor tracking, 
            and opportunity pipeline management. Currently in active development. Private enterprise project.`,
            runtogether: `My first full-stack project, it was a real challenge as I had to manage all aspects of the project on my own. 
            This running activities planner allows users to plan their activities with their friends. 
            If you are interested, you can view the features and code in the Github repository.`,
            kasa: `The last project of the Openclassrooms certification training and my first experience with ReactJS, a perfect project to learn the fundamentals of the framework.`,
            piquante: `My first back-end project as part of my Openclassrooms training. I learned a lot of new things and had a great time understanding all the parts of an API.
            I really enjoyed the development process of this project.`,
            kanap: `Project 5 of the certifying training, 
            which focused on using vanilla JavaScript to interact with APIs, manage a cart, and handle input errors.`,
            ohmyfood: `Project 3 certifying training from Openclassrooms, which focused on mobile-first design and advanced CSS animation. 
            I learned a lot about CSS during this course and feel confident in my skills in this area.`,
          },
          resume: {
            status: "Open to work",
            about: "My resume is entirely made with HTML and CSS.",
            download: "Download in PDF format",
          },
          error: {
            error: "Page not found.",
            return: "Return to home",
          },
        },
      },
      fr: {
        translation: {
          header: {
            home: "Accueil",
            projects: "Projets",
            resume: "CV",
          },
          topSection: {
            stack: "Développeur full-stack",
            main: `Coder n'est pas juste un job,
            C'est une passion.`,
            quote: "La persévérance est la clé de la réussite.",
            contact: "Contactez Moi",
          },
          bottomSection: {
            skills: "Compétences & Autres",
            introduce: "Présentation",
            name: "Salut, moi c'est Thibaut",
            description: `Un développeur full-stack passionné par la création d'applications web intuitives et dynamiques.`,
            longText: `En tant que développeur spécialisé dans les technologies React, TypeScript et NodeJS, je suis enthousiaste à l'idée de mettre mes compétences et mes connaissances au service de votre projet. 
            Je suis une personne autonome, à l'écoute, force de proposition et toujours à la recherche de nouveaux défis. Je suis prêt à m'investir pleinement dans votre entreprise et à m'adapter à vos besoins pour contribuer à son succès.`,
          },
          projects: {
            alt: "Prévisualisation du site",
            preview: "Site",
            siteasso: `Un site web associatif complet pour le club sportif Stade Cubzaguais Athlétisme. Développé avec des technologies modernes incluant 
            Vite, React, React Query, ShadCN, TailwindCSS et Supabase pour le backend. Dispose d'un back office complet pour la gestion 
            des actualités, messages importants, événements, gestion des utilisateurs, trombinoscope, sections et inscriptions. 
            Ce projet démontre des compétences de développement full-stack avec un accent sur l'expérience utilisateur et l'efficacité administrative.`,
            pharmacie: `Une application web sur mesure pour un groupe de pharmacies. En développement continu depuis plus de 2 ans. En équipe avec un développeur backend, 
            j'utilise React, Tailwind CSS et Ant Design. Ce projet met en valeur des compétences frontend avancées incluant 
            la visualisation de données personnalisées, des composants UI sophistiqués, des tableaux de bord interactifs 
            et des fonctionnalités de géolocalisation. Projet d'entreprise privé.`,
            crm: `Un CRM interne pour une société de services informatiques développé avec Vue.js. Cette plateforme complète gère 
            les clients à travers plusieurs BU (Solutions de Gestion, Télécom, Cloud, Digitalisation, Génie Logiciel, Webmarketing). 
            Fonctionnalités incluant la gestion d'abonnements, des challenges internes, des statistiques de performance, 
            le suivi concurrentiel et la gestion du pipeline d'opportunités. Actuellement en développement actif. Projet d'entreprise privé.`,
            runtogether: `Mon premier projet full-stack, un véritable défi car j'ai dû gérer tous les aspects du projet seul. 
            Ce planificateur d'activités de running permet aux utilisateurs de planifier leurs sorties entre amis. 
            Pour plus de détails, consultez le répertoire Github.`,
            kasa: `Le dernier projet de la formation certifiante Openclassrooms. 
            Ma première expérience avec ReactJS, un projet parfait pour apprendre les fondamentaux du framework.`,
            piquante: `Mon premier projet back-end dans le cadre de ma formation Openclassrooms.
            J'ai appris beaucoup de nouvelles choses et j'ai passé un très bon moment à comprendre toutes les parties d'une API. J'ai vraiment apprécié le processus de développement de ce projet.`,
            kanap: `Projet 5 de la formation Openclassrooms, qui portait sur l'utilisation de JavaScript(vanilla) pour interagir avec des API, gérer un panier et gérer les éventuelles erreurs d'entrée des utilisateurs.`,
            ohmyfood: `Projet 3 de la formation certifiante Openclassrooms. Ce projet à mis l'accent sur la conception de site web "mobile-first" ainsi que sur les animations CSS.
            J'ai acquis de solides connaissances en CSS grâce à ce projet.`,
          },
          resume: {
            status: "Et si on travaillait ensemble ?",
            about: "CV réalisé avec HTML et CSS.",
            download: "Télécharger au format PDF",
          },
          error: {
            error: "Cette page n'existe pas.",
            return: "Retourner à l'accueil",
          },
        },
      },
    },
  });

export default i18n;
