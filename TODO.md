# TODO escape game

Dernière mise à jour : 2026-11-21. **Fête : dimanche 6 décembre 2026** (J-15).

## Priorité haute (cette semaine)

- [ ] Envoyer les invitations : html/print-invitation.html (date renseignée, ajouter heure, lieu, prénoms, heure de fin)
- [ ] Décider la récompense finale (gâteau, cadeaux ou coffre à cadenas 6 lettres CLAIRE) : l'écran final dit "Votre récompense vous attend"
- [ ] Test complet de bout en bout sur l'écran réel (lisibilité à 3 mètres, son, enchaînement), sans raccourcis
- [ ] Servir le dossier en local (`python -m http.server 8000` dans le dossier du projet, puis http://localhost:8000/html/aventure.html) : le lecteur YouTube refuse file://
- [ ] Imprimer et fabriquer les supports (voir Impressions et Matériel)

## Décisions à prendre

- [ ] Garder ou non la voix du chef activée par défaut (P la coupe) ; garder la voix Azure ou passer à ElevenLabs (clé et voix dans le .env d'Onirologos)
- [ ] Image de Montmartre : garder la photo du Sacré-Cœur (images/univers-5.jpg) ou revenir au dessin
- [ ] Jeu de piste Montmartre : repérage prévu le 22 novembre (périmètre, durée, plan B pluie) ; les enfants trouvent les lettres successives de LUMINEUSE (9 lettres, une par étape, nombre d'étapes libre) ; lieux et énigmes à renseigner dans html/montmartre.html avec la fiche html/print-reperage-montmartre.html
- [ ] Inventaire des Lego de l'appartement, choix des 2 constructions manquantes (propositions : Quai 9 3/4, Saule cogneur) et de l'objet caché de chacune ; mettre à jour html/potions.html
- [ ] Prénom de Claire sur les supports non envoyés à un service externe (badge, invitation, écran de fin)
- [ ] Confirmer que "chambre 1" est la chambre en haut à droite, statuer sur le balcon et l'entrée (jouables ou non)
- [ ] Option : variante du vortex inspirée de Sliders (bleu et blanc), sans reprendre images, musique ni noms de la série

## Pages et code

- [ ] K-Pop : confirmer à l'oreille les temps des 5 mots cachés (sous-titres automatiques YouTube) et placer le bandeau avec le mode calage (C, T, Y) ; vérifier que l'intégration des 2 vidéos est autorisée
- [ ] Mousquetaires : renseigner le texte de chaque cible dans CONFIG de html/mousquetaires.html
- [ ] Potions : mettre à jour html/potions.html (mot TRANSPARENTE, parchemin à l'encre invisible)
- [ ] Sons : terminer html/sons.js (module synthétisé) et brancher les sons dans toutes les pages (plan dans materiel/audio-plan.md, fichiers libres dans audio/extra/)
- [ ] Star Wars : déposer audio/musique/marche-imperiale.mp3, vérifier le lancement automatique du son dans le cadre, ambiance sonore sombre
- [ ] Vraies images pour les 5 univers (images/univers-N.jpg) si les dessins ne plaisent pas
- [ ] Rédiger le déroulé minute par minute et finaliser les fiches (enigmes/mots-par-epreuve.md)
- [ ] Relier chaque spécialité des badges à un rôle dans au moins une énigme
- [ ] Écouter les 7 MP3 du briefing (audio/briefing-1 à 7), régénérer si besoin (voix/generate-voices.ps1 avec les clés en variables d'environnement)

## Impressions (pages prêtes dans html/)

- [ ] Badges : html/badges.html, plastifier, cordons, photos, prénoms et noms de code
- [ ] Diplômes : html/diplomes.html (papier épais)
- [ ] Invitation : html/print-invitation.html
- [ ] Panneaux de porte "Zone temporelle instable" : html/print-panneaux.html (chambre 1, salle de bain, WC, extérieur, bureau)
- [ ] Étiquettes de fioles : html/print-etiquettes.html
- [ ] Cartes de mots : html/print-cartes-mots.html (7 cartes OBSCURE, 9 lettres LUMINEUSE, 5 lettres N E T T E, parchemin TRANSPARENTE)
- [ ] Carnet K-Pop : html/print-carnet-kpop.html (un par enfant ou par équipe)
- [ ] Index et liste d'achats : html/print-index.html

## Matériel

- [ ] Star Wars : draps noirs (2 à 3) pour le bureau, ruban adhésif repositionnable ou pinces, lampe UV, bâtons lumineux, rubans phosphorescents, peinture ou marqueur fluorescent, limiter à 3 enfants dans la pièce
- [ ] Mousquetaires : fleurets en mousse (disponibles, confirmé), 5 cibles en mousse avec les lettres au dos, costume de l'animateur, dégager la chambre 2 (objets fragiles, lampes)
- [x] K-Pop : costumes reçus, enceinte OK, internet OK (confirmé 2026-11-21)
- [ ] K-Pop : ordinateur relié à la télé, crayons pour les carnets
- [ ] Montmartre : 9 cartes lettres plastifiées (L U M I N E U S E), sacs étanches, adulte accompagnateur par groupe
- [ ] Harry Potter : Lego (constructions cachées dans le salon), jus de chou rouge, bicarbonate, citron ou vinaigre, liquide vaisselle, paillettes, colorant vert, nappe plastique, tabliers, serviettes, pinceau large ; tester la recette et l'encre invisible avant le jour J
- [ ] Cadeaux : pochettes de 5 souvenirs (fiole pailletée, médaille en chocolat, bracelet lumineux, bâton fluo, carte postale de Montmartre), 4 à 6 exemplaires de chaque ; photo d'équipe en agents
- [ ] Écran ou vidéoprojecteur, rallonge, câble HDMI, clavier pour les enfants
- [ ] Plan de mise en place de l'appartement et des cachettes (materiel/)

## Fait

- Fil rouge : Agence Chronos, perturbations de mondes parallèles, un mot rapporté par épreuve (Fort Boyard), mot de passe final CLAIRE, aucun antagoniste, aucun chrono
- Ordre des épreuves : Star Wars (bureau, OBSCURE), K-Pop (salon, télé, BRILLANTE), Montmartre (dehors, LUMINEUSE trouvée lettre par lettre), Mousquetaires (chambre 2, NETTE), Harry Potter (salon, table, TRANSPARENTE)
- Page maître html/aventure.html : briefing en 7 écrans avec chef animé et voix, plan avec zones temporelles instables, vortex de saut, lieu, épreuve, saisie du mot avec indices, mot rapporté avec "Bravo", conclusion en 4 temps (plan, chef, tampon, CLAIRE avec confettis et fanfare), départ toujours à zéro, touche H pour masquer l'aide
- Pages d'épreuve : html/starwars.html (défilement), html/kpop.html (mots cachés par brouillage, calage), html/mousquetaires.html, html/montmartre.html, html/potions.html
- Voix du chef : MP3 Azure (fr-FR-HenriNeural) dans audio/, textes sans prénom
- Sons : html/vortex.js, sons synthétisés dans aventure.html, 16 bruitages et 7 musiques libres dans audio/extra/ (crédits dans audio/extra/CREDITS.md)
- Badges (6 spécialités), diplômes, invitation, panneaux, étiquettes, cartes de mots, carnet K-Pop
- Liens YouTube : Briller (EmkWAKFDj_4), Ton sauveur (qR2QBgCKRJI) ; 5 mots cachés : briller, nuit, lumière, forte, éblouit
- portails.html et briefing.html supprimés (fusionnés dans aventure.html)
- Cadeaux validés : diplôme, pochette de 5 souvenirs, photo d'équipe
