import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TranslateResponseModel } from "./translate-response.model";

@Injectable({
  providedIn :"root",
})

export class TranslateService{

  private apiUrl = "https://api-free.deepl.com/v2/translate";
  private apiKey = "1fc2ead4-87a3-4b47-8bc9-c87cbb97bb91:fx";

  constructor(private http: HttpClient){}

   translate(title:string, language:string): Observable<TranslateResponseModel>
  {
    const headerData = {
      headers : {
        Authorization : `DeepL-Auth-Key ${this.apiKey}`
      }
    }

    const bodyData = {
      text: [
        title
      ],
      target_lang: language,
    }


    return this.http.post<TranslateResponseModel>(this.apiUrl, bodyData, headerData)
  }
}
