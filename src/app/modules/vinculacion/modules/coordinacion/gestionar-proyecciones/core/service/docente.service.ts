import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Docente } from '../models/proyeccion';


@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private url:string = 'http://localhost:9090/api/docente'

  constructor(private http:HttpClient) {
  }

  public getDocentes(): Observable<Docente[]> {
    return this.http.get<Docente[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener las Cursoes:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getCurso(id: number): Observable<Docente> {
    return this.http.get<Docente>(`${this.url}/get/${id}`);
  }

  agregarCurso(curso: Docente): Observable<Docente> {
    return this.http.post<Docente>(`${this.url}/save`, curso);
  }

  actualizarCurso(id: number, curso: Docente): Observable<Docente> {
    return this.http.put<Docente>(`${this.url}/put/${id}`, curso);
  }

  eliminarCurso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('Curso eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar la Curso:', error);
        throw error;
      })
    );
  }
}
