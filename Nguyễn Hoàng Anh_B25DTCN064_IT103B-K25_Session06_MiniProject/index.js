const correctUsername = "admin";
const correctPassword = "12345";

let attempts = 0;
let isLogin = false;

while (attempts < 3) {
    let username = prompt("Nhập tài khoản:");
    let password = prompt("Nhập mật khẩu:");

    if (username !== correctUsername && password !== correctPassword) {
        attempts++;
        alert("Sai cả tài khoản và mật khẩu! Bạn còn " + (3 - attempts) + " lượt.");
    } else if (username !== correctUsername) {
        attempts++;
        alert("Sai tài khoản! Bạn còn " + (3 - attempts) + " lượt.");
    } else if (password !== correctPassword) {
        attempts++;
        alert("Sai mật khẩu! Bạn còn " + (3 - attempts) + " lượt.");
    } else {
        alert("Đăng nhập thành công!");
        isLogin = true;
        break;
    }
}

if (!isLogin) {
    alert("Tài khoản đã bị khóa");
} else {
    let choice;
    let libraries = ["Toán", "Văn", "Anh"];
    do {
        choice = +prompt(
            '--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN 4.0 ---\n' +
            '1. Nhập thêm lô sách mới.\n' +
            '2. Hiển thị danh sách sách.\n' +
            '3. Tìm kiếm sách.\n' +
            '4. Cập nhật tên sách.\n' +
            '5. Đảo ngược thứ tự kệ sách.\n' +
            '6. Nhập kho từ nguồn khác.\n' +
            '7. Thoát chương trình.'
        );

        switch (choice) {
            case 1:
                let newBooks = prompt('Nhập sách mới')
                if (newBooks === null || newBooks.trim() === "") {
                    alert("Bạn chưa nhập sách!");
                } else {
                    let bookArray = newBooks.split(",");

                    for (let i = 0; i < bookArray.length; i++) {
                        let book = bookArray[i].trim();

                        if (libraries.includes(book)) {
                            alert(`Sách "${book}" đã tồn tại, không thể thêm!`);
                        } else {
                            libraries.push(book);
                        }
                    }
                }
                break;

            case 2:
                alert('Đã hiện thị danh sách')
                console.log("DANH SÁCH SÁCH:");
                for (let i = 0; i < libraries.length; i++) {
                    console.log(`${i + 1}. ${libraries[i]}`);
                }
                break;

            case 3:
                let findBook = prompt("Nhập tên sách cần tìm:");
                if (findBook === null || findBook.trim() === "") {
                    alert("Bạn chưa nhập sách!");
                } else {
                    let find = libraries.indexOf(findBook)
                    if (find !== -1) {
                        alert(`Sách ${libraries[find]} được tìm thấy tại vị trí ${find + 1}`);
                    } else {
                        alert(`Không tìm thấy`)
                    }
                }
                break;

            case 4:
                let updateBook = prompt("Nhập tên sách cần sửa")
                if (updateBook === null || updateBook.trim() === "") {
                    alert("Bạn chưa nhập sách!");
                } else {
                    let update = libraries.indexOf(updateBook)
                    if (update !== -1) {
                        let newName = prompt("Nhập tên sách mới")
                        if (newName === null || newName.trim() === "") {
                            alert("Bạn chưa nhập sách!");
                        } else {
                            if (libraries.includes(newName)) {
                                alert("Tên sách mới đã tồn tại!");
                            } else {
                                libraries[update] = newName;
                                alert("Đã cập nhật tên sách thành công!");
                            }
                        }
                    } else {
                        alert(`Không tìm thấy`)
                    }
                }
                break;

            case 5:
                libraries.reverse()
                alert('Đã đảo ngược thứ tự kệ sách');
                console.log("DANH SÁCH SÁCH:");
                for (let i = 0; i < libraries.length; i++) {
                    console.log(`${i + 1}. ${libraries[i]}`);
                }
                break;

            case 6:
                let other = ["Sách Kỹ Năng", "Truyện Tranh"];
                libraries = libraries.concat(other)
                alert("Đã gộp kho sách thành công");
                console.log("DANH SÁCH SAU KHI GỘP:");
                for (let i = 0; i < libraries.length; i++) {
                    console.log(`${i + 1}. ${libraries[i]}`);
                }
                break;

            case 7:
                alert("Hẹn gặp lại!");
                break;

            default:
                alert("Lựa chọn không hợp lệ, vui lòng chọn lại!");
        }
    } while (choice !== 7)
}