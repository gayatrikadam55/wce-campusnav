const connections = [
    {
        from: "main_gate",
        to: "admin",
        distance: 180
    },
    {
        from: "main_gate",
        to: "cafeteria",
        distance: 250
    },
    {
        from: "admin",
        to: "library",
        distance: 120
    },
    {
        from: "admin",
        to: "it_department",
        distance: 150
    },
    {
        from: "cafeteria",
        to: "it_department",
        distance: 200
    },
    {
        from: "it_department",
        to: "green_lab",
        distance: 40
    }
];

export default connections;