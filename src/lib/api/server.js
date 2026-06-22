const baseUrl = process.env.NEXT_PUBLIC_API_URI;

export const dataGet = async (path) => {
    const response = await fetch(`${baseUrl}${path}`);
    return  response.json();
};

export const dataPost = async (path, data) => {
    const response = await fetch(`${baseUrl}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return await response.json();
};

export const dataDelete = async (path) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: 'DELETE',
  });
  return await res.json();
};

export const dataUpdate = async (path, data) => {
    console.log('d',data);
    const res = await fetch(`${baseUrl}${path}`, {
        method: 'PATCH',
        headers: {
            'content-type' : 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await res.json();
};

