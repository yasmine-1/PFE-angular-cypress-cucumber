import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MesInfoService {

  nom: any;
  langue: any;

  constructor() { }

  SetNom(nom: any) {
    this.nom = nom;
  }

  getNom() {
    return this.nom;
  }

  SetLanguages(langue: any) {
    this.langue = langue;
  }

  getLanguages() {
    return this.langue;
  }
}
