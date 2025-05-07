// Team and unit assignment utilities
const teams = {
    police: [],
    fire: [],
    ems: []
};

function assignUnit(team, unitId) {
    if (!teams[team]) teams[team] = [];
    teams[team].push(unitId);
}
