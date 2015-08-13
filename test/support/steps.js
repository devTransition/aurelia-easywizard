import {WizardControllerStep} from 'lib/controller/wizard-controller-step'

class TestStep extends WizardControllerStep {
  viewsPrefix = "test/views"
}

class FirstStep extends TestStep {
  id = "first_step"
  ensureValidation(validation) {
    validation.ensure("email").isNotEmpty()
  }
  model = {
    email:"someone@somewhere.com",
  }
}

class LastStep extends TestStep {
  id = "last"
  canValidate = false
}

export {FirstStep, LastStep}