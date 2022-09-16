let saySomething = [
    {
        name: "kunuut",
        greeting:"Aluu",
        sayHi: function(){
            let sentence = this.greeting + ", uanga ateqarpunga " + this.name;
            return sentence;
        }
    },{
        name: "Fredo",
        greeting:"Hola",
        sayHi: function(){
            let sentence = this.greeting + ", me amore " + this.name;
            return sentence;
        }
    },{
        name: "Fornida",
        greeting:"Hejsa",
        sayHi: function(){
            let sentence = this.greeting + ", me custa " + this.name;
            return sentence;
        }
    }
];
for(let i = 0; i<saySomething.length; i++){
    console.log(saySomething[i].sayHi());
}