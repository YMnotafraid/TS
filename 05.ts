{
  // 胖箭头的区别
  type Adder = (a: number, b: number) => number;
  const add: Adder = (a, b) => a + b;
}
{
  //对象写法
  interface Entity {
    add: (a: number, b: number) => number;
    del(a: number, b: number): number;
  }
  const entity: Entity = {
    add: (a, b) => a + b,
    del(a, b) {
      return a - b;
    },
  };
}
{
  //通过加工实参，返回新的类型
  function computeTypes(one: string, two: number) {
    const nums = [two];
    const strs = [one];
    return {
      nums,
      strs,
    };
  }
}
{
  function log(x?: string) {
    console.log(x); //x:string | undefined
  }
  function log1(x: string | undefined) {
    console.log(x);
  }
  log();
  log(undefined);
  // log1(); //err
  log1(undefined);
}
{
  function log(x = "hi") {
    console.log(x);
  }
  //   log(123); //err
}
{
  function log(x: number | string = "hi") {
    console.log(x);
  }
}
{
  //?
  function sum(...nums: (number | string)[]): number {
    return nums.reduce<number>((pre, cur) => pre + Number(cur), 0);
  }
  console.log(sum(1, 2, 3));
  console.log(sum(1, "2"));
}
{
  interface P1 {
    name: string;
  }
  interface P2 extends P1 {
    age: number;
  }
  //   function convert(x: string): number;
  //   function convert(x: number): string;
  //   function convert(x: null): -1;
  function convert(x: P2): string;
  function convert(x: P1): number;
  function convert(x: P1 | P2): any {}

  //   function convert(x: string | number | null): any {
  //     if (typeof x === "string") {
  //       return Number(x);
  //     }
  //     if (typeof x === "number") {
  //       return String(x);
  //     }
  //     return -1;
  //   }
  convert({ name: "" } as P1);
  convert({ name: "", age: 18 } as P2);
}
