import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { CursoDocente } from '../models/proyeccion';


@Injectable({
  providedIn: 'root'
})
export class CursoDocenteService {
  private url:string = 'http://localhost:9090/api/cursoDocente'

  constructor(private http:HttpClient) {
  }

  public getCursosDocente(): Observable<CursoDocente[]> {
    return this.http.get<CursoDocente[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener las Cursoes:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getCursoDocente(id: number): Observable<CursoDocente> {
    return this.http.get<CursoDocente>(`${this.url}/get/${id}`);
  }

  agregarCursoDocente(cursoDoc: CursoDocente): Observable<CursoDocente> {
    return this.http.post<CursoDocente>(`${this.url}/save`, cursoDoc);
  }

  actualizarCursoDocente(id: number, cursoDoc: CursoDocente): Observable<CursoDocente> {
    return this.http.put<CursoDocente>(`${this.url}/put/${id}`, cursoDoc);
  }

  eliminarCursoDocente(id: number): Observable<void> {
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
