# TODO escape game

Dernière mise à jour : 2026-11-21 (badges, sons par page, musiques YouTube)

## Décisions à prendre

- [x] Nom de l'organisation : Agence Chronos (validé)
- [x] Portrait du chef (donneur d'ordre) sur le côté de l'intro : SVG v0 avec bouche animée pendant l'écriture. À valider : apparence (homme, lunettes noires, oreillette, cravate rose), nom ("Le Chef" ou un nom de code)
- [x] Motif de la mission : perturbations venues de mondes parallèles, cinq mots à rapporter, un par monde (validé ; plus de faille ni d'ancres)
- [ ] Régénérer les MP3 du briefing après changement de texte (voix/textes.json)
- [x] Pas d'antagoniste : la menace est une anomalie, des perturbations venues de mondes parallèles (décision 2026-11-21)
- [x] (remplacé par les mots) Définir l'objet d'un monde parallèle de chaque univers (ex. un objet d'un autre monde qui apparaît dans la scène) et le geste qui le renvoie à son monde
- [ ] Créer les éléments d'ambiance : sonnerie d'appel, effet de tampon, animation de perturbation, jingle d'agence (en HTML/Web Audio ou MP3)
- [x] Prénom de l'anniversaireuse : Claire
- [x] Rôle de Claire : agente comme les autres (même statut pour tous les enfants, Claire est la star de la fête sans grade particulier)
- [x] Prénom de Claire exclu des textes de voix off : le chef dit "agents", rien d'envoyé à Azure ou ElevenLabs sur ce point
- [ ] Prénom de Claire sur les supports non envoyés à un service externe (badge, invitation, écran de fin) : à décider
- [ ] Date de la fête
- [ ] Objet final dans le coffre : gâteau ou cadeaux
- [ ] Ordre des 5 univers
- [ ] Choix des 2 constructions Lego manquantes, parmi les Lego déjà disponibles dans l'appartement (inventaire à faire ; propositions de départ : Quai 9 3/4, Saule cogneur)
- [ ] Faire l'inventaire des Lego de l'appartement (sets montés ou à monter) et choisir les 2 constructions + l'objet caché de chacune
- [ ] Idée Star Wars (proposition : parcours dans le noir + message à l'encre fluorescente)
- [ ] Périmètre et durée du jeu de piste Montmartre (et plan B pluie)
- [x] Outil de génération vidéo IA : écarté, tout reste en HTML animé (décision 2026-11-21)

- [x] Lieux validés : Harry Potter dans le salon (Lego cachés dans tout le salon, potions sur la table du salon), Star Wars dans le bureau, Titis de Montmartre dehors autour de l'appartement
- [x] KPop Demon Hunters : dans le salon, sur la télé du mur entre le bureau et le séjour
- [x] Mousquetaires en chambre 2 : validé
- [ ] Préparer la chambre 2 pour les mousquetaires (dégager la pièce, ranger les objets fragiles et lampes, vérifier la place pour les armes en mousse)
- [ ] Occulter le bureau pour Star Wars (fenêtre sur le balcon : rideau noir ou couverture) et limiter le nombre d'enfants dans la pièce
- [ ] Protéger la table du salon pour les potions (nappe plastique, plateaux, serviettes)
- [x] Page de révélation des univers un par un : html/portails.html (univers cachés dans le briefing)
- [ ] Confirmer que "chambre 1" est bien la chambre en haut à droite, et statuer sur le balcon et l'entrée (zone jouable ou non)
- [ ] Fabriquer des panneaux "Zone temporelle instable : accès interdit" pour la chambre 1, la salle de bain et les WC

## Fil rouge et scénario

- [ ] Rédiger le message d'ouverture du directeur de l'organisation
- [x] Les 5 mots et le mot final CLAIRE sont définis
- [ ] Rédiger le déroulé minute par minute
- [ ] Rédiger les énigmes détaillées avec indices à 3 niveaux (fiches dans enigmes/)

## Créations à produire

- [x] Modèles de badges : html/badges.html (6 spécialités : Décodeur, Éclaireur, Stratège, Acrobate, Mémoire, Voix ; photo et noms à ajouter à la main)
- [ ] Imprimer les badges (A4, échelle 100 %, couleurs), plastifier, ajouter un cordon, remplir photos, prénoms et noms de code
- [ ] Relier les spécialités aux épreuves : chaque spécialité a un rôle dans au moins une énigme (ex. Voix en K-Pop, Acrobate chez les mousquetaires, Éclaireur dans le noir Star Wars, Décodeur et Mémoire aux potions, Stratège au jeu de piste)
- [ ] Parchemin d'invitation ou convocation (envoi avant la fête)
- [ ] Carnet de mission ou passeport temporel (tampons à chaque univers)
- [ ] Étiquettes des flacons d'ingrédients (noms magiques)
- [ ] Cibles en mousse pour les mousquetaires
- [ ] Cartes de figures mousquetaires (figure à reproduire)
- [ ] Paroles à trous pour "N'oubliez pas les paroles" (repères, sans recopier les paroles)
- [ ] Éléments fluorescents Star Wars (messages, rubans, cristal)
- [ ] Indices et énigmes du jeu de piste (cachés en extérieur)
- [ ] Coffre final et cadenas à code

## Pages HTML (grand écran)

- [x] Parchemin des potions : html/potions.html (v0, à valider avec le mapping définitif)
- [x] Page de briefing : html/briefing.html (v0 : alerte, message du directeur, 5 destinations, code de l'agent, écran de lancement, sans chrono). À valider : nom de l'organisation, textes
- [x] Illustrations des 5 univers sur les cartes de destination (dessins SVG originaux v0 : château, épées et chapeau, micro, station spatiale et sabre, basilique)
- [x] Images libres de droits trouvées pour Star Wars (stormtroopers) et Montmartre (Sacré-Cœur) : images/univers-4.jpg et univers-5.jpg
- [ ] Fournir des images spécifiques pour les univers 1 (Poudlard), 2 (mousquetaires avec rapières), 3 (KPop Demon Hunters) : les banques libres n'en ont pas. À enregistrer depuis les sites officiels (Netflix Tudum, Warner/Wizarding World) ou une recherche d'images, sous images/univers-1.jpg, univers-2.jpg, univers-3.jpg (dessins SVG utilisés en attendant)
- [x] Correction de la troncature en haut et en bas sur grand écran : le contenu de chaque écran se réduit automatiquement pour tenir dans la fenêtre
- [ ] Illustrer de la même façon les pages de chaque épreuve (potions, mousquetaires, K-Pop, Star Wars, Montmartre)
- [ ] Option à trancher : jauge "stabilité du temps" qui monte à chaque mot rapporté, sans compte à rebours (sinon rien)
- [ ] Page d'accueil / menu du maître du jeu pour enchaîner les 5 univers
- [ ] Page K-Pop : paroles à trous
- [ ] Page Star Wars
- [ ] Page jeu de piste (indices du maître du jeu)
- [ ] Page finale : code du coffre, félicitations
- [ ] Tester sur le grand écran réel (lisibilité à 3 mètres, hors ligne)

## Animation et voix (remplace les vidéos IA)

- [x] Animation de vortex pour les sauts temporels entre univers : html/vortex.js (spirale, anneaux, flash, son Web Audio, 2,6 s), branchée dans portails.html (ouverture d'un portail et retour après objet renvoyé ; M coupe le son)
- [x] Page maître de l'aventure : html/aventure.html enchaîne intro (briefing) > plan de l'appartement avec la perturbation > vortex > présentation du lieu > contenu de l'épreuve > plan suivant (gemme sur les lieux terminés) > ... > conclusion. Espace = suite, Entrée = épreuve terminée, ← = retour, Maj + R = reset
- [x] Ordre des épreuves validé : Star Wars (bureau), K-Pop (salon, télé), Montmartre (dehors), Mousquetaires (chambre 2), Harry Potter (salon, table). Modifiable dans ORDER de aventure.html
- [x] Plan : l'extérieur est ajouté (cadre en pointillés autour de l'appartement, "Extérieur : Montmartre")
- [x] Intrigue de fond changée (2026-11-21) : perturbations issues de mondes parallèles qui tentent de s'insérer dans notre monde réel (plus d'"anachronique" ni d'"époque" pour les objets)
- [ ] Régénérer les MP3 (textes.json a changé : mondes parallèles) et relire les fiches dans scenario/univers.md
- [ ] Créer les pages d'épreuve manquantes pour aventure.html (Star Wars, K-Pop, Montmartre, Mousquetaires) : Entrée ou postMessage {type:"next"} = épreuve finie
- [x] Justification des mots (2026-11-21) : chaque monde est tenu ouvert par un mot-clé, les objets intrus ne sont que des échos, un objet se brise en traversant les mondes alors qu'un mot passe sans dégât. Intégrée au briefing, aux voix et à scenario/univers.md
- [x] Écran de saisie du mot de passe avec indices progressifs en cas d'erreur, puis conclusion en 4 temps (plan, chef, tampon, CLAIRE + confettis) dans aventure.html
- [x] Image Star Wars (foule de stormtroopers) retirée : dessin SVG utilisé en attendant. Fournir de vraies images pour les 5 univers (images/univers-N.jpg)
- [x] Code de l'agent : plus de mention des armes en mousse (révélait l'univers) ; règle 4 : en cas de blocage, appelez-moi (le maître du jeu aide)
- [x] Mécanisme de révélation de chaque mot défini : enigmes/mots-par-epreuve.md (Star Wars : 7 cartes UV ; K-Pop : 9 coupures, une lettre chacune ; Montmartre : 4 syllabes ; Mousquetaires : 5 cartes derrière les cibles ; Harry Potter : encre invisible révélée au jus de chou rouge)
- [x] Chaque épreuve se valide en tapant le mot à l'écran (saisie avec indices progressifs si erreur, accents et majuscules ignorés), puis écran "Mot rapporté"
- [x] Le briefing ne révèle pas qu'un mot de passe est à trouver avec les 5 mots : annoncé seulement à la fin (écran de saisie du mot de passe)
- [x] Écran "Mot rapporté" après chaque épreuve (lettres animées) dans aventure.html
- [ ] Fabriquer les supports de mots : 7 cartes fluo (OBSCURE), 4 cartes syllabes plastifiées (LU MI NEU SE), 5 cartes lettres au dos des cibles (NETTE), parchemin à l'encre invisible (TRANSPARENTE)
- [ ] Tester l'encre invisible au bicarbonate et au jus de chou rouge, le mot TRANSPARENTE en grosses lettres
- [ ] Page K-Pop : 9 coupures qui révèlent BRILLANTE lettre par lettre
- [x] Écran final "Mission accomplie" en 4 temps (validé) : 1) vortex final et plan avec les 5 gemmes allumées, 2) retour du chef (texte tapé, mondes à leur place), 3) tampon "Mission accomplie" et rapport clos, 4) mot final à trouver puis félicitations. Confettis rouge/jaune/crème (canvas) et fanfare synthétisée (Web Audio)
- [ ] Mécanisme final à la Fort Boyard (validé) : chaque épreuve donne un mot, les 5 mots font penser au mot final CLAIRE (clair). Mots validés, dans l'ordre de jeu : Star Wars = OBSCURE (côté obscur ; l'utilisateur a confirmé ce choix après l'avoir remis en question), K-Pop = BRILLANTE (Briller), Montmartre = LUMINEUSE (lumière des peintres), Mousquetaires = NETTE (touche nette sur la cible), Harry Potter = TRANSPARENTE (cape d'invisibilité, potion limpide), accepter "clair" et "claire" comme réponse, encoder la réponse (hash) dans la page
- [x] Cadeaux à emporter (validé) : diplôme d'agent, pochette de 5 souvenirs, photo d'équipe
- [x] Modèle de diplôme : html/diplomes.html (A4 paysage, nom, nom de code, spécialité, signature du chef, tampon)
- [ ] Imprimer les diplômes (papier épais) et les remplir
- [ ] Pochette de 5 souvenirs, un par univers : fiole pailletée (Harry Potter), médaille en chocolat (Mousquetaires), bracelet lumineux (K-Pop), bâton fluo (Star Wars), carte postale de Montmartre (jeu de piste). Acheter 4 à 6 exemplaires de chaque, prévoir 4 à 6 pochettes
- [ ] Photo d'équipe en agents (fond rouge ou écran du plan), impression ou envoi aux parents
- [ ] Option inspirée de la série Sliders : variante du vortex en bleu et blanc, objet "Chronomètre" de l'agence (sans compte à rebours visible), à trancher. Ne réutiliser ni images, ni musique, ni noms de la série
- [ ] Sons et musique par page : chaque page HTML (briefing, portails, potions, K-Pop, Star Wars, jeu de piste, final) embarque ses propres sons et sa musique d'ambiance (fichiers locaux dans audio/, lecture hors ligne, touche M pour couper). Décider : sons synthétisés en Web Audio (sonnerie, tampon, jingle) ou fichiers MP3 libres de droits ; musiques de K-Pop ("Briller", "Ton sauveur") fournies par le maître du jeu
- [ ] Définir le personnage récurrent du directeur (portrait SVG ou illustration simple en HTML)
- [ ] Ajouter l'écriture progressive du message du directeur dans le briefing
- [ ] Tester la voix off (touche P) sur l'ordinateur du salon : vérifier qu'une voix française est installée
- [ ] Choisir le moteur de voix : ElevenLabs (rendu le plus expressif, voix de personnage) ou Azure AI Speech (voix neurales françaises, souvent suffisant)
- [ ] Choisir la voix du directeur (ElevenLabs : récupérer un voice id ; Azure : fr-FR-HenriNeural proposé dans voix/textes.json)
- [ ] Générer les MP3 dans audio/ avec voix/generate-voices-elevenlabs.ps1 ou voix/generate-voices.ps1 (clés en variables d'environnement, jamais dans le dossier)
- [ ] Vérifier le plan et les quotas du compte (ElevenLabs : caractères par mois, usage non commercial ; Azure : palier gratuit)
- [ ] Écouter chaque MP3 et ajuster les textes (voix/textes.json) avant de régénérer
- [ ] Utiliser un compte personnel et non un compte Accenture/OCTO pour Azure et ElevenLabs
- [ ] Voix des autres univers (K-Pop, Star Wars, jeu de piste) : ajouter les textes dans voix/textes.json une fois écrits

## Matériel et logistique

- [ ] Constructions Lego : utiliser celles de l'appartement (pas d'achat), les disperser dans les pièces et choisir les objets cachés
- [ ] Mettre à jour html/potions.html et scenario/univers.md une fois les 2 constructions et leurs objets choisis
- [ ] Ingrédients des potions : jus de chou rouge, bicarbonate, citron ou vinaigre, liquide vaisselle, paillettes, colorant
- [ ] Tester la recette de la potion en conditions réelles
- [ ] Armes en mousse, sabre laser, sabre en bois
- [ ] Costumes : mousquetaire (animateur), Saja Boys (3 gats), Huntr/x (3 filles)
- [ ] Lampe UV, bâtons lumineux, rubans phosphorescents
- [ ] Musiques de "Briller" et "Ton sauveur" : lues depuis YouTube (décision 2026-11-21). La page K-Pop lance les liens depuis l'HTML (bouton ou touche, ouverture dans un onglet ou lecteur intégré). Exception au mode hors ligne : connexion internet requise pour ces deux pistes. Récupérer les deux URL YouTube, repérer les minutes de coupure pour "N'oubliez pas les paroles", prévoir un plan B (fichiers audio locaux) si le réseau ou les publicités gênent
- [ ] Écran ou vidéoprojecteur, enceinte, rallonge
- [ ] Mise en place de l'appartement : plan des cachettes (materiel/)

## Fait

- [x] CLAUDE.md du projet
- [x] Fiches des 5 univers (scenario/univers.md)
- [x] Fil rouge : voyageurs du temps
