import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { EstadoProyeccion } from '../models/proyeccion';


@Injectable({
  providedIn: 'root'
})
export class EstadoProyeccionService {
  private url:string = 'http://localhost:9090/api/estadoProyeccion'

  constructor(private http:HttpClient) {
  }

  public getEstadoProyecciones(): Observable<EstadoProyeccion[]> {
    return this.http.get<EstadoProyeccion[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener las EstadoProyecciones:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getEstadoProyeccion(id: number): Observable<EstadoProyeccion> {
    return this.http.get<EstadoProyeccion>(`${this.url}/get/${id}`);
  }

  agregarEstadoProyeccion(estado: EstadoProyeccion): Observable<EstadoProyeccion> {
    return this.http.post<EstadoProyeccion>(`${this.url}/save`, estado);
  }

  actualizarEstadoProyeccion(id: number, estado: EstadoProyeccion): Observable<EstadoProyeccion> {
    return this.http.put<EstadoProyeccion>(`${this.url}/put/${id}`, estado);
  }

  eliminarEstadoProyeccion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('Estado de la proyeccion eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar el estado de la proyeccion:', error);
        throw error;
      })
    );
  }
}
