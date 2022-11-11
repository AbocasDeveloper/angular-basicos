import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

    constructor(
        private _dbzService: DbzService
    ){
        
    }

    get personajes(){
        return this._dbzService.personajes;
    }
}
