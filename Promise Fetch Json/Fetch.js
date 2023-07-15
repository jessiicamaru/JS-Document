// Dùng để call API
// API là nơi lưu trữ dữ liệu, được backend xây dựng

const postAPI = 'https://jsonplaceholder.typicode.com/posts';

// fetch sử dụng promise
// response là một promise có thuộc tính .json(). Khi thuộc tính này thực thi, file JSON được parse qua JavaScript types
fetch(postAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (posts) {
        console.log(posts);
    });
