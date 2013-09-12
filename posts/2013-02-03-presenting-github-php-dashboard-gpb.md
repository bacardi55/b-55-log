---
layout: post
title:  Presenting Github Php dashBoard
subtitle: Aka GPH
tags:   [php, github, gpb]
author: bacardi55
---

My new project page is now available [here](http://projects.bacardi55.org "bacardi55's projects").


Your what?
----

My new project homepage! This project is very simple as there is only on screen. GPB create a page that will display information about any github project you want (as long as it is a public project).

GPB create a dashboard presenting several informations about github repositories like the description, the number of commits, the last commits, ect… (see [my project homepage](http://projects.bacardi55.org "bacardi55's project page")) to see what it is displayed.



Why did you do that?
----

I changed my blog for a reason: to change my « php developer web card » (my presence on the web). The first step was [this blog](http://bacardi55.org). I want it to be the frontpage.

Now that I've done this, as long as I keep writing blog post, I fullfil my first goal.

The second step was a page to present nicely my opensource projects. I have my [github page](http://github.com/bacardi55) but I don't like the way it is presented. So I decided to create a quick page for that. I wanted to code something simple that would load a config an display the informations (as simple as yaml file). When I start thinking about what I would write inside the description for each project, I thought about what I wrote on github. I thought about copying / pasting it but i didn't like the idea of maintening the same text in 2 different places.

*That's how GPB is borned!*



What is GPB?
----

I created GPB, aka Github Php dashBoard (previously Github Php Board, that's why GPB :)), to simply get all the informations about my github projects and display it in a classy way. Doing this, I just need to keep my github project cleans and everything will be fine :).



How does it works?
----

There is a simple `config.yml` file that let you choose the github projects to display (you can choose projects from different users). It use only the non authenticated github api so you won't be able to create repo or stuff like that from GPB. That was not the primary goal and I don't know if it will be one day.

The default config file (the one that create my project page) is :

    yml
    githubPhpBoard:
        title: Bacardi55 project page
        subtitle:
        users:
            - bacardi55:
                - b-55-log
                - i55WebManager
                - jobEscaper55
                - dotfiles
                - gpb
            - lyrixx:
                - Silex-Kitchen-Edition

All you have to do is put a title, a subtitle (optional) and then choose the users/projects to display. As you can see, I put my personnal projects and silex kitchen projects (for the example). That way, you can also put your contribution to other projects.



What's behind it?
----

This app is written in [PHP](http://php.net "php") based on the [Silex kitchen](https://github.com/lyrixx/Silex-Kitchen-Edition "silex kitchen") version of the [Silex micro framework](http://silex.sensio.org "silex") with the help of the excellent [php github api](https://github.com/ornicar/php-github-api). The view part is done with [twig](http://twig.sensio.org "twig") and [twitter bootstrap](http://twitter.github.com/bootstrap/).



How to install it?
----

Thanks to composer, you just have to

Install [composer](http://getcomposer.org) if it's not already done:

    bash
    php -r "eval('?>'.file_get_contents('https://getcomposer.org/installer'));"

Then, thanks to composer, you just need to:

    bash
    php composer.phar install

And there you go!

***Be carefull***: You'll need the php5-curl extension.

Then, edit the `src/B55/gpb/resources/config/config.yml` or edit the `resources/config/prod.php` to set your configuration location and then create it (by copying the default one for example) and set your dashboard informations (the second option is the proper way).

Don't forget to remove the index_dev.php!

**The page are set in cache for 15min to avoid being shutdown by github (limit request number).**

The cache time will soon be configurable.

If you have too many projects and often rich the limit (and getting a 503 error page), you can «quick fixed» it by editing `src/B55/gpb/Controller/GpbControllerProvider.php` and add :

    php
    $github_api->authenticate($login, $password, GithubClient::AUTH_HTTP_PASSWORD);

before

    php
    $factory = new GpbFactory();

I'll will change that some day to use the proper way and generate a token for the app.



What's next?
----

Now that I have this pages, what's next for GPB?

- Configuration per project of the information you want to display (summary, commits, pull request, issues, …)
- cache time configurable
- better authentication
- A page for each project (why not getting project.github.com static page to do that? or parsing the readme.me?)
- … I'll see where i'll go with this latter :)


Thanks for reading this far! :)
