document.addEventListener("DOMContentLoaded", async () => {
    const { data, error } = await supabase.from("calls").select("*").eq("department", "fire");
    if (error) return console.error(error);
    document.getElementById("fire-active-calls").innerHTML = "<h2>Active Calls</h2>" + data.map(c => `<p>${c.details}</p>`).join("");
});