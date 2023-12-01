import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Proyeccion } from '../models/proyeccion';


@Injectable({
  providedIn: 'root'
})
export class ProyeccionService {
  private url:string = 'http://localhost:9090/api/proyeccion'

  constructor(private http:HttpClient) {
  }

  public getProyecciones(): Observable<Proyeccion[]> {
    return this.http.get<Proyeccion[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener las proyecciones:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }
  getProyeccion(id: number): Observable<Proyeccion> {
    return this.http.get<Proyeccion>(`${this.url}/get/${id}`);
  }

  agregarProyeccion(proyeccion: Proyeccion): Observable<Proyeccion> {
    return this.http.post<Proyeccion>(`${this.url}/save`, proyeccion)
      .pipe(
        catchError((error: any) => {
          console.error('Error al agregar la proyección:', error);
          throw error;
        })
      );
  }


  actualizarProyeccion(id: number, proyeccion: Proyeccion): Observable<Proyeccion> {
    return this.http.put<Proyeccion>(`${this.url}/put/${id}`, proyeccion);
  }

  eliminarProyeccion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('Proyeccion eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar la proyeccion:', error);
        throw error;
      })
    );
  }
}
