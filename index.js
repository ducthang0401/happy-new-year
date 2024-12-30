const contentLetterSrart_actived = "Cảm ơn cậu đã mở chiếc link này ra. Cậu hãy nhấn vô hộp quà, rùi sau đó là bức thư nhé :3" //Lời mở đầu cho bức thư
const mainContentLetter = "Happy new year !!! 2024 đang dần đi qua rồi, hãy quên mọi buồn phiền và giữ lại những kí ức đẹp nhé. Mong rằng những ngày của năm 2025, 12 tháng 4 mùa của cậu đều dịu dàng, bình an, vui vẻ ngắm nhìn nét đẹp của tuổi trẻ 🌸" //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/cute-young-boy-kid-wearing-vest-and-hat-free-png.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/huong.jpg"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    
    // Sử dụng màu pastel để tạo cảm giác nữ tính
    const pastelColors = ["#FFB6C1", "#FFC0CB", "#DDA0DD", "#E6E6FA", "#B0E0E6"];
    const blurLv = [2, 4];  // Giữ mức độ mờ để tạo hiệu ứng mềm mại
    const count = a;

    for (var i = 0; i < count; i++) {
        var randomLeft = Math.floor(Math.random() * width);
        var randomTop = Math.floor(Math.random() * height / 2);

        // Kích thước nhỏ hơn để tạo cảm giác nhẹ nhàng
        var widthEle = Math.floor(Math.random() * 3) + 10;
        var moveTime = Math.floor(Math.random() * 3) + 6; // Tăng thời gian để di chuyển chậm hơn

        var div = document.createElement("div");
        div.classList.add = "snow";
        div.style.position = "absolute";
        
        // Sử dụng màu pastel
        div.style.backgroundColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        
        // Bo tròn mạnh để tạo cảm giác mềm mại
        div.style.borderRadius = "50px";

        // Đặt kích thước nhẹ nhàng và thanh mảnh hơn
        div.style.height = widthEle * Math.floor(Math.random() * 2 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px";
        div.style.marginTop = randomTop + "px";

        // Làm mờ để tạo hiệu ứng nhẹ nhàng
        var blur = Math.floor(Math.random() * 2);
        div.style.filter = "blur(" + blurLv[blur] + "px)";

        // Giảm tốc độ di chuyển, và sử dụng hiệu ứng mềm mại hơn
        div.style.animation = "moveLight " + moveTime + "s ease infinite";

        container.appendChild(div);
    }
}
