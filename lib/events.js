import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework'

@inject(EventAggregator)
export class Events {
    constructor(aggregator) {
      this.aggregator = aggregator;
    }
    publish(event, ...payload) {
      console.log("publish:" + event, payload)
      this.aggregator.publish(event, payload); 
    }
    subscribe(event, callback) {
      console.log("subscribe:" + event, callback)
      this.aggregator.subscribe(event, callback);
    }
}