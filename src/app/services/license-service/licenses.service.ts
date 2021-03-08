import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as constants from '../../shared/constants';
import { LicensesList } from 'src/app/shared/models/licenses-model';
@Injectable({
  providedIn: 'root'
})
export class LicensesService {
  private key: string = constants.PRIVATE_KEY;
  private licenses_endpoint: string = constants.GET_LICENSES;
  licenseData$: any = new BehaviorSubject([]);

  constructor(private dataService: HttpClient) { }

  getLicenses(): Observable<LicensesList[]> {
    const headers = new HttpHeaders({ 'secret-key': this.key });
    return this.dataService.get<[]>(this.licenses_endpoint, { headers }).pipe(
      map((item: any) => item.content));
  }

}


