$(document).on('ready', function () {
    var profileAPI = 'https://api.github.com/users/curiousepic';
    $.getJSON( profileAPI, function (data) {

        $('#gethub-profile-title')
            .replaceWith('<h2><a href="' + data.html_url + '">' + data.login + '</a></h2>');
        $('#gethub-profile')
            .append('<img src="' + data.avatar_url + '" height="300" width="300">')
            .append('<p>True Name: ' + data.name + '</p>')
            .append('<p>Good Company: ' + data.company + '</p>')
            .append('<p>Resides in: ' + data.location + '</p>')
            .append('<p>Reach me: ' + data.email + '</p>')
            .append('<p>Read me: <a href="' + data.blog + '">twitter.com/curiousepic</a></p>')
            .append('<p>Joined GitHub: ' + data.created_at + '</p>')
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
                    .append('<p>Main Language: ' + repo.language + '</p>')
                    .append('<p>Stargazers: ' + repo.stargazers_count + '</p>')
                    .append('<p>Forks: ' + repo.forks_count + '</p>')
                    .append('<p>Last Updated: ' + repo.updated_at + '</p>');

//                function fork(f) {
//                    if (f) {
//                        return "' (fork) + '";
//                    }
//                }
        });
    });
});
