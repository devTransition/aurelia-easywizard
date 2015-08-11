System.register(['aurelia-validation', '../events'], function (_export) {
  'use strict';

  var Validation, Events, WizardStepView, updateStepProperties;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
    }, function (_events) {
      Events = _events.Events;
    }],
    execute: function () {
      WizardStepView = (function () {
        WizardStepView.inject = function inject() {
          return [Validation, Events, Element];
        };

        function WizardStepView(validation, events, element) {
          _classCallCheck(this, WizardStepView);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcC12aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFHYSxjQUFjLEVBMEJ2QixvQkFBb0I7Ozs7OztzQ0E3QmhCLFVBQVU7O3VCQUNWLE1BQU07OztBQUVELG9CQUFjO0FBQWQsc0JBQWMsQ0FDbEIsTUFBTSxHQUFBLGtCQUFHO0FBQUMsaUJBQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1NBQUM7O0FBQzNDLGlCQUZBLGNBQWMsQ0FFYixVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRTtnQ0FGOUIsY0FBYzs7ZUFPekIsY0FBYyxHQUFHLEVBQUU7O0FBSmpCLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNyQyxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtBQUNwQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtTQUN2Qjs7QUFOVSxzQkFBYyxXQVF6QixRQUFRLEdBQUEsa0JBQUMsSUFBSSxFQUFFO0FBQ2IsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7QUFDaEIsY0FBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDM0MsY0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0FBQzVDLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7U0FDekM7O0FBYlUsc0JBQWMsV0FjekIsTUFBTSxHQUFBLGtCQUFHOzs7QUFDUCxjQUFJLElBQUksR0FBRyxJQUFJLENBQUE7QUFDZixpQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQzNDLGdDQUFvQixDQUFDLElBQUksT0FBTSxDQUFBO0FBQy9CLGtCQUFLLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFLLGNBQWMsQ0FBQyxDQUFBO0FBQy9DLGtCQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsMkJBQTJCLEVBQUUsTUFBSyxJQUFJLENBQUMsQ0FBQTtXQUM1RCxDQUFDLFNBQU0sQ0FBQyxVQUFTLEtBQUssRUFBRztBQUN4QixtQkFBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7V0FDckQsQ0FBQyxDQUFBO1NBQ0g7O2VBdkJVLGNBQWM7Ozs7O0FBMEJ2QiwwQkFBb0IsR0FBRyxTQUF2QixvQkFBb0IsR0FBYzs7O0FBQ3BDLGNBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVEsRUFBSztBQUNyRCxpQkFBSyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBSyxRQUFRLENBQUMsQ0FBQTtTQUMvQyxDQUFDLENBQUE7T0FDSCIsImZpbGUiOiJ3aXphcmQvd2l6YXJkLXN0ZXAtdmlldy5qcyIsInNvdXJjZVJvb3QiOiIuLi9saWIvIn0=