const apiUrl = "https://jsonplaceholder.typicode.com";
const headers = {
  "Content-type": "application/json; charset=UTF-8"
};

// GET
export const fetchPosts = () => {
  return fetch(`${apiUrl}/posts`).then((res) => res.json());
};

// GET
export const fetchPostById = (id) => {
  return fetch(`${apiUrl}/posts/${id}`).then((res) => res.json());
};

//POST

// PUT
export const updatePost = async (id, body) => {
  return fetch(`${apiUrl}/posts/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(body)
  }).then((res) => {
    return res.json();
  });
};
