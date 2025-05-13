// Product class
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getInfo() {
        return `${this.name} - ${this.price} - ${this.category}`;
    }
}

// Builder class
class ProductBuilder {
    constructor() {
        this.name = '';
        this.price = 0;
        this.category = '';
    }

    setName(name) {
        this.name = name;
        return this; // Return the builder instance for chaining
    }

    setPrice(price) {
        this.price = price;
        return this;
    }

    setCategory(category) {
        this.category = category;
        return this;
    }

    build() {
        return new Product(this.name, this.price, this.category);
    }
}

// Usage example
const builder = new ProductBuilder();
const product = builder.setName('Laptop')
                    .setPrice(1200)
                    .setCategory('Electronics')
                    .build();

console.log(product.getInfo()); // Outputs: Laptop - 1200 - Electronics
