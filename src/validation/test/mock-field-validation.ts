import { FieldValidation } from '@/validation/protocols/field-validation'
export class FieldValidationSpy implements FieldValidation {
  error: Error = null

  constructor (readonly field: string) {}

  validate (input: Record<string, string>): Error {
    return this.error
  }
}
