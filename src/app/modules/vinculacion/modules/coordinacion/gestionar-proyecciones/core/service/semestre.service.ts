import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Semestre } from '../models/proyeccion';


@Injectable({
  providedIn: 'root'
})
export class SemestreService {
  private url:string = 'http://localhost:9090/api/semestre'

  constructor(private http:HttpClient) {
  }

  public getSemestres(): Observable<Semestre[]> {
    return this.http.get<Semestre[]>(`${this.url}/readAll`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener las Semestrees:', error);
        throw error; // Puedes lanzar el error nuevamente o manejarlo según tus necesidades.
      })
    );
  }

  getSemestre(id: number): Observable<Semestre> {
    return this.http.get<Semestre>(`${this.url}/get/${id}`);
  }

  agregarSemestre(semestre: Semestre): Observable<Semestre> {
    return this.http.post<Semestre>(`${this.url}/save`, semestre);
  }

  actualizarSemestre(id: number, semestre: Semestre): Observable<Semestre> {
    return this.http.put<Semestre>(`${this.url}/put/${id}`, semestre);
  }

  eliminarSemestre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`).pipe(
      tap(() => {
        // Realizar otras acciones después de una eliminación exitosa
        console.log('Semestre eliminado con éxito.');
        // Recargar la página
      }),catchError((error: any) => {
        console.error('Error al eliminar la Semestre:', error);
        throw error;
      })
    );
  }
}
