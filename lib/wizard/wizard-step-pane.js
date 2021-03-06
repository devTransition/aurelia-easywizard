import $ from 'jquery'

export class WizardStepPane {
  static inject() {return [Element]}

  wizardStepView = "./wizard-step-view"
  
  constructor(element) {
    this.element = element
  }
  bind(parent) {
    this.parent = parent
    this.events = parent.events
    initEvents.call(this)
  }
  
  get isActive() {
    let id = this.currentStep.getId()
    return id != undefined && id.length > 0
  }

  get currentStep() {
    return this.parent.currentStep
  }

 get currentStepView() {
    return this.currentStep.getView()
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
     if (this.currentStep.getIsCurrent()) {
        this.submit()
     } 
  })
}