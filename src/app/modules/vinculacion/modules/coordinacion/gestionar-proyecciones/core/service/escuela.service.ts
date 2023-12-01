import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Escuela } from '../models/proyeccion';


@Injectable({
  providedIn: 'root'
})
export class EscuelaService {
  private url:string = 'http://localhost:9090/api/escuela'

  constructor(private http:HttpClient) {
  }

  public getEscuelas(): Observable<Escuela[]> {
    return this.http.get<Escuela[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener las Escuelaes:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getEscuela(id: number): Observable<Escuela> {
    return this.http.get<Escuela>(`${this.url}/get/${id}`);
  }

  agregarEscuela(escuela: Escuela): Observable<Escuela> {
    return this.http.post<Escuela>(`${this.url}/save`, escuela);
  }

  actualizarEscuela(id: number, escuela: Escuela): Observable<Escuela> {
    return this.http.put<Escuela>(`${this.url}/put/${id}`, escuela);
  }

  eliminarEscuela(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('Escuela eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar la Escuela:', error);
        throw error;
      })
    );
  }
}
