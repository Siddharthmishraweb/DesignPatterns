import UserProfileBuilder from './UserProfileBuilder.js'

const builder = new UserProfileBuilder('Siddharth Mishra', 'sidd@example.com');

const user = builder
    .setAge(25)
    .setBio('Full Stack Developer from UP')
    .setWebsite('https://sidd.dev')
    .build();

user.display();
