class User {
  constructor(public name: string, public age: number, private sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  get getSex(): string {
    return this.sex;
  }
  set setSex(sex: string) {
    this.sex = sex;
  }
}
const user = new User("ming", 23, "male");
user.setSex = "female";
console.log(user.getSex);

class User1 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const user1 = new User1("ming", 23);
