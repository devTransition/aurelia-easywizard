import {noView} from 'aurelia-templating'

@noView()
export class WizardControllerStep {
  title = ""
  id = ""
  isCurrent = false
  canValidate = true
  viewsPrefix = ""
  model = {}
  getView() { 
    if (this.id) {
      return `${viewsPrefix}/${this.id}.html`
    }
  }
  setIsCurrent(current) {
    this.isCurrent = current
  }
  getId() {return this.id}
  getTitle() {return this.title}
  getCanValidate() {return this.canValidate}
  getIsCurrent() {return this.isCurrent }
  constructor() {
    if (this.initialize) {
      this.initialize()
    }
  }
  getModel() {
    return this.model
  }
  updateModel(model) {
    Object.keys(this.model).forEach((property) => {
      this.model[property] = model[property]
    })
  }
  ensureValidation() {
  }
}

