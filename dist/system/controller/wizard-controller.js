System.register(['lib/step-list'], function (_export) {
  'use strict';

  var StepList, WizardController, initStepList;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_libStepList) {
      StepList = _libStepList.StepList;
    }],
    execute: function () {
      WizardController = (function () {
        function WizardController() {
          _classCallCheck(this, WizardController);

          this.steps = [];
        }

        WizardController.prototype.setSteps = function setSteps(steps) {
          this.steps = steps;
          initStepList.call(this);
          return this;
        };

        WizardController.prototype.getSteps = function getSteps() {
          return this.steps;
        };

        WizardController.prototype.firstStep = function firstStep() {
          return this.steps[0];
        };

        WizardController.prototype.lastStep = function lastStep() {
          return this.steps[this.steps.length - 1];
        };

        WizardController.prototype.nextStep = function nextStep(currentStep) {
          if (currentStep != this.lastStep()) {
            return this.stepList.next(currentStep);
          }
        };

        WizardController.prototype.prevStep = function prevStep(currentStep) {
          if (currentStep != this.firstStep()) {
            return this.stepList.prev(currentStep);
          }
        };

        WizardController.prototype.getViews = function getViews() {
          return this.steps.map(function (step) {
            return step.view();
          });
        };

        WizardController.prototype.submit = function submit(currentStep) {
          console.log('TODO SUBMIT HERE', this.steps);
        };

        return WizardController;
      })();

      _export('WizardController', WizardController);

      initStepList = function initStepList() {
        var _this = this;

        this.stepList = new StepList();
        this.steps.forEach(function (step) {
          _this.stepList.add(step);
        });
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvd2l6YXJkLWNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dCQUVhLGdCQUFnQixFQW1DekIsWUFBWTs7Ozs7OzhCQXJDUixRQUFROzs7QUFFSCxzQkFBZ0I7aUJBQWhCLGdCQUFnQjtnQ0FBaEIsZ0JBQWdCOztlQUMzQixLQUFLLEdBQUcsRUFBRTs7O0FBREMsd0JBQWdCLFdBRTNCLFFBQVEsR0FBQSxrQkFBQyxLQUFLLEVBQUU7QUFDZCxjQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtBQUNsQixzQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN2QixpQkFBTyxJQUFJLENBQUE7U0FDWjs7QUFOVSx3QkFBZ0IsV0FPM0IsUUFBUSxHQUFBLG9CQUFHO0FBQ1QsaUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtTQUNsQjs7QUFUVSx3QkFBZ0IsV0FVM0IsU0FBUyxHQUFBLHFCQUFHO0FBQ1YsaUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNyQjs7QUFaVSx3QkFBZ0IsV0FhM0IsUUFBUSxHQUFBLG9CQUFHO0FBQ1QsaUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtTQUN6Qzs7QUFmVSx3QkFBZ0IsV0FnQjNCLFFBQVEsR0FBQSxrQkFBQyxXQUFXLEVBQUU7QUFDcEIsY0FBSSxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO0FBQ2xDLG1CQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1dBQ3ZDO1NBQ0Y7O0FBcEJVLHdCQUFnQixXQXFCM0IsUUFBUSxHQUFBLGtCQUFDLFdBQVcsRUFBRTtBQUNwQixjQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7QUFDbkMsbUJBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7V0FDdkM7U0FDRjs7QUF6QlUsd0JBQWdCLFdBMEIzQixRQUFRLEdBQUEsb0JBQUc7QUFDVCxpQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksRUFBSTtBQUM3QixtQkFBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7V0FDbkIsQ0FBQyxDQUFBO1NBQ0g7O0FBOUJVLHdCQUFnQixXQStCM0IsTUFBTSxHQUFBLGdCQUFDLFdBQVcsRUFBRTtBQUNsQixpQkFBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDNUM7O2VBakNVLGdCQUFnQjs7Ozs7QUFtQ3pCLGtCQUFZLEdBQUcsU0FBZixZQUFZLEdBQWM7OztBQUM1QixZQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUE7QUFDOUIsWUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDM0IsZ0JBQUssUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUN4QixDQUFDLENBQUE7T0FDSCIsImZpbGUiOiJjb250cm9sbGVyL3dpemFyZC1jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4uL2xpYi8ifQ==