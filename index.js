var skeletongallery = function(options){

  // commonly set default options here

  // return the function to be given to the `.use` call.
  return function(files, metalsmith, done){

    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      if(!file.skeletongallery) {
        continue;
      }

      var gallery_files = file.skeletongallery.split(',');
      for (var j = 0; i < gallery_files.length; j++) {
        var gallery_file = gallery_files[i].trim();

        file.skeletongallery = gallery_file;
      }
    }

    done();
  };
};
