interface Quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}
const q = new Sellable<Quiz>();
q.addToCart({ name: "q1", type: "quiz" });
console.log(q.cart);
const c = new Sellable<Course>();
c.addToCart({ name: "c1", author: "ming", subject: "cs" });
console.log(c.cart);
