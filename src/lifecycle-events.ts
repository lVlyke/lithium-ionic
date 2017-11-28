import { EventSource } from "angular-rxjs-extensions";

export type IonicLifecycleType = keyof {
    ionViewDidLoad,
    ionViewWillEnter,
    ionViewDidEnter,
    ionViewWillLeave,
    ionViewDidLeave,
    ionViewWillUnload
};

export namespace IonicLifecycleType {

    export type DecoratorFactory = () => PropertyDecorator;

    export const ViewDidLoad: IonicLifecycleType = "ionViewDidLoad";
    export const ViewWillEnter: IonicLifecycleType = "ionViewWillEnter";
    export const ViewDidEnter: IonicLifecycleType = "ionViewDidEnter";
    export const ViewWillLeave: IonicLifecycleType = "ionViewWillLeave";
    export const ViewDidLeave: IonicLifecycleType = "ionViewDidLeave";
    export const ViewWillUnload: IonicLifecycleType = "ionViewWillUnload";

    export const values: IonicLifecycleType[] = [
        ViewDidLoad,
        ViewWillEnter,
        ViewDidEnter,
        ViewWillLeave,
        ViewDidLeave,
        ViewWillUnload
    ];

    /** @PropertyDecoratorMetaFactory */
    export function DecoratorFactory(type: IonicLifecycleType): DecoratorFactory {
        return function (): PropertyDecorator {
            return EventSource(type);
        };
    }
}

/** @PropertyDecorator */
export const ViewDidLoad = IonicLifecycleType.DecoratorFactory(IonicLifecycleType.ViewDidLoad);
/** @PropertyDecorator */
export const ViewWillEnter = IonicLifecycleType.DecoratorFactory(IonicLifecycleType.ViewWillEnter);
/** @PropertyDecorator */
export const ViewDidEnter = IonicLifecycleType.DecoratorFactory(IonicLifecycleType.ViewDidEnter);
/** @PropertyDecorator */
export const ViewWillLeave = IonicLifecycleType.DecoratorFactory(IonicLifecycleType.ViewWillLeave);
/** @PropertyDecorator */
export const ViewDidLeave = IonicLifecycleType.DecoratorFactory(IonicLifecycleType.ViewDidLeave);
/** @PropertyDecorator */
export const ViewWillUnload = IonicLifecycleType.DecoratorFactory(IonicLifecycleType.ViewWillUnload);