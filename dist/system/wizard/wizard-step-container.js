System.register(['aurelia-templating'], function (_export) {
  'use strict';

  var containerless, bindable, WizardStepContainer;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      containerless = _aureliaTemplating.containerless;
      bindable = _aureliaTemplating.bindable;
    }],
    execute: function () {
      WizardStepContainer = (function () {
        function WizardStepContainer() {
          _classCallCheck(this, _WizardStepContainer);

          this.parent = { currentStep: {} };
        }

        WizardStepContainer.prototype.bind = function bind(parent) {
          this.parent = parent;
          this.events = parent.events;
        };

        _createClass(WizardStepContainer, [{
          key: 'currentStep',
          get: function get() {
            return this.parent.currentStep;
          }
        }]);

        var _WizardStepContainer = WizardStepContainer;
        WizardStepContainer = containerless()(WizardStepContainer) || WizardStepContainer;
        return WizardStepContainer;
      })();

      _export('WizardStepContainer', WizardStepContainer);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcC1jb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OytCQUdhLG1CQUFtQjs7Ozs7Ozs7eUNBSHhCLGFBQWE7b0NBQUUsUUFBUTs7O0FBR2xCLHlCQUFtQjtpQkFBbkIsbUJBQW1COzs7ZUFDOUIsTUFBTSxHQUFHLEVBQUMsV0FBVyxFQUFDLEVBQUUsRUFBQzs7O0FBRGQsMkJBQW1CLFdBRTlCLElBQUksR0FBQSxjQUFDLE1BQU0sRUFBRTtBQUNYLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0FBQ3BCLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQTtTQUM1Qjs7cUJBTFUsbUJBQW1COztlQU1mLGVBQUc7QUFDaEIsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUE7V0FDL0I7OzttQ0FSVSxtQkFBbUI7QUFBbkIsMkJBQW1CLEdBRC9CLGFBQWEsRUFBRSxDQUNILG1CQUFtQixLQUFuQixtQkFBbUI7ZUFBbkIsbUJBQW1CIiwiZmlsZSI6IndpemFyZC93aXphcmQtc3RlcC1jb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiLi4vbGliLyJ9