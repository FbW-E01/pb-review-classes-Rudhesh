// 1. Create a class called "Component". The constructor for Component should take in one parameter "name". There should be one method called "render" that prints `<p>Component _name_  rendering` where `_name_`  is the provided name.


class Component {
    constructor(name) {
        this.name = name;
    }
    render() {
        console.log(`<p>Component _${this.name}_  rendering`);
    }
}

const user = new Component("John Abrahim");
user.render()
console.log(user);

// 2. Create a child class called UserCard that extends Component. The UserCard should take in only one constructor parameter called "user". Expect the user to be an object with "name", "imageUrl" and "email" properties. The UserCard should override the original "render" method. The new render method should print out something like this: 

class UserCard extends Component {
    constructor(user) {
        super()
        this.name = user.name;
        this.imageUrl = user.imageUrl ;
        this.email = user.email;
    }

    render() {

       console.log (`<div class="card card-user">
            <img class="card-img-top" src="${this.imageUrl} " alt>
        <div class = "card-body" >
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">To contact, please send a message to</p>
                <a
                    href="mailto:${this.email}"
                    class="btn btn-primary">
                ${this.email}
                </a>
            </div>
        </div >`)}

}


      const userCard = new UserCard({name:"John", imageUrl:"/image/pic", email: "john@gmail.com"})
     userCard.render() 
      console.log(userCard)


// 3. Create an array of at least 5 user objects.

array = [
    {name:"John", imageUrl:"/image/pic1", email: "john@gmail.com"},
    {name:"ron", imageUrl:"/image/pic2", email: "ronn@gmail.com"},
    {name:"som", imageUrl:"/image/pic3", email: "som@gmail.com"},
    {name:"adam", imageUrl:"/image/pic5", email: "adam@gmail.com"},
    {name:"albert", imageUrl:"/image/pic6", email: "albert@gmail.com"},
]


// 4. Using the .map() method, create 5 UserCard instances (objects) based on your users.

const arrayOfUserCard = array.map(x => new UserCard(x) )

console.log(arrayOfUserCard);

// 5. Using .forEach(), call the render method of your instances.


arrayOfUserCard.forEach(x =>x.render())

// 6. Print the type of the UserCard class.

console.log(typeof UserCard)

// 7. Print the type of a UserCard instance.

console.log(userCard instanceof UserCard)
