---
layout: post
title:  Add an twig extension in Silex
tags: [silex, twig, twig extension, php]
---

The problematic
----
Today, I wanted to use a [twig](http://twig.sensiolabs.org "twig") extension for a new project (that i'll present in a few days) in [Silex](http://silex.sensio.org "silex").

To be precise, I wanted the awesome [twig text extension](https://github.com/fabpot/Twig-extensions "twig extensions"). This extension let you for example truncate your text directly in the view. That removes code from the controller/model part but it's also usefull if you want to display a truncated text and a tooltip with the full text when putting your mouse over the text and passing only one variable with the full text.

For example, if you want to display only the first 10 characters of the variable maVar, just :

    twig
    {{ maVar|truncate(10) }}


I found different answers on the internet but it didn't work for me.



The solution
----

In your app.php, just add :

    php
    $app->register(new TwigServiceProvider(), array(
        'twig.options'        => array(
            'cache'            => isset($app['twig.options.cache']) ? $app['twig.options.cache'] : false,
            'strict_variables' => true
        ),
        'twig.form.templates' => array('form_div_layout.html.twig', 'common/form_div_layout.html.twig'),
        'twig.path'           => array(
          __DIR__ . '/../resources/views',
        )
    ));

    $app['twig'] = $app->share($app->extend('twig', function($twig, $app) {
        $twig->addExtension(new Twig_Extensions_Extension_Text($app));

        return $twig;
    }));

You should already have the first ```$app->register(new TwigServiceProvider(), …)``` part if you use twig.

The second part is the twig extension registration. Here, I add only one extension but you can add more by adding other ```$twig->addExtensio(…)``` if you want. There are many cool [twig extensions](https://github.com/fabpot/Twig-extensions) (i18n, debug).


There you go, you can now use the `truncate`, `wordwrap` (does as the [wordwrap php function](http://www.php.net/manual/fr/function.wordwrap.php)) and `nl2br` filters in twig :).

***Watch out***: Don't forget the ```return $twig;``` line! I lost half an hour because of this so don't do as me ^^.

As always, hope that will help someone (at least me when i'll have the same issue in another project ^^).
