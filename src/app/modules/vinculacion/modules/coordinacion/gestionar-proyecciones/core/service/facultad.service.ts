import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Facultad } from '../models/proyeccion';


@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  private url:string = 'http://localhost:9090/api/facultad'

  constructor(private http:HttpClient) {
  }

  public getFacultades(): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener las Facultades:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getFacultad(id: number): Observable<Facultad> {
    return this.http.get<Facultad>(`${this.url}/get/${id}`);
  }

  agregarFacultad(facultad: Facultad): Observable<Facultad> {
    return this.http.post<Facultad>(`${this.url}/save`, facultad);
  }

  actualizarFacultad(id: number, facultad: Facultad): Observable<Facultad> {
    return this.http.put<Facultad>(`${this.url}/put/${id}`, facultad);
  }

  eliminarFacultad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('Facultad eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar la Facultad:', error);
        throw error;
      })
    );
  }
}
