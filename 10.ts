//泛型
{
  function fn<T>(name: T) {
    return name;
  }
  fn(1);
  fn("1");
  fn(undefined);
  fn(null);
}
{
  class Memory<S> {
    store: S;
    constructor(store: S) {
      this.store = store;
    }
    get() {
      return this.store;
    }
    set(store: S) {
      this.store = store;
    }
  }
  const numMemory = new Memory<number>(1);
  numMemory.set(123);
  const strMemory = new Memory("");
  strMemory.set("123");
}
{
  interface ReduxModel<State> {
    state: State;
    reducers: {
      [action: string]: (state: State, action: any) => State;
    };
  }
  type ModelInterface = { id: number; name: string };
  const model: ReduxModel<ModelInterface> = {
    state: { id: 1, name: "ming" },
    reducers: {
      setId: (state, action: { payload: number }) => ({
        ...state,
        id: action.payload,
      }),
      setName: (state, action: { payload: string }) => ({
        ...state,
        name: action.payload,
      }),
    },
  };
}
{
  function reflect<T extends string | number>(input: T) {
    return input;
  }
  //   reflect(null);err
}
{
  interface ReduxModelSpecified<State extends { id: number; name: string }> {
    state: State;
  }
  type RM1 = ReduxModelSpecified<{ id: number; name: string }>;
  type RM2 = ReduxModelSpecified<{ id: number; name: string; age: number }>;
  const r1: RM1 = { state: { id: 1, name: "ming" } };
  const r2: RM2 = { state: { id: 1, name: "ming", age: 100 } };
}
