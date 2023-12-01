import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { TipoProyeccion } from '../models/proyeccion';


@Injectable({
  providedIn: 'root'
})
export class TipoProyeccionService {
  private url:string = 'http://localhost:9090/api/tipoProyeccion'

  constructor(private http:HttpClient) {
  }

  public getTipoProyecciones(): Observable<TipoProyeccion[]> {
    return this.http.get<TipoProyeccion[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener las TipoProyecciones:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getTipoProyeccion(id: number): Observable<TipoProyeccion> {
    return this.http.get<TipoProyeccion>(`${this.url}/get/${id}`);
  }

  agregarTipoProyeccion(tipo: TipoProyeccion): Observable<TipoProyeccion> {
    return this.http.post<TipoProyeccion>(`${this.url}/save`, tipo);
  }

  actualizarTipoProyeccion(id: number, tipo: TipoProyeccion): Observable<TipoProyeccion> {
    return this.http.put<TipoProyeccion>(`${this.url}/put/${id}`, tipo);
  }

  eliminarTipoProyeccion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('TipoProyeccion eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar la TipoProyeccion:', error);
        throw error;
      })
    );
  }
}
