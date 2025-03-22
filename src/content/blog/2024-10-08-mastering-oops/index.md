---
title: 'Mastering Object-Oriented Programming in Java: A Comprehensive Guide ☕♨'
seoTitle: 'Mastering Object-Oriented Programming in Java'
slug: 'java-oops-guide'
description: 'Object-Oriented Programming (OOP) is a programming paradigm that models real-world entities as objects.'
pubDate: '2024-10-08'
updatedDate: '2024-10-08'
tags: ["Java"]
coverImage: './mastering-oops.jpg'
---


## Object Oriented Programming

Object-Oriented Programming (OOP) is a programming paradigm that models real-world entities as objects. These objects have properties (attributes) and behaviors (methods). OOP is based on the concepts of encapsulation, inheritance, polymorphism, and abstraction.

Java is a computer programming language that is **concurrent, class-based and object-oriented**. The advantages of object oriented
software development are shown below:

* **Modular development**: This makes code easier to maintain and modify.
* **Code reusability**: This reduces the need to write the same code multiple times.
* **Improved code reliability and flexibility**: This makes it easier to create robust and adaptable software.
* **Increased code understanding**: This improves the readability and maintainability of code.

### Encapsulation
Encapsulation in Java is a fundamental object-oriented programming concept that involves bundling data (attributes) and methods (behaviors) within an object. It provides data hiding and access control, ensuring that data is protected and only accessed through defined methods.

```java
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person("Sam", 21);
        System.out.println("Person Name: "+ p.getName());
        System.out.println("Person Name: "+ p.getAge());
        /* 
         *  p.name = "Anderson";  -> We couldn't modify the varibale value directly. It's Error ❗.
         *  p.age = 20;
        */
    }
}

```
Imagine a box. Inside the box are your personal belongings. You can see the box and know what's inside, but you can't directly touch or change the items without opening the box. This is similar to encapsulation in Java.

### Polymorphism
Polymorphism, in Java, is the ability of objects of different classes to respond to the same method call in different ways. It's a fundamental concept in object-oriented programming that allows for flexibility and code reusability. There are two types of Polymorphism Compile-Time Polymorphism and Run-Time Polymorphism.
#### Example
Imagine you have a remote control. You can press the "play" button, and it will play something. But what it plays depends on the device it's controlling: a TV, a DVD player, or a music player.

This is like polymorphism in Java. The "play" button is the same method, but the behavior (what it plays) is different depending on the object (TV, DVD player, music player).

So, polymorphism means that the same thing (a method) can have different behaviors depending on the object that calls it.

```java
interface Playable {
    void play();
}

class TV implements Playable {
    public void play() {
        System.out.println("Playing TV show");
    }
}

class DVDPlayer implements Playable {
    public void play() {
        System.out.println("Playing DVD");
    }
}

class MusicPlayer implements Playable {
    public void play() {
        System.out.println("Playing music");
    }
}

public class PolymorphismExample {
    public static void main(String[] args) {
        Playable[] devices = {new TV(), new DVDPlayer(), new MusicPlayer()};
        for (Playable device : devices) {
            device.play();
        }
    }
}
```
### Inheritance
Inheritance concept that allows classes to inherit attributes, properties and methods from a parent class. This promotes code reusability, modularity, and the creation of hierarchical relationships between classes.

Inheritance in Java is like a family tree. A child class can inherit traits from a parent class. There are a few different ways to do this:

* Single Inheritance: One child, one parent.
* Multilevel Inheritance: Child inherits from parent, who is also a child.
* Hierarchical Inheritance: Multiple children from one parent.

Java doesn't directly support multiple inheritance, but you can use interfaces to get a similar result.

```java
class Animal {
    void makeSound() {
        System.out.println("Generic animal sound");
    }

    void makeSound(int numberOfTimes) {
        for (int i = 0; i < numberOfTimes; i++) {
            System.out.println("Generic animal sound");
        }
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof!");
    }

    @Override
    void makeSound(int numberOfTimes) {
        for (int i = 0; i < numberOfTimes; i++) {
            System.out.println("Woof!");
        }
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow!");
    }

    @Override
    void makeSound(int numberOfTimes) {
        for (int i = 0; i < numberOfTimes; i++) {
            System.out.println("Meow!");
        }
    }
}

public class PolymorphismExample {
    public static void main(String[] args) {
        Animal[] animals = {new Dog(), new Cat()};

        // Method overloading:
        animals[0].makeSound();
        animals[1].makeSound(3);

        // Method overriding:
        for (Animal animal : animals) {
            animal.makeSound();
        }
    }
}
```
### Abstraction
Abstraction is the process of separating ideas from specific instances and thus, develop classes in terms of their own functionality, instead of their implementation details. Java supports the creation and existence of abstract classes that expose interfaces, without including the actual implementation of all methods. The abstraction technique aims to separate the implementation details of a class from its behavior.

```java
abstract class Shape {
    abstract double getArea();
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    public double getArea() {
        return length * width;
    }
}

public class ShapeExample {
    public static void main(String[] args) {
        Shape circle = new Circle(5.0);
        Shape rectangle = new Rectangle(4.0, 3.0);

        System.out.println("Circle area: " + circle.getArea());
        System.out.println("Rectangle area: " + rectangle.getArea());
    }
}
```
Imagine you have a remote control for a car, a bike, and a plane. You can use the same buttons on the remote to start, stop, and move each vehicle, even though they are very different. This is like abstraction in programming.

### Differences between Abstraction and Encapsulation
**Abstraction**

* **Focus:** Hides the underlying complexity of an object, revealing only the essential features.
* **Purpose:** Simplifies code by focusing on what an object does rather than how it does it.
* **Mechanism:** Achieved through abstract classes and interfaces.
* **Example:** A `Vehicle` interface defining methods like `start()`, `stop()`, and `move()`, without revealing the specific implementation for each vehicle type (car, bike, etc.).

**Encapsulation**

* **Focus:** Protects an object's data from unauthorized access or modification.
* **Purpose:** Enhances code security, modularity, and maintainability.
* **Mechanism:** Achieved by making data members private and providing public methods to access or modify them.
* **Example:** A `Person` class with private fields like `name` and `age`, and public methods like `getName()` and `setAge()` to access or modify these fields.

**Key Differences**

| Feature | Abstraction | Encapsulation |
|---|---|---|
| Focus | Essential features | Data protection |
| Purpose | Simplification | Security, modularity |
| Mechanism | Abstract classes, interfaces | Private fields, public methods |
| Example | `Vehicle` interface | `Person` class with private fields and public methods |

**In essence:**

* **Abstraction** is about what an object does.
* **Encapsulation** is about how an object does it.

Think of OOP like building with LEGO bricks. Each brick is an object with its own shape and properties. You can combine bricks to create bigger, more complex structures. By understanding these concepts, you can create more organized, flexible, and efficient code.
