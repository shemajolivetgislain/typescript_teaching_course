let userName: string = "John Doe";
let userAge: number = 30;
let isAdmin: boolean = true;
//*************************************************************************************
function add(a: number, b: number) {
  return a + b;
}
//*************************************************************************************
// Typescript allows to define any type for variable flexibility
let age: any = 25;
age = "25";
age = true;
age = {};
age = [];

//*************************************************************************************

// Union types allow a variable to hold multiple types
let userId: string | number = "12345";
userId = 12345;
userId = "12345";
//*************************************************************************************
// Type assertions allow you to tell the compiler about the type of a variable
// Array & types

let hobbies: string[] = ["Reading", "Traveling", "Cooking"];
// hobbies.push(1);
hobbies.push("Swimming");
let scores: Array<number> = [90, 85, 88];

// Tuple types allow you to define an array with fixed number of elements and types
let user: [string, number, boolean] = ["Alice", 28, true];

// Generic types allow you types in one array
let genericArray: Array<string | number> = ["Hello", 42, "World"];

// **************************************************************************************
// Object types allow you to define the structure of an object
let userProfile: {
  name: string;
  age: number;
  isActive: boolean;
} = {
  name: "John",
  age: 30,
  isActive: true,
};

let users: {
  name: string;
  age: number;
  isAdmin: boolean;
  hobbies?: string[]; // Optional property
  scores?: Array<number>; // Optional property
  role: {
    title: string;
    id: number;
  };
} = {
  name: "Jane",
  age: 25,
  isAdmin: false,
  hobbies: ["Reading", "Gaming"],
  scores: [95, 80, 75],
  role: {
    title: "User",
    id: 1,
  },
};

// **************************************************************************************

// enum types allow you to define a set of named constants
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}
// You can use enums to define a variable with a specific set of values
let userRole: UserRole = UserRole.User;
let currentUserRole: UserRole = UserRole.Admin;

// Literal types combined with union types allow you to define a variable that can only take specific values
let statusTypes: "active" | "inactive" | "pending" = "active";
