import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Curso } from '../models/proyeccion';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private url:string = 'http://localhost:9090/api/curso'

  constructor(private http:HttpClient) {
  }

  public getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener las Cursoes:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getCurso(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.url}/get/${id}`);
  }

  agregarCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.url}/save`, curso);
  }

  actualizarCurso(id: number, curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.url}/put/${id}`, curso);
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
