export default class ObjectSchema{
    validators = [(value) => Array.isArray(value)]
    isValid(value){
        return this.validators.every((validator) => validator(value))
    }
    allIntegers(){
            const validator = (value) => value.every(Number.isInteger)
            this.validators.push(validator)
            return this
        }
    custom(){
        
    }
}