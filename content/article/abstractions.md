---
date: 2016-09-29T08:15:46+02:00
tags: ["software architecture"]
title: Abstractions
---

We humans can in our head only concurrently work with about eight items. If we try to work with significantly more we will lose some items. It is the human equivalent of a stack overflow. Our stack has a maximum depth of about eight. In order to handle more we need to bundle items together into a new item. It is the equivalent of grouping them together in a data structure and putting them into the heap and just store the pointer to it all on the stack.

This is one of the main reasons programming is all about creating abstractions. Abstractions enable us to reason about bigger chunks of code. Well done, they also enable us to cooperate in large groups.

> Programming is all about creating abstractions.

Lack of abstractions is the single most common reason for technical debt in software. This probably comes from the fact that programming is to instruct a computer, mostly in a linear manner. It is like constructing a new car model using step by step instruction of how to manufacture and combine the parts, without separating the instructions into parts and subassemblies. Like starting the instructions with take a piece of steel and place it in the lathe and then continue in a similar manner until the factory rolls out. The bigger picture is lost in all the details.

When we program we need to spend more time thinking about the bigger picture, how the different parts interact and focus less on how they perform their tasks inside the black box. If we get the first part right the later is a lot easier to fix later. If it even needs fixing.
