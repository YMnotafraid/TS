{
  let str = "this is string"; //str:string
  const str1 = "this is string"; //str1:this is string
}
{
  //类型推断
  let str: "this is string" = "this is string";
  let str1: string = "string";
  str1 = str;
  //   str = str1; //err 黑马一定是马，但马不一定是黑的。
}
{
  //字面量类型拓宽
  let str = "this is string"; //string
  let strFun = (str = "this is string") => str; //string=>string

  const specifiedStr = "this is string"; //"this is string"

  let str2 = specifiedStr; //string let变量是可变更，所以会拓宽
  let strFun2 = (str = specifiedStr) => str; //string=>string
}
{
  const specifiedStr: "this is string" = "this is string"; //"this is string"

  let str2 = specifiedStr; //str2的数据类型为"this is string"
}
{
  let x = null;
  let y = undefined;
  const z = null;
  let fn = (param = null) => param;
}
