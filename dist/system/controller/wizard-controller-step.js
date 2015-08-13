System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var noView, WizardControllerStep;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_aureliaTemplating) {
      noView = _aureliaTemplating.noView;
    }],
    execute: function () {
      WizardControllerStep = (function () {
        WizardControllerStep.prototype.getView = function getView() {
          if (this.id) {
            return viewsPrefix + "/" + this.id + ".html";
          }
        };

        WizardControllerStep.prototype.setIsCurrent = function setIsCurrent(current) {
          this.isCurrent = current;
        };

        WizardControllerStep.prototype.getId = function getId() {
          return this.id;
        };

        WizardControllerStep.prototype.getTitle = function getTitle() {
          return this.title;
        };

        WizardControllerStep.prototype.getCanValidate = function getCanValidate() {
          return this.canValidate;
        };

        WizardControllerStep.prototype.getIsCurrent = function getIsCurrent() {
          return this.isCurrent;
        };

        function WizardControllerStep() {
          _classCallCheck(this, _WizardControllerStep);

          this.title = "";
          this.id = "";
          this.isCurrent = false;
          this.canValidate = true;
          this.viewsPrefix = "";
          this.model = {};

          if (this.initialize) {
            this.initialize();
          }
        }

        WizardControllerStep.prototype.getModel = function getModel() {
          return this.model;
        };

        WizardControllerStep.prototype.updateModel = function updateModel(model) {
          var _this = this;

          Object.keys(this.model).forEach(function (property) {
            _this.model[property] = model[property];
          });
        };

        WizardControllerStep.prototype.ensureValidation = function ensureValidation() {};

        var _WizardControllerStep = WizardControllerStep;
        WizardControllerStep = noView()(WizardControllerStep) || WizardControllerStep;
        return WizardControllerStep;
      })();

      _export("WizardControllerStep", WizardControllerStep);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvd2l6YXJkLWNvbnRyb2xsZXItc3RlcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Y0FHYSxvQkFBb0I7Ozs7OztrQ0FIekIsTUFBTTs7O0FBR0QsMEJBQW9CO0FBQXBCLDRCQUFvQixXQU8vQixPQUFPLEdBQUEsbUJBQUc7QUFDUixjQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDWCxtQkFBVSxXQUFXLFNBQUksSUFBSSxDQUFDLEVBQUUsV0FBTztXQUN4QztTQUNGOztBQVhVLDRCQUFvQixXQVkvQixZQUFZLEdBQUEsc0JBQUMsT0FBTyxFQUFFO0FBQ3BCLGNBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFBO1NBQ3pCOztBQWRVLDRCQUFvQixXQWUvQixLQUFLLEdBQUEsaUJBQUc7QUFBQyxpQkFBTyxJQUFJLENBQUMsRUFBRSxDQUFBO1NBQUM7O0FBZmIsNEJBQW9CLFdBZ0IvQixRQUFRLEdBQUEsb0JBQUc7QUFBQyxpQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFBO1NBQUM7O0FBaEJuQiw0QkFBb0IsV0FpQi9CLGNBQWMsR0FBQSwwQkFBRztBQUFDLGlCQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7U0FBQzs7QUFqQi9CLDRCQUFvQixXQWtCL0IsWUFBWSxHQUFBLHdCQUFHO0FBQUMsaUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtTQUFFOztBQUM1QixpQkFuQkEsb0JBQW9CLEdBbUJqQjs7O2VBbEJkLEtBQUssR0FBRyxFQUFFO2VBQ1YsRUFBRSxHQUFHLEVBQUU7ZUFDUCxTQUFTLEdBQUcsS0FBSztlQUNqQixXQUFXLEdBQUcsSUFBSTtlQUNsQixXQUFXLEdBQUcsRUFBRTtlQUNoQixLQUFLLEdBQUcsRUFBRTs7QUFjUixjQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7QUFDbkIsZ0JBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtXQUNsQjtTQUNGOztBQXZCVSw0QkFBb0IsV0F3Qi9CLFFBQVEsR0FBQSxvQkFBRztBQUNULGlCQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7U0FDbEI7O0FBMUJVLDRCQUFvQixXQTJCL0IsV0FBVyxHQUFBLHFCQUFDLEtBQUssRUFBRTs7O0FBQ2pCLGdCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRLEVBQUs7QUFDNUMsa0JBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtXQUN2QyxDQUFDLENBQUE7U0FDSDs7QUEvQlUsNEJBQW9CLFdBZ0MvQixnQkFBZ0IsR0FBQSw0QkFBRyxFQUNsQjs7b0NBakNVLG9CQUFvQjtBQUFwQiw0QkFBb0IsR0FEaEMsTUFBTSxFQUFFLENBQ0ksb0JBQW9CLEtBQXBCLG9CQUFvQjtlQUFwQixvQkFBb0IiLCJmaWxlIjoiY29udHJvbGxlci93aXphcmQtY29udHJvbGxlci1zdGVwLmpzIiwic291cmNlUm9vdCI6Ii4uL2xpYi8ifQ==