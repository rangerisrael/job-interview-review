//comparison namespace to module

namespace Monitoring {
  // log
  export function Log() {
    console.log("Logger", new Date());
  }
  //history
  export function History() {
    console.log("History module");
  }
}

export default Monitoring;

// usecase to group multiple export module

const { Log, History } = Monitoring;

console.log(Log(), History());

console.log(Monitoring.Log());

const lettersRegexp = /^[A-Za-z]+$/;
const numberRegexp = /^[0-9]+$/;

namespace Validation {
  export interface IValidateString {
    isValid: boolean;
  }

  export class LetterValidation {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }

  export function NumberValidator(n: number) {
    return numberRegexp.test(n.toString());
  }
}

type IValidate = Validation.IValidateString;

const getUserValid: IValidate = { isValid: true };
console.log(getUserValid);

const getValidString = new Validation.LetterValidation().isAcceptable("secret");
const getValidNumber = Validation.NumberValidator(43534534);

console.log(getValidString);
console.log(getValidNumber);
