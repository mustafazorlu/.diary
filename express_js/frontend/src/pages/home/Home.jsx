import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const res = await axios.get("http://localhost:5000/users");
        console.log(res);
        if (res.status === 200) {
            setData(res.data);
        }
    };

    const onDeleteUser = async (id) => {
        if (window.confirm("emin misin")) {
            const res = await axios.delete(`http://localhost:5000/users/${id}`);
            if (res.status === 200) {
                getUsers();
            }
        }
    };

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.country}</td>
                                <td>{user.contact}</td>
                                <td>
                                    <div className="buttons">
                                        <Link to={`/view/${user.id}`} className="btn btn-primary">
                                            View
                                        </Link>
                                        {/* link ile update sayfasına id gönderiyoruz */}
                                        <Link
                                            className="btn btn-success"
                                            to={`/update/${user.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                onDeleteUser(user.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
