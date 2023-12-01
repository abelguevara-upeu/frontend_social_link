import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Cargo } from '../models/proyeccion';


@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private url:string = 'http://localhost:9090/api/cargo'

  constructor(private http:HttpClient) {
  }

  public getCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener los cargos:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getCargo(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(`${this.url}/get/${id}`);
  }

  agregarCargo(cargo: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(`${this.url}/save`, cargo);
  }

  actualizarCargo(id: number, cargo: Cargo): Observable<Cargo> {
    return this.http.put<Cargo>(`${this.url}/put/${id}`, cargo);
  }

  eliminarCargo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('Cargo eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar el cargo:', error);
        throw error;
      })
    );
  }
}
