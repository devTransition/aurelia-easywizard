import {bindable} from 'aurelia-framework'
import {Events} from 'events'

export class Wizard {
  static inject() {return [Events]}
  @bindable controller = {steps:[]}
  wizardSteps = {}
  constructor(events) {
    this.events = events
    initEvents.call(this)
  }
  get steps() {
    return this.controller.steps
  }
  firstStep() {
    return this.controller.firstStep()
  }
  lastStep() {
   return this.controller.lastStep() 
  }
  get views() {
    return this.controller.steps.map((step)=> {
      return step.view()
    })
  }
  get currentStep() {
    return this.wizardSteps.currentStep
  }
  attached() {
    setStep.call(this, this.firstStep())
  }
}
var setStep = function(newStep) {
  this.wizardSteps.setCurrent(newStep)
}
var getStep = function(action) {
   switch(action) {
      case 'next':
        return this.controller.nextStep(this.currentStep)
      case 'prev': 
        return this.controller.prevStep(this.currentStep)
      case 'submit': 
        return this.controller.submit(this.currentStep)  
    }  
}
var initEvents = function() {
  this.events.subscribe("wizard:action", (action) => {
    let newStep = getStep.call(this, action)
    console.log('get next step', newStep)
    if (newStep) {
      setStep.call(this, newStep)
    }
  })
}