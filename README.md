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
function ViewDidLoad(options?: EventSource.DecoratorOptions, ...methodDecorators: MethodDecorator[]): PropertyDecorator
```

See [**```EventSource```**](https://github.com/lVlyke/lithium-angular#eventsource-1).

#### ```ViewWillEnter```

```ts
function ViewWillEnter(options?: EventSource.DecoratorOptions, ...methodDecorators: MethodDecorator[]): PropertyDecorator
```

See [**```EventSource```**](https://github.com/lVlyke/lithium-angular#eventsource-1).

#### ```ViewDidEnter```

```ts
function ViewDidEnter(options?: EventSource.DecoratorOptions, ...methodDecorators: MethodDecorator[]): PropertyDecorator
```

See [**```EventSource```**](https://github.com/lVlyke/lithium-angular#eventsource-1).

#### ```ViewWillLeave```

```ts
function ViewWillLeave(options?: EventSource.DecoratorOptions, ...methodDecorators: MethodDecorator[]): PropertyDecorator
```

See [**```EventSource```**](https://github.com/lVlyke/lithium-angular#eventsource-1).

#### ```ViewDidLeave```

```ts
function ViewDidLeave(options?: EventSource.DecoratorOptions, ...methodDecorators: MethodDecorator[]): PropertyDecorator
```

See [**```EventSource```**](https://github.com/lVlyke/lithium-angular#eventsource-1).

#### ```ViewWillUnload```

```ts
function ViewWillUnload(options?: EventSource.DecoratorOptions, ...methodDecorators: MethodDecorator[]): PropertyDecorator
```

See [**```EventSource```**](https://github.com/lVlyke/lithium-angular#eventsource-1).