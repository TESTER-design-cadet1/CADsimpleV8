let approvedUsers = {};

function enterAdmin() {
    const key = document.getElementById("accessKey").value;
    if (key === "2001243") {
        document.getElementById("adminContent").style.display = "block";
        loadAdminPanel();
    } else {
        alert("Invalid access key.");
    }
}

function approveUser(email, role) {
    approvedUsers[email] = role;
    alert(`Approved ${email} as ${role}`);
}

function loadAdminPanel() {
    const panel = document.getElementById("adminManage");
    panel.innerHTML = `
        <h4>Approve Users</h4>
        <input type="text" id="approveEmail" placeholder="User Email">
        <select id="roleSelect">
            <option value="police">Police</option>
            <option value="fire">Fire</option>
            <option value="ems">EMS</option>
            <option value="dispatcher">Dispatcher</option>
        </select>
        <button onclick="approveUser(document.getElementById('approveEmail').value, document.getElementById('roleSelect').value)">Approve</button>
    `;
}
