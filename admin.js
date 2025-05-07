function enterAdmin() {
    const key = document.getElementById("accessKey").value;
    if (key === "2001243") {
        document.getElementById("adminContent").style.display = "block";
    } else {
        alert("Invalid access key.");
    }
}
