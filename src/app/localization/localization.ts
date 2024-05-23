import { DELocalization } from "./DELocalization";
import { ENLocalization } from "./ENLocalization";
import { TRLocalization } from "./TRLocalization";

export class Localization  {
  constructor() {

  }
  // getWordList(lang:Lang):{} {
  //   switch (lang) {
  //     case Lang.TR:
  //      return new TRLocalization().getWordList()
  //       case Lang.EN:
  //         return new ENLocalization().getWordList()
  //       case Lang.DE:
  //         return new DELocalization().getWordList()

  //     default://TR
  //     return new TRLocalization().getWordList()
  //   }
  // }


}

export interface ILocalization{
  getWordList():
  {
    hello:string,
    world:string,
    pipe_example_title:"*** Translate Pipe ***"
  };
}

export enum Lang{
  TR='a',
  EN='b',
  DE='c'
}
