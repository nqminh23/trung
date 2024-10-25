// Khởi tạo chỉ số của slide hiện tại
let slideIndex = 0;

// Gọi hàm showSlides để bắt đầu trình chiếu
showSlides();

// Hàm để hiển thị các slide
function showSlides() {
  // Lấy tất cả các phần tử có lớp 'slide'
  let slides = document.querySelectorAll(".slide");

  // Ẩn tất cả các slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Tăng chỉ số của slide hiện tại
  slideIndex++;

  // Nếu chỉ số slide vượt quá số lượng slide hiện có, đặt lại chỉ số về 1 (slide đầu tiên)
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Hiển thị slide hiện tại
  slides[slideIndex - 1].style.display = "block";

  // Gọi lại hàm showSlides sau 3000ms (3 giây) để tự động chuyển đổi slide
  setTimeout(showSlides, 3000);
}

// Hàm để di chuyển đến slide kế tiếp hoặc slide trước đó
function moveSlide(n) {
  // Lấy tất cả các phần tử có lớp 'slide'
  let slides = document.querySelectorAll(".slide");

  // Thay đổi chỉ số slide hiện tại theo tham số n (n có thể là 1 hoặc -1)
  slideIndex += n;

  // Nếu chỉ số slide vượt quá số lượng slide hiện có, đặt lại chỉ số về 1 (slide đầu tiên)
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Nếu chỉ số slide nhỏ hơn 1, đặt lại chỉ số về slide cuối cùng
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  // Ẩn tất cả các slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Hiển thị slide hiện tại
  slides[slideIndex - 1].style.display = "block";
}
/* Hiếu */

showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Thay đổi slide mỗi 3 giây
}

