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


