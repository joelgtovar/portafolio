import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interfce';
 
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
    cargando = true;
    productos : Producto[] = [];

    constructor( private http: HttpClient) {
        this.cargarProductos();
    }

    private cargarProductos() {
        this.http.get('https://angular-html-3e91d.firebaseio.com/productos_idx.json')
        .subscribe((resp : Producto[]) => {
            //console.log(resp);
            this.productos = resp;
            //setTimeout(() => {
                this.cargando = false;
            //}, 2000);
        });
    }

    getProducto(id: string){
        return this.http.get(`https://angular-html-3e91d.firebaseio.com/productos/${ id }.json`);
    }
}
