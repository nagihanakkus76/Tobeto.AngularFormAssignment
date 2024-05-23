import { ILocalization, Lang } from "./localization";
import { LocalizationModel } from "./localization.model";

export class TRLocalization implements ILocalization {
  constructor() {

  }
  getWordList():
  { hello: "Merhaba"; world: "Dünya"; pipe_example_title: "*** Translate Pipe ***"; } {
    throw new Error("Method not implemented.");
  }



  // getWordList():{} {
  //   let words = {
  //     hello:"Merhaba",
  //     world:"Dünya",
  //     pipe_example_title:"*** Çeviri Pipe ***"
  //   }
  //   return words
  // }






}
