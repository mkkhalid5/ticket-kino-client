'use server'
import { headers } from "next/headers";
import { auth } from "../auth";

const baseUrl = process.env.NEXT_PUBLIC_API_URI;

export const dataGet = async (path) => {
    const {token} = await auth.api.getToken({
        headers: await headers(),
    })
    const response = await fetch(`${baseUrl}${path}`,{
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`,
        }
    });
    return  response.json();
};

export const dataPost = async (path, data) => {
    const {token} = await auth.api.getToken({
        headers: await headers(),
    })
    const response = await fetch(`${baseUrl}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    return await response.json();
};

export const dataDelete = async (path) => {
    const {token} = await auth.api.getToken({
        headers: await headers(),
    })
  const res = await fetch(`${baseUrl}${path}`, {
    method: 'DELETE',
    headers:{
        authorization: `Bearer ${token}`,
    }
  });
  return await res.json();
};

export const dataUpdate = async (path, data) => {
    const {token} = await auth.api.getToken({
        headers: await headers(),
    });
    const res = await fetch(`${baseUrl}${path}`, {
        method: 'PATCH',
        headers: {
            'content-type' : 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });
    return await res.json();
};

