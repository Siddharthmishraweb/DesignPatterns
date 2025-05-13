## 🏗️ Design Patterns Categorized

### 🔹 **1. Creational Design Pattern**

#### ✅ **Used: Factory Pattern**

* **Where:** `factories/EmployeeFactory.js`
* **Why:**

  * Centralizes the creation logic of `Employee` objects.
  * Avoids tight coupling with the constructor across the app.
  * Makes it easy to manage changes (e.g., validation, default values).
* **Creational Goal Met:** Simplifies and standardizes object creation.

#### ❌ **Not Used:**

* **Singleton** – Not suitable because we want each component to be stateless and testable.
* **Builder** – Overkill for a simple `Employee` object.
* **Prototype** – Not needed as we aren’t cloning objects.

---

### 🔹 **2. Structural Design Pattern**

#### ✅ **Used: Repository Pattern** (sometimes considered a structural or architectural pattern)

* **Where:** `repositories/EmployeeRepository.js`
* **Why:**

  * Abstracts file-based data storage.
  * Makes swapping data source (e.g., switch to database) seamless.
  * Encapsulates data logic and file operations.
* **Structural Goal Met:** Decouples system components and provides a uniform interface to data.

#### ❌ **Not Used:**

* **Adapter/Bridge** – Not needed since we don’t integrate incompatible interfaces.
* **Decorator** – Not relevant because we’re not dynamically extending behavior.
* **Facade** – Could be used, but the `CommandHandler` already acts like a facade for CLI operations.

---

### 🔹 **3. Behavioral Design Pattern**

#### ✅ **Used: Command Pattern**

* **Where:** `commands/CommandHandler.js`
* **Why:**

  * Maps user input (commands) to actual operations.
  * Makes it easier to add new commands or undo/redo logic in the future.
* **Behavioral Goal Met:** Encapsulates request as an object and decouples sender from receiver.

#### ❌ **Not Used:**

* **Observer** – Not applicable, as we have no event-driven behavior.
* **Strategy** – Could be used if we had different salary calculation strategies.
* **State** – Not needed because our app doesn’t depend on context-dependent state changes.

---

## ✅ Summary Table

| Pattern Type   | Design Pattern     | Used? | Where & Why                                    |
| -------------- | ------------------ | ----- | ---------------------------------------------- |
| **Creational** | Factory            | ✅     | Used for creating Employee instances uniformly |
|                | Singleton, Builder | ❌     | Not needed for current simplicity              |
| **Structural** | Repository         | ✅     | Clean abstraction over file system operations  |
|                | Adapter, Decorator | ❌     | No complex component integration required      |
| **Behavioral** | Command            | ✅     | For mapping CLI commands to actions            |
|                | Strategy, Observer | ❌     | No multiple algorithms or pub-sub behavior     |

---

---

### 🧱 **What is the Builder Pattern (in simple terms)?**

The **Builder Pattern** is like a **step-by-step recipe** to make complex objects. Instead of putting all details in a constructor, you build the object **one part at a time**.

---

### ✅ **Advantages (in simple terms)**

1. **Easy to Read and Use**

   * You can create objects in a clean and readable way, like:

     ```js
     builder.setName('Phone').setPrice(500).setBrand('XYZ').build();
     ```

2. **Avoid Long Constructors**

   * No need to pass 10+ parameters to a constructor—set only what you need.

3. **Flexibility**

   * You can build different versions of an object (e.g., with or without some properties).

4. **Better Maintenance**

   * Changes in object creation logic are easier to manage in one place.

5. **Immutable Final Object**

   * The built object is usually fixed and complete after `build()`, reducing bugs.

---

### 📍 **Where to Use the Builder Pattern**

Use it when:

1. ✅ Your object has **many optional parameters**.

   * Example: Building a user profile with optional fields like `bio`, `website`, `photo`.

2. ✅ You want to **create different versions** of the same object.

   * Example: Basic vs. Premium product configuration.

3. ✅ You want to **avoid messy constructors** with lots of parameters.

   * Example: `new Product('Laptop', 1000, 'Electronics', true, false, 5)` → confusing!

4. ✅ You’re constructing **immutable objects** that must be completely configured at creation time.

---

### 📦 Real-life Examples

* Creating **configuration objects** for APIs.
* Building **HTML elements** in code.
* Constructing **database queries** step by step.
* Setting up a **custom logging system** with different options.

### Prototype Design Pattern
The Prototype Design Pattern in Node.js is a creational pattern that allows you to create objects based on a template of an existing object through cloning. Here’s a breakdown of its components:

### Definition:

The Prototype pattern involves creating new objects by copying/cloning existing objects called prototypes. This pattern provides a way to instantiate new objects by copying an existing instance rather than creating new instances from scratch.

