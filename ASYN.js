const url = "https://api.github.com/users";

function load_data(url) {
    return fetch(url).then((response) => response.json());
}

function User(name1) {
    return load_data(`https://api.github.com/users/${name1}`);
}

function display(url) {
    return new Promise(function (resolve, reject) {
        let pic = document.createElement("img");
        pic.src = url.avatar_url;
        document.body.append(pic);
    });
}

load_data(url).then((user) => User("HasimNewCoder")).then(display)