---
layout: post
title: Render Symfony Form Widget with dynamic name in twig
tags: [sfForm, twig, php]
author: bacardi55
---

## Introduction

Today, I restarted working on [yarg](http://github.com/bacardi55/yarg) (a project i'll talk about soon) which is a [Symfony](http://symfony.com) project. I had a simple need to create a draggable list of items with an Ajax call to save the new order.

In a "basic" project, I would have written my `<form>` and `<input>` tags in the template by myself and that would be enough. As I'm using [Symfony](http://symfony.com), I wanted to build it via the sfForm component and handle it as a basic form and display it in twig using `form_wiget()`.

But to do that I needed to be able to call `form_widget(myForm.myName<ID>` with <ID> being a dynamic number.

## My working solution

I don't know it's the right way but at least it work for me :). So use the comments or fork this blog post on github if you have a better solution :).
In any case it might help some other people that want to make this work^^.

An example of a form with dynamic name:

    php
    $orderInform = $this->createFormBuilder();
    foreach($cv->getInformations() as $information) {
        $orderInform->add(
          'information_' . $information->getId(),
          'hidden',
          array(
            'data' => 'information[' . $information->getId() . ']',
          )
        );
    }


So in that case, I want to generate form_wiget with name like `orderInform.information_XX` with XX being the id of the information.

To generate this in twig, I found this solution that work:

    twig
    {% set infoId = 'information_' ~ cv_info.id %}
    {{ form_widget(attribute(orderInform, infoId)) }}

Hope that helps people :)
