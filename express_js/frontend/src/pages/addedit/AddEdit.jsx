import React, { useEffect, useState } from "react";
import "./addedit.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

//1:43:28 de kaldım

const initialState = {
    name: "",
    email: "",
    country: "",
    contact: "",
};

const AddEdit = () => {
    const [data, setData] = useState(initialState);
    const { name, email, country, contact } = data;

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getSingleUser(id);
        }
    }, [id]);

    const createUser = async (data) => {
        const res = await axios.post("http://localhost:5000/users", data);

        if (res.status === 200) {
            toast.success(res.data);
        }
    };

    const getSingleUser = async () => {
        const res = await axios.get(`http://localhost:5000/users/${id}`);
        if (res.status === 200) {
            setData({ ...res.data });
        }
    };

    const updateUser = async (data, id) => {
        const res = await axios.put(`http://localhost:5000/users/${id}`, data);

        if (res.status === 200) {
            toast.success(res.data);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !contact || !country) {
            toast.error("please fill all the fields");
            return;
        }

        if (!id) {
            await createUser(data);
        } else {
            await updateUser(data, id);
        }
        navigate("/");
    };

    const handleInputChange = (e) => {
        //farklı bir input kullanımı güzelmiş
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter a name"
                        onChange={handleInputChange}
                        value={name}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter a email"
                        onChange={handleInputChange}
                        value={email}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="Enter a country"
                        onChange={handleInputChange}
                        value={country}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="contact">Contact</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        placeholder="Enter a contact"
                        onChange={handleInputChange}
                        value={contact}
                    />
                </div>
                <input
                    type="submit"
                    className="btn btn-success"
                    value={id ? "Update" : "Add"}
                />
            </form>
        </div>
    );
};

export default AddEdit;
