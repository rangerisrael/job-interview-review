function greet(this: { name: string }, age: number, msg: string) {
  console.log(`${msg}, ${this.name} is ${age}`);
}

type O = OmitThisParameter<typeof greet>;
//ignore this
