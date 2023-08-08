import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EgretCalendarEvent } from './apps/models/event.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private url = 'http://127.0.0.1:3000/';

  constructor(private http: HttpClient) { }

  createEv(event: EgretCalendarEvent) {
    console.log('Event data before sending:', event);
    return this.http.post(this.url + 'event/create', event);
  }
}
