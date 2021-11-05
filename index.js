module.exports = request => {

  const newArr = request.split('\r');
  const [method] = newArr[0].split(' ');

  return method;

};
