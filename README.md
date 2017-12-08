# Lithium for Ionic

Reactive Ionic navigation lifecycle decorators for [@lithiumjs/angular](https://github.com/lVlyke/lithium-angular).

## Installation

Lithium for Ionic depends on [Lithium for Angular](https://github.com/lVlyke/lithium-angular). Both can be installed via **npm** using the following command:

```bash
npm install @lithiumjs/angular @lithiumjs/ionic
```

## Example

```ts
@Component({...})
@Reactive()
class IonicPage {

    @ViewDidEnter() private viewDidEnter$: Observable<void>;

    constructor () {
        this.viewDidEnter$.subscribe(() => console.log("View was entered."));
    }
}
```

## API

### Ionic NavController Lifecycle ```EventSource``` decorators

These decorators create observables for all Ionic navigation lifecycle events:

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