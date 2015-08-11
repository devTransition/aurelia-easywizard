import {containerless} from 'aurelia-templating'

export class WizardSteps {
  steps = []
  currentStep = {}
  bind(parent) {
    this.parent = parent
    parent.wizardSteps = this
    this.steps = parent.steps
    this.events = parent.events
  }
  get numSteps() {
    return this.steps.length
  }
  get isLastStep() {
    return this.currentStep == this.parent.lastStep()
  }
  get isFirstStep() {
    return this.currentStep == this.parent.firstStep()
  }
  setCurrent(currentStep) {
    console.log('set current step',currentStep.id)
    if (this.currentStep.id) {
      this.currentStep.setCurrent(false)
     } 
    this.currentStep = currentStep
    this.currentStep.setCurrent(true)
  }
}
