import ResponseMessage from '../models/Response.js';

class BaseError extends Error{
  constructor(message = 'Internal server error', status = 500, errors){
    super();
    this.message = message;
    this.status = status;
    this.errors = errors;
  }

  sendResponse(res){
    res.status(this.status).json(new ResponseMessage(this.status, null, this.message, this.errors));
  }

}

export default BaseError;