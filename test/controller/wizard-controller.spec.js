import {WizardController} from 'lib/controller/wizard-controller';
import {FirstStep, LastStep} from 'test/support/steps';

describe('WizardController', () => {
  let controller;
  let steps;
  describe('with no steps', () => {
    beforeEach(() => {
      controller = new WizardController();
    });
    it('should have default values', () => {
      expect(controller.getSteps()).toEqual([])  
    });
    it('allows you to set steps', () => {
      let steps = [FirstStep, LastStep]
      controller.setSteps(steps)
      expect(controller.getSteps()).toEqual(steps)  
    });
  })
  describe('with steps', () => {
     beforeEach(() => {
      steps = [FirstStep, LastStep]
      controller = new WizardController();
      controller.setSteps(steps)
    });
    it('can get the first step', () => {
      expect(controller.firstStep()).toEqual(FirstStep)
    });
     it('can get the last step', () => {
      expect(controller.lastStep()).toEqual(LastStep)
    });
    it('can get the next step', () => {
      let nextStep = controller.nextStep(FirstStep) 
      expect(nextStep).toEqual(LastStep)
    });
    it('can get the prev step', () => {
      let prevStep = controller.prevStep(LastStep) 
      expect(prevStep).toEqual(FirstStep)
    });
  })  
});
