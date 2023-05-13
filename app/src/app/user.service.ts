import { Injectable,OnInit } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { catchError,map,tap } from "rxjs/operators";
import { MessageService } from "./message.service";
import { Observable, of, pipe } from "rxjs";
import { User } from "./User";
import { USER } from "./user-list";

@Injectable({
    providedIn: 'root'
  })
export class UserService implements OnInit{
    private usersURL = 'api/users'; //url to web api

    httpOptions = {
        headers: new HttpHeaders({'Content-Type':  'application/json'})
      };

//get users from server
    getUsers(): Observable<User[]> { 
        const users = of(USER)
        return this.http.get<User[]>(this.usersURL)
        .pipe(
            tap(_ => this.log('Retrieved Users')),
            catchError(this.handleError<User[]>('getUsers', []))
        );
    }
// get user id 
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
// handeles error
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
// message log
    private log(message: string){
        this.messageService.add(`User Service: ${message}`)
    }
    
    /** POST: add new user to the server */
    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.usersURL, user, this.httpOptions)
        .pipe(
            tap((newUser: User) => this.log(`Added new user with id = ${newUser.id}`)),
        catchError(this.handleError<User>(`addUser`))
        )
    }
    // update user function
    updateUser (user: User): Observable<any> {
        return this.http.put(this.usersURL, user, this.httpOptions)
        .pipe(
            tap(_ => this.log(`Updated a user detail with id = $(user.id)`)),
        catchError(this.handleError<any>('updateUser'))
        );
      }
    // delete user funtion
    deleteUser(user: User | number){
        const id = typeof user === 'number' ? user : user.id;
        const url = `${this.usersURL}/${id}`;

        return this.http.delete<User>(url, this.httpOptions)
        .pipe(
            tap(_ => this.log('user deleted with id = ${id}')),
            catchError(this.handleError<User>('deleteUser'))
        );
    }
    ngOnInit() {
        this.getUsers();
    }
    constructor(
        private http: HttpClient,
        private messageService: MessageService,
    ) {}    
}