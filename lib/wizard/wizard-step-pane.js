import $ from 'jquery'

export class WizardStepPane {
  static inject() {return [Element]}

  wizardStepView = "wizard/wizard-step-view"
  
  constructor(element) {
    this.element = element
  }
  bind(parent) {
    this.parent = parent
    this.events = parent.events
    initEvents.call(this)
  }
  
  get isActive() {
    return this.currentStep.id != undefined
  }

  get currentStep() {
    return this.parent.currentStep
  }
  get currentStepView() {
    return this.parent.currentStep.view()
  }

  submit() {
    let form = getForm.call(this)
    let formSubmit = $(form).find('button[type="submit"]')
    $(formSubmit).trigger('click')
  }
}
var getForm = function() {
  return $(this.element).find('form')
}
var initEvents = function() {
  this.events.subscribe("wizard:validate:current:step", () => {
     if (this.currentStep.isCurrent) {
        this.submit()
     } 
  })
}