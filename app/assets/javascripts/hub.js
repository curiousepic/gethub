$(document).on('ready', function () {
    var profileAPI = 'https://api.github.com/users/curiousepic';
    $.getJSON( profileAPI, function (data) {

        $('#gethub-profile-title')
            .replaceWith('<h2><a href="' + data.html_url + '">' + data.login + '</a></h2>');
        $('#gethub-profile')
            .append('<img src="' + data.avatar_url + '" height="200" width="200">')
            .append('<p>True Name: ' + data.name + '</p>')
            .append('<p>Manufacturer: ' + data.company + '</p>')
            .append('<p>Demesne: ' + data.location + '</p>')
            .append('<p>Reach: <a href="mailto:' + data.email + '">' + data.email + '</a></p>')
            .append('<p>Read: <a href="' + data.blog + '">twitter.com/curiousepic</a></p>')
            .append('<p>Joined: ' + moment(data.created_at, "YYYY-MM-DDThh:mm:ssZ").fromNow() + '</p>')
            .append('<p>Repos: ' + data.public_repos + '</p>')
            .append('<p>Followers: ' + data.followers + '</p>')
            .append('<p>Following: ' + data.following + '</p>');
     });

    var reposAPI = 'https://api.github.com/users/curiousepic/repos';
    $.getJSON( reposAPI, function (data) {

        $('#gethub-repos-title')
            .replaceWith('<h2>Repositories</h2>');

        $.map(data, function(repo) {
                $('#gethub-repos')
                    .append('<h3><a href="' + repo.html_url + '">' + repo.name +
//                        fork(repo.fork);
                        '</a></h3>')
                    .append('<p>' + repo.description + '</p>')
                    .append('<p>Last Updated: ' + moment(repo.updated_at, "YYYY-MM-DDThh:mm:ssZ").fromNow() + '</p>')
                    .append('<p>Main Language: ' + repo.language + '</p>')
                    .append('<p>Stargazers: ' + repo.stargazers_count + '</p>')
                    .append('<p>Forks: ' + repo.forks_count + '</p>')
                    .append('<br>');

//                function fork(f) {
//                    if (f) {
//                        return "' (fork) + '";
//                    }
//                }
        });
    });
});
