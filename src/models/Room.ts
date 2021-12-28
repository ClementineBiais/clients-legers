class Room {
    name: String;
    availabilities: Map<Date, String>;
    constructor(name: String, availabilities: Map<Date, String>) {
        this.name = name;
        this.availabilities = availabilities;
    }
}

const roomList: Array<Room> = [
    new Room("b437", 
        new Map<Date, string>([
            [new Date(), ""],
            [new Date(), "Bob Tahiti"]
        ])
    ),
    new Room("b223", 
    new Map<Date, string>([
        [new Date(2021, 11, 31, 15, 0, 0), ""],
        [new Date(2022, 11, 31, 15, 0, 0), ""],
        ])
    ),
];