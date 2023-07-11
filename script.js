const input= document.querySelector("input");
const btn= document.querySelector("button");

btn.addEventListener("click", e => {
    e.preventDefault();
    btn.innerText= "Downloading file...."
    fetchFile(input.value);
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl= URL.createObjectURL(file);
        const aTag= document.createElement("a");
        aTag.href= tempUrl;
        aTag.download= "onlineDownloader";
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        btn.innerText= "Download";
    }).catch(() => {
        btn.innerText= "Download";
        alert("Failed to download!");
    });
};