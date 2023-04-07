{
  function f1(a: string | number[]) {
    if (typeof a === "string") {
      a.toLowerCase();
    } else {
      a.join("");
    }
  }
  interface Man {
    name: string;
    age: number;
    power: boolean;
  }
  interface Woman {
    name: string;
    age: number;
  }
  function createP(p: Man | Woman) {
    if ("power" in p) {
      p.power = true;
    } else {
      p;
    }
  }
}
