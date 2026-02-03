// union to string object

type Roles = "admin" | "staff" | "client";

type IRoleObject = {
  [R in Roles]: R;
};

// convert to object string
const roles: IRoleObject = {
  admin: "admin",
  staff: "staff",
  client: "client",
};
