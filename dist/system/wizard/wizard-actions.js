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
          var action = $(event.target).data('action');
          if (_.isFunction(this[action])) {
            this[action]();
          }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtYWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7WUFHYSxhQUFhLEVBNkN0QixVQUFVLEVBT1YsWUFBWSxFQUlaLFFBQVEsRUFRUixPQUFPOzs7Ozs7Ozs7Ozs7O0FBaEVFLG1CQUFhO2lCQUFiLGFBQWE7Z0NBQWIsYUFBYTs7ZUFPeEIsVUFBVSxHQUFHLEVBQUU7ZUFDZixrQkFBa0IsR0FBRyxLQUFLOzs7QUFSZixxQkFBYSxXQUN4QixPQUFPLEdBQUEsaUJBQUMsS0FBSyxFQUFFO0FBQ2IsY0FBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDM0MsY0FBSSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO0FBQzlCLGdCQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtXQUNmO1NBQ0Y7O0FBTlUscUJBQWEsV0FTeEIsSUFBSSxHQUFBLGNBQUMsTUFBTSxFQUFFO0FBQ1gsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7QUFDcEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFBO0FBQzNCLG9CQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3RCOztBQWJVLHFCQUFhLFdBY3hCLElBQUksR0FBQSxnQkFBRztBQUNMLGNBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUN2QixvQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7V0FDNUI7U0FDRjs7QUFsQlUscUJBQWEsV0FtQnhCLElBQUksR0FBQSxnQkFBRztBQUNMLGNBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUN0QixvQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7V0FDNUI7U0FDRjs7QUF2QlUscUJBQWEsV0F3QnhCLE1BQU0sR0FBQSxrQkFBRztBQUNQLGNBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUNuQixvQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7V0FDOUI7U0FDRjs7cUJBNUJVLGFBQWE7O2VBNkJWLGVBQUc7QUFDZixtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUE7V0FDMUM7OztlQUNpQixlQUFHO0FBQ25CLG1CQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFBO1dBQzVDOzs7ZUFDZ0IsZUFBRztBQUNsQixtQkFBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUE7V0FDeEI7OztlQUNXLGVBQUc7QUFDYixtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFBO1dBQzdDOzs7ZUFDYyxlQUFHO0FBQ2hCLG1CQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFBO1dBQy9COzs7ZUEzQ1UsYUFBYTs7Ozs7QUE2Q3RCLGdCQUFVLEdBQUcsU0FBYixVQUFVLEdBQWM7OztBQUMxQixZQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsRUFBRSxVQUFDLFdBQVcsRUFBSztBQUNsRSxjQUFJLE1BQUssVUFBVSxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxNQUFLLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtBQUN0RSx3QkFBWSxDQUFDLElBQUksT0FBTSxDQUFBO1dBQ3hCO1NBQ0YsQ0FBQyxDQUFBO09BQ0g7O0FBQ0csa0JBQVksR0FBRyxTQUFmLFlBQVksR0FBYztBQUMzQixlQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQzdDLFlBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFBO09BQzdCOztBQUNHLGNBQVEsR0FBRyxTQUFYLFFBQVEsQ0FBWSxNQUFNLEVBQUU7QUFDOUIsWUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUE7QUFDeEIsWUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxFQUFFO0FBQ3JDLGlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSx1QkFBdUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDOUQsTUFBTTtBQUNMLHNCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3hCO09BQ0Y7O0FBQ0csYUFBTyxHQUFHLFNBQVYsT0FBTyxDQUFZLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEMsWUFBSSxNQUFNLGVBQWEsS0FBSyxBQUFFLENBQUE7QUFDOUIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFBO09BQ3BDIiwiZmlsZSI6IndpemFyZC93aXphcmQtYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIuLi9saWIvIn0=