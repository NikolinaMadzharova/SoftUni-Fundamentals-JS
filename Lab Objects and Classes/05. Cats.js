function cats(array){
class cats{
    
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`);
    }

}

for (const cat of array) {
    const tokens=cat.split(' ');
    const name= tokens[0];
    const age = tokens[1];

    const newCat = new cats(name, age);
    newCat.meow();
    
}

}
cats(['Mellow 2', 'Tom 5']);