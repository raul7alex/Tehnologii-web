setTimeout(function() {
  try {
    throw 'example';
    throw new Exception('example');
  } catch (err) {
    console.log(err);
  }
}, 1000)