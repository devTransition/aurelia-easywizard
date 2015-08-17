System.register(['jquery', 'lodash'], function (_export) {
  'use strict';

  var $, _, WizardActions, initEvents, doNextAction, doAction, publish;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_jquery) {
      $ = _jquery['default'];
    }, function (_lodash) {
      _ = _lodash['default'];
    }],
    execute: function () {
      WizardActions = (function () {
        function WizardActions() {
          _classCallCheck(this, WizardActions);

          this.nextAction = "";
          this.isValidCurrentStep = false;
        }

        WizardActions.prototype.process = function process(event) {
          event.stopPropagation();
          event.preventDefault();
          event.cancelBubble = true;
          var action = $(event.target).data('action');
          if (_.isFunction(this[action])) {
            this[action]();
          }
          return false;
        };

        WizardActions.prototype.bind = function bind(parent) {
          this.parent = parent;
          this.events = parent.events;
          initEvents.call(this);
        };

        WizardActions.prototype.prev = function prev() {
          if (this.isNotFirstStep) {
            doAction.call(this, "prev");
          }
        };

        WizardActions.prototype.next = function next() {
          if (this.isNotLastStep) {
            doAction.call(this, "next");
          }
        };

        WizardActions.prototype.submit = function submit() {
          if (this.isLastStep) {
            doAction.call(this, "submit");
          }
        };

        _createClass(WizardActions, [{
          key: 'isLastStep',
          get: function get() {
            return this.parent.wizardSteps.isLastStep;
          }
        }, {
          key: 'isNotFirstStep',
          get: function get() {
            return !this.parent.wizardSteps.isFirstStep;
          }
        }, {
          key: 'isNotLastStep',
          get: function get() {
            return !this.isLastStep;
          }
        }, {
          key: 'hasSteps',
          get: function get() {
            return this.parent.wizardSteps.numSteps != 0;
          }
        }, {
          key: 'currentStep',
          get: function get() {
            return this.parent.currentStep;
          }
        }]);

        return WizardActions;
      })();

      _export('WizardActions', WizardActions);

      initEvents = function initEvents() {
        var _this = this;

        this.events.subscribe("wizard:current:step:valid", function (currentStep) {
          if (_this.nextAction && currentStep.getId() == _this.currentStep.getId()) {
            doNextAction.call(_this);
          }
        });
      };

      doNextAction = function doNextAction() {
        publish.call(this, "action", this.nextAction);
        this.nextAction = undefined;
      };

      doAction = function doAction(action) {
        this.nextAction = action;
        if (this.currentStep.getCanValidate()) {
          publish.call(this, "validate:current:step", this.currentStep);
        } else {
          doNextAction.call(this);
        }
      };

      publish = function publish(event, option) {
        var action = 'wizard:' + event;
        this.events.publish(action, option);
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtYWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7WUFHYSxhQUFhLEVBaUR0QixVQUFVLEVBT1YsWUFBWSxFQUlaLFFBQVEsRUFRUixPQUFPOzs7Ozs7Ozs7Ozs7O0FBcEVFLG1CQUFhO2lCQUFiLGFBQWE7Z0NBQWIsYUFBYTs7ZUFXeEIsVUFBVSxHQUFHLEVBQUU7ZUFDZixrQkFBa0IsR0FBRyxLQUFLOzs7QUFaZixxQkFBYSxXQUN4QixPQUFPLEdBQUEsaUJBQUMsS0FBSyxFQUFFO0FBQ2IsZUFBSyxDQUFDLGVBQWUsRUFBRSxDQUFBO0FBQ3ZCLGVBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtBQUN0QixlQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtBQUN6QixjQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUMzQyxjQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7QUFDOUIsZ0JBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFBO1dBQ2Y7QUFDRCxpQkFBTyxLQUFLLENBQUE7U0FDYjs7QUFWVSxxQkFBYSxXQWF4QixJQUFJLEdBQUEsY0FBQyxNQUFNLEVBQUU7QUFDWCxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtBQUNwQixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUE7QUFDM0Isb0JBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDdEI7O0FBakJVLHFCQUFhLFdBa0J4QixJQUFJLEdBQUEsZ0JBQUc7QUFDTCxjQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDdkIsb0JBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1dBQzVCO1NBQ0Y7O0FBdEJVLHFCQUFhLFdBdUJ4QixJQUFJLEdBQUEsZ0JBQUc7QUFDTCxjQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDdEIsb0JBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1dBQzVCO1NBQ0Y7O0FBM0JVLHFCQUFhLFdBNEJ4QixNQUFNLEdBQUEsa0JBQUc7QUFDUCxjQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDbkIsb0JBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1dBQzlCO1NBQ0Y7O3FCQWhDVSxhQUFhOztlQWlDVixlQUFHO0FBQ2YsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFBO1dBQzFDOzs7ZUFDaUIsZUFBRztBQUNuQixtQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQTtXQUM1Qzs7O2VBQ2dCLGVBQUc7QUFDbEIsbUJBQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO1dBQ3hCOzs7ZUFDVyxlQUFHO0FBQ2IsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQTtXQUM3Qzs7O2VBQ2MsZUFBRztBQUNoQixtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQTtXQUMvQjs7O2VBL0NVLGFBQWE7Ozs7O0FBaUR0QixnQkFBVSxHQUFHLFNBQWIsVUFBVSxHQUFjOzs7QUFDMUIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsMkJBQTJCLEVBQUUsVUFBQyxXQUFXLEVBQUs7QUFDbEUsY0FBSSxNQUFLLFVBQVUsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksTUFBSyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUU7QUFDdEUsd0JBQVksQ0FBQyxJQUFJLE9BQU0sQ0FBQTtXQUN4QjtTQUNGLENBQUMsQ0FBQTtPQUNIOztBQUNHLGtCQUFZLEdBQUcsU0FBZixZQUFZLEdBQWM7QUFDM0IsZUFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUM3QyxZQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQTtPQUM3Qjs7QUFDRyxjQUFRLEdBQUcsU0FBWCxRQUFRLENBQVksTUFBTSxFQUFFO0FBQzlCLFlBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFBO0FBQ3hCLFlBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsRUFBRTtBQUNyQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQzlELE1BQU07QUFDTCxzQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUN4QjtPQUNGOztBQUNHLGFBQU8sR0FBRyxTQUFWLE9BQU8sQ0FBWSxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3BDLFlBQUksTUFBTSxlQUFhLEtBQUssQUFBRSxDQUFBO0FBQzlCLFlBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQTtPQUNwQyIsImZpbGUiOiJ3aXphcmQvd2l6YXJkLWFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiLi4vbGliLyJ9