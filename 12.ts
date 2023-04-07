interface Iuser {
  name: string;
  age: number;
}
interface Iuser {
  sex: string;
  power: string;
}
interface Imanager extends Iuser {
  power: string;
}
const u1: Iuser = { name: "ming", age: 123, sex: "male", power: "sleep" };
