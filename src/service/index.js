import { BASE_URL } from "./config";

export const getTasks = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    const { tasks } = await response.json();

    return {
      ok: true,
      tasks,
    };
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};

export const createTask = async (body) => {
  try {
    const response = await fetch(`${BASE_URL}/create-task`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();

    return {
      ok: true,
      data,
    };
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};

export const updateTask = async (id, body) => {
  try {
    const response = await fetch(`${BASE_URL}/update-task/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();

    return {
      ok: true,
      data,
    };
  } catch (error) {
    return {
      ok: false,
      error,
    };
  }
};
