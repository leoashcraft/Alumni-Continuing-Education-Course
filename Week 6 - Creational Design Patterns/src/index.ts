import SerializerFactory from "./Factory/Serializers/SerializerFactory";
import EngineFactory from "./Factory/Engines/EngineFactory";
import Cloneable from "./Prototype/Cloneable";
import DatabaseConnection from "./Singleton/DatabaseConnection";
import TaskRequestBuilder from "./Builder/TaskRequestBuilder";
import ICloneable from "./Prototype/ICloneable";

// Singleton Example
const connection1 = DatabaseConnection.getConnection();
const connection2 = DatabaseConnection.getConnection();

console.log(
  "Connection 1 has the connection string: " + connection1.getConnectionString()
);
console.log(
  "Connection 2 has the connection string: " + connection2.getConnectionString()
);

if (connection1 === connection2) {
  console.log("Connections are the same object, singleton implemented!");
} else {
  console.log("Singleton not implemented properly. ");
}
console.log();

// Prototype Example
const sourceObject = new Cloneable();
const targetObject = sourceObject.Clone();

console.log("Source Object contains " + sourceObject.someField);
console.log("Target Object contains " + targetObject.someField);

if (sourceObject !== targetObject) {
  console.log("Objects are not the same object, prototype implemented!");
} else {
  console.log("prototype not implemented properly. ");
}
console.log();

// Builder Example
// Simple task with only a title and description
const simpleTask = new TaskRequestBuilder("Implement Builder Pattern")
  .setDescription("Create a detailed example of the Builder Pattern.")
  .build();

// More complex task with additional details
const complexTask = new TaskRequestBuilder("Plan Sprint")
  .setDescription("Organize tasks for the next development sprint.")
  .setPriority("High")
  .setDueDate(new Date("2024-04-30"))
  .addTag("planning")
  .addTag("sprint")
  .addAssignee("developer1")
  .addAssignee("developer2")
  .build();

console.log(simpleTask.description);
console.log(simpleTask.priority);
console.log(complexTask.description);
console.log(complexTask.priority);

// Factory Example
const serializer = SerializerFactory.getSerializer("json");
console.log(serializer.serialize({ message: "Hello, World!" }));

const templatingEngine = EngineFactory.getEngine("handlebars");
console.log(
  templatingEngine.render("Hello, <%= message %>", { message: "World" })
);
console.log();
