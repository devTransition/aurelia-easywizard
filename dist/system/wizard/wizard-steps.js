System.register(['aurelia-templating'], function (_export) {
  'use strict';

  var containerless, WizardSteps;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      containerless = _aureliaTemplating.containerless;
    }],
    execute: function () {
      WizardSteps = (function () {
        function WizardSteps() {
          _classCallCheck(this, _WizardSteps);

          this.steps = [];
          this.currentStep = {};
        }

        WizardSteps.prototype.bind = function bind(parent) {
          this.parent = parent;
          parent.wizardSteps = this;
          this.steps = parent.steps;
          this.events = parent.events;
        };

        WizardSteps.prototype.setCurrent = function setCurrent(currentStep) {
          console.log('set current step', currentStep.id);
          if (this.currentStep.id) {
            this.currentStep.setCurrent(false);
          }
          this.currentStep = currentStep;
          this.currentStep.setCurrent(true);
        };

        _createClass(WizardSteps, [{
          key: 'numSteps',
          get: function get() {
            return this.steps.length;
          }
        }, {
          key: 'isLastStep',
          get: function get() {
            return this.currentStep == this.parent.lastStep();
          }
        }, {
          key: 'isFirstStep',
          get: function get() {
            return this.currentStep == this.parent.firstStep();
          }
        }]);

        var _WizardSteps = WizardSteps;
        WizardSteps = containerless()(WizardSteps) || WizardSteps;
        return WizardSteps;
      })();

      _export('WizardSteps', WizardSteps);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FCQUdhLFdBQVc7Ozs7Ozs7O3lDQUhoQixhQUFhOzs7QUFHUixpQkFBVztpQkFBWCxXQUFXOzs7ZUFDdEIsS0FBSyxHQUFHLEVBQUU7ZUFDVixXQUFXLEdBQUcsRUFBRTs7O0FBRkwsbUJBQVcsV0FHdEIsSUFBSSxHQUFBLGNBQUMsTUFBTSxFQUFFO0FBQ1gsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7QUFDcEIsZ0JBQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO0FBQ3pCLGNBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTtBQUN6QixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUE7U0FDNUI7O0FBUlUsbUJBQVcsV0FrQnRCLFVBQVUsR0FBQSxvQkFBQyxXQUFXLEVBQUU7QUFDdEIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQzlDLGNBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUU7QUFDdkIsZ0JBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1dBQ2xDO0FBQ0YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7QUFDOUIsY0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDbEM7O3FCQXpCVSxXQUFXOztlQVNWLGVBQUc7QUFDYixtQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTtXQUN6Qjs7O2VBQ2EsZUFBRztBQUNmLG1CQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtXQUNsRDs7O2VBQ2MsZUFBRztBQUNoQixtQkFBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUE7V0FDbkQ7OzsyQkFqQlUsV0FBVztBQUFYLG1CQUFXLEdBRHZCLGFBQWEsRUFBRSxDQUNILFdBQVcsS0FBWCxXQUFXO2VBQVgsV0FBVyIsImZpbGUiOiJ3aXphcmQvd2l6YXJkLXN0ZXBzLmpzIiwic291cmNlUm9vdCI6Ii4uL2xpYi8ifQ==