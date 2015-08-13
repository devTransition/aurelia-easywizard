System.register([], function (_export) {
  "use strict";

  var WizardControllerStep;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
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
          _classCallCheck(this, WizardControllerStep);

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

        return WizardControllerStep;
      })();

      _export("WizardControllerStep", WizardControllerStep);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvd2l6YXJkLWNvbnRyb2xsZXItc3RlcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxvQkFBb0I7Ozs7Ozs7QUFBcEIsMEJBQW9CO0FBQXBCLDRCQUFvQixXQU8vQixPQUFPLEdBQUEsbUJBQUc7QUFDUixjQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDWCxtQkFBVSxXQUFXLFNBQUksSUFBSSxDQUFDLEVBQUUsV0FBTztXQUN4QztTQUNGOztBQVhVLDRCQUFvQixXQVkvQixZQUFZLEdBQUEsc0JBQUMsT0FBTyxFQUFFO0FBQ3BCLGNBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFBO1NBQ3pCOztBQWRVLDRCQUFvQixXQWUvQixLQUFLLEdBQUEsaUJBQUc7QUFBQyxpQkFBTyxJQUFJLENBQUMsRUFBRSxDQUFBO1NBQUM7O0FBZmIsNEJBQW9CLFdBZ0IvQixRQUFRLEdBQUEsb0JBQUc7QUFBQyxpQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFBO1NBQUM7O0FBaEJuQiw0QkFBb0IsV0FpQi9CLGNBQWMsR0FBQSwwQkFBRztBQUFDLGlCQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7U0FBQzs7QUFqQi9CLDRCQUFvQixXQWtCL0IsWUFBWSxHQUFBLHdCQUFHO0FBQUMsaUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtTQUFFOztBQUM1QixpQkFuQkEsb0JBQW9CLEdBbUJqQjtnQ0FuQkgsb0JBQW9COztlQUMvQixLQUFLLEdBQUcsRUFBRTtlQUNWLEVBQUUsR0FBRyxFQUFFO2VBQ1AsU0FBUyxHQUFHLEtBQUs7ZUFDakIsV0FBVyxHQUFHLElBQUk7ZUFDbEIsV0FBVyxHQUFHLEVBQUU7ZUFDaEIsS0FBSyxHQUFHLEVBQUU7O0FBY1IsY0FBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ25CLGdCQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7V0FDbEI7U0FDRjs7QUF2QlUsNEJBQW9CLFdBd0IvQixRQUFRLEdBQUEsb0JBQUc7QUFDVCxpQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFBO1NBQ2xCOztBQTFCVSw0QkFBb0IsV0EyQi9CLFdBQVcsR0FBQSxxQkFBQyxLQUFLLEVBQUU7OztBQUNqQixnQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUSxFQUFLO0FBQzVDLGtCQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7V0FDdkMsQ0FBQyxDQUFBO1NBQ0g7O0FBL0JVLDRCQUFvQixXQWdDL0IsZ0JBQWdCLEdBQUEsNEJBQUcsRUFDbEI7O2VBakNVLG9CQUFvQiIsImZpbGUiOiJjb250cm9sbGVyL3dpemFyZC1jb250cm9sbGVyLXN0ZXAuanMiLCJzb3VyY2VSb290IjoiLi4vbGliLyJ9