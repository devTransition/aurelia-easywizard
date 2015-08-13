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
          return [Validation, Events];
        };

        function WizardStepView(validation, events, element) {
          _classCallCheck(this, _WizardStepView);

          this.stepProperties = {};

          this.validation = validation.on(this);
          this.events = events;
        }

        WizardStepView.prototype.activate = function activate(step) {
          this.step = step;
          this.step.ensureValidation(this.validation);
          this.stepProperties = this.step.getModel();
          Object.assign(this, this.stepProperties);
        };

        WizardStepView.prototype.submit = function submit() {
          var _this = this;

          var self = this;
          return this.validation.validate().then(function () {
            updateStepProperties.call(_this);
            _this.step.updateModel(_this.stepProperties);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcC12aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQ0FLYSxjQUFjLEVBeUJ2QixvQkFBb0I7Ozs7OztzQ0E5QmhCLFVBQVU7O3VCQUNWLE1BQU07O2tDQUNOLE1BQU07OztBQUdELG9CQUFjO0FBQWQsc0JBQWMsQ0FDbEIsTUFBTSxHQUFBLGtCQUFHO0FBQUMsaUJBQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUE7U0FBQzs7QUFDbEMsaUJBRkEsY0FBYyxDQUViLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFOzs7ZUFJekMsY0FBYyxHQUFHLEVBQUU7O0FBSGpCLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNyQyxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtTQUNyQjs7QUFMVSxzQkFBYyxXQU96QixRQUFRLEdBQUEsa0JBQUMsSUFBSSxFQUFFO0FBQ2IsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7QUFDaEIsY0FBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDM0MsY0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0FBQzFDLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7U0FDekM7O0FBWlUsc0JBQWMsV0FhekIsTUFBTSxHQUFBLGtCQUFHOzs7QUFDUCxjQUFJLElBQUksR0FBRyxJQUFJLENBQUE7QUFDZixpQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQzNDLGdDQUFvQixDQUFDLElBQUksT0FBTSxDQUFBO0FBQy9CLGtCQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBSyxjQUFjLENBQUMsQ0FBQTtBQUMxQyxrQkFBSyxNQUFNLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFFLE1BQUssSUFBSSxDQUFDLENBQUE7V0FDNUQsQ0FBQyxTQUFNLENBQUMsVUFBUyxLQUFLLEVBQUc7QUFDeEIsbUJBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO1dBQ3JELENBQUMsQ0FBQTtTQUNIOzs4QkF0QlUsY0FBYztBQUFkLHNCQUFjLEdBRDFCLE1BQU0sRUFBRSxDQUNJLGNBQWMsS0FBZCxjQUFjO2VBQWQsY0FBYzs7Ozs7QUF5QnZCLDBCQUFvQixHQUFHLFNBQXZCLG9CQUFvQixHQUFjOzs7QUFDcEMsY0FBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUSxFQUFLO0FBQ3JELGlCQUFLLGNBQWMsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFLLFFBQVEsQ0FBQyxDQUFBO1NBQy9DLENBQUMsQ0FBQTtPQUNIIiwiZmlsZSI6IndpemFyZC93aXphcmQtc3RlcC12aWV3LmpzIiwic291cmNlUm9vdCI6Ii4uL2xpYi8ifQ==