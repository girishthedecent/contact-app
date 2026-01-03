import Contact from "../models/Contact.js";


export const add = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;


        if (!name || !phone || !email) {
            return res.status(400).json({ message: "Name and phone are required" });
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
            message
        });

        res.status(201).json(contact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const view = async (req, res) => {

    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



