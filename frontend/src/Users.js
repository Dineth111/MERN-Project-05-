import React, { useState, useEffect } from 'react';
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    const getUsers = () => {  //erturn data
        axios.get('http://localhost:3001/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the users!", error);
            });
    };

    useEffect(() => {
        getUsers();
    }, [submitted]);

    const addUser = (data) => {
        setSubmitted(true);
        const payload = {
            id: data.id,
            name: data.name,
        };

        axios.post("http://localhost:3001/createusers", payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
            })
            .catch(error => {
                console.error("There was an error adding the user!", error);
                setSubmitted(false);
            });
    };

    const updateUser = (data) => {
        setSubmitted(true);
        const payload = {
            id: data.id,
            name: data.name,
        };

        axios.put(`http://localhost:3001/updateusers`, payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error => {
                console.error("There was an error updating the user!", error);
                setSubmitted(false);
            });
    };

    const deleteUser = (data) => {
        axios.delete(`http://localhost:3001/deleteUser/`)
            .then(() => {
                getUsers();
            })
            .catch(error => {
                console.error("There was an error deleting the user!", error);
            });
    };

    const handleEditUser = (user) => {
        setSelectedUser(user);
        setIsEdit(true);
    };

    return (
        <div>
            <UserForm addUser={addUser} updateUser={updateUser} isEdit={isEdit} selectedUser={selectedUser} />
            <UsersTable users={users} handleEditUser={handleEditUser} handleDeleteUser={deleteUser} />
        </div>
    );
}

export default Users;