import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiHost, headerWithToken, headerWithoutToken } from './configs';
import { firstValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User | null;

  constructor(private http: HttpClient) {
    this.user = null;
  }

  async login(email: string, password: string): Promise<boolean> {
    const response = await firstValueFrom<HttpResponse<any>>(
      this.http.post(
        `${apiHost}/auth/login`,
        {
          email,
          password
        },
        {
          headers: headerWithoutToken(),
          observe: 'response'
        }
      )
    );

    if (response.ok) {
      const { user, token } = response.body;

      localStorage.setItem('token', token);
      this.user = user;

      return true;
    }

    return false;
  }

  async register(name: string, email: string, password: string): Promise<boolean> {
    const response = await firstValueFrom(
      this.http.post<HttpResponse<any>>(
        `${apiHost}/auth/register`,
        {
          name,
          email,
          password
        },
        {
          headers: headerWithoutToken(),
          observe: 'response'
        }
      )
    );

    if (response.ok) {
      return true;
    }

    return false;
  }

  logout(): void {
    const token: string = localStorage.getItem('token')!;

    this.http.post(
      `${apiHost}/auth/logout`,
      {
      },
      {
        headers: headerWithToken(token),
        observe: 'response'
      }
    )

    this.user = null;
    localStorage.removeItem('token');
  }

  async isAuthenticated(): Promise<boolean> {
    const token = localStorage.getItem('token')!;

    try {
      const response = await firstValueFrom(
        this.http.get(
          `${apiHost}/auth/user`,
          {
            headers: headerWithToken(token),
            observe: 'response',
          },
        ),

      );

      if (response.ok) {
        this.user = response.body as User;
        return true;
      }

      return false;
    } catch {
      return false;
    }
  }
}
