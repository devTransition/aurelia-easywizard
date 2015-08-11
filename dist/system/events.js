System.register(['aurelia-event-aggregator', 'aurelia-templating'], function (_export) {
  'use strict';

  var EventAggregator, noView, Events;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_aureliaTemplating) {
      noView = _aureliaTemplating.noView;
    }],
    execute: function () {
      Events = (function () {
        Events.inject = function inject() {
          return [EventAggregator];
        };

        function Events(aggregator) {
          _classCallCheck(this, _Events);

          this.aggregator = aggregator;
        }

        Events.prototype.publish = function publish(event, payload) {
          console.log("publish:" + event, payload);
          this.aggregator.publish(event, payload);
        };

        Events.prototype.subscribe = function subscribe(event, callback) {
          console.log("subscribe:" + event, callback);
          this.aggregator.subscribe(event, callback);
        };

        var _Events = Events;
        Events = noView()(Events) || Events;
        return Events;
      })();

      _export('Events', Events);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0JBSWEsTUFBTTs7Ozs7O2dEQUpYLGVBQWU7O2tDQUNmLE1BQU07OztBQUdELFlBQU07QUFBTixjQUFNLENBQ1IsTUFBTSxHQUFBLGtCQUFHO0FBQUMsaUJBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtTQUFDOztBQUUvQixpQkFIRixNQUFNLENBR0gsVUFBVSxFQUFFOzs7QUFDdEIsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDOUI7O0FBTFEsY0FBTSxXQU1mLE9BQU8sR0FBQSxpQkFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFO0FBQ3RCLGlCQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDeEMsY0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3pDOztBQVRRLGNBQU0sV0FVZixTQUFTLEdBQUEsbUJBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUN6QixpQkFBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQzNDLGNBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM1Qzs7c0JBYlEsTUFBTTtBQUFOLGNBQU0sR0FEbEIsTUFBTSxFQUFFLENBQ0ksTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNIiwiZmlsZSI6ImV2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIuLi9saWIvIn0=