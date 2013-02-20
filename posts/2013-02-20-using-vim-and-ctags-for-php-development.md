---
layout: post
title:  Using Vim and Ctags for PHP development
author: bacardi55
tags:   [vim, php, ctags]
---

As you may know (by knowing me or by reading the [about me](/about.html "about me") page), I use [Vim](http://vim.org "vim") to write code.

This blog post isn't about trolling about which editor is the best (as the answer is [Vim](http://vim.org) anyway :P (sorry, I couldn't help it ^^)) but to indicate how you can use [vim](http://vim.org) with [ctags](http://ctags.sourceforge.net/) (also called exhuberant ctags) to write [PHP](http://php.net) code (or other languages).



## Why?
There is one feature that all developers brag about when trolling against vim (beside the obvious «it's too difficult» or stuff like that) is the hability to click on a function and go directly to its definition.

In «classic» editor like eclipse or netbeans, a simple « control click » on a function name and there you go.

Some vim developer use the [taglist](vim-taglist.sourceforge.net/) plug-in to have the function list but this is not what we really want.

If you are reading this post, you probably now that this is not a basic vim feature :(. But, as we are using the powerful vim, there is plug-in for this!



## Ok, that sounds nice, but how?
### By using ctags!
According to the official [ctags website](http://ctags.sourceforge.net) :
«Ctags generates an index (or tag) file of language objects found in source files that allows these items to be quickly and easily located by a text editor or other utility. A tag signifies a language object for which an index entry is available (or, alternatively, the index entry created for that object). »

So basically, it parse your code and create an index to tell what is where :p. That's a good start :).

### Install Ctags
Firstable, we need to install ctags. Depending on your distribution, it could be called «ctags» or «exhuberant ctags». A simple search in your packet manager should answer you :).

Then, you'll need to install the [Vim ctags plugin](http://www.vim.org/scripts/script.php?script_id=610) as any other plug-in. I'm strongly advising to use [vundle](https://github.com/gmarik/vundle) to handle all your Vim plug-ins. I'll write a post about it in the feature, but that's not the purpose of this one :).

### Create the tag index
At this point, we need to now tell ctags to parse our code to create the index file.

The first problem with ctags is that the default option for PHP (ctags manage more than 30 languages) are not good enough for me. Hopefully, you can pass to the ctags command a lot of options to parse your code according to your will.

The second problem is that depending on the type of project that you're working on, you might need to change the parameters that you pass through ctags.

As a matter of fact, I'm coding either in [Drupal](http://drupal.org) and [Symfony](http://symfony.com) / [Silex](http://silex.sensio.org). Drupal need some specific options to parse all .module, .install, .inc, … files. On the other hand, Symfony/Silex need to parse real POO code as PHP 5.3+ let us write.

I ended up with a php_ctags.sh script that I launch after pulling the source code of my project. That way, each time i pull new code, ctags parse it and update the index file :).

The script has 2 options: parsing a «framework» project or a Drupal project.

The script look like this:

    bash
    #!/bin/bash
    if [ "$1" == "" ];then
      echo "Usage: php_ctags [type]";
      echo "Types are : ";
      echo "  - drupal";
      echo "  - framework";
      exit 0;
    fi;

    if [ "$1" == "drupal" ];then
      echo "running drupal ctags";
      exec ctags --langmap=php:.engine.inc.module.theme.install.php --php-kinds=cdfi --languages=php --recurse --exclude=".svn" --exclude="sites/default/"

    elif [ "$1" == "framework" ];then
      echo "running framework ctags";
      exec ctags -f tags -h ".php" -R \
        --exclude=".svn" \
        --totals=yes \
        #--tag-relative=yes \
        --PHP-kinds=+cf \
        --regex-PHP='/abstract class ([^ ]*)/\1/c/' \
        --regex-PHP='/interface ([^ ]*)/\1/c/' \
        --regex-PHP='/(public |static |abstract |protected |private )+function ([^ (]*)/\2/f/'
    else
      echo "Not a valid type";
    fi;

You can find [here](https://github.com/bacardi55/dotfiles/blob/master/script/php_ctags.sh) on github (in case I change it after this blog post).

This script can be improved but it's enough for me :). If you have comments, don't hesitate to raise a discussion on github or twitter.

### Use it in Vim
Ok, now that we have our file, we need to tell vim to use it.

The basic approach would be to use
``:set tags=~/path/to/index``
and there you go.

But I don't like the idea of doing this every time. So I added this in my vimrc:

    bash
    let FILETAG=expand("./tags")
    if filereadable(FILETAG)
      set tags=tags
    endif

I just need to have the file in the directory where I open vim. That way, i just need to go to the root directory of a project, start vim and my tag file is loaded :)

To do the equivalent of the control+click feature, just do ``Ctrl-]`` (this means pressing «control» and «]» together)on a function name, and it should bring you to the good file, on the function definition.

If you want to go back to the file you were on, ``ctrl-t`` will bring you back (this means pressing «control» and «t» together).

If you prefer opening the function definition in a split windows, use ``ctrl-w-]``.

You can also use this vim command :

- :ts – shows the list.
- :tn – goes to the next tag in that list.
- :tp - goes to the previous tag in that list.
- :tf – goes to the function which is in the first of the list.
- :tl – goes to the function which is in the last of the list

See you soon for more vim tips!
