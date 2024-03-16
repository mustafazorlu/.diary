import React, { useEffect, useState } from "react";
import "./view.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getSingleUser(id);
        }
    }, [id]);

    const getSingleUser = async (id) => {
        const res = await axios.get(`http://localhost:5000/users/${id}`);
        setUser({ ...res.data });
    };
    return (
        <div>
            {" "}
            <div className="view">
                <div className="view-item">
                    <b>ID:</b> <span>{user.id}</span>
                </div>
                <div className="view-item">
                    <b>Name:</b> <span>{user.name}</span>
                </div>
                <div className="view-item">
                    <b>Email:</b> <span>{user.email}</span>
                </div>
                <div className="view-item">
                    <b>Country:</b> <span>{user.country}</span>
                </div>
                <div className="view-item">
                    <b>Contact:</b> <span>{user.contact}</span>
                </div>
                <Link to={`/update/${user.id}`}>
                    <button className="btn btn-success">Edit</button>
                </Link>
                <Link to={"/"}>
                    <button className="btn btn-primary">Back</button>
                </Link>
            </div>
        </div>
    );
};

export default View;
