export default class ResponseMessage{
  constructor(status, document = null, message = 'Sucess!'){
    this.status = status;
    this.message = message;
    this.document = document;
  }
}