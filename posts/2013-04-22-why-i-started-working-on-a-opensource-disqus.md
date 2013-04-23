---
layout: post
title:  Why I started working on a opensource disqus
author: bacardi55
tags:   [angularjs, jocs, disqus]
---

## Disqus ?
From the [Disqus website](https://disqus.com "disqus"):

`From small blogs to massive websites, Disqus is the easiest way to build active communities.
It's free to use and works with virtually any type of website.`

In short, it's a simple comment system. I heard you saying «that's it?». And the anwser is yes.

Advantages:

- The comment system is not managed by yourself;
- You don't have to worry about spam;
- You just includ some Javascript code on your page and your good to go;
- Include a social aspect in comments.


Drawbacks:

- The major one for me: You don't own your data. If you do a basic comments system in php, ruby or whatever, you host the data of your users. If you use Disqus, Disqus own the content. For me this reason is more than enough to not use disqus. On disqus' website, they say that the data belongs to them.
- You don't have access to the source code of disqus. Therefore, you don't know what it does.
- You can't adapt it to your needs.


## Ok, so no comments on your website?
Exactly. At this moment, there is no comment section on this blog. As a matter of fact, it doesn't bother me much. I might have 10 readers tops :D so I don't really care.

I'm following a lot of developers blog and see a lot of them switching to heavy CMS or blog plateform to go this kind of static websites. And most of them are using disqus… There also people to use disqus on non static website. I really don't know why, but I feel like the «cloud» is the good excuse to not really care where our data are.


## So?

So I started hacking a couple of weeks ago a new project to put it on this blog. I don't really need a comment system but maybe people will see it on maybe try it instead of disqus. The project is in a very early stage and will be release as a 0.1-alpha soon.

Before starting, I had these pre-requisite:

- Separate completly the frontend and the backend;
- Learn how to use angularjs for the frontend;

The first one would let user write other backends in the language they want. I'm well aware that php is not loved in the opensource community so that way, user will be able to have their own backend with their own features in the language they like.

The second one was more of a selfish choice as I wanted to learn how to writte angularjs app.

The project is separated in 2 different projects:


- Jocs (Javascript Opensource Comments System): (say it like «jokes» :))A full javascript frontend writting with [angularjs](http://angularjs.org/ "angularjs"), the Superheroic JavaScript MVW Framework :). This frontend has to be set up in your web page when you want to add a comment system.
- Pocs: This is a backend written in php with [silex](http://silex.sensio.org). This is a very basic backend that handle the web service + a simple admin page to add frontend.


## Where am I?
### Jocs' on me

For now, I'm in the early stage. The app is currently working on my local but for now, it's not as user friendly as disqus to set it up on your website.
For example, to make it work with my blog, I had to change the path to the angularjs views. There is also no response to comment yet but that will be soon.

I have a huge todolist and I'll try to put it on the github repo at the same time as the source code (probably at the end of the week).
This won't be perfect but it would be a version that does the minimum to work :).

What it does for now:

- Display the comments after the page is loaded.
- Add a comment.
- Display gravatar if available.

Soon:

- Response to comment (hierarchy)
- Antispam
- …

You can see a capture here:
[here]({{ relativeRoot }}/images/jocs/alpha.png)

### Pocs

For the backoffice, it's also the early stage. I'm developping both frontend and backend at the same time so it takes time :).
What it does for now:

- Install script to create the first user.
- Add/Remove frontend (link the frontend to the backend with an API key and a fixed base URL).

Soon:

- See comments per frontend / url and remove the unwanted ones.
- …

I think the code will be on github at this end of this week so people might be able to look at it.
It will be [here](http://github.com/bacardi55/jocs "jocs") and [here](http://github.com/bacardi55/pocs "pocs").

## Conclusion

I'll install it soon to try to test it here. I'll continue update this blog with the news of this project.
Hope that project will inspire developers to switch from disqus for jocs or their own comment system :).

