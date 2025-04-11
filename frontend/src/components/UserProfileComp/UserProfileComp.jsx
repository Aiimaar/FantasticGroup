import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import ReactDOM from "react-dom";
import "./UserProfileComp.css";

const UserProfileComp = () => {
    const [userData, setUserData] = useState({ username: "", email: "" });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingField, setEditingField] = useState(null);
    const [fieldValue, setFieldValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem("userId");
                const token = localStorage.getItem("authToken");

                if (!userId || !token) return;

                const response = await axios.get(`http://localhost:3000/api/users/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setUserData({
                    username: response.data.user_name || "",
                    email: response.data.email || "",
                });
            } catch (error) {
                console.error("Error al obtener los datos del usuario:", error);
            }
        };

        fetchUserData();
    }, []);


    const handleEditClick = (field) => {
        setEditingField(field);
        setFieldValue(userData[field]);
        setIsModalOpen(true);
    };

    const handleSave = async () => {
        try {
            const userId = localStorage.getItem("userId");
            const token = localStorage.getItem("authToken");

            const updatedData = {};
            if (editingField === "username") {
                updatedData.user_name = fieldValue;
            } else if (editingField === "email") {
                updatedData.email = fieldValue;
            }

            await axios.put(`http://localhost:3000/api/users/${userId}`, updatedData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            setUserData((prev) => ({ ...prev, [editingField]: fieldValue }));
            setIsModalOpen(false);
            setEditingField(null);
        } catch (error) {
            console.error("Error al guardar los datos:", error);
        }
    };


    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("authToken");
        window.dispatchEvent(new Event("authChanged"));
        navigate("/login");
    };

    const modal = isModalOpen && (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Edit {editingField}</h3>
                <input
                    type={editingField === "email" ? "email" : "text"}
                    value={fieldValue}
                    onChange={(e) => setFieldValue(e.target.value)}
                    className="modal-input"
                />
                <div className="modal-buttons">
                    <button onClick={handleSave} className="modal-save-button">
                        Save
                    </button>
                    <button
                        onClick={() => {
                            setIsModalOpen(false);
                            setEditingField(null);
                        }}
                        className="modal-cancel-button"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="user-profile-container">
            <div className="login-comp-map">
                <img src="/map.png" alt="Map illustration" className="login-comp-map-img" />
            </div>
            <div className="form-field">
                <label htmlFor="username">Username</label>
                <div className="input-container">
                    <input id="username" value={userData.username} readOnly className="input-field" />
                    <FaPen
                        className="edit-icon"
                        onClick={() => handleEditClick("username")}
                    />
                </div>
            </div>
            <div className="form-field">
                <label htmlFor="email">Email</label>
                <div className="input-container">
                    <input id="email" value={userData.email} readOnly className="input-field" />
                    <FaPen
                        className="edit-icon"
                        onClick={() => handleEditClick("email")}
                    />
                </div>
            </div>
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
            {ReactDOM.createPortal(modal, document.body)}
        </div>
    );
};

export default UserProfileComp;
