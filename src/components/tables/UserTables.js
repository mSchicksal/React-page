// IMPORTS
import React, { useState } from 'react';

const UserTables = ({users}) => {

    return (
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Foto</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.items.map(x => (
                    <tr>
                        <th scope="row">{x.id}</th>
                        <td>{x.name}</td>
                        <td>{x.lastName}</td>
                        <td> <img class="user-icon" src={x.icon} alt="Profile"/> </td>
                        <td>
                            <i title="Ver" class="icon blue bi bi-eye"/>
                            <i title="Editar" class="icon green bi bi-pencil-square"/>
                            <i title="Borrar" class="icon red bi bi-trash"></i>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
}

export default UserTables;