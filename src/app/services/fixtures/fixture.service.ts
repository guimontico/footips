import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Fixtures, FixtureResponse } from 'src/app/models/fixtures';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  apiUrl = environment.footballApi + '/fixtures?league=2&date=2022-09-06&season=2022'

  constructor(private http: HttpClient) {}

  async getFixtures(): Promise<FixtureResponse> {
    const headers = new HttpHeaders({
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "98357c457c1836ad2dca64924ef3b857"
    });

    const options = {
      method: 'GET',
      headers: headers
    }

    let response = this.http.get<FixtureResponse>(this.apiUrl, {headers})
    return await firstValueFrom(response)
  }
}
