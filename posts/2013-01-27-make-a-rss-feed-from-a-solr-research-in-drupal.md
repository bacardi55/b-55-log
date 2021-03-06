---
layout: post
title:  Make a RSS feed from a Solr research in drupal
tags: [drupal, apachesolr, RSS, php]
author: bacardi55
---

The problematic
----
----
At my work, I had the task to create a RSS feed on a Drupal website for some Solr search result pages.
I was working on a project where all the listing pages were generated by solr request. As usual, the client asked for an RSS feed for this pages. But she also asked to be able to put a keyword in the search and have a RSS feed for only the search pages.
To do that, I needed to launch the solr query to have the result of my RSS feed.
I also needed to be do it outside Drupal to let the varnish cache it (without specific rules as the link won't need authentification).

My solution
----
----
I don't know if this is a perfect solution, but in that can help someone, here what I did.

I had several options but I started by creating a rss.php controller.
Inside I loaded my manager class that will include the needed files.
I needed the settings.php to load the database settings. The class load the solr configuration and is now ready to create the query.

In Drupal, After each solr request, I put in cache all fixed arguments of the query (like the content type, the publish options, ect…).
After that, I generate a url with the request name (to retrieve it in cache) and the non fixed parameter (such as keywords).

Then back in my manager, I parsed the url the retrieve the parameters. Then I load from the cache the fixed parameters of the request.
I then generate the solr request and launch it thanks to the [solr-php-client](https://code.google.com/p/solr-php-client/).
I tried to used the class within the apachesorl module, but there required a to high level of drupal bootstrapping.

After that, I simply created a class that generate a RSS feed from a drupal request. I think this class is pretty generic and I'll try to put it on my github as an opensource lib.

Hope that could help some developers that need to do a RSS feed from a drupal apache solr query :).
