import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class RecordService {
    url: string = "http://165.22.62.225:6060";
    constructor(private http: HttpClient) {
    }

    getAllRecords(): Observable<any> {
        return this.http.get<any>(`${this.url}/records`, {})
            .pipe(
                catchError(error => {
                    return of(error.error);
                }));
    }   
}