
const host_api_admin = 'http://127.0.0.1:8000/api';
const host_admin = 'http://127.0.0.1:8000';
const host_client = 'http://localhost:5173  ';

const env = {
    HOST_CLIENT: host_client,
    HOST_ADMIN: 'http://127.0.0.1:8000',
    HOST_API_ADMIN: 'http://127.0.0.1:8000/api',
    FOLDER_STORAGE: host_admin + '/storage',
    FOLDER_UPLOADS: host_admin + '/storage/uploads',
}

export {
    env
}