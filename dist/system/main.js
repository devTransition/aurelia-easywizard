System.register(['./wizard', './controller/wizard-controller', './controller/wizard-controller-step'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(frameworkConfig) {
    frameworkConfig.globalResources('./wizard', './events', './controller/wizard-controller', './controller/wizard-controller-step');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJTyxXQUFTLFNBQVMsQ0FBQyxlQUFlLEVBQUU7QUFDdkMsbUJBQWUsQ0FBQyxlQUFlLENBQzdCLFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0NBQWdDLEVBQ2hDLHFDQUFxQyxDQUN0QyxDQUFBO0dBQ0o7Ozs7Z0NBWE8sTUFBTTs7OERBQ04sZ0JBQWdCOztzRUFDaEIsb0JBQW9CIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiLi4vbGliLyJ9