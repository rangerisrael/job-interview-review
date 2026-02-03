type ICondition<T> = T extends "hello" ? "goodbye" : "hello";

const getHelloType: ICondition<"goodbye"> = "hello";
const getGoodbyeType: ICondition<"hello"> = "goodbye";
