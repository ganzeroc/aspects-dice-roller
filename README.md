# FVTT-AspectDices
Adds a new type of dice: the Aspect Die.  
Comes with 'Dice So Nice!' support.  
Usage: 
```
/r 1db 1de 
game.aspectmod.macros.RollAspects("1db+1de+1dk+1dr" ) ou game.aspectmod.macros.RollAspects("1db+1de+1dk+1dr", "1db" )
ou encore game.aspectmod.macros.RollAspects("1db+1de+1dk+1dr","1db",5)
ou encore game.aspectmod.macros.RollAspects("1db+1de+1dk+1dr","0",5)
ou encore game.aspectmod.macros.RollAspects("1db+1de+1dk+1dr","3db",5,0,1)
```

concernant les paramètres :
1) prompt du roll principal (PJ), entre guillement. Sans ce prompte rien ne fonctionne. (prompt de type "1de + 3db")
2) prompt du roll secondaire (stuff), entre guilement (prompt de type "1de + 3db"). si on veut se passer de cet argument => "0"
3) Test concernant l'Obacle. On y précise le niveau de difficulté (valeur numérique. Si on veut se passer de cet argument => "" ou 0)
4) Test concernant la Forme Animale. On y précise le niveau de difficulté (valeur numérique. Si on veut se passer de cet argument => "" ou 0)
5) Test concernant l'Élément. On y précise le niveau de difficulté (valeur numérique. Si on veut se passer de cet argument => "" ou 0)

on n'est pas obligé de remplir tous les paramètres. Cependant, si on veut utiliser le paramètre 4 par exemple, il sera nécessaire de completer les paramètres 1, 2, et 3 (avec leur valeur nulle si ils ne sont pas requis)

Le test de résonnance cherche la répétition des symboles sur les différentes faces de dés Il y a résonnance si les faces sont répétées autant de fois qu'il y a de dés dans le roll principal, avec un maximum de 3. 
En cas de présence d'un (de) niveau(x) de difficulté, le test de résonnance se fait sur la somme de tous les éléments présent dans le(s) test(s) demandés.
i.e. si on fait un test sur l'élément, le test de résonnance se fera en comptant le nombre de faces avec au moins un élément présent.
i.e. si on fait un test sur l'élément + l'obacle, le test de résonnance se fera en comptant le nombre de faces avec l'élément , ainsi que le nombre de face avec l'obacle, séparément
dans l'absence de niveaux de difficulté (argument non renseigné ou tout à 0) le test cherchera la résonnance sur tous les aspects.

La macro fait la somme des symboles constatés sur les faces.
En cas de présence d'un (de) niveau(x) de difficulté, la macro précise si le test est réussi ou perdu. On précise également la marge de réussite du test par rapport au niveau de difficulté demandé.
en cas de test sur plusieurs aspects, la macro effectue la vérification idépendamment sur chaque aspects présent dans le test. On précise également la marge de réussite du test (sans différencier quelle amrge sur quelle partie du test)


# Credits

Thanks to Bithir and his Symbaroum-Bithir-Mods as a uge inspiration for this module 
https://github.com/bithir/symbaroum-bithir-mod/tree/master
