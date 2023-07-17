var headingElement = document.querySelector('a');

//Thêm các attribute có sẵn và hợp lệ với thẻ
headingElement.href = 'fb.com'; //thêm attribute href cho thẻ a
headingElement.className = 'heading'; //thêm attribute class cho thẻ a
headingElement.id = 'heading;'; //thêm attribute id cho thẻ a

var headingButton = document.querySelector('h1');
//Thêm attribute tự đặt ra cho 1 thẻ
headingButton.setAttribute('href', 'fb.com'); //thêm attribute href có giá trị fb.com
headingButton.setAttribute('data_type', 'heading'); //thêm attribute data_type có giá trị heading

//Lấy ra giá trị của attribute
headingButton.getAttribute('href'); //fb.com (lấy giá trị của attribute href)
headingButton.getAttribute('data_type'); //heading (lấy giá trị của attribute data_type)
