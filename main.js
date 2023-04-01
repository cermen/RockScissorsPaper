// 바위: 1, 가위: 2, 보: 3
function rsp(pl, com) {
    if (pl === com) {
        console.log("비겼습니다.");
    } else if ((pl === 1 && com === 2) || (pl === 2 && com === 3) || (pl === 3 && com === 1)) {
        console.log("이겼습니다!");
    } else {
        console.log("졌습니다...");
    }
}

const signs = document.querySelectorAll(".sign");
signs.forEach((sign) => {
    sign.addEventListener("click", () => {
        sign.style.backgroundColor = "skyblue";
        const icon = sign.querySelector("i");
        icon.style.backgroundColor = "skyblue";
    });
})