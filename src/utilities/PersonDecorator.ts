export function personDecorator(constructor: Function) {
  console.log("Person decorator is called");
}

export function personDecoratorFactory(name: string) {
  return function(constructor: Function) {
    console.log(`Person decorator function is called with:  ${name}`);
  };
}

export function propertyDeco(target: any, propertyKey: string) {
  if (typeof target === "function") {
    console.log(`class name: ${target.name}`);
  } else {
    console.log(`class name: ${target.constructor.name}`);
  }
  console.log(`propertyKey: ${propertyKey}`);
}

export function auditLogMethodDeco(target: any, methodName: string) {
  let originalFunction = target[methodName];

  let auditFunction = function(this: any) {
    console.log(`auditLogDesc : overide of ${methodName} call`);
    originalFunction.apply(this, arguments);
  };

  target[methodName] = auditFunction;

  return target;
}

export function parameterDeco(
  target: any,
  methodName: string,
  parameterIndex: number
) {
  console.log(`target: ${target}`);
  console.log(`methodName : ${methodName}`);
  console.log(`parameterIndex : ${parameterIndex}`);
}
