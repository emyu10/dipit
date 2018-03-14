function Movie() {
    this.title = '';
    this.rating = '';
    this.setTitle = function (title) {
        this.title = title;
    };
}

function Celebrity() {
    this.name = '';
    this.age = 0;
    this.photoUrl = '';
    this.setName = function (name) {
        this.name = name;
    };
    this.setAge = function (age) {
        this.age = age;
    };
    this.setPhotoUrl = function (url) {
        this.photoUrl = url;
    };
}
