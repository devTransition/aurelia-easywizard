import {StepList} from '../step-list'
import {noView} from 'aurelia-templating'

@noView()
export class WizardController {
  steps = []
  constructor() {
    if (this.initialize) {
      this.initialize.apply(arguments)
    }
  }
  setSteps(steps) {
    this.steps = steps
    initStepList.call(this)
    return this  
  }
  getSteps() {
    return this.steps
  }
  firstStep() {
    return this.steps[0]
  }
  lastStep() {
    return this.steps[this.steps.length - 1]
  }
  nextStep(currentStep) {
    if (currentStep != this.lastStep()) {
      return this.stepList.next(currentStep)
    }
  }
  prevStep(currentStep) {
    if (currentStep != this.firstStep()) {
      return this.stepList.prev(currentStep) 
    }
  }
  getViews() {
    return this.steps.map((step)=> {
      return step.view()
    })
  }
  submit(currentStep) {
    console.log('TODO SUBMIT HERE', this.steps)
  }
}
var initStepList = function() {
  this.stepList = new StepList()
  this.steps.forEach((step) => {
    this.stepList.add(step)
  })
}