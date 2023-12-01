import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Persona } from '../models/proyeccion';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url:string = 'http://localhost:9090/api/persona'

  constructor(private http:HttpClient) {
  }

  public getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener los Personas:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.url}/get/${id}`);
  }

  agregarPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.url}/save`, persona);
  }

  actualizarPersona(id: number, Persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.url}/put/${id}`, Persona);
  }

  eliminarPersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('Persona eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar el Persona:', error);
        throw error;
      })
    );
  }
}
