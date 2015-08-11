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
          _classCallCheck(this, WizardSteps);

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

        return WizardSteps;
      })();

      _export('WizardSteps', WizardSteps);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FCQUVhLFdBQVc7Ozs7Ozs7O3lDQUZoQixhQUFhOzs7QUFFUixpQkFBVztpQkFBWCxXQUFXO2dDQUFYLFdBQVc7O2VBQ3RCLEtBQUssR0FBRyxFQUFFO2VBQ1YsV0FBVyxHQUFHLEVBQUU7OztBQUZMLG1CQUFXLFdBR3RCLElBQUksR0FBQSxjQUFDLE1BQU0sRUFBRTtBQUNYLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0FBQ3BCLGdCQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtBQUN6QixjQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7QUFDekIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFBO1NBQzVCOztBQVJVLG1CQUFXLFdBa0J0QixVQUFVLEdBQUEsb0JBQUMsV0FBVyxFQUFFO0FBQ3RCLGlCQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM5QyxjQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFO0FBQ3ZCLGdCQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtXQUNsQztBQUNGLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO0FBQzlCLGNBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2xDOztxQkF6QlUsV0FBVzs7ZUFTVixlQUFHO0FBQ2IsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7V0FDekI7OztlQUNhLGVBQUc7QUFDZixtQkFBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUE7V0FDbEQ7OztlQUNjLGVBQUc7QUFDaEIsbUJBQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFBO1dBQ25EOzs7ZUFqQlUsV0FBVyIsImZpbGUiOiJ3aXphcmQvd2l6YXJkLXN0ZXBzLmpzIiwic291cmNlUm9vdCI6Ii4uL2xpYi8ifQ==