### Use Case:

* **Object Creation:** When you have objects that are similar but need to vary slightly without modifying the original object.
* **Efficiency:** It can be used to avoid the overhead of initializing objects that are expensive to create.

### When to Use:

* Use the Prototype pattern when creating objects that are similar to existing objects.
* Use it when the instantiation process is costly in terms of time/resources and you have a simpler way to copy an existing object.

### When Not to Use:

* When objects in your application are not similar or when each instance needs to be customized extensively.
* If there is no clear advantage in copying existing objects over creating new ones from scratch.

### Problems Solved:

* **Problem Statement:** Suppose you have a complex object that takes a lot of time and resources to instantiate. You need multiple instances of this object with slight variations.
* **Solution:** Use the Prototype pattern to clone the existing instance and modify it as needed, saving time and resources.

### Code Example in Node.js:

```javascript
// Example of a prototype object
class Sheep {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  clone() {
    return new Sheep(this.name, this.weight);
  }
}

// Usage example
const originalSheep = new Sheep('Dolly', 50);
const clonedSheep = originalSheep.clone();

console.log(clonedSheep); // Output: Sheep { name: 'Dolly', weight: 50 }
```

In this example:

* We define a `Sheep` class that has a `clone` method to create a copy of itself.
* `originalSheep` is an instance of `Sheep`.
* `clonedSheep` is created by cloning `originalSheep`, effectively using the Prototype pattern.

This pattern simplifies object creation by allowing you to copy existing instances, making it easier to manage and customize object creation processes in your Node.js applications.



Here’s a **real-world problem statement** where the **Prototype Design Pattern** is highly applicable, especially in the context of a **Node.js** application:

---

### 💼 **Problem Statement (Real-World Scenario):**

You are building a **document editing web application** (like Google Docs) in Node.js. Every time a user creates a **new document from a template** (e.g., resume, invoice, letter), the application has to:

* Load the template from the database or disk,
* Parse it,
* Apply default styles,
* Add default metadata like author, timestamps, etc.

This process is **resource-intensive** and repeated often.

You want to optimize this process so that instead of re-parsing and initializing every time, you can just **clone a pre-configured document object** and make small modifications as needed.

---

### ✅ **Solution Using Prototype Pattern:**

Instead of building a new document from scratch, maintain a set of **pre-built template document objects** in memory and use the **Prototype pattern** to clone them quickly when needed.

---

### 💡 Benefits:

* Improved **performance** by avoiding repeated expensive initializations.
* Cleaner code for creating documents from templates.
* Flexible cloning with minor customizations (e.g., change title or author).

---

### 🧪 Node.js Code Example:

```javascript
// Prototype class
class DocumentTemplate {
  constructor(type, content, styles, metadata) {
    this.type = type;       // e.g., 'resume', 'invoice'
    this.content = content;
    this.styles = styles;
    this.metadata = metadata;
  }

  clone() {
    // Deep clone to avoid shared references
    return new DocumentTemplate(
      this.type,
      JSON.parse(JSON.stringify(this.content)),
      JSON.parse(JSON.stringify(this.styles)),
      JSON.parse(JSON.stringify(this.metadata))
    );
  }
}

// Simulate existing templates
const resumeTemplate = new DocumentTemplate(
  'resume',
  { sections: ['Summary', 'Experience', 'Education'] },
  { font: 'Arial', color: 'black' },
  { createdBy: 'System', timestamp: new Date() }
);

// User creates a new resume from the template
function createUserResume(userName) {
  const newResume = resumeTemplate.clone();
  newResume.metadata.createdBy = userName;
  newResume.metadata.timestamp = new Date();
  return newResume;
}

// Example usage
const user1Resume = createUserResume('Alice');
console.log(user1Resume);

const user2Resume = createUserResume('Bob');
console.log(user2Resume);
```

---

### ⚠️ When NOT to Use This:

* If your documents/templates are extremely lightweight and can be generated on-the-fly with minimal cost.
* If the object structure is very dynamic and doesn’t benefit from cloning.

---

### 🧠 Summary:

| Aspect                  | Prototype Pattern in This Use Case                  |
| ----------------------- | --------------------------------------------------- |
| **Problem**             | Expensive document creation from templates          |
| **Pattern**             | Clone prebuilt templates instead of re-initializing |
| **Performance Benefit** | ✅ Less CPU, memory usage, faster response           |
| **Code Simplicity**     | ✅ Cleaner and more modular creation logic           |

---



Here's a comprehensive breakdown of the **Observer Design Pattern in Node.js**, including its **definition, use cases, real-world applications, problem scenarios, and implementation examples**.

---

## 🔍 **Definition: Observer Design Pattern**

