{
  abstract class User {
    constructor(public name: string, public age: number) {}
    abstract getName(): string;
    getAge(): number {
      return this.age;
    }
  }
  class Manager extends User {
    constructor(public name: string, public age: number, public sex: string) {
      super(name, age);
    }
    getName() {
      return this.name;
    }
  }
  const s = new Manager("", 1, "");
}
