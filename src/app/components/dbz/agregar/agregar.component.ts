import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  constructor(
    private _dbzService: DbzService
  ){

  }

  @Input() personaje: Personaje = {
    nombre: '',
    poder: 0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.personaje.nombre.trim().length === 0) { return; }

    //this.onNuevoPersonaje.emit(this.personaje)
    this._dbzService.agregarPersonaje(this.personaje);

    this.personaje = {
        nombre: '',
        poder: 0
    }
}

}
