import { Person } from "./Person";

export type numberOrString = number | string;

export function isNumberOrString<T>(input: T) {
  console.log(`number or string : ${input}`);
}

isNumberOrString(2);
isNumberOrString("Jeff");
isNumberOrString(2.0);
isNumberOrString(new Date());
isNumberOrString(new Person());
