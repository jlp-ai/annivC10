# Escape game d'anniversaire (5 univers)

Projet personnel (hors OCTO) : créer le contenu d'un escape game pour l'anniversaire d'une fille de 10 ans.

## Cadre validé

- **Format** : parcours de 5 univers, un par épreuve (détail dans [scenario/univers.md](scenario/univers.md)).
  1. Harry Potter : cours de potions (parchemin HTML, constructions Lego, vraies réactions sur la table).
  2. Mousquetaires : figures à l'arme en mousse, puis toucher une cible précise. L'animateur joue le mousquetaire.
  3. K-Pop Demon Hunters : déguisements (3 garçons Saja Boys, 3 filles Huntr/x), "N'oubliez pas les paroles" sur "Briller" et "Ton sauveur".
  4. Star Wars : épreuve dans le noir avec matériel fluorescent (à préciser).
  5. Titis de Montmartre : jeu de piste en extérieur.
- **Révélation progressive** : les univers et leurs lieux dans l'appartement ne sont jamais dévoilés au briefing. Ils s'ouvrent un par un via [html/portails.html](html/portails.html) (données dans [html/univers-data.js](html/univers-data.js)).
- **Lieux** : Harry Potter au salon (Lego cachés dans tout le salon, potions sur la table du salon), Mousquetaires en chambre 2, KPop sur la télé du salon (mur entre bureau et séjour), Star Wars au bureau, Titis de Montmartre dehors autour de l'appartement.
- **Palette** : rouge, noir et jaune (agence de détectives), pas de violet.
- **Fil rouge** : chaque enfant est membre d'une organisation secrète de voyageurs du temps. Les 5 univers sont 5 destinations de mission. Organisation : Agence Chronos. Menace : brèches de mondes parallèles. Récompense finale à définir (voir [scenario/univers.md](scenario/univers.md)).
- **Participants** : 4 à 6 enfants de 10 ans, une seule équipe (idéalement 3 garçons et 3 filles).
- **Lieu** : appartement du 18ème arrondissement de Paris + extérieur. Plan et zones dans [materiel/plan-appartement.md](materiel/plan-appartement.md). **Zones interdites : chambre 1, salle de bain, WC** (aucun indice ni objet à y placer).
- **Durée cible** : 45 à 60 minutes pour l'ensemble, soit 8 à 12 minutes par univers (à ajuster, le jeu de piste peut être plus long).
- **Support principal** : pages HTML affichées sur un grand écran (TV ou vidéoprojecteur), pilotées par un adulte (maître du jeu). Certaines énigmes sont numériques, d'autres sont physiques (cachettes, cadenas, objets) et déclenchées par l'écran.
- **Pas de vidéo générée** : Claude seul ne produit pas de vidéo. Les "vidéos" sont remplacées par des écrans HTML animés (CSS/JS, effets d'apparition, écriture progressive), avec voix off optionnelle par synthèse vocale du navigateur (touche P). Les pages acceptent un fichier MP4 optionnel dans video/ si une vidéo externe est un jour produite.

## Suivi

- Maintenir [TODO.md](TODO.md) à jour en continu : ajouter toute tâche qui émerge (création de badges, impressions, matériel, décisions), cocher ce qui est fait, mettre à jour la date.
- En fin de réponse, signaler les ajouts ou changements de la TODO.

## Ambiance du briefing

- Inspirations : agence d'espionnage des séries animées des années 2000 (appel du chef, dossier confidentiel, gadgets, couleurs rouge, noir et jaune) et enquêtes à travers le monde et les époques d'une agence de détectives face à une organisation de voleurs.
- S'en inspirer sans reprendre de noms ni de personnages protégés : agence inventée (proposition : Agence Chronos).
- **Aucun ennemi ni méchant** : la menace est une anomalie : des perturbations issues de mondes parallèles qui tentent de s'insérer dans notre monde réel (des morceaux de ces mondes surgissent là où ils n'ont rien à faire). Chaque épreuve rapporte un mot (comme à Fort Boyard), et non un objet : chaque monde est tenu ouvert par un mot-clé, un mot traverse les mondes sans se briser, c'est la seule chose que les agents peuvent en rapporter. Les cinq mots (OBSCURE, BRILLANTE, LUMINEUSE, NETTE, TRANSPARENTE) mènent au mot de passe final CLAIRE, qui rend tout clair et referme les brèches. Pas de personnage antagoniste.
- Éléments récurrents : appel entrant, le chef (donneur d'ordre), tampon "Anomalie détectée", rapport d'anomalie, nom de code des agents.

## Public et ton

- Enfants de 10 ans : lecture fluide, énigmes visuelles et manuelles, aucune frustration durable.
- Ton magique, complice, humoristique ; pas de contenu effrayant.
- Difficulté progressive : indices à 3 niveaux (coup de pouce, piste, solution) accessibles par le maître du jeu.
- Coopération : chaque énigme doit mobiliser plusieurs enfants (un lit, un cherche, un manipule).

## Règles d'écriture

- Tout le contenu (scénario, énigmes, textes à l'écran, UI) en **français**, accents obligatoires.
- Code et identifiants en anglais. UTF-8 sans BOM.
- Pas d'emojis dans les textes de jeu sauf choix de design explicite.
- Pas de tirets cadratins ni semi-cadratins dans les textes.
- Phrases courtes, vocabulaire adapté à 10 ans.

## Contraintes techniques HTML

- Fichiers HTML autonomes (CSS et JS inline ou fichiers locaux), fonctionnement **hors ligne** : aucune dépendance CDN au moment du jeu.
- Plein écran 16:9, grandes polices lisibles à 3 mètres, contraste élevé.
- Navigation au clavier pour le maître du jeu (suivant, précédent, indice).
- **Aucun chrono ni compte à rebours visible** : ne pas mettre la pression aux enfants. La durée cible sert uniquement au maître du jeu pour rythmer la partie.
- Validation des codes côté page (champ de saisie ou clavier), avec retour visuel et sonore.
- Vidéos en MP4 (H.264) stockées localement, lecture sans réseau.
- Exception : les musiques K-Pop ("Briller", "Ton sauveur") sont lues depuis YouTube. La page K-Pop lance les liens depuis l'HTML, internet requis pour cette épreuve seulement.
- Éviter toute solution dans le code source lisible par un enfant curieux : acceptable à 10 ans, mais encoder légèrement les réponses (hash ou base64).

## Structure prévue du dossier

```
Anniversaire C/
  CLAUDE.md
  scenario/      histoire, personnages, déroulé minute par minute
  enigmes/       fiches énigmes (énoncé, solution, indices, matériel)
  html/          pages affichées sur grand écran
  video/         scripts et prompts vidéo, fichiers générés
  materiel/      liste de matériel, plan de cachettes, impressions
```

## Points ouverts

- Anniversaireuse : **Claire** (10 ans). Elle est une agente comme les autres, sans grade particulier. **Son prénom n'apparaît jamais dans les textes de voix off** (ils sont envoyés à un service externe pour générer les MP3).
- Agence : **Agence Chronos** (validé).
- Objet final dans le coffre : à décider.
- Nombre d'énigmes (6 à 8 visées) et répartition appartement / extérieur.
- Matériel disponible (cadenas, coffres, lampe UV, etc.).
- Date de la fête.
