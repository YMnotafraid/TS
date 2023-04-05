{
  interface Ilg {
    name: string;
    age?: () => number;
  }
  interface Ilg2 {
    name: string;
    age: (() => number) | undefined;
  }
  const lg: Ilg = {
    name: "123",
    age: () => 12,
  };
  const lg2: Ilg = {
    name: "123",
  };
  const lg3: Ilg2 = {
    name: "12",
    age: undefined,
  };
  //   if(typeof lg3.age === "function"){
  //       lg3.age();
  //   }
  lg3.age?.();
}
{
  interface Istudy {
    (language: string): void;
  }
  const study: Istudy = function (language: string) {
    return 123;
  };
  console.log(study("ts"));
}
{
  //索引签名
  interface LanguageRankInterface {
    [rank: number]: string;
  }
  interface LanguageYearInterface {
    [name: string]: number;
    // age:number;
    // name:string
  }
  let map: LanguageRankInterface = {
    1: "js",
    2: "ts",
  };
  let map2: LanguageYearInterface = {
    js: 1,
    ts: 2,
    1: 123,
  };
}
{
  interface Person {
    name: string;
    age: number;
    sayHello(): void;
  }
  class Student implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log(
        `Hello, my name is ${this.name} and I'm ${this.age} years old.`
      );
    }
    sayWhat() {
      console.log("what");
    }
  }
  const s = new Student("lbw", 12);
  s.sayWhat();
}
