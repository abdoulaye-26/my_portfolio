// Dictionnaire français (langue par défaut du site).
// Le type `Dictionary` oblige à avoir exactement les mêmes clés que en.ts.
// Les formulations reprennent celles des CV français (cv.yaml) quand elles existent.

import type { Dictionary } from './en'

export const fr: Dictionary = {
  meta: {
    title: 'Abdoulaye Sène | Développeur Full-Stack & DevOps',
    description:
      'Développeur full-stack & DevOps à Dakar (Sénégal), avec environ 2 ans d’expérience en entreprise. Ouvert aux missions freelance, aux postes à temps plein et aux doctorats entièrement financés en IA pour le génie logiciel & le DevOps.',
    shareDescription:
      'Sites et applications web, du code à la production. Ouvert aux missions freelance, aux postes à temps plein et au doctorat.',
    ogTagline: 'Sites et applications web, du code à la production',
    ogFooter: 'Freelance · Temps plein · Doctorat 2027–2028 · Malika, Dakar',
  },

  profile: {
    headline: 'Développeur Full-Stack & DevOps',
    location: 'Malika, Dakar, Sénégal',
    availability: 'Disponible pour des missions freelance, des postes à temps plein et un doctorat',
    workMode: 'Au Sénégal ou à l’international · en présentiel ou à distance',
  },

  ui: {
    language: 'Langue',
    toggleMenu: 'Ouvrir ou fermer le menu',
    backToTop: 'Retour en haut',
    email: 'E-mail',
    toggleTheme: 'Basculer entre le thème clair et le thème sombre',
    skipToContent: 'Aller au contenu',
    // French typography: a space before the colon
    colon: ' :',
  },

  nav: {
    links: {
      about: 'À propos',
      projects: 'Projets',
      experience: 'Expérience',
      research: 'Recherche',
      skills: 'Compétences',
      devops: 'DevOps',
      contact: 'Contact',
    },
    hireMe: 'Me contacter',
  },

  hero: {
    greeting: 'Bonjour, je suis',
    titleLine1: 'Je crée des applications web',
    titleLine2: 'et je les mets en production.',
    ctaProjects: 'Voir mes projets',
    ctaContact: 'Me contacter',
    audiencesTitle: 'Par où voulez-vous commencer ?',
    intro:
      'Je conçois, développe et déploie des applications web rapides et fiables avec **Next.js / React**, **Django, Node.js & Spring Boot**, livrées avec **Docker, CI/CD & GitOps**.',
    paths: {
      clients: {
        eyebrow: 'Pour les clients',
        title: 'Besoin d’un site ou d’une application web ?',
        text: 'Sites vitrines, e-commerce, applications web sur mesure, refonte WordPress → Next.js, déploiement et maintenance.',
        primary: 'Me confier un projet',
        secondary: 'Voir mes réalisations',
      },
      recruiters: {
        eyebrow: 'Pour les recruteurs',
        title: 'Vous recrutez un développeur ?',
        text: 'Environ 2 ans d’expérience en entreprise en développement full-stack et DevOps. Temps plein, à distance ou en présentiel.',
        primary: 'CV professionnel',
        secondary: 'Expériences',
      },
      phd: {
        eyebrow: 'Pour les comités de doctorat',
        title: 'Futur doctorant',
        text: 'Master en Ingénierie Logicielle (M2). Axe de recherche : IA pour le génie logiciel & le DevOps. Début de doctorat en 2027–2028.',
        primary: 'CV académique',
        secondary: 'Recherche',
      },
    },
  },

  about: {
    eyebrow: '01. À PROPOS',
    title: 'Je développe, je déploie **et je maintiens en production.**',
    paragraphs: [
      'Je suis **{name}**, développeur full-stack et DevOps basé à Malika (Dakar), avec environ 2 ans d’expérience en entreprise. Je travaille aujourd’hui en freelance : je crée des sites et des applications web pour des organisations et des entreprises, dont une association, une société immobilière et, chez Labdevit, des plateformes e-commerce.',
      'Ma particularité : je m’occupe à la fois **du code et de son exploitation**. Chez Labdevit, j’ai déployé des applications clients sur des VPS avec Docker, des pipelines CI/CD, le GitOps (ArgoCD) et l’observabilité OpenTelemetry. Je pense donc au déploiement et à la fiabilité dès le premier jour.',
      'En parallèle, je termine un **Master en Ingénierie Logicielle** à l’UN-CHK et je prépare un doctorat en informatique, centré sur l’apprentissage automatique au service d’une livraison et d’une exploitation des logiciels plus fiables.',
    ],
    highlights: {
      web: 'Développement web de bout en bout',
      devops: 'DevOps en production : Docker, CI/CD, GitOps',
      research: 'Axe de recherche : IA pour le génie logiciel & le DevOps',
      degree: 'Master en Ingénierie Logicielle : M2 en cours',
    },
    stats: {
      experience: { value: '~2 ans', label: 'D’expérience en entreprise' },
      master: { value: 'M2', label: 'Master Ingénierie Logicielle' },
      bachelors: { value: '2', label: 'Licences' },
      languages: { value: 'FR · EN', label: 'Langues de travail' },
    },
    github: {
      title: 'Profil GitHub',
      text: 'Projets personnels, académiques et en équipe',
      cta: 'Voir',
    },
  },

  projects: {
    eyebrow: '02. PROJETS PHARES',
    title: 'Des projets **conçus et livrés**',
    intro:
      'Sites freelance, projets clients réalisés chez Labdevit et projets d’équipe. Chaque carte précise mon rôle exact. Ouvrez **Voir l’étude de cas** pour les détails.',
    status: { live: 'En ligne', inProgress: 'En cours' },
    myRole: 'Mon rôle :',
    problem: 'Problème',
    solution: 'Solution',
    features: 'Fonctionnalités clés',
    challenges: 'Défis techniques',
    outcome: 'Résultat',
    showCaseStudy: 'Voir l’étude de cas',
    hideCaseStudy: 'Masquer l’étude de cas',
    visitSite: 'Voir le site en ligne',
    liveSiteLabel: '{title} : site en ligne',
    githubRepo: 'Dépôt GitHub',
    moreOnGithub: 'Plus de projets et d’expérimentations sur GitHub.',
    allOnGithub: 'Voir tous mes projets sur GitHub',
    items: {
      'reveil-espoir': {
        title: 'REVEIL ESPOIR',
        tagline: 'Site web d’une association à but non lucratif',
        type: 'Freelance · Site associatif',
        context: 'Client freelance : association de Yeumbeul Nord, Sénégal',
        role: 'Conception, développement et déploiement de tout le site',
        problem:
          'Une jeune association engagée dans l’éducation, la santé et l’environnement à Yeumbeul Nord avait besoin d’un site web pour présenter sa mission et ses actions.',
        solution:
          'Un site Next.js responsive dont tout le contenu tient dans un seul fichier de données : les informations de l’association se mettent à jour sans toucher aux composants. Déployé sur Vercel.',
      },
      trubus: {
        title: 'TRUBUS Consortium',
        tagline: 'Site vitrine conçu à partir des affiches du client',
        type: 'Freelance · Site d’entreprise',
        context: 'Client freelance : société d’immobilier et de services aux entreprises à Malika',
        role: 'Seul développeur : structure du contenu, design et développement',
        problem:
          'Le client n’avait pas de site web et ne pouvait fournir que des affiches et des cartes de visite imprimées, sans photos séparées ni textes rédigés.',
        solution:
          'Un site statique en français dont le contenu et les visuels sont tirés des affiches du client, avec tous les textes regroupés dans un seul fichier de contenu. Exporté en HTML statique pour un hébergement rapide et peu coûteux.',
      },
      senuniversbio: {
        title: 'senuniversbio.com',
        tagline: 'Marketplace de produits bio, refaite à partir de WordPress',
        type: 'Client Labdevit · E-commerce',
        context: 'Projet client chez Labdevit',
        role: 'Développeur full-stack sur la refonte',
        problem: 'Une marketplace sénégalaise de produits bio et naturels fonctionnait sous WordPress.',
        solution:
          'Refonte de la marketplace en application Next.js 14 avec Prisma, PostgreSQL et NextAuth.js pour l’authentification.',
      },
      mimicheparfum: {
        title: 'mimicheparfum.com',
        tagline: 'Refonte e-commerce pour une marque de parfums française',
        type: 'Client Labdevit · E-commerce',
        context: 'Projet client chez Labdevit',
        role: 'Développeur au sein de l’équipe Labdevit',
        problem: 'Le site e-commerce d’une marque de parfums française avait besoin d’une refonte.',
        solution:
          'Refonte de la boutique sur la même stack que senuniversbio : Next.js, Prisma, PostgreSQL et NextAuth.js.',
      },
      sbb: {
        title: 'Smart Bibliothèque Banlieue',
        tagline: 'BSD Learn : un espace d’apprentissage numérique gratuit pour la banlieue de Dakar',
        type: 'Projet de hackathon · Full-stack (MERN)',
        context: 'Banlieue Smart Days 2025, Banlieue Smart Genius (Yeumbeul)',
        role: 'Développeur : frontend et backend',
        problem:
          'Dans la banlieue sénégalaise, les jeunes peinent à trouver des ressources d’apprentissage, des formations, des informations sur les écoles et des offres d’emploi : l’information est dispersée, souvent payante et rarement adaptée au contexte local.',
        solution:
          'Une plateforme web centralisée qui réunit une bibliothèque numérique, un catalogue de formations en ligne, un annuaire des écoles sénégalaises et des offres d’emploi, avec des recommandations personnalisées.',
        features: [
          'Bibliothèque numérique d’articles, de tutoriels et de livres PDF gratuits, avec recherche dans des API externes',
          'Catalogue de formations en ligne filtrées par niveau, avec suivi des inscriptions',
          'Annuaire des écoles et centres de formation au Sénégal',
          'Offres d’emploi avec un parcours de candidature intégré',
          'Authentification JWT ; API Express avec validation des requêtes (Joi), Helmet et journalisation structurée (pino)',
        ],
      },
      taskflow: {
        title: 'TaskFlow',
        tagline: 'Application de gestion de tâches de type Kanban',
        type: 'Application web full-stack',
        context: 'Projet indépendant',
        role: 'Seul développeur : frontend et backend',
        problem: 'Organiser des tâches par étapes demande un tableau visuel clair.',
        solution:
          'Une application de tâches de type Kanban avec un frontend Angular et un backend Next.js + Prisma + PostgreSQL.',
      },
      easyservice: {
        title: 'EasyService',
        tagline: 'Plateforme de gestion de services',
        type: 'Projet d’équipe · MERN',
        context: 'Projet d’équipe pendant le stage chez Bakeli (Volkeno)',
        role: 'Développeur backend ; contributions au frontend (Redux Toolkit, contact & messagerie, avis)',
        problem:
          'Une entreprise avait besoin d’un système unique pour organiser ses prestations : planification, facturation et suivi client, avec une conception modulaire ouverte aux intégrations.',
        solution:
          'Une plateforme MERN où les prestataires publient leurs services, gèrent les demandes reçues et suivent l’état des missions depuis un tableau de bord.',
        features: [
          'Publication et catégorisation des services',
          'Envoi et suivi des demandes clients',
          'Tableau de bord prestataire avec pipeline des missions',
          'Gestion des statuts (en attente, en cours, terminé)',
          'API REST avec Express.js et MongoDB',
        ],
        githubLabel: 'Mes commits dans le dépôt de l’équipe',
      },
      hotel: {
        title: 'Plateforme de réservation d’hôtel',
        tagline: 'Tableau de bord des réservations et de la gestion des chambres',
        type: 'Projet d’équipe · MERN',
        context: 'Projet collaboratif pendant le stage chez Bakeli (Volkeno)',
        role: 'Développeur frontend : conception de l’interface et intégration avec l’API',
        problem:
          'Les petits hôtels qui gèrent leurs réservations à la main risquent la surréservation et perdent le fil de la disponibilité des chambres.',
        solution:
          'Un tableau de bord MERN pour la disponibilité des chambres, les réservations et les arrivées / départs.',
        features: [
          'Vue de la disponibilité des chambres',
          'Gestion des réservations clients',
          'Processus d’arrivée et de départ',
          'API REST développée avec Express.js',
        ],
      },
      'learn-easy': {
        title: 'Learn Easy',
        tagline: 'Application web d’e-learning',
        type: 'Application web full-stack',
        context: 'Projet d’équipe',
        role: 'Développeur backend',
        problem: 'Apprenants et enseignants ont besoin d’un espace unique pour partager des cours et suivre leur progression.',
        solution:
          'Une application web d’e-learning avec des espaces distincts pour les étudiants, les enseignants et les administrateurs.',
      },
    },
  },

  experience: {
    eyebrow: '03. EXPÉRIENCE',
    title: 'Là où j’ai **travaillé**',
    downloadCv: 'Télécharger le CV professionnel (PDF)',
    workTitle: 'Expériences professionnelles',
    competitionsTitle: 'Hackathons & compétitions',
    jobs: {
      freelance: {
        role: 'Développeur Full-Stack indépendant',
        period: '2026 – aujourd’hui',
        location: 'À distance',
        highlights: [
          'TRUBUS Consortium (immobilier & services, Malika) : site web conçu à partir des supports visuels du client (en cours)',
          'REVEIL ESPOIR (association, Yeumbeul Nord) : conception, développement et déploiement du site sur Vercel',
        ],
      },
      labdevit: {
        role: 'Développeur Full-Stack & DevOps',
        period: 'Déc. 2025 – Août 2026',
        location: 'Dakar, Sénégal',
        highlights: [
          'Refonte de senuniversbio.com (marketplace de produits bio) : migration WordPress → Next.js 14, Prisma, PostgreSQL, NextAuth.js',
          'Projets clients : refonte e-commerce de mimicheparfum.com ; accompagnement de la publication de l’app mobile Studpay sur Google Play',
          'Déploiement sur VPS (SSH, Docker) avec Portainer, Nginx Proxy Manager, pipelines CI/CD, GitOps (ArgoCD) et observabilité (OpenTelemetry)',
        ],
      },
      infocom: {
        role: 'Stagiaire en Développement Web',
        period: 'Avr. 2025 – Nov. 2025',
        location: 'Dakar, Sénégal',
        highlights: [
          'Développement et maintenance d’applications web Django / React',
          'Conception de modules API et optimisation des performances',
          'Travail aux côtés des équipes frontend et backend',
        ],
      },
      bakeli: {
        role: 'Stagiaire en Développement Web',
        period: 'Déc. 2024 – Mars 2025',
        location: 'En ligne',
        highlights: [
          'Développeur backend sur EasyService, une plateforme de gestion de services développée en équipe',
          'Plateforme collaborative de réservation d’hôtel avec React, Node.js et MongoDB',
          'Intégration d’API REST',
        ],
      },
      tgi: {
        role: 'Stagiaire Maintenance & Développement Web',
        period: 'Mai 2023 – Juil. 2023',
        location: 'Dakar, Sénégal',
        highlights: [
          'Maintenance informatique et support technique',
          'Création de contenus graphiques',
          'Petites tâches de développement web',
        ],
      },
    },
    competitions: [
      {
        title: 'Banlieue Smart Days',
        organizer: 'Banlieue Smart Genius · Yeumbeul',
        period: '2025',
        note: 'Concours d’innovation : création de Smart Bibliothèque Banlieue (BSD Learn), un espace d’apprentissage numérique. À nouveau en compétition en 2026.',
      },
      {
        title: 'Hackathon Blockchain : système de vote électronique',
        organizer: 'Bold African Movement (BAM)',
        period: 'Oct. 2024',
        note: 'Prototype en équipe d’une application de vote électronique basée sur la blockchain.',
      },
      { title: 'Hackathon Dakar Innovation Days', organizer: 'Ville de Dakar', period: 'Juil. 2024', note: null },
      { title: 'Hackathon SENGAM', organizer: 'SENGAM · GoMyCode, Dakar', period: 'Avr. 2024', note: null },
      {
        title: 'Hackathon en ligne : jeu « YourPast Hunts You »',
        organizer: 'En ligne',
        period: null,
        note: 'Création d’un jeu web interactif de A à Z pendant la compétition.',
      },
      { title: 'Hackathon en ligne', organizer: 'Bakeli (Volkeno), Sénégal', period: null, note: null },
    ],
  },

  research: {
    eyebrow: '04. RECHERCHE & FORMATION',
    title: 'Vers un doctorat en **IA pour le génie logiciel**',
    statement: [
      'Mon travail concret sur les pipelines CI/CD, le GitOps, les déploiements conteneurisés et l’observabilité en production a orienté mon projet de recherche : utiliser l’apprentissage automatique pour rendre la livraison et l’exploitation des logiciels plus fiables et plus efficaces, en particulier dans les environnements à ressources limitées, fréquents en Afrique.',
      'Je recherche un doctorat entièrement financé en informatique à partir de 2027-2028.',
    ],
    cvPrimary: 'CV académique (FR)',
    cvOther: 'Version anglaise (EN)',
    interestsTitle: 'Axes de recherche',
    primaryInterest: 'Axe principal',
    interests: {
      aiSe: 'IA pour le génie logiciel & le DevOps',
      iot: 'Sécurité de l’IoT par apprentissage automatique',
      efficientMl: 'Systèmes de ML économes en ressources',
      distributed: 'Systèmes distribués & cloud-native',
    },
    projectsTitle: 'Projets de recherche & techniques',
    projects: {
      gitops: {
        title: 'GitOps & observabilité en production',
        context: 'Labdevit (contexte industriel)',
        period: '2025 – 2026',
        description:
          'Déploiement d’applications clients avec CI/CD, GitOps (ArgoCD) et traçage OpenTelemetry : le contexte opérationnel qui motive mon intérêt pour un DevOps piloté par le ML.',
      },
      multiAgent: {
        title: 'Assistant de rédaction multi-agents (prototype)',
        context: 'Projet personnel',
        period: null,
        description:
          'Conception d’un pipeline séquentiel d’agents LLM pour rédiger des publications professionnelles ; étude des modèles d’orchestration d’agents.',
      },
      k8s: {
        title: 'Laboratoire de déploiement Kubernetes',
        context: 'Projet autodidacte',
        period: 'En cours',
        description:
          'Projet documenté de déploiement d’une application full-stack sur Kubernetes, évoluant vers le GitOps (ArgoCD) et le monitoring.',
      },
      evoting: {
        title: 'Vote électronique sur blockchain',
        context: 'Hackathon, BAM (Bold African Movement)',
        period: '2024',
        description: 'Prototype en équipe d’une application de vote électronique basée sur la blockchain.',
      },
    },
    educationTitle: 'Formation',
    status: { inProgress: 'En cours', completed: 'Obtenu' },
    degrees: {
      msc: {
        degree: 'Master en Ingénierie Logicielle',
        institution: 'Université Numérique Cheikh Hamidou Kane (UN-CHK), Sénégal',
        period: '2024 – aujourd’hui',
        details: [
          'M1 validé ; M2 en cours.',
          'Enseignements : génie logiciel, algorithmique distribuée, architectures orientées services, gestion de projets informatiques, culture numérique.',
        ],
      },
      bscMath: {
        degree: 'Licence en Mathématiques Appliquées et Informatique',
        institution: 'UN-CHK, Sénégal (formation en ligne)',
        period: '2020 – 2024',
        details: [
          'Mention Assez Bien.',
          'Projet de fin d’études : conception et développement d’une application web d’e-learning.',
        ],
      },
      bscEng: {
        degree: 'Licence en Génie Informatique',
        institution: 'Université Professionnelle du Sénégal (UNIPRO)',
        period: '2021 – 2023',
        details: [
          'Mention Assez Bien.',
          'Formation en présentiel, suivie en parallèle de la licence UN-CHK.',
          'Projet de fin d’études : application web d’e-learning.',
        ],
      },
      bac: { degree: 'Baccalauréat S2 (sciences)', institution: 'CPCATL, Sénégal', period: '2020', details: [] },
    },
    certificationsTitle: 'Certifications & formations',
    certifications: [
      { title: 'Networking Essentials', issuer: 'Cisco Networking Academy, via Force-N / UN-CHK', date: 'Févr. 2023' },
      { title: 'Open Science 101', issuer: 'NASA (en ligne)', date: '2026' },
    ],
    languagesTitle: 'Langues',
    languages: [
      { name: 'Français', level: 'Courant' },
      { name: 'Anglais', level: 'Intermédiaire (B2) ; IELTS Academic en préparation' },
    ],
    currentlyLearning: 'En cours d’apprentissage :',
    communityTitle: 'Engagement associatif',
    community: [
      { title: 'Speak Easy English', text: 'Membre d’un projet de cours d’anglais gratuits au Sénégal.' },
      { title: 'REVEIL ESPOIR', text: 'Conception et déploiement du site web de cette association de Yeumbeul Nord.' },
    ],
  },

  skills: {
    eyebrow: '05. COMPÉTENCES TECHNIQUES',
    title: 'Une **stack technique** complète',
    intro: 'Des composants d’interface aux manifestes Kubernetes, pour livrer un produit de bout en bout.',
    categories: {
      frontend: 'Frontend & mobile',
      backend: 'Backend & API',
      databases: 'Bases de données',
      devops: 'DevOps & infra',
      ai: 'IA & recherche (en apprentissage)',
      tools: 'Outils & design',
    },
    names: {
      flutter: 'Flutter (mobile)',
      ml: 'Machine learning (PyTorch)',
      llm: 'API LLM & pipelines multi-agents',
    },
  },

  levels: {
    advanced: 'Avancé',
    proficient: 'Maîtrisé',
    intermediate: 'Intermédiaire',
    learning: 'En apprentissage',
  },

  devops: {
    eyebrow: '06. DEVOPS & INFRASTRUCTURE',
    title: 'Le code n’est que le début. **Je le mets aussi en production.**',
    intro:
      'Au-delà du code, je sais ce qu’il faut pour déployer, maintenir et faire évoluer des applications en production. Le DevOps n’est pas un métier à part : il fait partie de ma façon de développer.',
    pipeline: {
      code: 'Code',
      lint: 'Lint & tests',
      build: 'Build de l’image',
      container: 'Conteneur',
      deploy: 'Déploiement',
      monitor: 'Supervision',
    },
    items: {
      docker: {
        name: 'Docker & conteneurisation',
        description:
          'Conteneurisation d’applications avec des Dockerfiles multi-étapes, Docker Compose pour des environnements full-stack en local, et optimisation des images de production pour les garder légères.',
        practices: ['Builds multi-étapes', 'Stacks Compose', 'Gestion des volumes', 'Isolation réseau'],
      },
      gitlab: {
        name: 'Pipelines CI/CD GitLab',
        description:
          'Mise en place de pipelines automatisés, du push du code jusqu’au déploiement en production, avec des étapes de lint, de tests, de build d’images Docker et de déploiement sur les serveurs.',
        practices: ['.gitlab-ci.yml', 'Étapes de pipeline', 'Secrets d’environnement', 'Registre d’artefacts'],
      },
      linux: {
        name: 'Linux & gestion de VPS',
        description:
          'Provisionnement de serveurs de zéro, durcissement SSH, gestion des services systemd, surveillance des logs et bonnes pratiques de sécurité pour les serveurs de production.',
        practices: ['Durcissement serveur', 'Services systemd', 'Analyse des logs', 'Pare-feu UFW'],
      },
      nginx: {
        name: 'Nginx : reverse proxy & TLS',
        description:
          'Configuration de Nginx comme reverse proxy pour des applications conteneurisées, terminaison SSL/TLS avec Let’s Encrypt et service de fichiers statiques à grande échelle.',
        practices: ['Configuration reverse proxy', 'Terminaison SSL', 'Fichiers statiques', 'Limitation de débit'],
      },
      argocd: {
        name: 'ArgoCD : GitOps',
        description:
          'Mise en œuvre de workflows GitOps où Git est la source unique de vérité pour l’infrastructure et l’état des applications, avec une synchronisation automatique du dépôt vers le cluster.',
        practices: ['Manifestes d’application', 'Politiques d’auto-sync', 'Health checks', 'Rollback'],
      },
      k8s: {
        name: 'Orchestration Kubernetes',
        description:
          'Orchestration de conteneurs pour déployer, faire évoluer et gérer des applications stateless et stateful sur un cluster de niveau production.',
        practices: ['Deployments & Pods', 'Services & Ingress', 'ConfigMaps', 'Namespaces'],
      },
    },
  },

  contact: {
    eyebrow: '07. CONTACT',
    title: 'Travaillons **ensemble**',
    intro:
      'Ouvert aux missions freelance, aux postes à temps plein et aux doctorats entièrement financés, au Sénégal ou à l’international, en présentiel ou à distance. Choisissez ce qui vous correspond et envoyez-moi un e-mail.',
    intents: {
      project: { label: 'Démarrer un projet', subject: 'Demande de projet' },
      job: { label: 'Opportunité d’emploi', subject: 'Opportunité d’emploi' },
      phd: { label: 'Doctorat / poste de recherche', subject: 'Doctorat / poste de recherche' },
    },
    copyEmail: 'Copier l’adresse e-mail',
    copied: 'Adresse copiée dans le presse-papiers.',
    copyFailed: 'Copie automatique impossible. Sélectionnez l’adresse ci-dessus.',
    servicesTitle: 'Ce que je peux faire pour votre entreprise',
    services: [
      'Sites vitrines & e-commerce (Next.js)',
      'Applications web sur mesure',
      'Conception d’API REST',
      'Refonte WordPress → Next.js',
      'Déploiement, Docker & CI/CD',
      'Maintenance & optimisation',
    ],
    cvTitle: 'Télécharger mon CV',
    cvs: {
      professional: { label: 'CV professionnel', audience: 'Clients freelance & recruteurs' },
      academic: { label: 'CV académique', audience: 'Admissions en doctorat & comités de bourses' },
    },
  },

  footer: {
    credit: 'Conçu et développé par {name} · {year}',
  },

  notFound: {
    title: 'Cette page **n’existe pas**',
    text: 'La page que vous cherchez a été déplacée, supprimée ou n’a jamais existé.',
    back: 'Retour à l’accueil',
  },
}
