// UserProfileBuilder.js
class UserProfileBuilder {
    constructor(name, email) {
        // Required fields
        this.name = name;
        this.email = email;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setBio(bio) {
        this.bio = bio;
        return this;
    }

    setWebsite(website) {
        this.website = website;
        return this;
    }

    setPhoto(photo) {
        this.photo = photo;
        return this;
    }

    build() {
        return new UserProfile(
            this.name,
            this.email,
            this.age || null,
            this.bio || '',
            this.website || '',
            this.photo || ''
        );
    }
}
