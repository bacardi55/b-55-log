---
layout: post
title:  Sshfs For The Win!
tags:   [gnu/linux, sshfs, unmount]
---


I don't know other developers work (actually, I do have an idea since I see some of them every day ^^), but I don't like to work directly on my archlinux that runs my laptop.
Projects are often very different from each other and the requirement are never the same (php version, mysql/maria db version, the php.ini, …).
To avoid this, I use Virtual Machines. I choose to work with kvm and the libvirt to manage the virtual machines.

I can now use 1 VM for each project. I can be a little bit more smart and regroup project that have the same configuration (or almost the same ^^) to avoir having 55 VM and being lost.

Be carefull to not create too much VM. Imagine that you need to open 3 projects at the same time (it happens, 2 even more often), you'll have to open 3 Virtual Machines. Maybe you can do this with a very powerfull machine but mine can't do it so I group projects together when I can :).


Edit your code
----
This is neat but when you do that, you have 3 solutions to write code on your VM:

- Installing X on the VM and start using it in full screen;
- Connect to the machine through ssh and start coding with vim;
- Use sshfs.

I don't even want to discuss the first option as I find it very dirty, heavy (you need 2 X), and makes me want to puke :p.
The second option is ok if you use vim or other console text editor. But even in this case, it would mean to duplicate your vim configuration (or your other editor configuration). It could be done by having your configuration on a repository like git or mercurial or even svn but I don't like this method.

The last method is my favorite: using sshfs (SSH FileSystem) to mount the directory where your source code is directly on your host.
You just need to do

    bash
    sshfs login@machine:/path/to/source/code /path/to/mountpoint

And voilà!

Now you can use your local editor and its beautifull configuration for all your projects :).

There are plenty of docs on the internet to learn how to install and configure it, so i'll let you find them :)


Tips
----
Two quick command though:

Unmount the directory:

    bash
    fusermount -u /path/to/mountpoint/

If `fusermount -u /path/to/mountpoint/` doesn't work and tells you that the device is busy

Simply do

    bash
    umount -l /path/to/mountpoint

That should do the trick :)


Hope that this could help someone (to be honnest, I started this blog post as a quick reminder for the last command ^^).
