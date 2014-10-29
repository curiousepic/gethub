$(document).on('ready', function () {
    var profileAPI = 'https://api.github.com/users/curiousepic';
    $.getJSON( profileAPI, function (data) {

        $('#gethub-profile-title')
            .replaceWith('<h2>' + data.login + '</h2>');
        $('#gethub-profile')
            .append('<img src="' + data.avatar_url + '" height="300" width="300">')
            .append('<p>True Name: ' + data.name + '</p>')
            .append('<p>Good Company: ' + data.company + '</p>')

        ;
    });

    var reposAPI = 'https://api.github.com/users/curiousepic/repos';
    $.getJSON( reposAPI, function (data) {

        $('#gethub-repos-title')
            .replaceWith('<h2>Repositories</h2>');

        $.map(data, function(repo) {
                $('#gethub-repos')
                    .append('<h3> ' + repo.name + '</h3>')
                    .append('<p>' + repo.description + '</p>')

                    ;
        });
    });
});
