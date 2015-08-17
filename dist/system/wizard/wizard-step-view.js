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
          return [Validation, Events];
        };

        function WizardStepView(validation, events, element) {
          _classCallCheck(this, WizardStepView);

          this.stepProperties = {};

          this.validation = validation.on(this);
          this.events = events;
        }

        WizardStepView.prototype.getViewStrategy = function getViewStrategy() {
          return this.step.getView();
        };

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcC12aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFHYSxjQUFjLEVBNEJ2QixvQkFBb0I7Ozs7OztzQ0EvQmhCLFVBQVU7O3VCQUNWLE1BQU07OztBQUVELG9CQUFjO0FBQWQsc0JBQWMsQ0FDbEIsTUFBTSxHQUFBLGtCQUFHO0FBQUMsaUJBQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUE7U0FBQzs7QUFDbEMsaUJBRkEsY0FBYyxDQUViLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFO2dDQUY5QixjQUFjOztlQU16QixjQUFjLEdBQUcsRUFBRTs7QUFIakIsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3JDLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1NBQ3JCOztBQUxVLHNCQUFjLFdBT3pCLGVBQWUsR0FBQSwyQkFBRztBQUNoQixpQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQzNCOztBQVRVLHNCQUFjLFdBVXpCLFFBQVEsR0FBQSxrQkFBQyxJQUFJLEVBQUU7QUFDYixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtBQUNoQixjQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUMzQyxjQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7QUFDMUMsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtTQUN6Qzs7QUFmVSxzQkFBYyxXQWdCekIsTUFBTSxHQUFBLGtCQUFHOzs7QUFDUCxjQUFJLElBQUksR0FBRyxJQUFJLENBQUE7QUFDZixpQkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQzNDLGdDQUFvQixDQUFDLElBQUksT0FBTSxDQUFBO0FBQy9CLGtCQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBSyxjQUFjLENBQUMsQ0FBQTtBQUMxQyxrQkFBSyxNQUFNLENBQUMsT0FBTyxDQUFDLDJCQUEyQixFQUFFLE1BQUssSUFBSSxDQUFDLENBQUE7V0FDNUQsQ0FBQyxTQUFNLENBQUMsVUFBUyxLQUFLLEVBQUc7QUFDeEIsbUJBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO1dBQ3JELENBQUMsQ0FBQTtTQUNIOztlQXpCVSxjQUFjOzs7OztBQTRCdkIsMEJBQW9CLEdBQUcsU0FBdkIsb0JBQW9CLEdBQWM7OztBQUNwQyxjQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRLEVBQUs7QUFDckQsaUJBQUssY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQUssUUFBUSxDQUFDLENBQUE7U0FDL0MsQ0FBQyxDQUFBO09BQ0giLCJmaWxlIjoid2l6YXJkL3dpemFyZC1zdGVwLXZpZXcuanMiLCJzb3VyY2VSb290IjoiLi4vbGliLyJ9