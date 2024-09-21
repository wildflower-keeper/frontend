export interface Interceptor<V> {
    onFulfilled?: ((value: V) => V | Promise<V>) | null;
    onRejected?: ((error: any) => any) | null;
}