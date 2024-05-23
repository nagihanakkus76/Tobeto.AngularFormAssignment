import { ILocalization } from "./localization";

export class DELocalization implements ILocalization {
  constructor() {

  }
  getWordList(): { hello: "Hallo"; world: string; pipe_example_title: "*** Translate Pipe ***"; } {
    throw new Error("Method not implemented.");
  }



}
