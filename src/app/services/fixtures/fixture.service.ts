import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { FixtureResponse } from 'src/app/models/fixtures';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  apiUrl = environment.footballApi

  constructor(private http: HttpClient) {}

  async getFixtures(date: string): Promise<FixtureResponse> {
    const headers = new HttpHeaders({
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "98357c457c1836ad2dca64924ef3b857"
    });

    let response = this.http.get<FixtureResponse>(`${this.apiUrl}'/fixtures?league=2&date=${date}&season=2022'`, {headers})
    return await firstValueFrom(response)
  }
}
