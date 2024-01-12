# Intro to functional programming in JavaScript

## What is it?

* Functional programming is a programming paradigm

> programming paradigm: a style of building and structuring code

* Other examples of programming paradigms:

  * object-oriented: code is grouped together with the state it modifies (e.g. all methods relating to a car's functionality are grouped with the properties of the car)
  * imperative: describe what the computer should do (like a recipe - first do this, then do that)
  * declarative: describe what should happen, and let the compiler figure out how to do it (e.g. SQL: `select * from orders where order_type in ("EQUITY", "FIXED_INCOME")`)

As you can see, these are hard to define, and not mutually exclusive.

* C++ and Java are both imperative and object oriented
* OCaml is both object oriented and functional
* C is imperative but not object oriented

## What are the most common functional languages?

Examples of functional programming languages:

* the LISP family (lisp, scheme, Clojure, ClojureScript)
* the ML family (Standard ML, OCaml)
* Haskell
* Erlang
* Elixir
* Elm
* Rust

Many programming languages are multi-paradigm and support functional programming:

* Scala
* Java 8
* C++11
* F#
* Python
* JavaScript!

## Some characteristics of functional programming languages

1. First class functions
  * can be used the same way you would use any other value
  * e.g. bind them to variables, pass them as arguments to other functions

2. Immutability
  * application state cannot be mutated
  * e.g. if you want to update the contents of an array, you have to reassign it to a new variable

3. Expression-oriented programming

  * preferences for expressions vs statements:
    * expressions evaluate to a value
    * i.e., have a non-null return type
    * e.g. `const sortedList = sort(unsortedList);`
  * statements do not evaluate to a value
    * Consider this line of code: `list.sort();`
    * it sorts the list and updates the state internally, but the result of the computation is not returned
    * this is called a *side effect*

  * In functional programming, we try to eliminate side effects as much as possible
    * as much as possible, we try to write *pure functions*
    * pure function: a function in which the return value is wholly determined by its input values

  * Of course, this isn't always possible. Sometimes we have side effects:
    * AJAX requests
    * printing to the console
    * manipulating the DOM

## Why do we care?

1. Scalability

* Moore's law is faltering
  * Prediction: the number of transistors on a chip will double every two years
  * Implication: computational speed can double every two years
  * Physics puts a limit on these trends, and we're running up against this limit

![Moore's Law](http://www.gotw.ca/images/CPU.png)
Ref: [Herb Sutter](http://www.gotw.ca)

  * Implication: the need to scale horizontally
    * Multi-core processors
    * Distributed computing

* Algorithms need to be able to scale across multiple processors or even multiple servers
  * Shared state makes this difficult!
  * Functional programming is well-suited to this
  * E.g. Hadoop

2. Easier to read and debug

> ["Code is read more often than it is written."](https://www.oreilly.com/library/view/daniel-arbuckles-mastering/9781787283695/c01c1aa7-f298-4669-8641-8b9e8acca2fe.xhtml)

> ~ Guido Van Rossum, Creator of Python

* Functional programs are easier for human beings to read
  * no need to mentally keep track of state changes
  * fewer bugs, more effective code reviews

> "You can’t pay people enough to carefully debug boring boilerplate code. I’ve tried"

> ~ [Yaron Minsky](https://blogs.janestreet.com/author/yminsky/), Chief Architect, [Jane Street](https://www.janestreet.com/)

3. Easier to unit test

  * Pure functions require the output to be wholly determined by the inputs
  * No complex object structures to mock
  * This is simple to unit test!

4. Allows us to implement reactive programming

  * Well suited to the pattern of *When x happens, do y*
  * More on this in the future

5. JavaScript is functional!

> "JavaScript is LISP in C's Clothing"

> ~ [Douglas Crockford](http://javascript.crockford.com/javascript.html), co-architect of JavaScript

## Let's get started

1. [Map](1.%20Map)
2. [Filter](2.%20Filter)
3. [Reduce](3.%20Reduce)
4. [Partial Functions](4.%20Partial%20Functions)
