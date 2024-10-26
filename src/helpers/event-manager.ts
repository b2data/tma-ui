export type EventListener = (...args: any[]) => void;

// Used https://gist.github.com/mudge/5830382 as a starting point.
// See https://github.com/browserify/events/blob/master/events.js for
// the Node.js (https://nodejs.org/api/events.html) polyfill used by webpack.
export class EventManager {
  maxListeners = 20;

  warnOnce = false;

  events: { [eventName: string]: Map<EventListener, true> } = {};

  on(eventName: string, listener: EventListener): void {
    let collection = this.events[eventName];

    if (!collection) {
      collection = new Map();
      this.events[eventName] = collection;
    }

    collection.set(listener, true);

    if (process.env.NODE_ENV !== "production") {
      if (collection.size > this.maxListeners && !this.warnOnce) {
        this.warnOnce = true;
        console.warn(
          [
            `Possible EventEmitter memory leak detected. ${collection.size} ${eventName} listeners added.`,
          ].join("\n"),
        );
      }
    }
  }

  removeListener(eventName: string, listener: EventListener): void {
    if (this.events[eventName]) {
      this.events[eventName].delete(listener);
    }
  }

  removeAllListeners(): void {
    this.events = {};
  }

  emit(eventName: string, ...args: any[]): void {
    const collection = this.events[eventName];

    if (!collection) {
      return;
    }

    const listeners = Array.from(collection.keys());

    for (let i = 0; i < listeners.length; i += 1) {
      const listener = listeners[i];
      if (collection.has(listener)) {
        listener.apply(this, args);
      }
    }
  }

  once(eventName: string, listener: EventListener): void {
    // eslint-disable-next-line
    const that = this;
    this.on(eventName, function oneTimeListener(...args) {
      that.removeListener(eventName, oneTimeListener);
      listener.apply(that, args);
    });
  }
}
