function f1(val: any): any {
  return val;
}
function f2<T>(val: T): T {
  return val;
}
const str = "!@3";
f2(str);
interface Man {
  name: string;
  age: number;
}
// function getProduct<T>(products: T[]): T {
//   const index = 3;
//   return products[index];
// }
const getProduct = <T>(products: T[]): T => {
  const index = 3;
  return products[index];
};

const f3 = <U, T extends number>(val1: U, val2: T): object => {
  return {};
};
// const f3 = <U>(val1: U, val2: number): object => {
//     return {};
//   };
f3(1, 2);
// f3(1, []);
