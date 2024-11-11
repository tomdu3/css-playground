const text = document.querySelector(".arch-text p");
text.innerHTML = text.innerText
    .split("")
    .map(
        (char, i) =>
            `<span style="transform:rotate(${i * 6 - 90}deg)">${char}</span>`,
    )
    .join("");
