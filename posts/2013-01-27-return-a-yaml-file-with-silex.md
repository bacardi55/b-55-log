---
layout: post
title:  Return a Yaml file with silex
tags:   [silex, yaml, php, tips]
author: bacardi55
---

Today, I wanted to return a Yaml file to my browser but I wanted to be forced to download it.

It's not a file so I can not use the $app->stream helper. Instead I return a simple http response.

As I didn't find right away my answer, I thought about putting it in a blog post.

In your controller, add :

``
use Symfony\Component\HttpFoundation\Response;
``

Then, where you want to return your yaml file:

    php
    return new Response(
        $yaml,
        200,
        array('Content-Type' => 'text/x-yaml',
            'Content-Disposition' => 'attachment; filename="filename.yaml"'
        )
    );

And there you go :)
