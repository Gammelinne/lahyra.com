export default defineI18nConfig(() => ({
  legacy: false,
  Home: {
    Title: {
      FirstName: "Kylian",
      LastName: "Renault",
    },
    Job: "Etudiant en mastère spécialisé en management de portefeuille de projets en alternance chez Agrial",
    Infos: {
      Title: "Mes informations",
      Name: "Kylian Renault",
      Age: "23 ans",
      Location: "Caen, France",
      Phone: "+33 6 67 59 06 50",
      Birth: "14 août 2001",
      Language: "Français (natif), Anglais (945 TOEIC), Espagnol (basique)",
      Driving: "Permis de conduire + véhicule",
    },
    Resume: "CV",
    Portfolio: "Portfolio",
    Description: `Etudiant en mastère spécialisé manageur de portefeuille de projet et en alternance chez agrial, je suis passionné par le développement web et mobile, je maitrise les technologies modernes telles que Vue.js, React.js, Node.js, Express.js, AdonisJs, MongoDB, MySQL, et bien d'autres.`,
    GithubActivity: "Mon activité Github",
    Contributions: "Contributions",
    Github: "Github",
    LinkedIn: "LinkedIn",
    Contact: "Contact",
  },
  Route: {
    Home: "Accueil",
    Projects: {
      Title: "Projets Informatiques",
      Development: "Développement",
      Server: "Mon Serveur",
      Music: "Musique",
      Games: "Jeux",
    },
    About: {
      Title: "À propos de moi",
      Resume: "CV",
      Skills: "Compétences",
      Hobbies: "Loisirs",
    },
    Hobbies: {
      Title: "Loisirs",
      Music: "Musique",
      Games: "Jeux",
    },
    Contact: "Contact",
    Education: "Education",
    Experience: "Expériences",
  },
  Education: {
    Loading: "Chargement...",
    Title: "Educations",
    More: "En savoir plus",
    Five: {
      Title: "CESI École d'ingénieurs: Mastère spécialisé en management de portefeuille de projets en alternance chez Agrial",
      Date: "Depuis 09/2025",
      Website:
        "https://www.cesi.fr/formation/mastere-specialise-manager-de-portefeuille-de-projets-innovation-2108680/",
      Description:
        "Management de projet,Management d'équipe,Anglais,Agilité,DevOps,Cloud",
      Location: "4 place boston - 14200 Hérouville-Saint-Clair",
    },
    Four: {
      Title:
        "CESI École d'ingénieurs : Diplôme d'ingénieur spécialité informatique en data science et intelligence artificielle en alternance chez Capgemini",
      Date: "2022 - 2025",
      Website:
        "https://www.cesi.fr/programmes/cursus-ingenieur-5-ans/#cycleprepa",
      Description:
        "Autonomie, Travail en équipe, Réseau, Développement, Gestion de projet, Anglais",
      Location: "4 place boston - 14200 Hérouville-Saint-Clair",
    },
    Three: {
      Title:
        "CESI École d'ingénieurs: Classe préparatoire intégrée: mineure informatique",
      Date: "09/2020 - 07/2022",
      Website:
        "https://www.cesi.fr/programmes/cursus-ingenieur-5-ans/#cursusing%C3%A9",
      Description:
        "Travail de groupe,Mathématiques,Informatique,Physique,Anglais",
      Location: "4 place boston - 14200 Hérouville-Saint-Clair",
    },
    Two: {
      Title:
        "Univeristé de Caen Normandie: Première année de licence de physique avec option informatique",
      Date: "09/2019 - 07/2020",
      Website:
        "https://uniformsup.unicaen.fr/catalogue/formation/licences/5358-licence-physique?s=ufrdessciences&r=1485246625394",
      Description: "Mathématiques,Physique,Electricité,Anglais",
      Location: "Avenue de la Côte de Nacre - 14000 Caen",
    },
    One: {
      Title: "Lycée Salvador Allende: Obtention du baccalauréat S option SVT",
      Date: "09/2016 - 07/2019",
      Website: "https://lycee-salvador-allende.etab.ac-caen.fr/",
      Description:
        "Mathématiques,Physique,Anglais,Espagnol,SVT,Histoire,Géographie,Philosophie",
      Location: "15 Rue Guyon de Guercheville - 14200 Hérouville Saint Clair",
    },
  },
  Experience: {
    Title: "Experiences professionnelles",
    Website: "En savoir plus",
    ComputerScience: "En lien avec l'informatique",
    SeasonalJobs: "Travail saisonnier",
    Eleven: {
      Title: "Alternant manageur de portefeuille de projets IT en alternance",
      Date: "Depuis 09/2025",
      Website: "https://www.agrial.com/",
      Description:
        "Management de portefeuille de projets - Coordination des équipes projets - Suivi des indicateurs de performance - Gestion des risques - Communication avec les parties prenantes",
      Location: "Agrial - 14000 Caen",
    },
    Ten: {
      Title: "Développeur logiciel en alternance",
      Date: "11/2024 - 09/2025",
      Website: "https://www.capgemini.com/fr-fr/",
      Description:
        "Développement d'applications logicielles - Maintenance d'applications logicielles - Tests unitaires - Rédaction de documentation technique - Management de projet",
      Location: "Capgemini (Altran) - 50440 Beaumont-Hague",
    },
    Nine: {
      Title: "Animateur club de plage (Travail saisonnier)",
      Date: "07/2024 - 08/2024",
      Website: "https://www.cabourg-plage.fr/",
      Description:
        "Animateur dans un club de plage avec encadrement d'enfants agées de 3 à 14 ans",
      Location: "Croco Club Cabourg - 14390 Cabourg",
    },
    Eight: {
      Title: "Stage international en développement web/python",
      Date: "09/2023 - 01/2024",
      Website: "https://www.resqplus.eu/partners/aalborg-university",
      Description:
        "Conception d'un tableau de bord avec le framework Shiny pour identifier des pistes d'amélioration par rapport au tableau de bord existant, en collaboration avec d'éminents professeurs tels que M. HENDRIK KNOCHE et des doctorants comme HAMZAH ZIADEH (Python). - Amélioration du tableau de bord existant en collaboration avec des médecins de toute l'Europe l'utilisant (R). - Création d'un chatbot en utilisant le framework Rasa pour générer des graphiques spécifiques aux besoins des médecins (Python)",
      Location: "Université d'Aalborg - 9000 Aalborg (Danemark)",
    },
    Seven: {
      Title: "Animateur club de plage (Travail saisonnier)",
      Date: "08/2023",
      Website: "https://www.cabourg-plage.fr/",
      Description:
        "Animateur dans un club de plage avec encadrement d'enfants agées de 5 à 10 ans",
      Location: "Croco Club Cabourg - 14390 Cabourg",
    },
    Six: {
      Title: "Stage developpeur web/mobile - Qwice",
      Date: "01/2023 - 04/2023",
      Website: "https://qwice.org/",
      Description:
        "Rendre une application web existante compatible avec une application mobile native Android/iOS avec le framework Capacitor.js (android studio / xcode). - Ajouter des notifications push à l'application (firebase / php). - Ajout et correction de fonctionnalités sur le frontend (VueJs).",
      Location: "Normandie incubation - 14000 Caen",
    },
    Five: {
      Title: "Stage développeur fullstack",
      Date: "04/2022 - 08/2022",
      Website: "https://boomerangweb.net/gestion-des-achats-bons-de-commande/",
      Description:
        "Création d'une interface gestion clients permettant la centralisation des serveurs (Laravel + Vuejs + MySQL). - Création de scripts bash permettant de connaitre l'état des serveurs (bash). - Tests unitaires des fonctions les plus critiques (PHPUnit + Mockery).",
      Location: "Boomerang Web - 14000 Caen",
    },
    Four: {
      Title: "Assistant fabmanager bénévole",
      Date: "09/2021 - 01/2022",
      Website: "https://www.facebook.com/lepavillonorb",
      Description:
        "Cours d'informatiques basiques (Word, Excel, Powerpoint, Internet, etc.) à des personnes débutantes. - Utilisation des machines du fablab (imprimante 3D, découpeuse laser, etc.).",
      Location: "Centre socioculturel - Ouistreham",
    },
    Three: {
      Title: "Employé de restauration (Travail saisonnier)",
      Date: "07/2019 - 09/2019",
      Website: "https://festyland.com/",
      Description:
        "Préparation des commandes des clients (en cuisine). - Service des clients. - Nettoyage des locaux.",
      Location: "Festyland - 14652 Carpiquet",
    },
    Two: {
      Title: "Ouvrier manœuvre (Travail saisonnier)",
      Date: "06/2020 - 08/2020",
      Website:
        "https://www.maugergazmedicaux.fr/nos-services/vente-de-materiels-dalimentation-gaz-medicaux/",
      Description:
        "Installation de tuyaux d'oxygène et d'air médical dans des hôpitaux. - Installation de prises murales d'oxygène et d'air médical dans des hôpitaux. - Installation de centrales d'oxygène et d'air médical dans des hôpitaux.",
      Location: "Mauger Gaz Médicaux - 14460 Colombelles",
    },
    One: {
      Title: "Ouvrier manœuvre (Travail saisonnier)",
      Date: "08/2018",
      Website:
        "https://www.maugergazmedicaux.fr/nos-services/vente-de-materiels-dalimentation-gaz-medicaux/",
      Description:
        "Installation de tuyaux d'oxygène et d'air médical dans des hôpitaux. - Installation de prises murales d'oxygène et d'air médical dans des hôpitaux. - Installation de centrales d'oxygène et d'air médical dans des hôpitaux.",
      Location: "Mauger Gaz Médicaux - 14460 Colombelles",
    },
  },

  Project: {
    Github: "Github",
    Title: "Mes Projets",
    Route: "Liste des routes API",
    SeeLess: "Voir moins",
    SeeMore: "Voir plus",
    One: {
      Title: "Social Lahyra",
      Date: "Depuis septembre 2023",
      Website: "https://github.com/Gammelinne/Lahyra-back-V2",
      Description:
        "Social Lahyra est mon plus grand projet personnel. Il a été créé en utilisant VueJS (JavaScript) pour le frontend et Laravel pour le backend (PHP). Ce projet comprend de nombreuses fonctionnalités avancées qui le rendent robuste et sécurisé. - Tout d'abord, parlons de l'authentification protégée par JWT (JSON Web Token). JWT est un mécanisme d'authentification très populaire utilisé dans les applications web modernes. L'avantage principal de JWT est qu'il permet de maintenir l'état de l'authentification du côté client, ce qui signifie que le serveur n'a pas besoin de stocker l'état de l'authentification pour chaque utilisateur. Au lieu de cela, lorsqu'un utilisateur se connecte avec succès, il reçoit un jeton JWT qui contient des informations d'identification encodées. Ce jeton est ensuite inclus dans chaque requête envoyée au serveur, permettant ainsi au serveur de vérifier l'authenticité et les autorisations de l'utilisateur à chaque requête. - En ce qui concerne la gestion des langues avec I18n, cela permet à Lahyra de prendre en charge plusieurs langues. Il s'agit d'une fonctionnalité importante pour les applications utilisées par un public international, car elle permet aux utilisateurs de choisir leur langue préférée. Grâce à cette fonctionnalité, les textes et les messages affichés à l'utilisateur peuvent être traduits facilement et dynamiquement, offrant ainsi une expérience plus personnalisée. - L'envoi de photos avec stockage constitue une autre fonctionnalité importante de Lahyra. Elle permet aux utilisateurs de télécharger des images sur le site. Ces images sont ensuite stockées de manière sécurisée sur un serveur ou un service de stockage approprié. Cela offre une solution pratique pour les utilisateurs qui souhaitent partager des photos ou des images dans le cadre de leur utilisation de Lahyra. - Une autre intégration essentielle dans Lahyra est celle de WebSocket avec Pusher. WebSocket est un protocole de communication bidirectionnel qui permet une communication en temps réel entre le client et le serveur. L'utilisation de WebSocket dans Lahyra permet des mises à jour instantanées et en temps réel, sans avoir besoin de recharger la page. Cela offre une expérience utilisateur plus réactive, en particulier pour les fonctionnalités qui nécessitent une mise à jour en temps réel, comme les notifications ou les conversations en direct. - En cliquant sur 'API Routes', vous pouvez accéder à une liste de toutes les routes qui fonctionnent sur le site. Certaines de ces routes sont protégées par des autorisations administrateur, ce qui signifie qu'elles ne sont accessibles qu'aux utilisateurs ayant des privilèges d'administrateur. Cette mesure de sécurité garantit que certaines fonctionnalités sensibles ou restreintes ne peuvent être utilisées que par des utilisateurs autorisés, renforçant ainsi la sécurité globale de l'application.",
      Route: {
        Description: "Liste des routes disponibles sur Social Lahyra",
        1: {
          Method: "GET",
          Endpoint: "/laravel-websockets",
          Description: "Récupère des informations sur les Laravel WebSockets.",
        },
        2: {
          Method: "HEAD",
          Endpoint: "/laravel-websockets",
          Description: "Récupère les en-têtes des Laravel WebSockets.",
        },
        3: {
          Method: "GET",
          Endpoint: "/laravel-websockets/apps",
          Description:
            "Récupère des informations sur les applications Laravel WebSockets.",
        },
        4: {
          Method: "HEAD",
          Endpoint: "/laravel-websockets/apps",
          Description:
            "Récupère les en-têtes des applications Laravel WebSockets.",
        },
        5: {
          Method: "POST",
          Endpoint: "/laravel-websockets/apps",
          Description: "Crée une nouvelle application Laravel WebSockets.",
        },
        6: {
          Method: "GET",
          Endpoint: "/laravel-websockets/api/{appId}/statistics",
          Description:
            "Récupère des statistiques pour une application spécifique Laravel WebSockets.",
        },
        7: {
          Method: "HEAD",
          Endpoint: "/laravel-websockets/api/{appId}/statistics",
          Description:
            "Récupère les en-têtes des statistiques pour une application spécifique Laravel WebSockets.",
        },
        8: {
          Method: "POST",
          Endpoint: "/laravel-websockets/auth",
          Description: "Authentification en utilisant Laravel WebSockets.",
        },
        9: {
          Method: "POST",
          Endpoint: "/laravel-websockets/event",
          Description: "Envoie un événement en utilisant Laravel WebSockets.",
        },
        10: {
          Method: "POST",
          Endpoint: "/oauth/token",
          Description: "Demande un jeton OAuth.",
        },
        11: {
          Method: "GET",
          Endpoint: "/oauth/authorize",
          Description: "Autorise une demande OAuth.",
        },
        12: {
          Method: "HEAD",
          Endpoint: "/oauth/authorize",
          Description:
            "Récupère les en-têtes pour la demande d'autorisation OAuth.",
        },
        13: {
          Method: "POST",
          Endpoint: "/oauth/token/refresh",
          Description: "Actualise un jeton OAuth.",
        },
        14: {
          Method: "POST",
          Endpoint: "/oauth/authorize",
          Description: "Crée une demande d'autorisation OAuth.",
        },
        15: {
          Method: "DELETE",
          Endpoint: "/oauth/authorize",
          Description: "Supprime une demande d'autorisation OAuth.",
        },
        16: {
          Method: "GET",
          Endpoint: "/oauth/tokens",
          Description: "Récupère des jetons OAuth.",
        },
        17: {
          Method: "HEAD",
          Endpoint: "/oauth/tokens",
          Description: "Récupère les en-têtes des jetons OAuth.",
        },
        18: {
          Method: "DELETE",
          Endpoint: "/oauth/tokens/{token_id}",
          Description: "Supprime un jeton OAuth spécifique.",
        },
        19: {
          Method: "GET",
          Endpoint: "/oauth/clients",
          Description: "Récupère des clients OAuth.",
        },
        20: {
          Method: "HEAD",
          Endpoint: "/oauth/clients",
          Description: "Récupère les en-têtes des clients OAuth.",
        },
        21: {
          Method: "POST",
          Endpoint: "/oauth/clients",
          Description: "Crée un client OAuth.",
        },
        22: {
          Method: "PUT",
          Endpoint: "/oauth/clients/{client_id}",
          Description: "Met à jour un client OAuth.",
        },
        23: {
          Method: "DELETE",
          Endpoint: "/oauth/clients/{client_id}",
          Description: "Supprime un client OAuth spécifique.",
        },
        24: {
          Method: "GET",
          Endpoint: "/oauth/scopes",
          Description: "Récupère des scopes OAuth.",
        },
        25: {
          Method: "HEAD",
          Endpoint: "/oauth/scopes",
          Description: "Récupère les en-têtes des scopes OAuth.",
        },
        26: {
          Method: "GET",
          Endpoint: "/oauth/personal-access-tokens",
          Description: "Récupère des jetons d'accès personnels.",
        },
        27: {
          Method: "HEAD",
          Endpoint: "/oauth/personal-access-tokens",
          Description: "Récupère les en-têtes des jetons d'accès personnels.",
        },
        28: {
          Method: "POST",
          Endpoint: "/oauth/personal-access-tokens",
          Description: "Crée un jeton d'accès personnel.",
        },
        29: {
          Method: "DELETE",
          Endpoint: "/oauth/personal-access-tokens/{token_id}",
          Description: "Supprime un jeton d'accès personnel spécifique.",
        },
        30: {
          Method: "GET",
          Endpoint: "/broadcasting/auth",
          Description:
            "Récupère des informations d'authentification pour la diffusion.",
        },
        31: {
          Method: "POST",
          Endpoint: "/broadcasting/auth",
          Description: "Authentification pour la diffusion.",
        },
        32: {
          Method: "HEAD",
          Endpoint: "/broadcasting/auth",
          Description:
            "Récupère les en-têtes pour l'authentification de diffusion.",
        },
        33: {
          Method: "POST",
          Endpoint: "/api/user",
          Description: "Crée un nouvel utilisateur dans l'API.",
        },
        34: {
          Method: "GET",
          Endpoint: "/api/user",
          Description:
            "Récupère des informations sur un utilisateur dans l'API.",
        },
      },
      Technologies:
        "Laravel 10,Vuejs 3,Vuetify,Websocket,PHP 8.2,JWT,Pusher,I18n,Passport,Axios,LocalStorage,Git",
    },
    Two: {
      Title: "Portfolio",
      Date: "Juin 2023",
      Website: "https://github.com/Gammelinne/web_portfolio",
      Description:
        "Mon portfolio est un projet personnel créé en utilisant VueJS (JavaScript) avec Vuetify. VueJS est un framework JavaScript populaire pour la création d'interfaces utilisateur, et Vuetify est une bibliothèque de composants UI qui fournit des composants prêts à l'emploi suivant les directives du design Material. Ensemble, VueJS et Vuetify offrent une combinaison puissante pour le développement d'applications web attrayantes et interactives. - Pour améliorer la fonctionnalité du portfolio, diverses bibliothèques ont été incorporées. L'une d'entre elles est I18n, qui signifie Internationalization. I18n permet une traduction et une localisation faciles du portfolio dans plusieurs langues. Cette fonctionnalité est essentielle pour atteindre un public plus large et offrir une expérience personnalisée aux utilisateurs qui préfèrent différentes langues. - Pour gérer les requêtes HTTP, le portfolio utilise Axios, une bibliothèque JavaScript largement utilisée. Axios simplifie le processus de réalisation de requêtes HTTP asynchrones, telles que la récupération de données à partir d'API ou l'envoi de données à un serveur. - Pour assurer une navigation fluide au sein du portfolio, Vue Router est utilisé. Vue Router est la bibliothèque de routage officielle pour VueJS. Il permet la création d'applications à page unique avec plusieurs vues ou pages. En utilisant Vue Router, le portfolio peut avoir des routes distinctes pour différentes sections, permettant aux utilisateurs de naviguer entre différentes pages sans avoir besoin de recharger la page entière. - En plus des aspects fonctionnels, le portfolio propose également un système de mode sombre. Le mode sombre offre un schéma de couleurs alternatif utilisant des couleurs plus sombres, ce qui peut être plus agréable pour les yeux, réduire la fatigue oculaire et économiser la batterie de l'appareil. Pour offrir une expérience fluide aux utilisateurs, le mode sélectionné (sombre ou clair) est stocké dans le stockage local du navigateur de l'utilisateur. Cela signifie que même si l'utilisateur rafraîchit la page ou ferme le navigateur, le portfolio se souvient de son mode préféré et l'applique de manière cohérente.",
      Technologies: "Vuejs 3,Vuetify,I18n,Axios,Vue Router,LocalStorage,Git",
    },
    Three: {
      Title: "EasySave",
      Date: "Décembre 2022",
      Website: "https://github.com/Gammelinne/Easysave",
      Description:
        "EasySave est un logiciel de sauvegarde de fichiers. Il s'agit d'un projet scolaire réalisé par une équipe de 4 étudiants, dont j'étais responsable du développement logiciel, en utilisant particulièrement le modèle MVVM (Modèle Vue VueModèle). - Pour mener à bien ce projet, nous avons utilisé plusieurs outils et technologies. Nous avons travaillé avec Visual Studio 2022 (version Enterprise), qui est un environnement de développement intégré puissant et polyvalent. Visual Studio nous a permis de créer une application robuste et fonctionnelle en fournissant des fonctionnalités avancées de débogage, de gestion de versions et d'intégration d'outils tiers. - Pour concevoir et modéliser notre application, nous avons utilisé Visual Paradigm, un outil de modélisation visuelle. Grâce à cet outil, nous avons pu créer des diagrammes de classes, des diagrammes de séquence et d'autres modèles pour planifier et organiser notre développement. - En ce qui concerne la gestion du code source et la collaboration au sein de l'équipe, nous avons utilisé Azure Repos, qui est un service d'hébergement de dépôts Git offert par Microsoft. Cela nous a permis de travailler de manière collaborative, de suivre les modifications du code et de gérer efficacement les branches et les versions de notre projet. - EasySave a été développé dans sa version 1.0, marquant ainsi le lancement initial du logiciel. Tout au long du processus de développement, nous nous sommes efforcés de créer une interface utilisateur conviviale, tout en assurant la fiabilité et la sécurité des sauvegardes de fichiers. - Ce projet a été une expérience précieuse pour moi, car il m'a permis d'acquérir des compétences en développement logiciel, en collaboration d'équipe et en utilisation d'outils modernes de développement. J'ai pu mettre en pratique les principes du modèle MVVM, qui favorise une séparation claire des responsabilités entre la logique métier, la présentation et la gestion des données.",
      Technologies:
        "C#,WPF,Visual Studio 2022,Visual Paradigm,Azure Repos, Git",
    },
    Four: {
      Title: "Bot discord",
      Date: "Février 2022",
      Website: "https://github.com/Gammelinne/Bot-discord",
      Description:
        "Mon premier bot Discord est un projet que j'ai entrepris dans le but d'apprendre le langage de programmation JavaScript et d'explorer le développement d'applications sur la plateforme Discord. Pour réaliser ce bot, j'ai utilisé la bibliothèque Discord.js, qui est spécialement conçue pour interagir avec l'API Discord. - J'ai commencé par créer un compte de bot sur le portail développeur de Discord, ce qui m'a permis d'obtenir un jeton d'authentification unique. Ce jeton est utilisé par mon bot pour se connecter à Discord en tant qu'entité distincte. - Ensuite, j'ai configuré mon environnement de développement en installant Node.js, une plateforme qui permet d'exécuter des applications JavaScript côté serveur. Node.js m'a permis de lancer mon bot en tant qu'application autonome capable de répondre aux événements et aux commandes sur les serveurs Discord. -  À l'aide de Discord.js, j'ai pu créer des fonctionnalités personnalisées pour mon bot. Par exemple, j'ai implémenté la commande 'interaction' qui permet aux administrateurs du serveur de voir les interactions qui se produisent. - Une autre commande que j'ai ajoutée est 'ban', qui permet de bannir un membre du serveur. Cette commande accepte deux options : 'membre' pour spécifier le membre à bannir, et 'raison' pour donner une raison optionnelle. - J'ai également ajouté la commande 'github' qui affiche un lien vers mon code source sur GitHub, ainsi que la commande 'serveur' qui permet aux utilisateurs de voir diverses informations sur le serveur. - Pour apporter une dimension ludique à mon bot, j'ai créé la commande 'al' qui permet de jouer au jeu du 'Juste Prix'. Cette commande accepte l'option 'numero' pour que l'utilisateur puisse choisir un numéro. - Une autre fonctionnalité que j'ai implémentée est la commande 'pof' qui permet de jouer au jeu du 'Pile ou Face'. - La commande 'covid' permet de sélectionner une donnée liée à l'épidémie de Covid-19. Cette commande utilise une API externe pour récupérer les données actualisées. J'ai utilisé la fonction fetch pour effectuer une requête à l'API et obtenir les informations sur les décès dûs au Covid, les personnes en réanimation, les personnes hospitalisées ou les cas confirmés. L'utilisateur peut choisir parmi ces options en utilisant l'option 'donnees' de la commande. - Le bot inclut également la commande 'nasa' qui affiche une image du jour provenant de la NASA. Pour cela, j'ai utilisé une autre API externe qui fournit les images de la NASA. J'ai également utilisé la fonction fetch pour récupérer les données de l'image du jour. - Enfin, j'ai ajouté la commande 'annonce' qui permet de publier une annonce. Cette commande accepte l'option 'message' pour que l'utilisateur puisse saisir le message de l'annonce. - Grâce à ce projet, j'ai pu acquérir une meilleure compréhension du langage JavaScript et des concepts de base de la programmation orientée objet. J'ai également pu explorer l'API Discord, les fonctionnalités de création de bots interactifs, ainsi que l'intégration d'API externes pour enrichir les fonctionnalités de mon bot.",
      Technologies: "JavaScript,Node.js,Discord.js,Visual Studio Code,GitHub",
    },
    Five: {
      Title: "WebApp Template",
      Date: "Depuis octobre 2023",
      Website: "https://github.com/Gammelinne/backend-template-for-web-app",
      Description:
        "WebApp Template est un projet complet combinant un backend puissant basé sur AdonisJS et un frontend dynamique construit avec VueJS. Cette intégration offre une solution robuste pour le développement d'applications web modernes. Les fonctionnalités clés comprennent : - Authentification Sécurisée : Utilisation de JSON Web Token (JWT) pour maintenir l'état d'authentification côté client. Cela offre une sécurité renforcée sans nécessiter le stockage de l'état d'authentification sur le serveur. - Gestion Multilingue (I18n) : Le support multilingue est intégré, permettant aux utilisateurs de choisir leur langue préférée. Les textes et messages sont traduits dynamiquement, offrant une expérience utilisateur personnalisée. - Stockage Sécurisé des Images : Les utilisateurs peuvent télécharger des images, qui sont stockées de manière sécurisée sur un serveur ou un service de stockage approprié. Ceci facilite le partage d'images dans le cadre de l'utilisation de l'application. - WebSocket avec Pusher : Intégration de WebSocket pour des mises à jour en temps réel. Les fonctionnalités telles que les notifications et les conversations en direct sont améliorées avec des mises à jour instantanées, sans nécessité de rechargement de la page. - API Routes Sécurisées : Certaines routes sont protégées par des autorisations administrateur, assurant que des fonctionnalités sensibles ne sont accessibles qu'aux utilisateurs autorisés. - Le backend, construit avec AdonisJS, offre une gestion utilisateur avancée, une sécurité renforcée avec le hachage des mots de passe, une rotation automatique des journaux, et un mécanisme de limitation du taux pour prévenir le spam. Les migrations et les seeders facilitent la gestion de la base de données, tandis que l'organisation du projet suit le modèle MVC pour une maintenance et une extensibilité optimales.",
      Embed: "https://Lahyra.com",
      Route: {
        Description: "Liste des routes disponibles sur WebApp Template",
        1: {
          Method: "GET",
          Endpoint: "/users/me",
          Description:
            "Récupère des informations sur l'utilisateur actuellement authentifié.",
        },
        2: {
          Method: "PUT",
          Endpoint: "/users/update",
          Description: "Met à jour les informations de l'utilisateur.",
        },
        3: {
          Method: "DELETE",
          Endpoint: "/users/delete",
          Description: "Supprime le compte de l'utilisateur.",
        },
        4: {
          Method: "POST",
          Endpoint: "/register",
          Description: "Enregistre un nouvel utilisateur.",
        },
        5: {
          Method: "POST",
          Endpoint: "/login",
          Description: "Connecte un utilisateur.",
        },
        6: {
          Method: "POST",
          Endpoint: "/reset-password",
          Description:
            "Initie le processus de réinitialisation du mot de passe.",
        },
        7: {
          Method: "POST",
          Endpoint: "/logout",
          Description: "Déconnecte l'utilisateur authentifié.",
        },
        8: {
          Method: "GET",
          Endpoint: "/verify-email/:email",
          Description: "Vérifie l'adresse e-mail de l'utilisateur.",
        },
        9: {
          Method: "POST",
          Endpoint: "/resend-verification-email",
          Description: "Renvoie l'e-mail de vérification.",
        },
        10: {
          Method: "POST",
          Endpoint: "/reset-password-email",
          Description: "Envoie un e-mail de réinitialisation du mot de passe.",
        },
        11: {
          Method: "GET",
          Endpoint: "/posts",
          Description: "Récupère une liste d'articles.",
        },
        12: {
          Method: "GET",
          Endpoint: "/posts/:id",
          Description: "Récupère les détails d'un article spécifique.",
        },
        13: {
          Method: "POST",
          Endpoint: "/posts",
          Description: "Crée un nouvel article.",
        },
        14: {
          Method: "PUT",
          Endpoint: "/posts/:id",
          Description: "Met à jour un article spécifique.",
        },
        15: {
          Method: "DELETE",
          Endpoint: "/posts/:id",
          Description: "Supprime un article spécifique.",
        },
        16: {
          Method: "POST",
          Endpoint: "/google/redirect",
          Description: "Gère la redirection Google OAuth2.",
        },
      },
      Technologies:
        "AdonisJS, Vue.js, Vuetify, WebSockets, JWT, Pusher, I18n, Passport, Axios, LocalStorage, Git, RESTful APIs, GraphQL, Docker, Continuous Integration, Unit Testing, End-to-End Testing",
    },
    Six: {
      Title: "Judo Club Ouistreham",
      Date: "Depuis septembre 2025",
      Website: "https://judoclubouistreham.lahyra.com/",
      Description: "Judo Club Ouistreham est une application web développée en Nuxt.js, conçue pour gérer les activités d'un club de judo local. Cette application offre une interface conviviale pour les membres du club, les entraîneurs et les administrateurs, facilitant la gestion des inscriptions, des horaires d'entraînement, des compétitions et des communications internes. - L'application permet aux membres de s'inscrire en ligne, de consulter les horaires d'entraînement et de s'inscrire à des événements ou compétitions. Les entraîneurs peuvent gérer les groupes d'entraînement, suivre la progression des membres et communiquer avec eux via des notifications intégrées. Les administrateurs ont accès à un tableau de bord complet pour gérer les membres, les paiements, les événements et les communications. - Judo Club Ouistreham utilise une base de données MongoDB pour stocker les informations des membres, les horaires d'entraînement, les événements et les communications. L'application est hébergée sur un serveur personnel utilisant Docker, assurant une disponibilité constante et une gestion efficace des ressources. - En intégrant des fonctionnalités telles que les notifications en temps réel, les mises à jour automatiques et une interface utilisateur responsive, Judo Club Ouistreham offre une expérience utilisateur fluide et engageante pour tous les membres du club.",
      Technologies: "Nuxt.js, Docker, Git, CI/CD, Autohosting",
    },
  },
  Server: {
    Title: "Mon Serveur",
    Overview: "Présentation",
    OverviewText: "Ceci est mon serveur personnel hébergé à la maison. Il exécute divers services et projets pour gérer des applications, bases de données et supervision.",
    Specifications: "Spécifications",
    CPU: "Processeur",
    RAM: "RAM",
    Storage: "Stockage",
    CPUValue: "Intel Core n100",
    RAMValue: "8GB DDR4",
    StorageValue: "256GB NVMe SSD",
    OSValue: "Ubuntu Server 24.04 LTS",
    OS: "Système d'exploitation",
    Docker: "Services Docker",
    Dash: "Dash",
    DashDesc: "Supervision du système et des conteneurs.",
    Pihole: "Pi-hole",
    PiholeDesc: "Blocage des publicités et trackers sur le réseau.",
    MariaDB: "MariaDB",
    MariaDBDesc: "Gestion des bases de données.",
    Portfolio: "Portfolio",
    PortfolioDesc: "Mon site personnel.",
    Watchtower: "Watchtower",
    WatchtowerDesc: "Mise à jour automatique des conteneurs.",
    GitLab: "GitLab CE",
    GitLabDesc: "Gestion Git et CI/CD auto-hébergée.",
    PrimeVue: "PrimeVue Nuxt",
    PrimeVueDesc: "Ce site web.",
    JudoClub: "Judo Club Ouistreham",
    JudoClubDesc: "Application web Node.js pour le club.",
    Note: "Remarque : le tableau de bord intégré est en lecture seule pour des raisons de sécurité."
  },
  Hobbies: {
    Music: {
      Title: "Musique",
      Artist: "Mes Artistes préférés",
      Playlist: "Mes playlists",
      Question: "Quels sont les artistes français dans la liste ?",
      Submit: "Répondre",
      Sucess: "Bravo",
      Error: "Dommage",
      SuccessMessage: "Bravo, vous avez trouvé les artistes français !",
      ErrorMessage: "Vous n'avez pas trouvé les artistes français (Il y en a 3).",

    },
    Games: {
      Title: "Jeux",
    },
  },
}));
