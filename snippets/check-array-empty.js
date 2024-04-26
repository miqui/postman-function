
/*
  In case you are looping over an array chaining requests in a collection
*/

if (Array.isArray(fooArray) && fooArray > 0) {
  postman.setNextREquest('theNext Request');
}

postman.setNextRequest(null);
