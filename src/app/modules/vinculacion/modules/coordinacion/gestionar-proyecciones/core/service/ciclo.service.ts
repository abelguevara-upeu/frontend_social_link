import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Ciclo } from '../models/proyeccion';


@Injectable({
  providedIn: 'root'
})
export class CicloService {
  private url:string = 'http://localhost:9090/api/ciclo'

  constructor(private http:HttpClient) {
  }

  public getCiclos(): Observable<Ciclo[]> {
    return this.http.get<Ciclo[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener los ciclos:', error);
        throw error;
      })
    );
  }

  getCiclo(id: number): Observable<Ciclo> {
    return this.http.get<Ciclo>(`${this.url}/get/${id}`);
  }

  agregarCiclo(Ciclo: Ciclo): Observable<Ciclo> {
    return this.http.post<Ciclo>(`${this.url}/save`, Ciclo);
  }

  actualizarCiclo(id: number, ciclo: Ciclo): Observable<Ciclo> {
    return this.http.put<Ciclo>(`${this.url}/put/${id}`, ciclo);
  }

  eliminarCiclo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('Ciclo eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar la ciclo:', error);
        throw error;
      })
    );
  }
}
