/**
 * Cho các dữ liệu:
 * - Một Array Object lưu trữ các thông tin người dùng, id, name.
 * - Một Array Object lưu trữ các thông tin id_comment, comment, user_id.
 * 
 * Yêu cầu:
 * - Xuất ra các thẻ <li> có nội dung là <li>name: comment</li>
 */

var users = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
    },
    {
        id: 2,
        name: 'Nguyễn Văn B',
    },
    {
        id: 3,
        name: 'Nguyễn Văn C',
    }
]

var comments = [
    {
        id: 1,
        comments: 'Hi',
        user_id: 1
    },
    {
        id: 2,
        comments: 'Nice too meet u',
        user_id: 2
    },
    {
        id: 3,
        comments: 'Nice too meet u too',
        user_id: 1
    }
]

function getComments () {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(comments);
        }, 1000)
    })
}
// getComments để tượng trưng cho lấy dữ liệu từ API

function getUsers (userIDs) {
    return new Promise(function(resolve, reject){
        var results = users.filter(function(value, index){
            return userIDs.includes(value.id);
        })

        setTimeout(function() {
            resolve(results);
        },1000);
    });
}


/**
 * -    Excutor function của hàm then nhận vào tham số comments chính là mảng comments được khai báo ở đầu bài
 * -    Biến userIDs được dùng để lọc ra ID của những user đã comment 
 * -    Hàm getUsers truyền vào tham số userIDs chứa ID những người đã comment 
 * -    users ở trong hàm getUsers chính là mảng users đã khai báo ở đầu bài
 * -    Biến results dùng để chứa những phần tử có id trùng với user_id ở biến userIDs được truyền vào
 * -    Khi resolve(results) ở hàm getUsers phương thức .then ở trong getUsers nhận giá trị users ở excutor funciton là biến results được return ở hàm getUsers phía trên
 * -    Khi return phương thức .then của getUsers nén vào một object có cặp key-value user-results(ở hàm getUsers phía trên) và comment-comments(mảng comments khai báo ở đầu bài)
 * -    Sau khi phương thức .then đầu tiên return xong toàn bộ thì data ở phương thức .then thứ 2 nhận giá trị là object được return ở getUsers.then 
 * -    data.comment để trỏ tới key comment dùng phương thức forEach lặp từng phần tử trong comment, biến user dùng để lưu thông tin của những người đã comment, nếu value.id(value trong data.user) === valueData.user_id(value trong data.comment) thì nén đối tượng đó vào biến user.
 * */ 
getComments()
    .then(function(comments) {
        var userIDs = comments.map(function(value,index) { 
            return value.user_id;
        });
        return getUsers(userIDs)
        .then(function(users) {
            return {
                user: users,
                comment: comments,
            }
        });
    })
    .then(function(data) {
        var html = '';
        data.comment.forEach(function(valueData, index) {
            var user = data.user.find(function(value, index){
                return value.id === valueData.user_id;
            });

            html += `<li> ${user.name} : ${valueData.comments} </li>`;
        });
        console.log(html);
    });
