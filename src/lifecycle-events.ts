import { EventSource, EventMetadata } from "@lithiumjs/angular";

export type IonicLifecycleType = keyof {
    ionViewDidLoad,
    ionViewWillEnter,
    ionViewDidEnter,
    ionViewWillLeave,
    ionViewDidLeave,
    ionViewWillUnload
};

export namespace IonicLifecycleType {

    export type DecoratorFactory = (options?: EventMetadata.ConfigOptions, ...methodDecorators: MethodDecorator[]) => PropertyDecorator;

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
    export function DecoratorFactory(eventType: IonicLifecycleType): DecoratorFactory {
        return function (options?: EventMetadata.ConfigOptions, ...methodDecorators: MethodDecorator[]): PropertyDecorator {
            return EventSource(Object.assign({ eventType }, options), ...methodDecorators);
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