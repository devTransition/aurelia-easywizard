System.register(['./wizard', './controller/wizard-controller', './controller/wizard-controller-step'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.globalizeResources('./wizard', './events', './controller/wizard-controller', './controller/wizard-controller-step');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDL0IsV0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FDNUIsVUFBVSxFQUNWLFVBQVUsRUFDVixnQ0FBZ0MsRUFDaEMscUNBQXFDLENBQ3RDLENBQUE7R0FDSjs7OztnQ0FYTyxNQUFNOzs4REFDTixnQkFBZ0I7O3NFQUNoQixvQkFBb0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIuLi9saWIvIn0=