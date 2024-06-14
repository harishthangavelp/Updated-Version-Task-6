class Person1 {
    constructor(myName, myAge, myPlace) {
      this.myName = myName;
      this.myAge = myAge;
      this.myPlace = myPlace;
    }

     myDetails1() {
        console.log(`Name: ${this.myName}`);
        console.log(`Age: ${this.myAge}`);
        console.log(`Place: ${this.myPlace}`);
      }
    }
  class Person2 {
    constructor(myInterests, myInspiration, myDream) {
      this.myInterests = myInterests;
      this.myInspiration = myInspiration;
      this.myDream = myDream;
    }
    
    myDetails2() {
      console.log(`Interest: ${this.myInterests}`);
      console.log(`Inspiration: ${this.myInspiration}`);
      console.log(`Dream: ${this.myDream}`);
    }
  }
  //my details arguments
  const person1 = new Person1('Harish', 22, 'Kanchipuram - 1');
  const person2 = new Person1('Thangavel', 22, 'Kanchipuram - 2');
  const addDetails = new Person2('Full Stack Developer', 'Abdul Kalam', 'Build a own house and live happily with my family')
  
  //details of person1 
  console.log('Person-1 Details:');
  person1.myDetails1();
  
  //details of person2
  console.log('\nPerson-2 Details:');
  person2.myDetails1();
  
  //My Interest, Inspiration and Dream
  console.log('\nMy Interest, Inspiration and Dream:');
  addDetails.myDetails2();