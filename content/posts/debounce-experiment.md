---
title: "Experiment: Debouncing in Plain JavaScript"
date: 2026-06-12
draft: false
icon: "⚡"
tags: ["javascript", "experiment"]
---

Today's experiment: implementing a `debounce` helper without any libraries.

## The idea

Debouncing delays running a function until the user stops triggering it — great
for search inputs and resize handlers.

```js
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const onSearch = debounce((q) => console.log("searching:", q), 400);
```

## What I learned

- The returned closure keeps `timer` alive between calls.
- Using rest args (`...args`) makes it reusable for any function.

> Small utilities like this are great warm-up experiments for understanding
> closures and timers.
