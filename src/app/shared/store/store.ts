import { BehaviorSubject, Observable } from "rxjs";

export class Store<T> {

  readonly state$: Observable<T>;
  protected readonly _state$: BehaviorSubject<T>;

  protected constructor(
    initialState: T
  ) {
    this._state$ = new BehaviorSubject<T>(initialState);
    this.state$ = this._state$.asObservable();
  }

  protected get state(): T {
    return this._state$.getValue();
  }

  protected set state(nextState: T) {
    this._state$.next(nextState);
  }
}