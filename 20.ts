interface Y {
  kind: "yuan";
  r: number;
}
interface Z {
  kind: "zhengfangxing";
  side: number;
}
interface C {
  kind: "changfangxing";
  length: number;
  width: number;
}
type Shape = Y | Z | C;
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "yuan":
      return shape;
    case "zhengfangxing":
      return {};
    case "changfangxing":
      return {};
    default:
      const last: never = shape;
      return last;
  }
}
