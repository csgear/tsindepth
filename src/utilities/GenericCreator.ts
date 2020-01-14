export class GenericCreator<T> {
  create(arg: { new (): T }): T {
    return new arg();
  }
}

class FirstClass {
  id: number | undefined;
  constructor(id = 4) {
    this.id = id;
  }

  print() {
    console.log(this.id);
  }
}

class SecondClass {
  name: string | undefined;

  constructor(name = "peter") {
    this.name = name;
  }

  print() {
    console.log(this.name);
  }
}

let creator1 = new GenericCreator<FirstClass>();
let firstClass = creator1.create(FirstClass);
firstClass.print();

let creator2 = new GenericCreator<SecondClass>();
let secondClass = creator2.create(SecondClass);
secondClass.print();
