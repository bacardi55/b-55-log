---
layout: post
title: Debugging php with Xdebug on a distant VM
tags: [php, vim, xdebug]
author: bacardi55
---

## Introduction

Here is a quick note on how to set up your vim and server configuration to use xdebug on a remote VM.

If like me, you like to develop by mounting a vm on your local, a specific configuration needs to be done to make it works. This blog post explains how.

## Installation
First install the needed package. If your vm runs debian, you just need to do:

    bash
    apt-get install php5-xdebug
    pecl install xdebug


Then, you need to install the `vdebug` vim pluggin on your local. The plugin can be found here: [vdebug](https://github.com/joonty/vdebug).


If you use [vundle](https://github.com/gmarik/Vundle.vim) like I do, just add this line in your `.vimrc`:

    bash
    Bundle 'joonty/vdebug.git'

And then a simple `:BundleInstall` will do the work :).

## Configuration

Then, you need to configure [xdebug](http://xdebug.org) on your distant VM:

Create the configuration file:

    bash
    vim /etc/php5/conf.d/20-xdebug.ini


Then, add this:

    bash
    zend_extension=/usr/lib/php5/20100525/xdebug.so
    xdebug.remote_enable=on
    xdebug.remote_handler=dbgp
    xdebug.remote_host=<Local IP>
    xdebug.remote_port=9000
    xdebug.remote_autostart=1

**Be carefull**: `<Local IP>` needs to be an IP address on the same network that the distant VM.

Finalize the installation by configuring your local vim:

    bash
    let g:current_dir = "/path/to/local/source/"
    let g:vdebug_options = {}
    let g:vdebug_options['path_maps'] = {'/path/to/distant/source/': g:current_dir}
    let g:vdebug_options['server'] = "xxx.xxx.xxx.xxx" # VM IP address
    let g:vdebug_options['port'] = 9000

The VM ip address should be accessible from your local host.


There you go, you can see [here](https://github.com/gmarik/Vundle.vim) how to use it :)
