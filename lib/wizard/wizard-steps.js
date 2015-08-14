import {containerless} from 'aurelia-templating'

@containerless()
export class WizardSteps {
  steps = []
  currentStep = {
    getId:() => {
    },
    getView: () => {

    }
}
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
    if (this.currentStep.getId()) {
      this.currentStep.setIsCurrent(false)
     } 
    this.currentStep = currentStep
    this.currentStep.setIsCurrent(true)
  }
}
