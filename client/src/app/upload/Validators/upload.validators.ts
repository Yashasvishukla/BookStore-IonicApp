import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounce, debounceTime, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UploadService } from '../Services/upload.service';

export class UploadValidator {

    static readonly httpClient: HttpClient;
    static readonly baseUrl = environment.baseUrl;
    constructor(private httpClient: HttpClient){
        this.httpClient = httpClient;
    }
  /* This class will hold bunch of static methods that will be acting as validators for the forms*/

  static cannotBeNull(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string) === '') {
      return {
        cannotBeNull: 'This field is mandatory. Cannot be empty!!',
      };
    }

    return null;
  }

  static cannotContainsSpecialCharacters(
    control: AbstractControl
  ): ValidationErrors | null {
    if (
      (control.value as string).indexOf('@') >= 0 ||
      (control.value as string).indexOf('$') >= 0 ||
      (control.value as string).indexOf('&') >= 0 ||
      (control.value as string).indexOf('#') >= 0 ||
      (control.value as string).indexOf('*') >= 0
    ) {
      return {
        cannotContainsSpecialCharacters:
          'The Book Name does not support Special Characters!!.',
      };
    }
    return null;
  }

  //  static shouldBeUnique(control: AbstractControl): Observable<ValidationErrors | null>
  // {
  //   debugger;
  //     return this.httpClient.post(this.baseUrl + 'books/name', (control.value as string)).pipe(
  //       debounceTime(500),
  //       map((data: any) => {
  //         if(data.status !== 200){
  //           return ({'InValid': false});
  //         }
  //         return ({'InValid': true});
  //       })
  //     );
  // }
}
