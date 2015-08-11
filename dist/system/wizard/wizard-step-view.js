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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcC12aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQ0FLYSxjQUFjLEVBeUJ2QixvQkFBb0I7Ozs7OztzQ0E5QmhCLFVBQVU7O3VCQUNWLE1BQU07O2tDQUNOLE1BQU07OztBQUdELG9CQUFjO0FBQWQsc0JBQWMsQ0FDbEIsTUFBTSxHQUFBLGtCQUFHO0FBQUMsaUJBQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUE7U0FBQzs7QUFDbEMsaUJBRkEsY0FBYyxDQUViLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFOzs7ZUFJekMsY0FBYyxHQUFHLEVBQUU7O0FBSGpCLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNyQyxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtTQUNyQjs7QUFMVSxzQkFBYyxXQU96QixRQUFRLEdBQUEsa0JBQUMsSUFBSSxFQUFFO0FBQ2IsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7QUFDaEIsY0FBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDM0MsY0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0FBQzVDLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7U0FDekM7O0FBWlUsc0JBQWMsV0FhekIsTUFBTSxHQUFBLGtCQUFHOzs7QUFDUCxjQUFJLElBQUksR0FBRyxJQUFJLENBQUE7QUFDZixpQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQzNDLGdDQUFvQixDQUFDLElBQUksT0FBTSxDQUFBO0FBQy9CLGtCQUFLLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFLLGNBQWMsQ0FBQyxDQUFBO0FBQy9DLGtCQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsMkJBQTJCLEVBQUUsTUFBSyxJQUFJLENBQUMsQ0FBQTtXQUM1RCxDQUFDLFNBQU0sQ0FBQyxVQUFTLEtBQUssRUFBRztBQUN4QixtQkFBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7V0FDckQsQ0FBQyxDQUFBO1NBQ0g7OzhCQXRCVSxjQUFjO0FBQWQsc0JBQWMsR0FEMUIsTUFBTSxFQUFFLENBQ0ksY0FBYyxLQUFkLGNBQWM7ZUFBZCxjQUFjOzs7OztBQXlCdkIsMEJBQW9CLEdBQUcsU0FBdkIsb0JBQW9CLEdBQWM7OztBQUNwQyxjQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRLEVBQUs7QUFDckQsaUJBQUssY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQUssUUFBUSxDQUFDLENBQUE7U0FDL0MsQ0FBQyxDQUFBO09BQ0giLCJmaWxlIjoid2l6YXJkL3dpemFyZC1zdGVwLXZpZXcuanMiLCJzb3VyY2VSb290IjoiLi4vbGliLyJ9