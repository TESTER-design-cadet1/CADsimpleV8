function adminLogin() {
    const key = document.getElementById('admin-key').value;
    if (key === "2001243") {
        document.getElementById('admin-content').style.display = 'block';
    } else {
        alert("Invalid admin key.");
    }
}