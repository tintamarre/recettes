---
title: Spéculoos mous
sidebar: auto
meta:
  - name: keywords
    content: sucré, 2020
# JSON: { "Farine": 1000, "Eau": 570, "Sel": 30, "Levure": 1 }
JSON:
  {
  "name": "Spéculoos mous",
  "portion_qty": 10,
  "portion_step": 5,
  "portion_type": 'spéculoos',
  "ingredients": [
  {
  "name": "farine",
  "description": 'à patisserie',
  "qty": 250,
  "unity": "gr.",
  },
  {
  "name": "bicarbonate",
  "description": '',
  "qty": 0.5,
  "unity": "c à café",
  },
  {
  "name": "4 épices",
  "description": '(sucrées!)',
  "qty": 0.5,
  "unity": "c à café",
  },
  {
  "name": "canelle",
  "description": '',
  "qty": 1,
  "unity": "c à café",
  },
  {
  "name": "muscade",
  "description": '',
  "qty": 1,
  "unity": "pincée",
  },

  {
  "name": "cassonade brune",
  "description": '',
  "qty": 150,
  "unity": "gr",
  },

  {
  "name": "beurre",
  "description": 'ramolli',
  "qty": 100,
  "unity": "gr",
  },

  {
  "name": "lait",
  "description": '',
  "qty": 3,
  "unity": "c à soupe",
  },

  {
  "name": "amandes effilées",
  "description": '',
  "qty": 25,
  "unity": "gr",
  },

  {
  "name": "oeuf(s) battu(s)",
  "description": '',
  "qty": 1,
  "unity": "",
  },
  ]

  }
---
# :cookie: {{ $page.title }}

:book: Vieux grimoire de Mamy Coune (Rinkin)

<recipePortion :recette="$page.frontmatter.JSON" />

## Mise en oeuvre
- Préchauffer le four à 180 degrés ;
- Mélanger les ingrédients (en terminant par les éléments mous)  ;
- Former des Speculoos de la taille ;
- Disposez-les sur une plaque de cuisson avec du papier sulfurisé ;
- Enfourner avec 13 à 15 minutes de cuisson ;
