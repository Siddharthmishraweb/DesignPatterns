// UserProfile.js
class UserProfile {
    constructor(name, email, age, bio, website, photo) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.bio = bio;
        this.website = website;
        this.photo = photo;
    }

    display() {
        console.log(`Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`);
        console.log(`Bio: ${this.bio}, Website: ${this.website}`);
    }
}
