// Types Aliases & Custom Types

type Role = "admin" | "user" | "guest";

let userRoles: Role = "admin"; // Valid
// let userRole: Role = "superadmin"; // Error: Type '"superadmin"'

// Object type with a custom type
type User = {
  name: string;
  age: number;
  isActive: boolean;
  role: Role;
  permissions?: string[]; // Optional property
  scores?: Array<number>; // Optional property
};

let user1: User = {
  name: "Alice",
  age: 25,
  isActive: true,
  role: "user",
  permissions: ["read", "write"],
  scores: [90, 85, 88],
};