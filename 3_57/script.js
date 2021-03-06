
'use strict';

class User {
  constructor(id, name, email, isAuthorised) {
    this.id = id,
    this.name = name,
    this.email = email,
    this.isAuthorised = isAuthorised;
  }
};

class Comment {
  constructor(user,post, comment, date) {
    this.user = user,
    this.post = post,
    this.comment = comment,
    this.date = date
  }
};

class Post {
  constructor(id, userId,  descriprtion, likes) {
    this.id = id,
    this.userId = userId,
    // так можно обращаться к конкретному юзеру
    this.descriprtion = descriprtion,
    this.likes = likes;
  }
};


//////////////////////////////////////////

function authorize(user) {
  user.isAuthorised = true;
}
const user = new User(1, "Anna", "anna@gmail.com", false);
authorize(user);




const post = new Post(1, user.id,  "Lorem ipsum dolor.", 0);

const user2 = new User(2, "tima@gmail.com", false);
authorize(user2);



const comment = new Comment(user2.id, post.id, "Lorem ipsum dolor.", "23.01.2019");

console.log(user);
console.log(post);
console.log(user2);
console.log(comment);


let posts = [];

function newPost(i) {
  return new Post(i+2, user.id,  "text" + i, 0);
};


for(let i = 0; 6 > i; i++) {
  posts[i] = newPost(i);
};


function toPrint(post) {
  console.log(post);
};
posts.forEach(toPrint);


function like (post, postId, isLiked) {
  if(post.id === postId) {
    isLiked ? post.likes++ : post.likes--;
    console.log(post);
  };
};

let postId = 4;

let isLiked = true;

for(let i = 0; i < posts.length; i++) {
  like(posts[i], postId, isLiked);
};



