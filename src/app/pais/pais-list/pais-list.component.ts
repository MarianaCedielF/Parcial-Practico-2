import { Component, OnInit } from '@angular/core';
import { PaisModel } from '../pais-model';
import { PaisService } from '../pais.service';
import { PaisDetailModel } from '../pais-detail-model';

@Component({
  selector: 'app-pais-list',
  standalone: false,
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  paises: Array<PaisModel> = [];
  selected: boolean = false;
  selectedPais!: PaisDetailModel;

  constructor(private paisService: PaisService) { }

  getPaises(): void {
    this.paisService.getPaises().subscribe({next: apiData => this.paises = apiData });
  }

  onSelected(pais: PaisDetailModel): void {
    this.selected = true;
    this.selectedPais = pais;
  }

  ngOnInit() {
    this.getPaises();
  }

}
