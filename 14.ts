{
  interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
  }
  type TP = {
    cameraMode: string;
    filter: string;
    burst: number;
  };
  // const tp: TP = {
  //   cameraMode: "",
  //   filter: "",
  //   burst: 1,
  //   name:
  // };
  interface Story {
    createStory(): void;
    deleteStory?(): void;
  }

  class Ig implements TakePhoto, Story {
    constructor(
      public cameraMode: string,
      public filter: string,
      public burst: number,
      public short: string
    ) {}
    createStory() {}
  }
}