function moveSlide(n) {
  let slides = document.querySelectorAll(".slide");
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Mảng dữ liệu mẫu cho tìm kiếm
const data = [
  {
    title: "Vịnh Hạ Long",
    region: "north",
    type: "beach",
    service: "tour",
    keywords: "vịnh hạ long, biển, cảnh đẹp",
    image:
      "https://ik.imagekit.io/tvlk/blog/2022/10/kinh-nghiem-du-lich-vinh-ha-long-1.jpg?tr=dpr-2,w-675",
    description:
      "Vịnh Hạ Long nổi tiếng với cảnh sắc thiên nhiên tuyệt đẹp, bao gồm hàng ngàn hòn đảo đá vôi.",
  },
  {
    title: "Sa Pa",
    region: "north",
    type: "mountain",
    service: "tour",
    keywords: "sa pa, núi, du lịch văn hóa",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYFDyidHcm5vMU-WSUOrpK61jpdGeTelUxQ&s",
    description:
      "Sa Pa là một thị trấn thuộc tỉnh Lào Cai, với khí hậu mát mẻ và cảnh sắc núi non hùng vĩ.",
  },
  {
    title: "Huế",
    region: "central",
    type: "culture",
    service: "tour",
    keywords: "huế, văn hóa, lịch sử",
    image: "https://img-cache.coccoc.com/image2?i=2&l=20/287833320",
    description:
      "Huế là cố đô của Việt Nam, nổi tiếng với các di tích lịch sử và văn hóa độc đáo.",
  },
  {
    title: "Bánh xèo",
    region: "central",
    type: "food",
    service: "",
    keywords: "bánh xèo, ẩm thực, món ăn",
    image: "https://img-cache.coccoc.com/image2?i=2&l=21/288819859",
    description:
      "Bánh xèo là một món ăn truyền thống của Việt Nam với lớp vỏ giòn rụm và nhân tôm thịt.",
  },
  {
    title: "Phở Hà Nội",
    region: "north",
    type: "food",
    service: "",
    keywords: "phở hà nội, ẩm thực, món ăn",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgMEBwECAP/EADsQAAIBAgUBBQYFAgQHAAAAAAECAwQRAAUSITFBBhMiUWEUMnGBkaEjUrHB8NHhFTNCkgckJWJy0vH/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQYA/8QAJxEAAgIBAwMEAgMAAAAAAAAAAQIAAxESITEEE0EFIlGRYdEUMnH/2gAMAwEAAhEDEQA/ANAm7NOAZ6uvnqYRuUTwkj1O5Ix4V1iZVo1WJIzdFUbDe+GCrqocvoiWJYKNIB3JJwptVQQ0rTGQbc+nxxjdSugjRHu/ZaMOdo7tURRUhqHb8MIZCT0HOM27Q5rU1yNWsGjpy/gUL7qgckjDBLVz1nYuZ9DIAg97krrH7YWez2YNSJV09S+rx6iG6xkAAj4EH+HFPULSxVDxjMzLVLv28xcr8yzOjojNS08vs8ym9RHEWNvK/QYg7NpVvl81YaaWomK94IbWsoO1h159euCtbnT0desNGJqajdS8MQOgNcksRbkEny+GJcu7SxnM0hmh7ucsQi8BmBBt5g2vtgIXFekLJSpV9h8STs/Vx1sxRoFkjmUWRZAdGxJYAnkW6X5+GJpaqOgrVgpZ3lXu1lIbYgHUAPnz9MD+2NTTZfmtHXUzaKiYktDqARgNuORydx5eeA2Wz6q+6a2DqzPJJu0h2Gq/l0A6WxSypTXrAgb0VFJHI8zSKGo9rgDi4Ycjj54sBT1P3wFyNjGrE7Kw2/n1wVM4twxHopOEJp9K7WUhjJii9T98RkKTuRjqnWgIIHodjjhXfpjxh4uQZhV1syzVEUrJciQsf8sDk6f9I3GPdLR98Yqqr1tFEoeoiRHe4PFwBqFrfDnjnCWnaaQTE0kNQVkILwv4UbgHi5PANjgt2cqaqXPIq+olcVDOFaSFdlBJJLL14+/pjpAADvPNXscTYKdIajLtCFGgkTleCCMZtn2XTUVXHUU8Ucs0BLrCwuWXgkfzm3pjQMj7+SJ3NKIIzKxSPqRf3iOhJubeuFj/AIq08ka5fWQSdzKHdAym3IB/bFusoDoH8iZ7VdxgBzFWkrYK7PjVy2aVKdbqF31FiAbdDYWt8MdzLs9KlXVZvPRmdD41DnU8WwJITjm/rtgdA+YVExFTl9NWa10l47pKw8rgWOGWlqc6Wl7tcozZ1AsO8j1n/dp/W+MzDD+v+SStgGGH1BHZ/s9DmiLnOYaq55SRGszl9IB8zz0+d8G82osvuaemp44qiIqrSwxhQtjuptyedunp1qO+a08Whculpo+8Z/x7gAkknoOpPXFE0lTU2MsrHe4WM2UfLArNTN7jj9Qi9M1i6SMCN2V0qRU45ViBcccYs73629MCcvo+5S5/vgwhXTsScKkAbR0VipQq8T46vL644Wa/u/cYk1Dyxwt6ffFZGYop2Rq3kvG9SRzc04U/UnDHk3ZeWgVTFCC/JaRxc/G2KCdr8zc+EUSD0gY/q2DmRV+b5lIZJKlY6aM+NkhUEn8ovff9MdCl1BcKuSZS03FfcYx0RniQCsMaADhRsPngbnJoa2SN5ou8EV9PeMQm/W19/nit2hzhaUIhlRZ5DaFHBI8+BudsIOfVmZV8rNHO5jja3cIttXBAJ+npg13UKNjE9xuI3Pn2XUdR7IKyOEki6QhY1F/p++IJ+1+Vw3vM8u9gUlDX+l8KNZk1ZnskdXHClPMPw5jKSOOD8rc33tinP2bkavggkRmiLpqnBuFLNv8A/PX0wuLnxBEXEZxHyHthl6gCpnkppG4Rma9vjYDF6lqslziQiNqWeQclCA/1Fr/fGZZ7DW0tSMnoy1XEEMqlUUsl2+FwNunpgfTzewIvdVUivHIQw71+NuF4BuCLEYnunGHGZTuWIeJs02UWjvSlmH5SRq+XnikkQj20kDyJwN7N9ry0KRZgspdSqsyxkn4kfz9sNdZTiri72nA74rdRx3nx9cLX9GjjXT9R9L24aCBpPuj9ccJ36Y+Bk/1IQfU48m5Pu/fGURGAIHpuzHdzpTTTVBmYgAEAA36g23GG+Y0mS0CIXWOCIWDOwFz1J9Sf2GKvZ5RLWyy3usSbDyJ2/S+BnbSuo1r6CmraeSaITqxC36AkfHc/bGz0ukVm0eYC92O0pU9Xlmb5lXTLB7ZJFH3dmsVAvfUL7HcfbyxTqe6p8zTTHrnJvNHKbBlINhsRtcg36YP+xxQ0QrIade/fSWVVsRdt+ObA2v6YB9taanrjqjYJOEOmZXtpYcg26fPEOrHzF7NWn28yVZKakgEMdPUUJuSDvPEb+o8Q++PqBYZgq5rFFI3vRTwb7jqD6fbC92eGdR1EzzwyVVPBs6PIy6jzYMCBcDrhgM8VfCJqBZqe7FWpatQNRH5X6HyJ5+uA2d5dxjaDVrfjH4kVdQPFmdJUGdJaVxoJ2tIF3QEeYIv64hr8oyiprl9lIp61jfukSwfruN/2/THmSeFFY5ijpTpIAsytYqT+Zeh/r0xfmyKWqaKsyvMlk1pZUZhGXHNg26n4WGLV2Gw4xDalcbiUM1jy/J6RYoJKnxgkhQlgbH6cet7fPBbsTnc9RVy0su9OxvC97kMAC3wBuNuhwIqFqlmSn7QQrJUDxEd0obT5hv3vvxivHl80Wcw1GUOtZEHWaKIWWx5ew6EgAAc887YYU6WyJW8NsV4miZvTgFalBYPs/o398Cjzg8je2ZSXIsZIhIAejAXt+uFtnfUbabfA4S6+oJZqHBjdBLLCXZY2WuS/iUx/IHV/TA+sy2nlzeomMjyVtROwTw3EQVQAvx64p9jcyE3aLPKcNcFUKj1QkH9b4KZsk8UlZNTSSKysJ9mt4SgUn5aT9T54epQfx1BEHcMWGEoaU0OXskzNGiAuWK30/wB/64U82amnWan9lVI5E/zwwUA34LAX3sb82wzxS0lTl4Q1sUkzR2DwuSWYfLzthVqclzSmmc0TrMjt+JBIxt8R6+t8EdRsBxKKoJ3k8eZw0uXtRw0ggkVNMUbW0ufINx/QdNsAac1LFYm0w1NMzLNGRqDE2IbqeBt0scEgWl/B7swTgeKCQjVt1H5h/NsfT91FBTvIumcKY5DZjcAllIttYcemBhAMmMpttKcjTOsqm71Uah9HuioiB5H/AHDp/fFzIK0zIzwSR1NKwPeU0iW1f+rc78E9fILnhWFBNQsBV004jtEfDuLsGPH09MV6WT2yoizCmqHpGNxUaATpPUgdR5gbi/XC+kVtnwYlYpqfGeYz9pIIY4YquKKprqeMFWDVB1QW/wBLD5jf+ERlWYx5XQUlXX0yd3OHEMkLlr+W/wBL+gOOJIKDLxSU0aiomfSqvUKVmvudydxfewA+N8BMnaKozwRVDiOnjYxR0qnXp1EKbEjbYlr6bbX4GGsDMi61lwBNk7LPUS5XCawIJQzqyobgWuLX64AupDHw/fDBkv8AyuTiZgRdXnI/8iW/fC04OrgffC3qOAEEa6XJyYo9g55IK2TMgC15bEfmXhv1xpubwRvSNKbvD3TB9AuWiYcgDkjn64Q+yECLT0CAeFnFx8r4Y+w2bVeY/wCMRVTh1pqhjFt7oJPh+G2G6sHKybwc5gCf/o8UaxOhDP4nDdPMeluvrg17dDUsJI3DLexHFsB+2tJBSVTGJAQkd1Db6dWpiB6XS4HqRxthRhzirp66NIiirK4DDTtzgGO22kQC3DOCJo8iUdenczwBmsLMNnXrseRix/hMMtP3UlUZVPu9776n4jn6YV8vzWcXYpEzKjEEr9vhjtPmlXVB1eTSO61fh+Hffpx0xLPgQ+PicrMvzCKpkNPP3RVQs04BDHSTa3mbAXJ3wqqJ6R5KWokNPHIz1EMgX3ZBaxO1wD6W564LZxNUSLUsKmZO4VPCjWD6rX1eeKfbGljjqKZhqLSwl2JPJFvpigOobwFw7gOfEDutUJErw8XeNIYpEaxNiN9hwpuRsRzh07LZec2zhqmMERkABioXRGCQeObgaQfVvLCzlFOlRNFHIWKPdmW/Nrn9sbR2Yo4KeghMSAF4w7bcmwt8hxhilNZ/AigXJI+Jerx3WVVF/DqjsB5X2H64Ve5B5L/7zg/2kkZaOwOzSAH1sCcA42OgcYS9RfNgHwJq9OMJP//Z",
    description:
      "Phở Hà Nội là món ăn truyền thống của thủ đô, với nước dùng đậm đà và bánh phở mềm mịn.",
  },
  {
    title: "Nha Trang",
    region: "central",
    type: "beach",
    service: "car",
    keywords: "nha trang, biển, du lịch biển",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHMAcwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQAGAgMHAf/EADsQAAIBAgUBBgQEBQIHAQAAAAECAwQRAAUSITFBBhMiUWFxFDKBkSOhscEVQtHh8FJyFiQzQ2KSsgf/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAtEQACAQQABQEGBwAAAAAAAAABAgADERIhBDFBUWETFCIyQnGBBRUzkaGx8f/aAAwDAQACEQMRAD8At1LQz1LskMZZlFyOMeS00kL6ZUZG8mFsWIwrDVtUK4Ov5lI49sb6qnpa1AXdlK3CknjjHX6+/E5fQ15lVCYyCYaTZXKhBitIjcMNvv5YFaIozK1rqbHFBUB5SZQjnBwmPdGMZaqNEYxgMQDYs2lSdNxueQb8i+MXnl7uR41UgBil43N9ha+3nf6YGYhxM26ce6cYCoOl27skLchACrkAD+VgCSTfj0xvTS+rQQdLFTboRjBgZipHOa9OPNON+jEKYN4LTRpxiVwRoxNGNeC0FKYwKYLKDGJQYOU2MF0YmCdOJg5RcYxaCa19QJ9QbHBUbOUCyIL+YOKxTdqtRCuEdulrr+u2GceewvZWIBPRhbHIUftOsVE7x0jOqFAUsRbUvIwnmTXMoD6lJ8Gk/Pax1XB+Xci3U49qM1AjKqwV3IQb259ehwPSVeiWWaZvmPg3Fgo2H5b+7HC2cco90POGLktMsyygqHC6VbqPQeQ9BtjeKHSrh12I/lGAJs7p7iIP424A3I8j/nr5YHXM1WMpLI5brp6b+/6AY3vzEr1js0UDqyWBU7EaQQ37YXVlGadxJGzNGu2scqLgkX8ttxz5cWGpM6jhUAGVjwf8v+/2xv8A4xTNsVk97D6HGAcTEoecziBdLsLMNmFja/pfp642d0bXsftgairYROoRkPEZ4B076b33sDqUAeYwz7znBzMXAQIpjEpgpjH1GMHKMb2+2GzMXCDmL1xi0Wnrf2wT3wUWVRbrfGt6sG4smrpjZGDEQcgjpiY3DMdIt4NvM4mDm3aDEd5yM0NfG/4ckz72uHA28+cOqCOthCCSrLxjlWQE297/ANcBJM+2x+2CYpZG4/PHQUE4hVJjCScpVU0gOlVYgxlrA7Hfrf2O3Xm2M4s3RqeM+FxoFiSR0G/GFdW0qRayTsbnncdeNzt0tjVLFFBTxmJxbghjex6dOP6jC4DLZlPWIUxrDmcLVC97HG0qA6nQFfL38/8AL4xzTPIaOOJjA7mRwlgp9+P3wtOYHuTAqoWdtgBYg+pI2xonLDMlhkYu48NlHJO529Bb7nCMvQHcrTqcmIuLS0rUog3ZL9bjf9RjFK2RR+N58hP74QxziVHjkk0Oo26MfY/5/Qf4+ePxX1leWIsy+4wUAbcSrUNMkGOzO8TtJ33RLsVUXIbbr74MOayoRaRwL8An+uKvNnMUyRoquDfdrLfY8ff164d5HmuXTRy01TJKkrqVRwACh6G3W2GxxUsReTNYlwl7TfDnU0LPaoYh31m4F+nr6YXZh2lip4545K2ZmmDeCJQSL7c32++Cq/s3mEkDvSSxV9OW1N8OCJFUDdT1H0DeuKjPTUMMvdNUP3heyFnJvuBbStwLepHtiD8QvyCdC0X5uY3qO3UjSEx08hiVVADS2uQb8AfTnC2TtVnU0xdZTEGN1ihjU2+rXt98E5XRZbUVCU5V2LXvIr2f16W+lsK8+hiy+sanhnkRFtYyrfUeoubef6jEnaoBuUUKeUMOeZwTc1kw9NSn9x+mJhH8LUuAypTlSLgiRTcfQ4mI+o3ePjLVSS95Isbx6S2w06m39wLfnhhHGqLqmj26aLtcfbGeQ5sjEw1WWxxSol0WprYzK4BNiEHva+NGa55NUVXw1PR07kahM1HXaiu3FgobV5Dbjpii8UQNm8U8GOk9qYo9B0RH3BAH64VMKmnpysaqEYDSCykWP9hgunnavoWoVp6sNGig/HuS8p5LWWT0HkB064HaQRfCZVPYszFnkUk+C+qxFx05+h9w3GjkREHBkG4MnwhgphVy20lS3hOo7dLDe/G4O3XC+nkeCUOZmEm7Ehza556jbfBOY5hUFGRfxBq1PE0hDyMpsNNrkAnSfYNgFK3KRUPHUZlmsUgJHcM2o6iDcbkH09b4PtIqHa3lqfDemvuviT2/2GPN3pdzLrcm4BNzb/N+uDpKilWiWpkSDvD8rCQ6rWsb9PrbpYemiqraGQQ0uWSVWZo6uZZHBCoBazHk+fNsDyZtR0rhaihlYMgA7pFZQbWubnzv9umMvEhboRYRa3Cl7OGu3c/x3+n2g2vUtl2XotrfljOKnqXIaGGdjfbQpODqPMKqnpLpS5fUSlrISGjYXHBBJA9CNXTBy9ps9p7FMtiikDBY1MIcSmwItZfbri35goFlE4T+GuxuzR12Zps7hiVpO+Rr3F7s1vXyxYa2fJaijLZgySVrHSDRsNZboCw8N9t7+RxW6ukz/N8ojlpKuWnksDJBPPq38gQxA5PIPPOKxLVPltRKvaWKpqJ1AaFrrIFHQql9I3BNyNtvXHLUcs1zqd1CiKK4g3+s2P8AAfxGaGkr4zPMD3c0FWsajoNZ+QtuNgoOBHy+CvoJY5J5nzSObunqKuRY4U8VyBc2J67b7+WNEkb1za6yvSpjVifho/DosNri1h7K35A2Hr46rL6yGVtEkMI0qKm7iRQbgHztubdDhC9tSuN9xquXdnoUWP8A4hqiVUX7hI5EvbcBtG4xMD1na7PHqHakR44TbSsMZZRt0NsTDZeIJ2WlSKRQI6OVLj/uaUHNuOON8Jc1yFK+F0Z0o5iQ6fDKPCR1YEeLf2+l8BDtU82sQiIqguWGqxPle/7YS1naW80ahp5O8VmS692gtuTp6/X++CStrGOLjYiarbO8qqZaeGCGQyFTHKshIUb+NFY2B+baw9thhcY6k0lbUzGoqKgOyvVSLZu7H+kHqRzta1xbfFmhrWzjNKZZw0VLFA9RM7rYoum+zC4HIA3NrnG6teCkyyWoipKfu3J7tJdSPJ/t3uST5D7Y82pVIeyDUcliNmc+yanfM6kCGGQfDxsWYKFZOlg22/P3OD4ckqWn8XfVBtoIYhiri1hsR0PXBVJBlub0sT0MkWWyaxOAqtc+YFx4htzewPXHQMpMaMsVFKigsNm5a3JJBuTsd7Y6lp1HJI0IhIXnKBD2fzIPLTNFUUwS0Y7wyRpIOeSPpte/XBQ7GVElQkzTUUOgsbIHN/Li2+OlVUs6IjSTQBSAD4Sb7Dzt6nFa7QSLli1OYJI3w8sQTQG0mFxfcEnYbeXnidelXVckMwZSbRDmeVRZVSIe9jmSo0BjK5QiTxE2HGnb156YlHmlTlNCKulgilWoBdVgcyGJTp0g8n7+uHOYE9oM0p4CZacyIsYkisym42uLGwtfdSOcIZKV4gINCySLK1MQrDYrtcEckadrjqcSSpazCMV6R3Qdt6KshkgGWs9QdiiRXOoeewPN8DZmrZvFD32SVEOjUY5Jado1tb5dW1gTb7cc4e5VHQ0aJSxVIMynRLMfGZXtcg+gvxfD2WocUemMQMB170r6G+PUsxWx6yGr85ymoy4z961DW0i0k0YQqkmu1uAqlzueN8B5VlTpUNF/E6SKX5Varg1o+/y7lgPUkDm2L5ntNS92cwFLBLOttaodJK+YbexHTbFePwmZVIpXpKmGtJ1925BC8kM0l7DryOh8sclTOm1pVLMNQSTL6+FzFUZpTiVPCwiE4QW8tItb22xMEQ0MXdDRWQRL0jlJDL76bjExD2ow/aJsxnnog8KQVEE0bO0kclO95vFcEs3A55tb88NZgZcvWsYzyOlKJO7jAQMxG/Tm3rgf+JVxywLT106pHcOkISMIx2KhbcflvhTT1DUlRHT5qaapgMwn01KAsykEaRYHbbi3J4wrpmddJgRLrH8WnZWCrytpKVmdkqZVOpuLL4ugsfTfnFdzGvaOoroJqpE076gNQjN9idVhdiDcG/PXDk9o41omWpkmg0MBCIpjALG5Wy7Ebg7bXtyMK89zTLM7ljSujnp62Rwso7hWuBYB9OnUfUm23HlhUQE7HKNcGEvSVJyOFMulypaWJQwqHqWHrb5dI3Orf8sKqXMszpJv+Tqw+hQnexDvlQnkXtza59vbBVD2dzOSunyMTSR02zvJSsF+IToFN7XI9+N8G0HZeqTNII6YGmyqFLVMjuoCMo/U9bjz4uMdaVGW4ELhW6QOoz/N54StRUuNdgAyLF9mNunnbDKgirasyUwpTXTSOEkshdIiT4ixuLkWvsbdL9MO+ydDl9Xmsz65ql41vpl0/iC27RqG1gEr/Nfa3vi3VsR+Co6bKitGst2EY/DOkLsABxyPXBao7paKEUbiuk7OvSRJXU9FL8ZrJSnkmQojE7sTttbpc7bYq2dSSUlb3GY5V3VRIvgmSPTHsLkkqbXsBY+dt8N5Ms7VzZnTSjMkShjB1hKpxrY3FifTbFinru5pYIKt45wqBZgjqXkf6E2HrzviaUSTytCWEoE3Y/MKbL6XM8vrzMXDHWoKO2o+ZOm+497bYRSdp8/hvATVtSmKxleDUt/cj98X/tDmE1Zl1TBGscMNMO9IJJsVa2knr4rDpjnJ7QFIRAzHu9Wu0aEAqW+U2v52PXjbfF3qPTIC7kwgaZQZznFVIkTQzKjMv4jLYHf/AEm3S+GUhglWpnnqFpjKyqsrEroAIFjtfz3IPzDCKbN5p9QhpI0YhXjScbAqdtjtwDa3lgaVa+eUyzSLPMRZSFNgeb8Dpe+3X3xz1MqjAvCqhI3aGZj81O1vDcSk3tt6eWJhYkfgGkIwtyAjfnbEwlhGj6KnqHIpIZ6ejgv3mmWli78hSNyo6GwFyR5YOnzITZgZ6mph7imp3VyQIi72vuVFr2sQLHn7K6XLJ827O1MFQY4KlyCKaCnCqighjuGuSwKn6jCuqpZJqrMjPlsdRVU6eCLVoZRwXJBF+p5xWriX8SdiBuMcmGY55k9dUZRS09oHBWSS4JZt2Hvv088H0Mda2WVHxtIRPNIQWZWi/D5uLg24xn2AyuKKllrFglp5WlJCSCzaeQB102sPcHF37l84p5MtnqpY7gtEytbcdL829B0vjld1yNNe8YAHU5xTR5dDnAoqRha7LJqB725UkkNtt7Ys2QZhTQUec5eKe1O6vLeJWe7WUcNbdri4tzhLWaaDOpnfUKqmj1NAklvFuATa+1sZdn85NX2hoqj+Hz2VHknKfKSP5rXuR1sPscBcmPXzAujHeXIHhjMMDU0lFaOBruADoG43354vjfX9oak1dPSZlDHIIVJhmlXT3nmRbbb77XsL4CzGOWPKoPh5Xd6utjqZXMu4S/AuAbWAFgBzgHtBmlBLaZoIJ6aOIqrSrqZm1C4VT5afmOwv14OoOyVNbEYbjLIO1eQHLo3zdqVqv4ks6sVGmMDZQCeNhYY8zLtZlCyLMtVSR0slP3Xd06lnL7G/h2Hynk4598RNUokU1xRxghVbcR3Oq5Pn68ewtjKTLqYU8LBkGr/qSFdWk72F9tV/122x6HrWO4CLw7NO0Ek2XR0lMfhaIcLKQZZL7kvsbAX48+p2wPOqLT3Md5HVSjoPla2/AN9r7evrjbEkVPAkgaK+m4G+zkcWvtbb052xjmFfro0Vo2SVW8JPzf8AiWsNI8rWxBnLtoQjlBneJ63uo14YWBfwrfztc2v69euC3vJGO8jVSoK8kjzJ6+Z+n0wJlVEXL1NVKIYoiR3lS2kht72HzX9PTBdTX5XTBZqZTWS3ASWqGlf92gWLfX6YJS51NBVp8xmGuGCtdL2DRo2k222sPTEwVNnuYPK7Gedrm90uB+RGPMa/iG/mdH7Lsav/APOpK2ptJUwzIscjDdB4dh/7H/AMc27Jfj5bnk8pLSlTdydzcEke2JiY1b9L9v7h+WdAyEBMmotIAvTp/wDODaSVzOu/AuLdDiYmPIb4pOO6OOKpgdp4YXZrlj3a7mx3O2Obdpquoyr4FMvmeBTRNfSfMAHExMelT2gvKv8ADK5V5jWVMFFHPUOysIw29r2Z7cew+2NudHVmJYgXNRImwsLA7C2JiYoAAQB5iL8MFpvA0Crw9iwO97hb39Nztg6mqZtca94xClmFzfcAEfnjzEwrC4mgTSOIioYgWY2G1uDt5Y10iLJUxmQa9TAHVveysf2GPMTDrMIx7QxrNnVVFKNSQ+CMH+UBen9cL6WKMoPD0c29QDb9MTEwpJxiGPspoKaqy6GeeMtI4OohyOvkDj3ExMcrMcjuYT//2Q==",
    description:
      "Nha Trang là thành phố biển nổi tiếng với bãi cát trắng và làn nước trong xanh.",
  },
  {
    title: "Đà Lạt",
    region: "south",
    type: "mountain",
    service: "tour",
    keywords: "đà lạt, núi, khí hậu mát mẻ",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Đà Lạt là thành phố cao nguyên với khí hậu mát mẻ quanh năm, nổi tiếng với các khu vườn hoa.",
  },
];

// Hàm tìm kiếm nâng cao
function advancedSearch() {
  var keyword = document.getElementById("keyword-input").value.toLowerCase();
  var region = document.getElementById("region-select").value;
  var type = document.getElementById("type-select").value;
  var service = document.getElementById("service-select").value;

  // Lọc các kết quả dựa trên điều kiện tìm kiếm
  var results = data.filter(function (item) {
    var matchesKeyword =
      keyword === "" || item.keywords.toLowerCase().includes(keyword);
    var matchesRegion = region === "" || item.region === region;
    var matchesType = type === "" || item.type === type;
    var matchesService = service === "" || item.service === service;

    return matchesKeyword && matchesRegion && matchesType && matchesService;
  });

  // Hiển thị kết quả
  var resultsDiv = document.getElementById("search-results");
  resultsDiv.innerHTML = ""; // Xóa kết quả cũ

  if (results.length > 0) {
    results.forEach(function (result) {
      var resultDiv = document.createElement("div");
      resultDiv.className = "result-item";

      // Thêm hình ảnh
      var img = document.createElement("img");
      img.src = result.image;
      img.alt = result.title;
      img.className = "result-image";

      // Thêm tiêu đề
      var title = document.createElement("h2");
      title.textContent = result.title;

      // Thêm mô tả
      var description = document.createElement("p");
      description.textContent = result.description;

      // Thêm các thành phần vào div kết quả
      resultDiv.appendChild(img);
      resultDiv.appendChild(title);
      resultDiv.appendChild(description);

      // Thêm div kết quả vào vùng kết quả chính
      resultsDiv.appendChild(resultDiv);
    });
  } else {
    resultsDiv.textContent = "Không tìm thấy kết quả nào!";
  }
}
