import {WizardControllerStep} from 'lib/controller/wizard-controller-step';

describe('WizardControllerStep', () => {
  let controllerStep;
  beforeEach(() => {
    controllerStep = new WizardControllerStep();
  });
  it('should have default values', () => {
    expect(controllerStep.getId()).toBe("")  
    expect(controllerStep.getTitle()).toBe("")  
    expect(controllerStep.getModel()).toEqual({})  
    expect(controllerStep.getView()).toBe(undefined)
    expect(controllerStep.getIsCurrent()).toBe(false)
    expect(controllerStep.getCanValidate()).toBe(true)
  });
});
