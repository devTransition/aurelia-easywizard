System.register(['aurelia-validation', '../events', 'aurelia-templating'], function (_export) {
  'use strict';

  var Validation, Events, noView, WizardStepView, updateStepProperties;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
    }, function (_events) {
      Events = _events.Events;
    }, function (_aureliaTemplating) {
      noView = _aureliaTemplating.noView;
    }],
    execute: function () {
      WizardStepView = (function () {
        WizardStepView.inject = function inject() {
          return [Validation, Events, Element];
        };

        function WizardStepView(validation, events, element) {
          _classCallCheck(this, _WizardStepView);

          this.stepProperties = {};

          this.validation = validation.on(this);
          this.events = events;
          this.element = element;
        }

        WizardStepView.prototype.activate = function activate(step) {
          this.step = step;
          this.step.ensureValidation(this.validation);
          this.stepProperties = this.step.properties();
          Object.assign(this, this.stepProperties);
        };

        WizardStepView.prototype.submit = function submit() {
          var _this = this;

          var self = this;
          return this.validation.validate().then(function () {
            updateStepProperties.call(_this);
            _this.step.updateProperties(_this.stepProperties);
            _this.events.publish("wizard:current:step:valid", _this.step);
          })['catch'](function (error) {
            console.log("wizard validation failed", self, error);
          });
        };

        var _WizardStepView = WizardStepView;
        WizardStepView = noView()(WizardStepView) || WizardStepView;
        return WizardStepView;
      })();

      _export('WizardStepView', WizardStepView);

      updateStepProperties = function updateStepProperties() {
        var _this2 = this;

        Object.keys(this.stepProperties).forEach(function (property) {
          _this2.stepProperties[property] = _this2[property];
        });
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcC12aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQ0FLYSxjQUFjLEVBMkJ2QixvQkFBb0I7Ozs7OztzQ0FoQ2hCLFVBQVU7O3VCQUNWLE1BQU07O2tDQUNOLE1BQU07OztBQUdELG9CQUFjO0FBQWQsc0JBQWMsQ0FDbEIsTUFBTSxHQUFBLGtCQUFHO0FBQUMsaUJBQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1NBQUM7O0FBRTNDLGlCQUhBLGNBQWMsQ0FHYixVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRTs7O2VBS3pDLGNBQWMsR0FBRyxFQUFFOztBQUpqQixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDckMsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7QUFDcEIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7U0FDdkI7O0FBUFUsc0JBQWMsV0FTekIsUUFBUSxHQUFBLGtCQUFDLElBQUksRUFBRTtBQUNiLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0FBQ2hCLGNBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQzNDLGNBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtBQUM1QyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1NBQ3pDOztBQWRVLHNCQUFjLFdBZXpCLE1BQU0sR0FBQSxrQkFBRzs7O0FBQ1AsY0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO0FBQ2YsaUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBTTtBQUMzQyxnQ0FBb0IsQ0FBQyxJQUFJLE9BQU0sQ0FBQTtBQUMvQixrQkFBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBSyxjQUFjLENBQUMsQ0FBQTtBQUMvQyxrQkFBSyxNQUFNLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFFLE1BQUssSUFBSSxDQUFDLENBQUE7V0FDNUQsQ0FBQyxTQUFNLENBQUMsVUFBUyxLQUFLLEVBQUc7QUFDeEIsbUJBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO1dBQ3JELENBQUMsQ0FBQTtTQUNIOzs4QkF4QlUsY0FBYztBQUFkLHNCQUFjLEdBRDFCLE1BQU0sRUFBRSxDQUNJLGNBQWMsS0FBZCxjQUFjO2VBQWQsY0FBYzs7Ozs7QUEyQnZCLDBCQUFvQixHQUFHLFNBQXZCLG9CQUFvQixHQUFjOzs7QUFDcEMsY0FBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUSxFQUFLO0FBQ3JELGlCQUFLLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFLLFFBQVEsQ0FBQyxDQUFBO1NBQy9DLENBQUMsQ0FBQTtPQUNIIiwiZmlsZSI6IndpemFyZC93aXphcmQtc3RlcC12aWV3LmpzIiwic291cmNlUm9vdCI6Ii4uL2xpYi8ifQ==