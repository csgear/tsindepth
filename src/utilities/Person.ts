import {
  personDecoratorFactory,
  propertyDeco,
  auditLogMethodDeco,
  parameterDeco
} from "./PersonDecorator";

@personDecoratorFactory("Person")
export class Person {
  firstName: string = "";

  @propertyDeco
  static personName: string = "";

  @auditLogMethodDeco
  print(@parameterDeco name: string) {
    console.log(`Person.print(${name}) is called`);
  }

  toString() {
    return JSON.stringify(this);
  }
}

const person1: Person = new Person();
const person2: Person = new Person();

person1.print("Jeff");
person2.print("Alex");
