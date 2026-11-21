# Plan sonore : bruitages et musiques

Légende de la colonne Source :
- **Synthèse** : généré par la page (Web Audio), sans fichier, sans droit d'auteur, hors ligne. Déjà fait ou facile à faire.
- **Libre** : fichier sans copyright ou sous licence libre (crédit dans [audio/CREDITS.md](../audio/CREDITS.md)).
- **YouTube** : lu depuis YouTube par le maître du jeu, internet requis. Copyright, usage privé.
- **À fournir** : à trouver par le maître du jeu ou à enregistrer.

## 1. Bruitages (effets courts)

| Où | Moment | Bruitage | Source | Statut |
|---|---|---|---|---|
| Briefing 1 | Appel entrant | Sonnerie de téléphone en boucle, puis décrochage | Libre (Commons) ou synthèse | fichier récupéré si disponible, sinon à synthétiser |
| Briefing 2 | Message du chef | Petits bips de transmission à chaque lettre tapée, grésillement radio de fond | Synthèse | à faire |
| Briefing 3 | Rapport d'anomalie | Alarme courte, puis tampon "Anomalie détectée" | Synthèse (alarme) + libre (tampon) | à faire |
| Briefing 4 | 5 portails | Ping de sonar à l'apparition de chaque carte | Synthèse | à faire |
| Briefing 6 | Mission lancée | Jingle de départ (3 notes montantes) | Synthèse | à faire |
| Aventure, plan | Arrivée sur le plan | Sirène douce + ping de sonar sur le marqueur | Synthèse | à faire |
| Aventure, vortex | Saut temporel | Souffle montant puis flash | Synthèse | fait (vortex.js), à rallonger à 5 s |
| Aventure, lieu | Arrivée dans le lieu | Impact d'atterrissage grave | Synthèse | à faire |
| Saisie du mot | Mot faux, mot juste | Buzz doux, ding | Synthèse | fait |
| Mot rapporté | Lettres qui apparaissent | Tic par lettre, accord final | Synthèse | à faire (ding unique fait) |
| Conclusion | Tampon "Mission accomplie" | Choc de tampon | Synthèse | fait (thump) |
| Conclusion | Mot final et confettis | Fanfare + pop de confettis | Synthèse ou libre | fanfare synthétisée faite, version fanfare libre récupérée si disponible |
| Star Wars (bureau) | Ambiance | Souffle de vaisseau, bip de console, bourdonnement d'un sabre | Synthèse (jamais les sons du film, protégés) | à faire |
| Mousquetaires (chambre 2) | Touche réussie | Choc d'épées | Libre (Gravity Sound, CC BY) | fichier récupéré si disponible |
| Mousquetaires | Figure ratée | Petit "oh" de cuivre | Synthèse | optionnel |
| Harry Potter (salon) | Mélange de la potion | Bouillonnement, pétillement | Libre (Freesound ou Pixabay, à chercher) | à fournir |
| Harry Potter | Mot qui apparaît sur le parchemin | Carillon magique (scintillement) | Synthèse | à faire |
| K-Pop | Coupure de la musique | Scratch ou "stop" sec | Synthèse | à faire |
| K-Pop | Lettre révélée | Ding aigu | Synthèse | à faire |
| Montmartre (dehors) | Carte trouvée | Aucun son sur l'écran, les enfants sont dehors | Sans objet | rien à prévoir |

## 2. Musiques d'ambiance

| Où | Ambiance recherchée | Choix sans copyright | Statut |
|---|---|---|---|
| Briefing (fond) | Suspense d'espionnage, discret, boucle | Musique de bibliothèque libre (Kevin MacLeod, CC BY) ou synthèse en boucle | à choisir |
| Aventure, plan | Radar, tension légère | Même boucle que le briefing | à choisir |
| Star Wars (bureau) | Espace, drone sombre, aucune mélodie reconnaissable | Piste d'ambiance libre (Ten Skies, CC BY-SA) | fichier récupéré si disponible |
| K-Pop | Les deux chansons du film | YouTube (copyright, usage privé) | liens à fournir |
| Montmartre | Accordéon musette, balade parisienne | Enregistrement libre (Duet Musette, CC BY) | fichier récupéré si disponible. Les enfants jouent dehors : musique seulement sur l'écran au départ et à l'arrivée |
| Mousquetaires | Baroque français, danses de cour | Lully, enregistrement libre (CC BY-SA) | fichier récupéré si disponible |
| Harry Potter | Magie, célesta, mystère | Arpèges de célesta du domaine public (Fée Dragée) | fichier récupéré si disponible |
| Conclusion | Joie, victoire | Fanfare libre ou musique de victoire synthétisée | à choisir |

À éviter : tout thème de film ou de série (John Williams, Harry Potter, K-Pop Demon Hunters hors YouTube, Sliders). Risque de blocage sur YouTube ou de réclamation de droits, même en privé.

## 3. Solutions pour se procurer le reste

1. **Générer dans la page** (recommandé pour tous les bruitages courts) : sonnerie, bips, alarme, tampon, ding, fanfare. Zéro fichier, zéro droit, hors ligne. Je peux tout coder dans un module commun `html/sons.js`.
2. **Banques libres** :
   - Pixabay (sons et musiques, licence libre, sans crédit obligatoire, téléchargement manuel avec compte gratuit).
   - Freesound (filtrer sur licence CC0, compte gratuit).
   - Kenney.nl (packs de sons CC0 : interface, science-fiction, impacts).
   - Wikimedia Commons (domaine public et CC).
   - Incompetech de Kevin MacLeod (musiques CC BY, crédit obligatoire).
3. **IA musicale** (Suno, Udio, ElevenLabs Sound Effects) : pour des boucles sur mesure ("ambiance espion années 2000", "bureau spatial sombre"). Licence à vérifier, usage privé sans souci. Tu as déjà ElevenLabs : sa fonction de bruitages convient pour la sonnerie, le bouillonnement et les ambiances.
4. **YouTube Audio Library** : musiques libres, lecture dans YouTube ou téléchargement avec un compte Google.

## 4. Règles techniques

- Fichiers dans `audio/` (sous-dossiers `sfx/` et `musique/`), lecture locale hors ligne, sauf K-Pop (YouTube).
- Volume réglé bas par défaut, touche M pour couper tous les sons, boucles sans coupure franche.
- Musique d'ambiance sous la voix off : baisser à 20 % pendant la voix.
- Les navigateurs bloquent le son avant une première interaction : le maître du jeu appuie sur une touche (par exemple F pour le plein écran) avant de lancer le briefing.
