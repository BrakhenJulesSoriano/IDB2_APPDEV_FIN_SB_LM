import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { catchError,map,tap } from "rxjs/operators";
import { MessageService } from "./messaging.service";
import { Observable, of, pipe } from "rxjs";
import { User } from "./User";
import { USER } from "./user-list";

@Injectable({
    providedIn: 'root'
  })
export class UserService{
    private usersURL = 'api/users'; //url to web api

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'my-auth-token'
        })
      };

    getUsers(): Observable<User[]> { //get users from server
        return this.http.get<User[]>(this.usersURL)
        .pipe(
            tap(_ => this.log('Retrieved Users')),
            catchError(this.handleError<User[]>('getUsers', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return(error: any): Observable<T> => {
            //TODO: send the error to remote logging infra
            console.error(error); //log to console instead
            //TODO: for better user consumption UI usability
            this.log(`${operation} failed or error: ${error.message}`);
            //let the app remain running by returning an empty result
            return of(result as T);
        }
    }

    private log(message: string){
        this.messagingService.add(`User Service: ${message}`)
    }
    
    constructor(
        private http: HttpClient,
        private messagingService: MessageService,
    ) {}

    getUser(id: number ): Observable<User> {
      /** TODO: send the message _after_ fetching the user
      this.messagingService.add(`User Service: retrieved user id=${id})`);
      return of(USER.find(user => user.id === id)); */
      const url = `${this.usersURL}/${id}`;
      return this.http.get<User>(url)
        .pipe(
            tap(_ => this.log(`Retrived user id = ${id}`)),
            catchError(this.handleError<User>(`getUser id = ${id}`))
        );
    }
    /** POST: add new user to the server */
    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.usersURL, user, this.httpOptions)
        .pipe(
            tap((newUser: User) => this.log(`Added new user with id = ${newUser.id}`)),
        catchError(this.handleError<User>(`addUser`))
        )
    }
}