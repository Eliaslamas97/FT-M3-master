const { doesNotMatch } = require('assert');
const fs = require('fs')
const request = require('request')


module.exports = {
  date: function(args, done){
    // process.stdout.write(Date());
    done(Date())
  },
  pwd: function(args, done){
    // process.stdout.write(process.cwd());
    done(process.cwd())
  },
  ls: function(args, done){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      let strFiles = '';
      files.forEach(function(file) {
        strFiles = strFiles + file + '\n';
        // process.stdout.write(file.toString() + "\n");
      })
      // process.stdout.write("\nprompt > ");
      done(strFiles);
    });
  },
  echo: function(args, done) {
    // process.stdout.write(args.join(' '));
    done(args.join(' '));
  },
  cat: function(args, done){
    fs.readFile(args[0], function(err, data) {
      if (err) throw err;
      done(data)
      // process.stdout.write(data);
      // process.stdout.write("\nprompt > ");
    });
  },
  head: function(args, done){
    fs.readFile(args[0], 'utf-8', function(err, data) {
      if (err) throw err;
      const firstLines = data.split('\n').slice(0,10).join('\n');
      done(firstLines)
      // process.stdout.write(firstLines);
      // process.stdout.write("\nprompt > ");
    });
  },
  tail: function(args, done){
    fs.readFile(args[0], 'utf-8', function(err, data) {
      if (err) throw err;
      const lastLines = data.split('\n').slice(-10).join('\n');
      done(lastLines)
      // process.stdout.write(lastLines);
      // process.stdout.write("\nprompt > ");
    });
  },
  curl: function(args, done){
    request(args[0], function(err, response, body) {
      if (err) throw err;
      done(body)
      // process.stdout.write(body);
      // process.stdout.write("\nprompt > ");
    });
  }
}