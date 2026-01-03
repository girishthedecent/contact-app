export default function ContactList({ contacts }) {
    if (!contacts.length) {
        return <p className="empty">No contacts found</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(c => (
                    <tr key={c._id}>
                        <td>{c.name}</td>
                        <td>{c.email || "-"}</td>
                        <td>{c.phone}</td>
                        <td>{c.message || "-"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
