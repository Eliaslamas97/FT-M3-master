const fs = require('fs')

module.exports = {
  date: function(){
    process.stdout.write(Date());
  },
  pwd: function(){
    process.stdout.write(process.cwd());
  },
  ls: function(){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  },
  echo: function(args) {
    process.stdout.write(args.join(' '));
  },
  cat: function(args){
    fs.readFile(args[0], function(err, data) {
      if (err) throw err;
      process.stdout.write(data);
      process.stdout.write("prompt > ");
    });
  },
}