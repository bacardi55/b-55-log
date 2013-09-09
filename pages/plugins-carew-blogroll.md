---
title: BlogRoll plugins for Carew
subtitle:
tags: [carew, php]
layout: page
---

### BlogRoll plugin

#### Summary
This is my first [carew](http://carew.github.io/) plugin is a simple « Blog Roll » plugin.

This plugin let you create easily a list of link via the yaml config file of your [carew](http://carew.github.io) application.

#### How to install it

A package is available on packagist in order to make it very simple for you to install.

All you have to do is to edit your `composer.json` file to add this requirement:

    "bacardi55/carew-plugin-blogroll": "1.*dev"

Then, `php composer.php update` or `php composer.php install` depending on your case.

#### How to use it

Edit the carew config.yml file to enable the extension:

    engine:
        […]
        extensions:
            …
            - Carew\Plugin\BlogRoll\BlogRollExtension
            …


Then, in the same file, you just need to add the list of links like this:

    blogRoll:
      lien1: http://lien1.com
      lien2: http://lien2.com


Last step, you need to put the following code in your twig file:

    twig
    {% for blog in blogRoll %}
      <li><a href="{{ blog.url }}">{{ blog.name }}</a>
    {% endfor %}

`blogRoll` is a variable that you can access in any twig template as soon as the extension is enabled.

#### Source code

You can find the code on github [here](https://github.com/bacardi55/carew-plugin-blogroll).

The package can be found [here](https://packagist.org/packages/bacardi55/carew-plugin-blogroll) on packagist.
