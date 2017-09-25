---
date: 2016-11-24T08:15:46+02:00
draft: true
tags: []
title: Optimizing Software
---
Many programmers try to optimize their code for execution speed. Especially junior once. They do it because they take pride in what they do and want to do it well. Which is great. It is just that most of the time programmers _optimize for speed_ they get it all wrong. Especially when they do it using what they learned in algorithm courses at university.

> Most of the time programmers _optimize for speed_ they get it all wrong.

Typically they sacrifice readability and general maintainability for achieving unmessurable small improvements to execution speed. Worst case the code actually performs worse or contains a lot of errors. Best case, they succeed in optimizing for the instruction set architecture (ISA) in its simplest implementation.

So why is it so hard.

### Code locality
> Only optimize the parts of the code base you know are critical for perceived performance.

Most programs spend most of their execution time executing a small fraction of their code base. Optimizing the other parts are hardly noticeable. So, only optimize the parts of the code base you know are critical for perceived performance.

### Data locality
> How our algorithms access memory often has a bigger effect on performance then anything else.

On a modern computer the CPU runs a lot faster then the memory. In fact the CPU runs so fast that it takes more then one clock cycle for an electric signal to go from one end of the chip to the other end. We are limited by the speed of light in cooper. So if we want to have a big memory it will always be much slower than the CPU. To overcome this we have a rather complex cache infrastructure. How our algorithms access memory often has a bigger effect on performance then anything else. We should always try to store data we need at the same time physically close to each other in memory.

### IO
> Create a user interface where the user never has to wait for data.

In most applications the CPU spends a lot of time waiting for data from IO operations. Hard drives, networks and other devices are just so much slower then a modern CPU. Try to engineer your problem so that you can do all IO asynchronously in the background. It is not enough to just put the workload in a background process and let the user wait. Try to create a user interface where the user never has to wait for the data.



Writing code is cheap but maintaining it is expensive.
