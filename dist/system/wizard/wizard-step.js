System.register(["aurelia-templating"], function (_export) {
  "use strict";

  var containerless, WizardStep;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_aureliaTemplating) {
      containerless = _aureliaTemplating.containerless;
    }],
    execute: function () {
      WizardStep = (function () {
        function WizardStep() {
          _classCallCheck(this, _WizardStep);

          this.step = {};
        }

        WizardStep.prototype.getTitle = function getTitle() {
          var step = this.step;
          if (step.title) {
            return step.title;
          } else {
            return 'stepid';
          }
        };

        _createClass(WizardStep, [{
          key: "class",
          get: function get() {
            if (this.step.id) {
              if (this.step.isCurrent) {
                return "active";
              }
            }
            return "";
          }
        }]);

        var _WizardStep = WizardStep;
        WizardStep = containerless()(WizardStep) || WizardStep;
        return WizardStep;
      })();

      _export("WizardStep", WizardStep);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpemFyZC93aXphcmQtc3RlcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7cUJBR2EsVUFBVTs7Ozs7Ozs7eUNBSGYsYUFBYTs7O0FBR1IsZ0JBQVU7aUJBQVYsVUFBVTs7O2VBQ3JCLElBQUksR0FBRyxFQUFFOzs7QUFERSxrQkFBVSxXQVVyQixRQUFRLEdBQUEsb0JBQUc7QUFDVCxjQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO0FBQ3BCLGNBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNkLG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7V0FDbEIsTUFBTTtBQUNMLG1CQUFPLFFBQVEsQ0FBQTtXQUNoQjtTQUNGOztxQkFqQlUsVUFBVTs7ZUFFWixlQUFHO0FBQ1YsZ0JBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDZCxrQkFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUN2Qix1QkFBTyxRQUFRLENBQUE7ZUFDaEI7YUFDSjtBQUNELG1CQUFPLEVBQUUsQ0FBQTtXQUNWOzs7MEJBVFUsVUFBVTtBQUFWLGtCQUFVLEdBRHRCLGFBQWEsRUFBRSxDQUNILFVBQVUsS0FBVixVQUFVO2VBQVYsVUFBVSIsImZpbGUiOiJ3aXphcmQvd2l6YXJkLXN0ZXAuanMiLCJzb3VyY2VSb290IjoiLi4vbGliLyJ9