type Status = "error" | "success" | "info" | undefined | null;

const specialRecipe: NonNullable<Status> = "error";

//error
//Type 'null' is not assignable to type 'NonNullable<Status>'.ts(2322)
