import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Produk } from '../models/produk.model';

@Injectable()
export class ProdukService{

  private apiUrl = '/api/produk';

  constructor(private http:Http){}

  //Error Handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getProdukByKategori(kodeKategori: string): Promise<Produk[]>{
    return this.http.get(this.apiUrl+"/kategori/"+kodeKategori)
    .map(
      (response: Response) => { response.json()[0].daftarbarang

        let produkByKategori = new Array<Produk>();
        let i : number;
        for (i=0;i<response.json()[0].daftarbarang.length;i++){
          produkByKategori.push(
            {
              kode_produk : response.json()[0].daftarbarang[i].kode_produk.kode_produk,
              nama_produk : response.json()[0].daftarbarang[i].kode_produk.nama_produk,
              harga : response.json()[0].daftarbarang[i].kode_produk.hargabarang[0].harga,
              besar_diskon : response.json()[0].daftarbarang[i].kode_produk.diskon[0].besar_diskon,
              stok : response.json()[0].daftarbarang[i].kode_produk.stok,
              gambar : response.json()[0].daftarbarang[i].kode_produk.gambar
            }
          );
        }
        return produkByKategori;
      }
    ).toPromise().catch(this.handleError);
  }

}
