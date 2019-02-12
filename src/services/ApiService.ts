import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',

    })
};

@Injectable()
export class ApiService {
    paitaintconditionInfoURL: string = 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition?patient=';
    paitaintInfoURL: string = 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/';

    constructor(private httpClient: HttpClient) { }

    getpatientinfo(paitaintId) {
        return this.httpClient.get<any>(this.paitaintInfoURL + paitaintId);
    }

    getpatientconditioninfo(paitaintId) {
        return this.httpClient.get<any>(this.paitaintconditionInfoURL + paitaintId + '&status=active');
    }
}