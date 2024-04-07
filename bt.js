document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".btn1");
  
    buttons.forEach(function(button) {
      button.addEventListener("click", function(event) {
        var clickedButton = event.target;
        clickedButton.style.backgroundColor = "red";
      });
    });
  });

 // Thêm sự kiện click cho button gửi đánh giá
document.getElementById('sendButton').addEventListener('click', function() {
    var reviewText = document.getElementById('reviewInput').value.trim(); // Lấy nội dung review và loại bỏ khoảng trắng đầu cuối

    if (reviewText === '') {
        alert('Vui lòng nhập đánh giá trước khi gửi.');
        return;
    }

    // Tạo hàng mới và các ô tương ứng
    var newRow = document.createElement('tr');
    var scoreCell = document.createElement('td');
    var actionCell = document.createElement('td');

    // Điều chỉnh nội dung ô điểm số
    var scoreButton = document.createElement('button');
    scoreButton.className = 'btn1';
    scoreButton.textContent = '10'; // Ví dụ, bạn có thể thay đổi giá trị này dựa trên logic của bạn
    scoreCell.appendChild(scoreButton);

    // Điều chỉnh nội dung ô hành động
    actionCell.innerHTML = `<span class="material-symbols-outlined">open_in_new</span><span class="material-symbols-outlined">close</span>`;
    actionCell.style.textAlign = 'right';

    // Thêm các ô vào hàng mới
    newRow.appendChild(scoreCell);
    newRow.appendChild(actionCell);

    // Thêm hàng mới vào bảng
    document.getElementById('reviewTable').getElementsByTagName('tbody')[0].appendChild(newRow);

    // Tạo và thêm hàng nội dung đánh giá
    var reviewRow = document.createElement('tr');
    var reviewCell = document.createElement('td');
    reviewCell.colSpan = 2;
    reviewCell.textContent = reviewText; // Thêm nội dung đánh giá
    reviewRow.appendChild(reviewCell);
    document.getElementById('reviewTable').getElementsByTagName('tbody')[0].appendChild(reviewRow);

    // Xóa nội dung đã nhập
    document.getElementById('reviewInput').value = '';
});


// Thêm sự kiện click cho các button điểm số
document.querySelectorAll('.scoreButton').forEach(button => {
    button.addEventListener('click', function() {
        const score = this.textContent; // Lấy giá trị của button được click

        // Tạo một hàng mới cho bảng
        const newRow = document.createElement('tr');
        const scoreCell = document.createElement('td');
        scoreCell.textContent = `Điểm số: ${score}`;
        newRow.appendChild(scoreCell);

        // Thêm hàng mới vào bảng
        document.getElementById('reviewTable').getElementsByTagName('tbody')[0].appendChild(newRow);
    });
});

// Lấy span bằng ID
const span = document.getElementById('delete');

// Thêm sự kiện click cho span
span.addEventListener('click', function() {
    // Kiểm tra xem người dùng muốn xóa hay không
    if (confirm('Bạn có muốn xóa không?')) {
        // Xóa hàng chứa span
        const row = this.parentNode.parentNode; // Lấy hàng chứa span
        row.parentNode.removeChild(row); // Xóa hàng khỏi bảng
    }
});
