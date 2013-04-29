---
layout: post
title:  Error page with carew and nginx
author: bacardi55
tags:    [nginx, carew, error page]
---

##Error page with Nginx

Today, I wanted to simply add a 404 error page on my blog. The http server used to deliver this page is [nginx](http://nginx.org). As it's the first time I use it since this blog, I'm not yet use to it. I'm more use to create an .htaccess file for apache.

The good news is, it's even easier with nginx to create custom error pages. No need to create an .htaccess file, you can do it in your vhost configuration file (site-available/filename).

Just add `error_page 404 = /your_error_page` and it's done for the nginx part. Isn't that beautiful ? :).

You can even catch more error on 1 ligne:

`error_page 404 500 502 504 = /your_error_page`

A full example:

    bash
    server {
      listen *:80;
      server_name domain.org;
      root /path/to/project;

      error_page 404 500 504 502 503 = /error.html;

      access_log  /var/log/nginx/domain_access.log;
      error_log   /var/log/nginx/domain_error.log;
    }

And voila!


## The carew part

To create a error page in carew, you simply need to create a page and a specific layout for that page.
In my example, as I redirect lots of different error to the error page, I just need to display an basic page.

I created a `layout/errors.html.twig` and a `page\error.md` and that was done.

The source code of this two files can be find on [the repository of this blog](http://github.com/bacardi55/b-55-log/)

You won't have nginx error anymore on this blog (as it was on the tags page that wasn't working. It's fixed now, thanks to Rustx) :)
