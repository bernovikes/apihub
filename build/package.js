const compressing = require('compressing');
compressing.zip.compressDir('../package/article', 'a.zip')
  .then(res => {
    console.log(res);
  });
