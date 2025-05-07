document.addEventListener("DOMContentLoaded", async () => {
    const { data, error } = await supabase.from("calls").select("*").eq("department", "ems");
    if (error) return console.error(error);
    document.getElementById("ems-active-calls").innerHTML = "<h2>Active Calls</h2>" + data.map(c => `<p>${c.details}</p>`).join("");
});