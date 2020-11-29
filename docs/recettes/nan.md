---
title: Nan
sidebar: auto
meta:
  - name: keywords
    content: salé, 2015
  - name: description
    content: Recette très pratique à faire au dernier moment
  - name: status
    content: draft

JSON:
      {
      "name": "Nan",
      "portion_qty": 4,
      "portion_step": 1,
        "portion_type": 'unité(s)',
        "ingredients": [
        {
        "name": "farine",
        "description": '',
        "qty": 300,
        "unity": "gr",
        },

        {
        "name": "yahourt",
        "description": 'type grecque',
        "qty": 125,
        "unity": "gr",
        },
        {
        "name": "huile végétale",
        "description": '',
        "qty": 1,
        "unity": "c à soupe",
        },
        {
        "name": "sel",
        "description": '',
        "qty": 1,
        "unity": "c à café",
        },
        {
        "name": "levure",
        "description": '',
        "qty": 1,
        "unity": "c à café",
        },
        {
        "name": "eau",
        "description": '',
        "qty": 7,
        "unity": "cl",
        },
          ]
        }

---

# {{ $page.title }}

## Ingrédients

<recipePortion :recette="$page.frontmatter.JSON" />

# Mise en oeuvre

- Malaxer pendant 20 minutes
- Laisser reposer
- Cuire au four ou à la poelle
