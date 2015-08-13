System.register(['./wizard', './controller/wizard-controller', './controller/wizard-controller-step'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.globalizeResources('./wizard', './events', './controller/wizard-controller', './controller/wizard-controller-step');
  }

  return {
    setters: [function (_wizard) {
      _export('Wizard', _wizard.Wizard);
    }, function (_controllerWizardController) {
      _export('WizardController', _controllerWizardController.WizardController);
    }, function (_controllerWizardControllerStep) {
      _export('WizardControllerStep', _controllerWizardControllerStep.WizardControllerStep);
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDL0IsV0FBTyxDQUFDLGtCQUFrQixDQUN4QixVQUFVLEVBQ1YsVUFBVSxFQUNWLGdDQUFnQyxFQUNoQyxxQ0FBcUMsQ0FDdEMsQ0FBQTtHQUNKOzs7O2dDQVhPLE1BQU07OzhEQUNOLGdCQUFnQjs7c0VBQ2hCLG9CQUFvQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii4uL2xpYi8ifQ==