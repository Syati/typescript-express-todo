module.exports = {
    default: {
        options: {
            args      : ["--verbose", "--archive", "--checksum", "--delete"],
            exclude   : ["js/",
                         "stylesheets/",
                         "vendor/",
                         ".gitkeep"
                        ],
            src :  '<%= settings.getAssetsDir() %>' + '/',
            dest : '<%= settings.getPublicDir() %>'
        }
    }
};
