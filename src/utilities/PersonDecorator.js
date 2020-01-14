"use strict";
exports.__esModule = true;
function personDecorator(constructor) {
    console.log("Person decorator is called");
}
exports.personDecorator = personDecorator;
function personDecoratorFactory(name) {
    return function (constructor) {
        console.log("Person decorator function is called with:  " + name);
    };
}
exports.personDecoratorFactory = personDecoratorFactory;
function propertyDesc(target, propertyKey) {
    if (typeof target === "function") {
        console.log("class name: " + target.name);
    }
    else {
        console.log("class name: " + target.constructor.name);
    }
    console.log("propertyKey: " + propertyKey);
}
exports.propertyDesc = propertyDesc;
function auditLogDesc(target, methodName) {
    var originalFunction = target[methodName];
    var auditFunction = function () {
        console.log("auditLogDesc : overide of " + methodName + " call");
        originalFunction.apply(this, arguments);
    };
    target[methodName] = auditFunction;
    return target;
}
exports.auditLogDesc = auditLogDesc;
