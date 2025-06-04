---
date: 2016-10-27T16:12:00+02:00
tags: ["software architecture", "communication"]
title: Naming
---

The power of _naming_ extends far beyond programming. From ancient myths where knowing something's _true name_ gave power over it, to modern branding where companies spend millions on finding the _right name_, to parents carefully choosing names for their children – our ability to name things shapes how we think and communicate about them.

In software development, this universal human trait becomes _absolutely crucial_. Unlike physical engineering where you can point to concrete objects, programming deals entirely with _mental constructs_ and _abstract concepts_. We can't touch or see our constructs directly – we can only refer to them by name. Almost all concepts programming languages provide to create [abstractions](../abstractions) have one really important thing in common. They all have the ability to _name_ the abstraction. This is among others true for _variables_, _functions_, _classes_ and _namespaces_.

> The _name_ is the most important part of a good _abstraction_.

In fact, the _name_ is their most important feature. Without a _descriptive name_ it wouldn't be an abstraction anymore. Every time we needed to use an _unnamed abstraction_ we would need to look _inside_ it to find out which one it is. That totally defeats the [purpose of creating abstractions](../abstractions) in the first place.

For many problem domains there does not exist a good and stringent enough _nomenclature_. We therefore usually need to _create_ one. When we do that we should take that task _seriously_. Getting it right will not only make it easier for the programmers following in our footsteps but also for ourselves. Good _names_ help us to _reason_ about a problem. We should also spend effort to _document_ our definitions of the different names used as a reminder to ourselves and to help future programmers.

> By putting more effort into _naming_ you can avoid a lot of _trouble_ and _refactoring_ later.

Getting _naming_ right is one of the really _hard parts_ of programming. It is at the core of why it sometimes is easier to _start over_ from scratch than to incrementally improve code written by others. By putting more effort into the naming you can avoid a lot of trouble and refactoring later.