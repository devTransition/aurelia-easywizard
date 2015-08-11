System.register(['jquery', 'aurelia-templating'], function (_export) {
  'use strict';

  var $, bindable, WizardStepPane, getForm, initEvents;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_jquery) {
      $ = _jquery['default'];
    }, function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
    }],
    execute: function () {
      WizardStepPane = (function () {
        WizardStepPane.inject = function inject() {
          return [Element];
        };

        function WizardStepPane(element) {
          _classCallCheck(this, WizardStepPane);

          this.wizardStepView = "wizard/wizard-step-view";

          this.element = element;
        }

        WizardStepPane.prototype.bind = function bind(parent) {
          this.parent = parent;
          this.events = parent.events;
          initEvents.call(this);
        };

        WizardStepPane.prototype.submit = function submit() {
          var form = getForm.call(this);
          var formSubmit = $(form).find('button[type="submit"]');
          $(formSubmit).trigger('click');
        };

        _createClass(WizardStepPane, [{
          key: 'isActive',
          get: function get() {
            return this.currentStep.id != undefined;
          }
        }, {
          key: 'currentStep',
          get: function get() {
            return this.parent.currentStep;
          }
        }, {
          key: 'currentStepView',
          get: function get() {
            return this.parent.currentStep.view();
          }
        }]);

        return WizardStepPane;
      })();

      _export('WizardStepPane', WizardStepPane);

      getForm = function getForm() {
        return $(this.element).find('form');
      };

      initEvents = function initEvents() {
        var _this = this;

        this.events.subscribe("wizard:validate:current:step", function () {
          if (_this.currentStep.isCurrent) {
            _this.submit();
          }
        });
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcC1wYW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzttQkFHYSxjQUFjLEVBK0J2QixPQUFPLEVBR1AsVUFBVTs7Ozs7Ozs7OztvQ0FwQ04sUUFBUTs7O0FBRUgsb0JBQWM7QUFBZCxzQkFBYyxDQUNsQixNQUFNLEdBQUEsa0JBQUc7QUFBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQUM7O0FBSXZCLGlCQUxBLGNBQWMsQ0FLYixPQUFPLEVBQUU7Z0NBTFYsY0FBYzs7ZUFHekIsY0FBYyxHQUFHLHlCQUF5Qjs7QUFHeEMsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7U0FDdkI7O0FBUFUsc0JBQWMsV0FRekIsSUFBSSxHQUFBLGNBQUMsTUFBTSxFQUFFO0FBQ1gsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7QUFDcEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFBO0FBQzNCLG9CQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3RCOztBQVpVLHNCQUFjLFdBeUJ6QixNQUFNLEdBQUEsa0JBQUc7QUFDUCxjQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzdCLGNBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtBQUN0RCxXQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQy9COztxQkE3QlUsY0FBYzs7ZUFjYixlQUFHO0FBQ2IsbUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksU0FBUyxDQUFBO1dBQ3hDOzs7ZUFFYyxlQUFHO0FBQ2hCLG1CQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFBO1dBQy9COzs7ZUFDa0IsZUFBRztBQUNwQixtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtXQUN0Qzs7O2VBdkJVLGNBQWM7Ozs7O0FBK0J2QixhQUFPLEdBQUcsU0FBVixPQUFPLEdBQWM7QUFDdkIsZUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtPQUNwQzs7QUFDRyxnQkFBVSxHQUFHLFNBQWIsVUFBVSxHQUFjOzs7QUFDMUIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsOEJBQThCLEVBQUUsWUFBTTtBQUN6RCxjQUFJLE1BQUssV0FBVyxDQUFDLFNBQVMsRUFBRTtBQUM3QixrQkFBSyxNQUFNLEVBQUUsQ0FBQTtXQUNmO1NBQ0gsQ0FBQyxDQUFBO09BQ0giLCJmaWxlIjoid2l6YXJkL3dpemFyZC1zdGVwLXBhbmUuanMiLCJzb3VyY2VSb290IjoiLi4vbGliLyJ9