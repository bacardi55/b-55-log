---
layout: post
title:  How can I use vim on a daily basis
tags:   [vim, php, tips]
author: bacardi55
---

## What is your editor?
When you start working with new team members, you often end up trolling. Why? I don't know exactly but it seems to happen very often with me ^^.

Anyway, troll or not, you will eventually talk about your editor. Depending on your needs and your habits, there is no good or wrong answer. But people think you are crazy when you answer [vim](http://vim.org)…

## Why?
Most people knows [vim](http://vim.org) (or even only vi) because they had to use it on a remote server through ssh. Most of the time, there is only nano and vi(m) installed on a fresh debian installation (or most of the other server distro). They are using without plug-in, nor configuration or even knowledge of how [vim](http://vim.org) works.

They get the basic commands on the Internet but every [vim](http://vim.org) user knows that [vim](http://vim.org) is not just « dd », « pp », « escape », « i » and « :wq ». If you stop at that point, you don't know [vim](http://vim.org) and you definitively can't talk about it saying that it is rubbish (I don't even answer to that) or not powerful (that one makes me laugh^^). I'm not saying I know everything in [vim](http://vim.org), i'm still learning everyday, and that's the beauty of it. But you can't talk about it without knowing it at least a little. Or it's just a big troll ^^.

When someone told me that he can't have the same features as the one within eclipse/netbeans/…, I ask which one. I've never been stuck by a useful feature that I didn't have in [vim](http://vim.org). Sometimes it's a basic vim command, sometimes a plug-in is needed, sometimes, the feature is even better in [vim](http://vim.org) than in other editor :°).

## Ok, what's your point?
The purpose of this post is to put here some basic plug-in/configuration that make [vim](http://vim.org) look more like a code editor. If you are already coding with [vim](http://vim.org), I'm not sure you'll learn something here (but we never know ^^).

This post won't teach you how to use [vim](http://vim.org). There are plenty of tutorial on the internet that are way better than what I could write here. There are even great screencast to help you learn new stuff in [vim](http://vim.org). If you want to start coding like a boss with [vim](http://vim.org), you can find everything you want on the Internet.

If you know the basics with [vim](http://vim.org) but need some tips to transform [vim](http://vim.org) as a code editor, just read the following and it will help you start.

## Ok, bring it on!

### The basic windows on «big» editor

- You want to see the tree of files of your project ? [Nerdtree](https://github.com/scrooloose/nerdtree) ([screenshot here]({{ relativeRoot }}/images/vim/nerdtree.png))
- You want to have the list of the functions of the open files? [Taglist](https://github.com/vim-scripts/taglist.vim) ([screenshot here]({{ relativeRoot }}/images/vim/taglist.png))
- You want to parse and validate your code without refreshing your browser (for php, but works for every languages)? [Syntastic](https://github.com/scrooloose/syntastic).

### Auto-complete

- [vim](http://vim.org) comes with a basic auto-complete feature. You can use it with ^n (control-n). However, this will auto-complete using only the open files (every tab/split/buffers).
- You can set up [vim](http://vim.org) to auto-complete your language specific function (e.g. [here]({{ relativeRoot }}/images/vim/phpComplete.png)). It displays all the matching function and their prototype. Isn't it beautiful ? You just to add ``autocmd FileType php set omnifunc=phpcomplete#CompletePHP`` and then use it with ``^x ^o (ctrl-x ctrl-o)``
- I'm sure that is not enough! You want to be have auto-complete of all your project functions? Ctags if for you (here is a blog post I made on [ctags](/2013/02/20/using-vim-and-ctags-for-php-development.html)).

### Easy coding

- Better folding for php? [phpfolding](https://github.com/vim-scripts/phpfolding.vim).
- You can use [snipmate](https://github.com/garbas/vim-snipmate) to write code for you. For example, you start writing `for` and a whole for loop will be writen for you. You'll just need to change the content.
- [Sparkup](https://github.com/rstacruz/sparkup): This let you write HTML really fast (eg: ``div#header`` will become ``<div id="header"></div>``, but it way more powerful than just this example).

### Misc

- You want to handle your git repository within [vim](http://vim.org)? [fugitive](https://github.com/tpope/vim-fugitive) is your solution :).
- You want Open files ultra fast (like on textmate)? [commandT](https://github.com/wincent/Command-T) or [ctrlp](https://github.com/kien/ctrlp.vim)
- Better than Control-z, [Gundo](http://sjl.bitbucket.org/gundo.vim/)!
- A better status line? [vim powerline](https://github.com/Lokaltog/vim-powerline)


## Conclusion
I only put some of the plug-ins I use. You can see my vimrc on github to see the whole configuration. I'm pretty sure that a lot of vim user have their own habits and lots of beautiful plug-ins, snippet, configuration tricks, etc.

The point is: [vim](http://vim.org) is a «real» code editor as powerful as other and maybe more than most of them (is it a troll? Maybe not ;)). Stop saying that [vim](http://vim.org) is a plain text editor that is not suitable to write code in 2013. That's just wrong :).

I'm pretty sure that [vim](http://vim.org) can answer your need and you can even become faster thanks to it. With time you can become faster and you will enjoy the fact that you don't use your mouse anymore. When you do everything with your keyboard, you are simply more efficient (That's also why I use Tiling Window Manager, but that's for another post).

Hope that I could convince some of you of the power than [vim](http://vim.org) can give you :).

