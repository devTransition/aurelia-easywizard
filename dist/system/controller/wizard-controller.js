System.register(['../step-list', 'aurelia-templating'], function (_export) {
  'use strict';

  var StepList, noView, WizardController, initStepList;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_stepList) {
      StepList = _stepList.StepList;
    }, function (_aureliaTemplating) {
      noView = _aureliaTemplating.noView;
    }],
    execute: function () {
      WizardController = (function () {
        function WizardController() {
          _classCallCheck(this, _WizardController);

          this.steps = [];

          if (this.initialize) {
            this.initialize.apply(arguments);
          }
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

        var _WizardController = WizardController;
        WizardController = noView()(WizardController) || WizardController;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvd2l6YXJkLWNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dCQUlhLGdCQUFnQixFQXdDekIsWUFBWTs7Ozs7OzJCQTVDUixRQUFROztrQ0FDUixNQUFNOzs7QUFHRCxzQkFBZ0I7QUFFaEIsaUJBRkEsZ0JBQWdCLEdBRWI7OztlQURkLEtBQUssR0FBRyxFQUFFOztBQUVSLGNBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNuQixnQkFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7V0FDakM7U0FDRjs7QUFOVSx3QkFBZ0IsV0FPM0IsUUFBUSxHQUFBLGtCQUFDLEtBQUssRUFBRTtBQUNkLGNBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0FBQ2xCLHNCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3ZCLGlCQUFPLElBQUksQ0FBQTtTQUNaOztBQVhVLHdCQUFnQixXQVkzQixRQUFRLEdBQUEsb0JBQUc7QUFDVCxpQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFBO1NBQ2xCOztBQWRVLHdCQUFnQixXQWUzQixTQUFTLEdBQUEscUJBQUc7QUFDVixpQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3JCOztBQWpCVSx3QkFBZ0IsV0FrQjNCLFFBQVEsR0FBQSxvQkFBRztBQUNULGlCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDekM7O0FBcEJVLHdCQUFnQixXQXFCM0IsUUFBUSxHQUFBLGtCQUFDLFdBQVcsRUFBRTtBQUNwQixjQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7QUFDbEMsbUJBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7V0FDdkM7U0FDRjs7QUF6QlUsd0JBQWdCLFdBMEIzQixRQUFRLEdBQUEsa0JBQUMsV0FBVyxFQUFFO0FBQ3BCLGNBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtBQUNuQyxtQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtXQUN2QztTQUNGOztBQTlCVSx3QkFBZ0IsV0ErQjNCLFFBQVEsR0FBQSxvQkFBRztBQUNULGlCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFJO0FBQzdCLG1CQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtXQUNuQixDQUFDLENBQUE7U0FDSDs7QUFuQ1Usd0JBQWdCLFdBb0MzQixNQUFNLEdBQUEsZ0JBQUMsV0FBVyxFQUFFO0FBQ2xCLGlCQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1Qzs7Z0NBdENVLGdCQUFnQjtBQUFoQix3QkFBZ0IsR0FENUIsTUFBTSxFQUFFLENBQ0ksZ0JBQWdCLEtBQWhCLGdCQUFnQjtlQUFoQixnQkFBZ0I7Ozs7O0FBd0N6QixrQkFBWSxHQUFHLFNBQWYsWUFBWSxHQUFjOzs7QUFDNUIsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFBO0FBQzlCLFlBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQzNCLGdCQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDeEIsQ0FBQyxDQUFBO09BQ0giLCJmaWxlIjoiY29udHJvbGxlci93aXphcmQtY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuLi9saWIvIn0=