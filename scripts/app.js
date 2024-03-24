// Lấy thẻ div countdown
const countdownElement = document.getElementById("countdown");

// Tạo hàm đếm ngược
function countdown() {
  // Số ngày, giờ, phút, giây
  let days = 826,
    hours = 29,
    minutes = 20,
    seconds = 8;

  // Hiển thị thời gian đếm ngược trên giao diện
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Giảm thời gian mỗi giây
  const timer = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
      if (minutes < 0) {
        minutes = 59;
        hours--;
        if (hours < 0) {
          hours = 23;
          days--;
          if (days < 0) {
            clearInterval(timer);
            // Kết thúc khi thời gian đếm ngược kết thúc
            console.log("Đếm ngược đã kết thúc");
          }
        }
      }
    }

    // Hiển thị thời gian đếm ngược mới
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent =
      hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent =
      minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent =
      seconds < 10 ? "0" + seconds : seconds;
  }, 1000);
}

// Gọi hàm đếm ngược khi trang được tải
countdown();

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove(activeClass);
  }
});

const toggle_category = document.querySelector(".menu-toggle-category");
const category_link = document.querySelector(".category_link");
const activeClassCate = "is-Show";
toggle_category.addEventListener("click", function () {
  category_link.classList.add(activeClassCate);
});
window.addEventListener("click", function (e) {
  if (
    !category_link.contains(e.target) &&
    !e.target.matches(".menu-toggle-category")
  ) {
    category_link.classList.remove(activeClassCate);
  }
});
