const myObject = {
    fullname: 'John Doe',
    myArrowFunction: null,
  
    sayName: function () {
      this.myArrowFunction = () => {
        return `My name is ${this.fullname}`;
      };
    },
  };
  
  myObject.sayName(); // Call the sayName function
  
  console.log(myObject.myArrowFunction()); // Output: "My name is John Doe"
  

  
