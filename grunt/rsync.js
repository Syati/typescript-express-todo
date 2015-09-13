module.exports = {
    default: {
        options: {
            args      : ["--verbose", "--archive", "--checksum"],
            exclude   : ["js/",
                         "stylesheets/",
                         "vendor/",
                         ".gitkeep"
                        ],
            src :  '<%= settings.ASSETS_ROOT %>' + '/',
            dest : '<%= settings.PUBLIC_ROOT %>'
        }
    }
};
