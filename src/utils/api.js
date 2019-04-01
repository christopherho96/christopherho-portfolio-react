import { ACCESS_TOKEN, BASE_API_URL } from "./constants";

const headers = new Headers({
  "Content-Type": "application/json"
});

const formImageUploadHeaders = new Headers({
  Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN)
});

export const login = user => {
  return fetch(BASE_API_URL + "api/auth/signin", {
    headers: headers,
    method: "POST",
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(data => data.accessToken);
};

export const deleteProject = projectId => {
  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
  }
  return fetch(BASE_API_URL + "api/project/" + projectId, {
    headers: headers,
    method: "DELETE"
  }).then(response => response.ok);
};

export const fetchProjects = () => {
  return fetch(BASE_API_URL + "api/project?", {
    headers,
    method: "GET"
  })
    .then(response => response.json())
    .then(data => data.content);
};

export const uploadImage = picture => {
  let formData = new FormData();
  formData.append("file", picture);
  return fetch(BASE_API_URL + "api/project/uploadImage", {
    headers: formImageUploadHeaders,
    method: "POST",
    body: formData
  }).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export const createProject = (
  pictures,
  thumbnail,
  title,
  description,
  type,
  linkReference,
  technologies,
  summary
) => {
  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
  }
  let project = {
    title: title,
    type: type,
    technologies: technologies,
    summary: summary,
    thumbnail: thumbnail,
    description: description,
    pictures: pictures,
    linkReference: linkReference
  };
  return fetch(BASE_API_URL + "api/project", {
    headers: headers,
    method: "POST",
    body: JSON.stringify(project)
  }).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

//todo: dont use this endpoint until I can figure out a good way to update picutre files
export const updateProject = (
  pictures,
  thumbnail,
  title,
  description,
  type,
  projectId,
  linkReference
) => {
  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
  }
  let project = {
    title: title,
    type: type,
    thumbnail: thumbnail,
    description: description,
    pictures: pictures,
    linkReference: linkReference
  };
  return fetch(BASE_API_URL + "api/project/" + projectId, {
    headers: headers,
    method: "PUT",
    body: JSON.stringify(project)
  }).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};
