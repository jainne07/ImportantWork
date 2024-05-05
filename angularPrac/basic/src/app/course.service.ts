import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourse } from './course';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private _url: string = "https://my-json-server.typicode.com/NehaJain07/api/videoList"
    constructor(private _http: HttpClient) { }

    getCourses(search: any): Observable<ICourse[]> {
        return this._http.get<ICourse[]>(this._url + '?q=' + search)
    }
    addCourses(addinfo: any): Observable<ICourse[]> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post<ICourse[]>(this._url, addinfo, { headers: headers })
    }
    deleteCourses(id: number): Observable<ICourse[]> {
        return this._http.delete<ICourse[]>(this._url + '/' + id)
    }
} 
