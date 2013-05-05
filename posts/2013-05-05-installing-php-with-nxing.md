---
layout: post
title:  Installing PHP with Nxing on Debian
author: bacardi55
tags:   [nginx, php]
---

Tonight, I wanted to release the code of [Jocs](/2013/04/22/why-i-started-working-on-a-opensource-disqus.html), my open source like [disqus](http://disqus.com). To work, Jocs needs to be linked to a backend with some REST api. The default backend I created (Pocs) needs php 5.4 to work. I didn't realize at first as my local VM runs php 5.4.

I use the [JsonSerializable](http://php.net/manual/fr/class.jsonserializable.php) interface that let me handle easily my entity. It's very handy and I didn't realize that it was created in php 5.4.

When I tried to install it tonight, I had an error due to this interface missing. So I decided to install Pocs on another server with php5.4. That's why I installed it on a server that had Nginx installed but not yet php.

As I've never done that before, I thought why not writting a blog post about it as it will help me remember it :)


## Pre requisit

Here, I assume that you installed nginx, php5-cgi and spawn-fcgi. By using `apt-get`

    bash
    apt-get install nginx, php5-cgi spawn-fcgi


## Create the init script

Then, you need to create the init script that will let you start / stop the php process that nginx will use:
`/etc/init.d/php5-fcgi`

    bash
    #!/bin/sh

    ### BEGIN INIT INFO
    # Provides:       php5-fcgi
    # Required-Start: $remote_fs $syslog
    # Required-Stop:  $remote_fs $syslog
    # Default-Start:  2 3 4 5
    # Default-Stop:   0 1 6
    # Short-Description: PHP5 FastCgi Spawned processes
    ### END INIT INFO

    COMMAND=/usr/bin/spawn-fcgi
    ADDRESS=127.0.0.1
    PORT=9000
    USER=www-data
    GROUP=www-data
    PHPCGI=/usr/bin/php5-cgi
    PIDFILE=/var/run/fastcgi-php.pid
    RETVAL=0

    PHP_FCGI_MAX_REQUESTS=500
    PHP_FCGI_CHILDREN=2

    start() {
        export PHP_FCGI_MAX_REQUESTS PHP_FCGI_CHILDREN
        $COMMAND -a $ADDRESS -p $PORT -u $USER -g $GROUP -f $PHPCGI -P $PIDFILE
    }

    stop() {
        /usr/bin/killall -9 php5-cgi
    }

    case "$1" in
        start)
          start
          RETVAL=$?
      ;;
        stop)
          stop
          RETVAL=$?
      ;;
        restart|reload)
          stop
          start
          RETVAL=$?
      ;;
        *)
          echo "Usage: fastcgi {start|stop|restart}"
          exit 1
      ;;
    esac
    exit $RETVAL


Then, you need to activate the script:

    bash
    update-rc.d php5-fcgi defaults

And now start it:

    bash
    /etc/init.d/php5-fcgi start


## Config nginx

Edit the fastcgi param file: `/etc/nginx/fastcgi_params` to match the following:

    bash
    fastcgi_param  QUERY_STRING       $query_string;
    fastcgi_param  REQUEST_METHOD     $request_method;
    fastcgi_param  CONTENT_TYPE       $content_type;
    fastcgi_param  CONTENT_LENGTH     $content_length;

    fastcgi_param  SCRIPT_NAME        $fastcgi_script_name;
    fastcgi_param  REQUEST_URI        $request_uri;
    fastcgi_param  DOCUMENT_URI       $document_uri;
    fastcgi_param  DOCUMENT_ROOT      $document_root;
    fastcgi_param  SERVER_PROTOCOL    $server_protocol;

    fastcgi_param  GATEWAY_INTERFACE  CGI/1.1;
    fastcgi_param  SERVER_SOFTWARE    nginx/$nginx_version;

    fastcgi_param  REMOTE_ADDR        $remote_addr;
    fastcgi_param  REMOTE_PORT        $remote_port;
    fastcgi_param  SERVER_ADDR        $server_addr;
    fastcgi_param  SERVER_PORT        $server_port;
    fastcgi_param  SERVER_NAME        $server_name;

    fastcgi_param  HTTPS              $https;

    # PHP only, required if PHP was built with --enable-force-cgi-redirect
    fastcgi_param  REDIRECT_STATUS    200;

    fastcgi_split_path_info ^(.+\.php)(.*)$;
    fastcgi_param PATH_INFO $fastcgi_path_info;
    fastcgi_param PATH_TRANSLATED $document_root$fastcgi_path_info;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;

You need to add the last 4 lines, you should have the rest of the file already.

## Config your server

In your server configuration, add this part:

    bash
    server {
        …

        location ~ ^(.+\.php)(/.*)?$ {
            fastcgi_pass  localhost:9000;
            include /etc/nginx/fastcgi_params;
        }
    }

Then, restart nginx `/etc/init.d/nginx restart` and it should work :).
