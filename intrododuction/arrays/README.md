# Introduction

On va revenir sur des outils de programmations qui n'ont pas encore été approfondis dans la cours d'initiation.
 

## Arrays

Array est un type de variable qui représente une liste, une collection.

Chaque élément à un index, une position. Cet index est numérique et permet de sélectionner un élement en fonction de sa position dans la liste.

Pour des raisons pratiques, __on va éviter de mélanger plusieurs types de variables dans un array__. Il faut voir un array comme une liste, une collection. Idéalement dans une collection on ne mélange pas différents types d'objets. Ici c'est la même chose.

Un array se déclare avec les _crochets_ : `[]`, par exemple:

`let fruits = ['pomme', 'poire', 'fraise']`;

## Boucles

Les boucles sont un outil qui permet de répéter une suite d'instructions en fonction d'une condition. _Tant que la condition est remplie, fais ceci_.

Il y a plusieurs moyens de les écrire:

### while

C'est la plus pure traduction du _Tant que la condition ..._ et ça s'écrit:

```
while (condition) {
    _instructions_
}
```

Le bloc entre parenthèses va être transformé (parfois comme il peut) par l'interpreteur en _true/false_ et si le résultat est true il va executer la série d'instructions qui se trouve dans le corps, entre les accolades.

```
let i = 0;
while (i < 10) {
    // On peut faire quelque chose avec ce i
    i = i + 1;
} 
```

### for



