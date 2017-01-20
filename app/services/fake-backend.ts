import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider = {

    provide: Http,
    useFactory: (backend: MockBackend, options: BaseRequestOptions) => {

        let produkByKategori = [
          {
            kode_kategori: '16001',
            nama_kategori: 'Handphone',
            daftarbarang:
            [
              {
                kode_kategori: '16001',
                kode_produk:
                {
                  kode_produk: '2016125501',
                  nama_produk: 'Apple Iphone 5s',
                  hargabarang:
                  [
                    {
                      id_harga: 0,
                      waktuharga: '2017-01-12T00:00:00Z',
                      harga: 1780000,
                      kode_produk: '2016125501'
                    }
                  ],
                  diskon:
                  [
                    {
                      id_diskon: 0,
                      waktu_diskon: '2017-01-12T00:00:00Z',
                      besar_diskon: 0,
                      kode_produk: '2016125501'
                    }
                  ],
                  stok: 9,
                  gambar: '../app/assets/img/produk/apple/5s.jpg'
                }
              },
              {
                kode_kategori: '16001',
                kode_produk:
                {
                  kode_produk: '2016125502',
                  nama_produk: 'LG G4',
                  hargabarang:
                  [
                    {
                      id_harga: 0,
                      waktuharga: '2017-01-12T00:00:00Z',
                      harga: 2780000,
                      kode_produk: '2016125502'
                    }
                  ],
                  diskon:
                  [
                    {
                      id_diskon: 0,
                      waktu_diskon: '2017-01-12T00:00:00Z',
                      besar_diskon: 0,
                      kode_produk: '2016125502'
                    }
                  ],
                  stok: 10,
                  gambar: '../app/assets/img/produk/lg/g4.jpg'
                }
              },
              {
                kode_kategori: '16001',
                kode_produk:
                {
                  kode_produk: '2016125503',
                  nama_produk: 'Oppo F1',
                  hargabarang:
                  [
                    {
                      id_harga: 0,
                      waktuharga: '2017-01-12T00:00:00Z',
                      harga: 1580000,
                      kode_produk: '2016125503'
                    }
                  ],
                  diskon:
                  [
                    {
                      id_diskon: 0,
                      waktu_diskon: '2017-01-12T00:00:00Z',
                      besar_diskon: 10,
                      kode_produk: '2016125503'
                    }
                  ],
                  stok: 11,
                  gambar: '../app/assets/img/produk/oppo/f1.jpg'
                }
              }
            ]
          }
        ];
        
        backend.connections.subscribe((connection: MockConnection) => {
            setTimeout(() => {

                //get produk berdasarkan kategori
                if (connection.request.url.match(/\/api\/produk\/kategori\/\d+$/) && connection.request.method === RequestMethod.Get) {
                    let urlParts = connection.request.url.split('/');
                    let kodeKategori = urlParts[urlParts.length - 1];
                    let matchedKategori = produkByKategori.filter(produk => { return produk.kode_kategori === kodeKategori; });
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: matchedKategori })));
                }
            }, 500);
        });
        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions]
};
