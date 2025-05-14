import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../pais.service';
import { PaisDetailModel } from '../pais-detail-model';

@Component({
  selector: 'app-pais-detail',
  standalone: false,
  templateUrl: './pais-detail.component.html',
  styleUrls: ['./pais-detail.component.css']
})
export class PaisDetailComponent implements OnInit {

  paisId!: string;
  @Input() paisDetailModel!: PaisDetailModel;

  constructor(
    private paisService: PaisService) { }

  ngOnInit() {
  }

}
