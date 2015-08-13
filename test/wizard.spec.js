import {Wizard} from 'lib/wizard';
import {Container} from 'aurelia-dependency-injection';  
import {BehaviorInstance} from 'aurelia-templating';
import {FirstStep, LastStep} from 'test/support/steps';

describe('Wizard', () => {
  let wizard;
  beforeEach(() => {
    new Container().makeGlobal();
    wizard = BehaviorInstance.createForUnitTest(Wizard);
    propertyAccessed = false 
  });
  describe('initial state', () => {
    it('should have default values', () => {
      expect(wizard.steps).toEqual([])  
      expect(wizard.firstStep()).toEqual(undefined)
      expect(wizard.lastStep()).toEqual(undefined)  
      expect(wizard.currentStep).toEqual(undefined)  
      expect(wizard.views).toEqual([])  
    });
  });
  let propertyAccessed
  let accessedProperty = () => {
    propertyAccessed = true
  }
  let listenToObjectPropertyAccessed = (object, property) => {
    Object.defineProperty(object, property, {get:accessedProperty})
  }
  describe('delegates control to wizardSteps', () => {
    it('wizardStep.currentStep', () => { 
      wizard.wizardSteps = {
        currentStep: "currentStep"
      }
      listenToObjectPropertyAccessed(wizard.wizardSteps, "currentStep")
      wizard.currentStep
      expect(propertyAccessed).toBe(true)
    });  
  }) 
  describe('delegates controll to controller', () => {
    it('firstStep', () => { 
      spyOn(wizard.controller, "firstStep")
      wizard.firstStep()
      expect(wizard.controller.firstStep).toHaveBeenCalled
    });
    it('lastStep', () => { 
      spyOn(wizard.controller, "lastStep")
      wizard.lastStep()
      expect(wizard.controller.lastStep).toHaveBeenCalled
    });
    it('views', () => { 
      spyOn(wizard.controller, "getViews")
      wizard.views
      expect(wizard.controller.getViews).toHaveBeenCalled
    });
    describe('accesses controller property', () => { 
      it('controller.steps', () => { 
        listenToObjectPropertyAccessed(wizard.controller, "steps")
        wizard.steps
        expect(propertyAccessed).toBe(true)
      });
    }) 
     describe('accesses controller property', () => { 
      it('controller.steps', () => { 
        listenToObjectPropertyAccessed(wizard.controller, "steps")
        wizard.steps
        expect(propertyAccessed).toBe(true)
      });
    })     
  })
  describe('events', () => {
    describe('responds to wizard:action event', () => {
      let steps = [FirstStep, LastStep]
       beforeEach(() => {
        wizard.controller.setSteps(steps)
        wizard.wizardSteps = {
        currentStep: undefined,
        setCurrent: function(step) {
          this.currentStep = step
        }
      }
      });
      describe('next', () => {
        beforeEach(() => {
          wizard.attached()
        });
        it('gets next step', () => { 
          wizard.events.publish("wizard:action", "next")
          expect(wizard.currentStep).toBe(LastStep)
        });
         it('gets prev step', () => { 
          expect(wizard.currentStep).toBe(FirstStep)
          wizard.events.publish("wizard:action", "next")
          expect(wizard.currentStep).toBe(LastStep)
          wizard.events.publish("wizard:action", "prev")
          expect(wizard.currentStep).toBe(FirstStep)
        });    
      })  
    });
  }); 
});
