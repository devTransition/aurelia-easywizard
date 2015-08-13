System.register(['aurelia-templating', 'underscore.string'], function (_export) {
  'use strict';

  var containerless, bindable, s, WizardStep;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      containerless = _aureliaTemplating.containerless;
      bindable = _aureliaTemplating.bindable;
    }, function (_underscoreString) {
      s = _underscoreString['default'];
    }],
    execute: function () {
      WizardStep = (function () {
        var _instanceInitializers = {};

        function WizardStep() {
          _classCallCheck(this, _WizardStep);

          _defineDecoratedPropertyDescriptor(this, 'step', _instanceInitializers);
        }

        WizardStep.prototype.getTitle = function getTitle() {
          var step = this.step;
          var title = step.getTitle();
          if (title) {
            return title;
          } else {
            return s(step.getId()).humanize().titleize().value();
          }
        };

        _createDecoratedClass(WizardStep, [{
          key: 'step',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }, {
          key: 'class',
          get: function get() {
            if (this.step.getId()) {
              if (this.step.getIsCurrent()) {
                return "active";
              }
            }
            return "";
          }
        }], null, _instanceInitializers);

        var _WizardStep = WizardStep;
        WizardStep = containerless()(WizardStep) || WizardStep;
        return WizardStep;
      })();

      _export('WizardStep', WizardStep);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0NBS2EsVUFBVTs7Ozs7Ozs7Ozt5Q0FMZixhQUFhO29DQUFFLFFBQVE7Ozs7O0FBS2xCLGdCQUFVOzs7aUJBQVYsVUFBVTs7Ozs7O0FBQVYsa0JBQVUsV0FVckIsUUFBUSxHQUFBLG9CQUFHO0FBQ1QsY0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtBQUNwQixjQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7QUFDM0IsY0FBSSxLQUFLLEVBQUU7QUFDVCxtQkFBTyxLQUFLLENBQUE7V0FDYixNQUFNO0FBQ0wsbUJBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO1dBQ3JEO1NBQ0Y7OzhCQWxCVSxVQUFVOzt1QkFDcEIsUUFBUTs7bUJBQVEsRUFBRTs7Ozs7ZUFDVixlQUFHO0FBQ1YsZ0JBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtBQUNuQixrQkFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO0FBQzVCLHVCQUFPLFFBQVEsQ0FBQTtlQUNoQjthQUNKO0FBQ0QsbUJBQU8sRUFBRSxDQUFBO1dBQ1Y7OzswQkFUVSxVQUFVO0FBQVYsa0JBQVUsR0FEdEIsYUFBYSxFQUFFLENBQ0gsVUFBVSxLQUFWLFVBQVU7ZUFBVixVQUFVIiwiZmlsZSI6IndpemFyZC93aXphcmQtc3RlcC5qcyIsInNvdXJjZVJvb3QiOiIuLi9saWIvIn0=