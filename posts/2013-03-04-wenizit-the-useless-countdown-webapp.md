---
layout: post
title:  Wenizit, the useless countdown webapp
tags:   [php, silex, wenizit]
author: bacardi55
---

## A day of useless coding

This week end, I had some time to loose. I wanted to code but I was too lazy to fix some of the [GPB](https://github.com/bacardi55/GPB) bugs/new features or to get back to a previous project that really need to be finished (a cv manager which suppose to be the next step of my presence of the web as I was saying [here](http://blog.dev/2013/02/03/presenting-github-php-dashboard-gpb.html)).

Instead, a friend asked me to create a countdown for him. The need was basic: a simple Javascript countdown to display on a web page.

There are tons of javascript code on the internet that let you do this very easily and I could have juste take a script, set the date a put it on a server. Would have been fast and easy and in javascript only (no need for a PHP server).

Instead of that, I wanted to have some fun coding some PHP…


## What did I do?

The idea was simple, create a very very small web app that let you create as much countdown as you want and display it with a nice Javascript code (I took an opensource one for the JS part).

So I download my favorite [Silex](http://silex.sensio.org) « distribution »: [Silex Kitchen](https://github.com/lyrixx/Silex-Kitchen-Edition).

As [Symfony 2.2 was released few days ago](http://symfony.com/blog/symfony-2-2-0), I changed the composer.json file of the silex kitchen edition to upgrade the symfony component to the 2.2 versions.

I had some issues as there was some changes in the API of some of the sf2 component. Nevermind, a fork of silex kitchen and 3 commits later, everything was fine :).

I was surprise (in a good way) today to see that [lyrixx](http://blog.lyrixx.info/) (the silex kitchen creator) merge some of my commits. I now have [my name in the commit page of silex kitchen](https://github.com/lyrixx/Silex-Kitchen-Edition/commits/master) :).

Anyway, few hours of coding later, [wenizit](https://github.com/bacardi55/wenizit) was born.


## Wenizit?

Wenizit (pronounce « When it is » with a strong french accent ^^) is a very little and very dumb app to create JS countdown.

You can create open countdown or password protected countdown.

[Here is a simple screenshot of wenizit]({{ relativeRoot }}/images/wenizit/wenizit.png).

Useless app is useless, but at least I had fun doing it ^^ (and it let me do some fixes for silex kitchen, so not that useless after all :)).

The code is dirty, the app not really finished (there should be an admin part, a real antispam, a remember me for the password protected pages, …). But at least, it does the work I needed.

I might continue fixing some stuff for wenizit one day because I like coding and it help me learn silex and the sf2 component a little bit more each time (and that's the real purpose actually).

I really need to learn how to finish projects for real ^^.


Anyway, I'm pretty sure that this app won't ever be used by someone else than me, but I don't really care as I code for fun ^^.

The next blog post shoud be on a more interesting subject (probably another one on vim or maybe on php5.5).
