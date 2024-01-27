export default class ResponseMessage{
  constructor(status, document = null, message = 'Sucess!', errors = null){
    this.status = status;
    this.message = message;
    this.document = document;
    this.errors = errors;
  }
}