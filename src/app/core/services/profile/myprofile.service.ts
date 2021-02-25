import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from '../api.service';

@Injectable({ providedIn: 'root' })
export class MyProfileService {
    constructor(
        private http: HttpClient,
        private apiService: ApiService) { }

    getMyProfile() {
        return this.apiService.get('api/my-profile');
    }
}