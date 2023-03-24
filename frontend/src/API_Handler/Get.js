import axios from 'axios'

function getPinPositions() {
    axios.get('/api/pins')
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return error;
        })
        .then(function (response) {
            return response.data
        });
}

export default getPinPositions;