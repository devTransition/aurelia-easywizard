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

        Events.prototype.publish = function publish(event) {
          for (var _len = arguments.length, payload = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            payload[_key - 1] = arguments[_key];
          }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0JBSWEsTUFBTTs7Ozs7O2dEQUpYLGVBQWU7O2tDQUNmLE1BQU07OztBQUdELFlBQU07QUFBTixjQUFNLENBQ1IsTUFBTSxHQUFBLGtCQUFHO0FBQUMsaUJBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtTQUFDOztBQUUvQixpQkFIRixNQUFNLENBR0gsVUFBVSxFQUFFOzs7QUFDdEIsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDOUI7O0FBTFEsY0FBTSxXQU1mLE9BQU8sR0FBQSxpQkFBQyxLQUFLLEVBQWM7NENBQVQsT0FBTztBQUFQLG1CQUFPOzs7QUFDdkIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtBQUN4QyxjQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDekM7O0FBVFEsY0FBTSxXQVVmLFNBQVMsR0FBQSxtQkFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ3pCLGlCQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUE7QUFDM0MsY0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzVDOztzQkFiUSxNQUFNO0FBQU4sY0FBTSxHQURsQixNQUFNLEVBQUUsQ0FDSSxNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU0iLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6Ii4uL2xpYi8ifQ==