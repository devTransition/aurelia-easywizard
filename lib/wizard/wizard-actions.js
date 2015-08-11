import $ from 'jquery'
import _ from 'lodash'

export class WizardActions {
  process(event) {
    let action = $(event.target).data('action')
    if (_.isFunction(this[action])) {
      this[action]()
    }
  }
  nextAction = ""
  isValidCurrentStep = false
  bind(parent) {
    this.parent = parent
    this.events = parent.events
    initEvents.call(this)
  }
  prev() {
    if (this.isNotFirstStep) {
      doAction.call(this, "prev")
    }
  }
  next() {
    if (this.isNotLastStep) {
      doAction.call(this, "next")
    }
  }
  submit() {
    if (this.isLastStep) {
      doAction.call(this, "submit")
    }
  }
  get isLastStep() {
    return this.parent.wizardSteps.isLastStep
  }
  get isNotFirstStep() {
    return !this.parent.wizardSteps.isFirstStep
  }
  get isNotLastStep() {
    return !this.isLastStep
  }
  get hasSteps() {
    return this.parent.wizardSteps.numSteps != 0
  }
  get currentStep() {
    return this.parent.currentStep
  }
}
var initEvents = function() {
  this.events.subscribe("wizard:current:step:valid", (currentStep) => {
    if (this.nextAction && currentStep.id == this.currentStep.id) {
      doNextAction.call(this)
    }  
  })
}
var doNextAction = function() {
   publish.call(this, "action", this.nextAction)
   this.nextAction = undefined
}
var doAction = function(action) {
  this.nextAction = action
  if (this.currentStep.canValidate) {
    publish.call(this, "validate:current:step", this.currentStep)
  } else {
    doNextAction.call(this)
  }
}
var publish = function(event, option) {
  let action = `wizard:${event}`
  this.events.publish(action, option) 
}
