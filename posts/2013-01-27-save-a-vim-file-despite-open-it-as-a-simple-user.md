---
layout: post
title:  Save a vim file despite open it as a simple user
subtitle: With vim, nothing is impossible
tags: [vim, sudo, save]
author: bacardi55
---

If, as me, you often open a file forgetting to put sudo first, you hate that message `'readonly' option is set`, there is a simple solution to save your file anyway and not redo everything after opening the file with sudo.

You need to have sudo installed.

In, vim, just do
``
:w !sudo tee %
``

And there you go :)
Make an alias in your vimrc and you'll never worried about forgetting to open a file with sudo.
