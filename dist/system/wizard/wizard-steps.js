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
          if (this.currentStep.getId()) {
            this.currentStep.setIsCurrent(false);
          }
          this.currentStep = currentStep;
          this.currentStep.setIsCurrent(true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FCQUdhLFdBQVc7Ozs7Ozs7O3lDQUhoQixhQUFhOzs7QUFHUixpQkFBVztpQkFBWCxXQUFXOzs7ZUFDdEIsS0FBSyxHQUFHLEVBQUU7ZUFDVixXQUFXLEdBQUcsRUFBRTs7O0FBRkwsbUJBQVcsV0FHdEIsSUFBSSxHQUFBLGNBQUMsTUFBTSxFQUFFO0FBQ1gsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7QUFDcEIsZ0JBQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO0FBQ3pCLGNBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTtBQUN6QixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUE7U0FDNUI7O0FBUlUsbUJBQVcsV0FrQnRCLFVBQVUsR0FBQSxvQkFBQyxXQUFXLEVBQUU7QUFDdEIsY0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFO0FBQzVCLGdCQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtXQUNwQztBQUNGLGNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO0FBQzlCLGNBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3BDOztxQkF4QlUsV0FBVzs7ZUFTVixlQUFHO0FBQ2IsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7V0FDekI7OztlQUNhLGVBQUc7QUFDZixtQkFBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUE7V0FDbEQ7OztlQUNjLGVBQUc7QUFDaEIsbUJBQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFBO1dBQ25EOzs7MkJBakJVLFdBQVc7QUFBWCxtQkFBVyxHQUR2QixhQUFhLEVBQUUsQ0FDSCxXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVciLCJmaWxlIjoid2l6YXJkL3dpemFyZC1zdGVwcy5qcyIsInNvdXJjZVJvb3QiOiIuLi9saWIvIn0=