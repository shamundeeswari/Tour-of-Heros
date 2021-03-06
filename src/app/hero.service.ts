import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})

export class HeroService {

  
  constructor(private messageService:MessageService){

  }


  getHeroes():Observable<Hero[]>{

	// TODO: send the message _ after_ fetching the heroes

	this.messageService.add ('HeroService: fetched heroes');

		return of (Heroes);
	}
}
