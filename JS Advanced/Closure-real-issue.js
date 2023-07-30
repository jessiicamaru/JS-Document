function creatStorage(key) {
    const store = JSON.parse(key, localStorage.getItem(key)) ?? {};
    /**
     * Câu lệnh trên có nghĩa là, store là biến được nhận dữ liệu từ localStorage được chuyển hóa sang object bằng từ khóa parse, key ở đây là tên key lưu trữ ở localStorage, localStorage.getItem(key) dùng để lấy dữ liệu Json từ key đó, nếu key không tồn tại hoặc lấy dữ liệu không thành công thì store được gán bằng một object rỗng
     * Toán tử ?? được ra mắt ECMAScript 2020 (ES11) dùng để gán một giá trị mặc định cho biến, nếu vế trái toán tử ?? không phải là null hoặc là undefined thì sẽ dùng giá trị ở vế trái, nếu không sẽ được gán bằng vế phải
     */

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
        //Tham chiếu tới key của localStorage và chuyển đổi object store thành dữ liệu json rồi truyền vào key của localStorage
    };

    const storage = {
        get(key) {
            return store[key];
            // key ở đây không phải là key của localStorage mà là key của object Json được lấy ra từ key của localStorage
        },
        add(key, value) {
            store[key] = value;
            save();
            // Lưu lại những thay đổi của localStorage
        },
        remove(key) {
            delete store[key];
            // Xóa một cặp key value của object
            save();
            // Lưu lại những thay đổi của localStorage
        },
    };

    return storage;
}

const userSetting = creatStorage('user_setting');

userSetting.add('name', 'Dũng Hoàng');
userSetting.add('age', '18');
userSetting.add('address', 'Hanoi');
