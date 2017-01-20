import { Component, OnInit } from '@angular/core';

import { ProdukService } from '../services/produk.service';
import { Produk } from '../models/produk.model';

@Component({
  selector: 'dashboard-component',
  moduleId: module.id,
  templateUrl: '../views/dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  title = 'Dashboard';
  kodeKategori='16001';

  constructor(
    private produkService: ProdukService,
  ){}

  ngOnInit():void{
    this.addSlide();
  }

  /*CAROUSEL SECTION START*/
  public slideProduk: Produk[];
  public myInterval: number = 1500; //from documentation
  public activeSlideIndex: number; //from documentation

  public addSlide():void{
    this.produkService.getProdukByKategori(this.kodeKategori).then(slideProduk => this.slideProduk = slideProduk);
  }
  /*CAROUSEL SECTION END*/
}
