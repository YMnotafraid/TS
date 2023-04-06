{
  //类型缩小，类型守卫
  const convertToUpperCase = (strOrArray: string | string[]) => {
    // strOrArray.map //err
    if (typeof strOrArray === "string") {
      return strOrArray.toUpperCase();
    } else if (Array.isArray(strOrArray)) {
      return strOrArray.map((item) => item.toUpperCase());
    }
  };
}
{
  //switch
  const feat = (
    data: { animal: "panda"; name: "china" } | { age: 18; name: "japan" }
  ) => {
    switch (data.name) {
      case "china":
        return data.animal;
      case "japan":
        return data.age;
      default:
        return;
    }
  };
}
{
  //typeof
  const convert = (c: "a" | 1) => {
    if (typeof c === "number") {
      return c.toFixed();
    } else {
      return c.toUpperCase();
    }
  };
}
{
  //instanceof
  class Dog {
    wang = "wangwang";
  }
  class Cat {
    miao = "miaomiao";
  }
  const getName = (animal: Dog | Cat) => {
    if (animal instanceof Dog) {
      return animal.wang;
    } else {
      return animal.miao;
    }
  };
  const cat = new Cat();
  console.log(getName(cat));
}
{
  //in
  interface Dog {
    wang: String;
  }
  interface Cat {
    miao: string;
  }
  const getName = (animal: Dog | Cat) => {
    if ("wang" in animal) {
      return animal.wang;
    } else {
      return animal.miao;
    }
  };
}
{
  //自定义类型守卫
  interface Dog {
    wang: String;
  }
  interface Cat {
    miao: string;
  }
  const isDog = function (animal: Dog | Cat): animal is Dog {
    return "wang" in animal;
  };
  const getName = (animal: Dog | Cat) => {
    if (isDog(animal)) {
      return animal.wang;
    }
  };
}
{
  enum A {
    one,
    two,
  }
  enum B {
    one,
    two,
  }
  const cpWithNumber = (param: A) => {
    if (param === 1) {
      return param;
    }
  };
  const cpWithOtherEnum = (param: A) => {
    if (param === (B.two as unknown as A)) {
      return param;
    }
  };
  //best
  const cpWithSelf = (param: A) => {
    if (param === A.two) {
      return param;
    }
  };
}
{
  class Dog {
    wang = "wangwang";
  }
  class Cat {
    miao = "miaomiao";
  }
  const getName = <T extends Dog | Cat>(animal: T) => {
    if (animal instanceof Dog) {
      return animal.wang;
    }
  };
}
