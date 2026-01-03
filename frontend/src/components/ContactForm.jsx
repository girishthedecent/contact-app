import { useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export default function ContactForm({ onAdd }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [error, setError] = useState("");

    const submit = async (e) => {
        e.preventDefault();


        if (!form.name || !form.email || !form.phone) {
            setError("Name, email, and phone are required");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            setError("Invalid email address");
            return;
        }

        if (!/^\d{10}$/.test(form.phone)) {
            setError("Phone number must be exactly 10 digits");
            return;
        }

        try {
            await axios.post(`${API}/api/contacts/add`, form);
            setForm({ name: "", email: "", phone: "", message: "" });
            setError("");
            onAdd();
        } catch {
            setError("Failed to submit contact");
        }
    };

    return (
        <form onSubmit={submit}>
            <input
                placeholder="Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
                placeholder="Email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <input
                placeholder="Phone"
                value={form.phone}
                onChange={e => {
                    if (/^\d*$/.test(e.target.value)) {
                        setForm({ ...form, phone: e.target.value });
                    }
                }}
            />

            <textarea
                placeholder="Message (optional)"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
            />

            {error && <p className="error">{error}</p>}

            <button disabled={!form.name || !form.email || !form.phone}>
                Submit
            </button>
        </form>
    );
}
