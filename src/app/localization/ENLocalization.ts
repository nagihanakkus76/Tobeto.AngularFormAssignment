import { ILocalization } from "./localization"

export class ENLocalization implements ILocalization {
  constructor() {

  }
  getWordList(): { hello: "Hello"; world: "World"; pipe_example_title: "*** Translate Pipe ***"; } {
    throw new Error("Method not implemented.");
  }



}
