module.exports = plugin;

function plugin(options){

  options = options || {};
  var gallery_root = options.root + '/' || './';
  var columns = options.columns || 'three';

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
        var file_url = gallery_root + gallery_file;
        gallery_html_parts.push('<div class="' + columns + ' columns"><img src="' + file_url + '" style="width: 100%;" /></div>');
      }

      data.skeletongallery = gallery_html_parts.join(" ");
    });
  };
}
