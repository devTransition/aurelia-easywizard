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
          this.aggregator.publish(event, payload);
        };

        Events.prototype.subscribe = function subscribe(event, callback) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0JBSWEsTUFBTTs7Ozs7O2dEQUpYLGVBQWU7O2tDQUNmLE1BQU07OztBQUdELFlBQU07QUFBTixjQUFNLENBQ1IsTUFBTSxHQUFBLGtCQUFHO0FBQUMsaUJBQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtTQUFDOztBQUUvQixpQkFIRixNQUFNLENBR0gsVUFBVSxFQUFFOzs7QUFDdEIsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDOUI7O0FBTFEsY0FBTSxXQU1mLE9BQU8sR0FBQSxpQkFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFO0FBQ3RCLGNBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN6Qzs7QUFSUSxjQUFNLFdBU2YsU0FBUyxHQUFBLG1CQUFDLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDekIsY0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzVDOztzQkFYUSxNQUFNO0FBQU4sY0FBTSxHQURsQixNQUFNLEVBQUUsQ0FDSSxNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU0iLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6Ii4uL2xpYi8ifQ==