The **Observer Design Pattern** defines a **one-to-many dependency** between objects, so when one object (the *subject*) changes state, all its dependents (the *observers*) are **notified automatically**.

---

## 🎯 **Use Cases**

| Use Case               | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| Event handling systems | Reacting to system or user events (e.g. user login, data updates) |
| Notification systems   | Email/SMS/in-app notifications on changes                         |
| Real-time applications | Chat apps, live dashboards, stock tickers                         |
| Pub/Sub systems        | For loosely coupled communication between components              |
| File monitoring        | Trigger actions when a file changes (build systems)               |

---

## ✅ **When to Use Observer Pattern**

* When **multiple components** need to react to changes in another component.
* When you want to **decouple** the source of events from the consumers.
* When building **event-driven systems** (chat apps, notification services, etc.).

---

## 🚫 **When NOT to Use**

* If the number of observers is **very high**, it can **impact performance**.
* If **tight control** over the flow of data and timing is required.
* When debugging becomes **hard due to too many dependencies**.

---

## 💡 **What Problem Does It Solve?**

It helps **avoid tight coupling** between components. For example:

> When a new blog post is published, notify all subscribers — **without the blog needing to know who those subscribers are**.

---

## 💼 **Real-World Problem Statements (Interview Scenarios)**

### 🔸 **Scenario 1: Notification System (Interview Style)**

> **Problem Statement**: You are building a blog platform. Whenever a new post is published, it should:
>
> * Send an email notification to subscribers.
> * Push a notification to the app.
> * Log it to analytics.
>
> Implement this using the **Observer Pattern** in Node.js so that the post publishing logic is **decoupled** from the notification methods.

---

## 🧑‍💻 **Node.js Code Example: Custom Observer Implementation**

### 📦 **Step 1: Create the Subject (Publisher)**

```js
class PostPublisher {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(post) {
    this.observers.forEach(observer => observer.update(post));
  }

  publishPost(post) {
    console.log(`New Post Published: ${post.title}`);
    this.notify(post);
  }
}
```

### 📦 **Step 2: Create Observers**

```js
class EmailService {
  update(post) {
    console.log(`📧 Email sent for post: "${post.title}"`);
  }
}

class AppNotificationService {
  update(post) {
    console.log(`🔔 Push notification: New post "${post.title}"`);
  }
}

class AnalyticsService {
  update(post) {
    console.log(`📊 Analytics updated for post: "${post.title}"`);
  }
}
```

### 📦 **Step 3: Use the Observer Pattern**

```js
const publisher = new PostPublisher();

// Observers
const emailService = new EmailService();
const pushService = new AppNotificationService();
const analyticsService = new AnalyticsService();

// Subscribe to publisher
publisher.subscribe(emailService);
publisher.subscribe(pushService);
publisher.subscribe(analyticsService);

// Publish a post
const newPost = { title: "Observer Pattern in Node.js", content: "..." };
publisher.publishPost(newPost);
```

---

## 🧾 **Output**

```
New Post Published: Observer Pattern in Node.js
📧 Email sent for post: "Observer Pattern in Node.js"
🔔 Push notification: New post "Observer Pattern in Node.js"
📊 Analytics updated for post: "Observer Pattern in Node.js"
```

---

## 🧰 **Alternative in Node.js: Use EventEmitter (Built-in)**

Node.js has the **Observer Pattern built-in** via `EventEmitter`.

```js
const EventEmitter = require('events');

class PostEmitter extends EventEmitter {}
const postEmitter = new PostEmitter();

// Observers
postEmitter.on('newPost', (post) => {
  console.log(`📧 Email sent for post: "${post.title}"`);
});
postEmitter.on('newPost', (post) => {
  console.log(`🔔 App notification for post: "${post.title}"`);
});

// Publisher
const newPost = { title: "Observer Pattern with EventEmitter" };
console.log(`New post published: ${newPost.title}`);
postEmitter.emit('newPost', newPost);
```

---

## 🧠 **Key Benefits**

* Decouples publishers and subscribers
* Easy to add new observers
* Promotes scalable and reactive architecture

---

## ⚠️ **Challenges and Pitfalls**

* Difficult to debug when many listeners are involved.
* Memory leaks if listeners are not unsubscribed.
* Risk of **cascading updates** or performance issues if abused.

---

## 🧪 **Real-World Interview Question Example**

> **"Design an order system for an e-commerce platform using Observer Pattern."**
>
> Requirements:
>
> * When an order is placed:
>
>   * Send confirmation email
>   * Notify the inventory system
>   * Notify delivery partner
>
> **Hint:** The `OrderService` acts as the publisher, and `EmailService`, `InventoryService`, and `LogisticsService` are observers.

