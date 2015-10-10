module.exports = plugin;

function plugin(options){

  // commonly set default options here

  // return the function to be given to the `.use` call.
  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){

      var data = files[file];

      if(!data.skeletongallery) {
        return;
      }

      var gallery_html_parts = [];

      var gallery_files = data.skeletongallery.split(',');
      for (var j = 0; j < gallery_files.length; j++) {
        var gallery_file = gallery_files[j].trim();
        gallery_html_parts.push('<div class="four columns"><img src="' + gallery_file + '" /></div>');
      }

      data.skeletongallery = gallery_html_parts.join(" ");
    });
  };
}
