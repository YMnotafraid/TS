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
const c = new Sellable();
c.addToCart(1);
console.log(c.cart);
