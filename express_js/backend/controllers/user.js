import { v4 as uuid } from "uuid";

let users = [
    {
        id: uuid(),
        name: "john",
        email: "john@example.com",
        country: "turkey",
        contact: "123456789",
    },
    {
        id: uuid(),
        name: "ash",
        email: "ash@example.com",
        country: "sweden",
        contact: "987654321",
    },
];

const getUsers = (req, res) => {
    res.send(users);
};

const getSingleUser = (req, res) => {
    const id = req.params.id;
    console.log(id);
    const user = users.find((u) => u.id === id);

    if (!user) {
        res.status(400).send("kullanici bulunamadi");
    }
    res.send(user);
};

const createUser = (req, res) => {
    const { name, email, country, contact } = req.body;

    console.log(req.body);

    const user = {
        id: uuid(),
        name: name,
        email: email,
        country: country,
        contact: contact,
    };

    users.push(user);

    res.send("yeni kullanici olusturuldu");
};

const deleteUser = (req, res) => {
    const id = req.params.id;

    const user = users.find((u) => u.id === id);

    users = users.filter((u) => u.id !== id);

    if (!user) {
        res.status(400).send("kullanici bulunamadi");
    }
    res.send(users);
};

const updateUser = (req, res) => {
    const id = req.params.id;

    const user = users.find((u) => u.id === id);

    if (!user) {
        res.status(400).send("kullanici bulunamadi");
    }

    const { name, email, country, contact } = req.body;

    user.name = name;
    user.email = email;
    user.country = country;
    user.contact = contact;

    res.send(user);
};

export { getUsers, getSingleUser, createUser, deleteUser, updateUser };
