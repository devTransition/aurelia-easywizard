System.register(['jquery'], function (_export) {
  'use strict';

  var $, WizardStepPane, getForm, initEvents;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      WizardStepPane = (function () {
        WizardStepPane.inject = function inject() {
          return [Element];
        };

        function WizardStepPane(element) {
          _classCallCheck(this, WizardStepPane);

          this.wizardStepView = "./wizard-step-view";

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcC1wYW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztTQUVhLGNBQWMsRUErQnZCLE9BQU8sRUFHUCxVQUFVOzs7Ozs7Ozs7OztBQWxDRCxvQkFBYztBQUFkLHNCQUFjLENBQ2xCLE1BQU0sR0FBQSxrQkFBRztBQUFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7U0FBQzs7QUFJdkIsaUJBTEEsY0FBYyxDQUtiLE9BQU8sRUFBRTtnQ0FMVixjQUFjOztlQUd6QixjQUFjLEdBQUcsb0JBQW9COztBQUduQyxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtTQUN2Qjs7QUFQVSxzQkFBYyxXQVF6QixJQUFJLEdBQUEsY0FBQyxNQUFNLEVBQUU7QUFDWCxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtBQUNwQixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUE7QUFDM0Isb0JBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDdEI7O0FBWlUsc0JBQWMsV0F5QnpCLE1BQU0sR0FBQSxrQkFBRztBQUNQLGNBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDN0IsY0FBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELFdBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDL0I7O3FCQTdCVSxjQUFjOztlQWNiLGVBQUc7QUFDYixtQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxTQUFTLENBQUE7V0FDeEM7OztlQUVjLGVBQUc7QUFDaEIsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUE7V0FDL0I7OztlQUNrQixlQUFHO0FBQ3BCLG1CQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFBO1dBQ3RDOzs7ZUF2QlUsY0FBYzs7Ozs7QUErQnZCLGFBQU8sR0FBRyxTQUFWLE9BQU8sR0FBYztBQUN2QixlQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO09BQ3BDOztBQUNHLGdCQUFVLEdBQUcsU0FBYixVQUFVLEdBQWM7OztBQUMxQixZQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsRUFBRSxZQUFNO0FBQ3pELGNBQUksTUFBSyxXQUFXLENBQUMsU0FBUyxFQUFFO0FBQzdCLGtCQUFLLE1BQU0sRUFBRSxDQUFBO1dBQ2Y7U0FDSCxDQUFDLENBQUE7T0FDSCIsImZpbGUiOiJ3aXphcmQvd2l6YXJkLXN0ZXAtcGFuZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9saWIvIn0=