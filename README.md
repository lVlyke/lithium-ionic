# Ionic RxJS Extensions

Ionic extensions for [angular-rxjs-extensions](https://github.com/lVlyke/angular-rxjs-extensions).

## Example

```ts
@Component({...})
@Reactive()
class IonicPage {

    @ViewDidEnter() private viewDidEnter$: Observable<void>;

    constructor () {
        this.viewDidEnter$.subscribe(() => "View was entered.");
    }
}
```

## API

### Ionic NavController Lifecycle ```EventSource``` decorators

#### ```ViewDidLoad```

```ts
function ViewDidLoad(): EventSourceDecorator
```

#### ```ViewWillEnter```

```ts
function ViewWillEnter(): EventSourceDecorator
```

#### ```ViewDidEnter```

```ts
function ViewDidEnter(): EventSourceDecorator
```

#### ```ViewWillLeave```

```ts
function ViewWillLeave(): EventSourceDecorator
```

#### ```ViewDidLeave```

```ts
function ViewDidLeave(): EventSourceDecorator
```

#### ```ViewWillUnload```

```ts
function ViewWillUnload(): EventSourceDecorator
```