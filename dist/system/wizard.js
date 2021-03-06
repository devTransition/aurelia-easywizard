System.register(['aurelia-templating', './events', './controller/wizard-controller'], function (_export) {
  'use strict';

  var bindable, Events, WizardController, Wizard, setStep, getStep, initEvents;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
    }, function (_events) {
      Events = _events.Events;
    }, function (_controllerWizardController) {
      WizardController = _controllerWizardController.WizardController;
    }],
    execute: function () {
      Wizard = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        Wizard.inject = function inject() {
          return [Events];
        };

        _createDecoratedClass(Wizard, [{
          key: 'controller',
          decorators: [bindable],
          initializer: function initializer() {
            return new WizardController();
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Wizard(events) {
          _classCallCheck(this, Wizard);

          _defineDecoratedPropertyDescriptor(this, 'controller', _instanceInitializers);

          this.wizardSteps = {};

          this.events = events;
          initEvents.call(this);
        }

        Wizard.prototype.firstStep = function firstStep() {
          return this.controller.firstStep();
        };

        Wizard.prototype.lastStep = function lastStep() {
          return this.controller.lastStep();
        };

        Wizard.prototype.attached = function attached() {
          setStep.call(this, this.firstStep());
        };

        _createDecoratedClass(Wizard, [{
          key: 'steps',
          get: function get() {
            return this.controller.steps;
          }
        }, {
          key: 'views',
          get: function get() {
            return this.controller.getViews();
          }
        }, {
          key: 'currentStep',
          get: function get() {
            return this.wizardSteps.currentStep;
          }
        }], null, _instanceInitializers);

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
          if (newStep) {
            setStep.call(_this, newStep);
          }
        });
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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