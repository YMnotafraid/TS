{
  function f1(a: string | number[]) {
    if (typeof a === "string") {
      a.toLowerCase();
    } else {
      a.join("");
    }
  }
}
