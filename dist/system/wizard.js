System.register(['./events'], function (_export) {
  'use strict';

  var Events, Wizard, setStep, getStep, initEvents;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_events) {
      Events = _events.Events;
    }],
    execute: function () {
      Wizard = (function () {
        Wizard.inject = function inject() {
          return [Events];
        };

        function Wizard(events) {
          _classCallCheck(this, Wizard);

          this.wizardSteps = {};

          this.events = events;
          initEvents.call(this);
        }

        Wizard.prototype.bind = function bind(context) {
          console.log('wizard bind!!!');
          this.controller = context.wizardController;
        };

        Wizard.prototype.firstStep = function firstStep() {
          return this.controller.firstStep();
        };

        Wizard.prototype.lastStep = function lastStep() {
          return this.controller.lastStep();
        };

        Wizard.prototype.attached = function attached() {
          setStep.call(this, this.firstStep());
        };

        _createClass(Wizard, [{
          key: 'steps',
          get: function get() {
            return this.controller.steps;
          }
        }, {
          key: 'views',
          get: function get() {
            return this.controller.steps.map(function (step) {
              return step.view();
            });
          }
        }, {
          key: 'currentStep',
          get: function get() {
            return this.wizardSteps.currentStep;
          }
        }]);

        return Wizard;
      })();

      _export('Wizard', Wizard);

      setStep = function setStep(newStep) {
        this.wizardSteps.setCurrent(newStep);
      };

      getStep = function getStep(action) {
        switch (action) {
          case 'next':
            return this.controller.nextStep(this.currentStep);
          case 'prev':
            return this.controller.prevStep(this.currentStep);
          case 'submit':
            return this.controller.submit(this.currentStep);
        }
      };

      initEvents = function initEvents() {
        var _this = this;

        this.events.subscribe("wizard:action", function (action) {
          var newStep = getStep.call(_this, action);
          console.log('get next step', newStep);
          if (newStep) {
            setStep.call(_this, newStep);
          }
        });
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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