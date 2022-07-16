const axios = require('axios');

// create a new spotify playlist

const user_id = 'timmm37'
const OAuth = 'BQDh6IQAd1DLr3uJNRj8o-D7aTYKsoirJo_cLKPmwHcefJ__SWiCSn746Ylcr6Lz-rd6re7BxClZnzrlDQMTmWrPVlK2ksuCgactZjUedAZr9SUaG-nsCM_FibjUdiXU3rbFUqHojP5YYANzclRsETnd7wp4OKLAoubRxJZ7czJhFpVo4OcNsz0_Jaw74a24sJE_UeTC9nbsZ9VpMi_wzR6w9aGeYECSqHLd4TU78IQtW2Ozfx9-6-6WdNinfzZJpvrLBlc'

// const reqBody = {
//     "name": "2 Test New Playlist",
//     "description": "New playlist description",
//     "public": false
// };

// axios.post(`https://api.spotify.com/v1/users/${user_id}/playlists`, reqBody, {
//     headers: {
//         'Authorization': 'Bearer ' + OAuth
//     }
// }).then(res => {
//     if (res.status == 429) {
//         console.log("Too many requests");
//         console.log(`retry after ${res.headers['Retry-After']}`);
//     }
//     console.log(res.data);
// }
// ).catch(err => {
//     console.log(err);
// }
// );

// get current user saved tracks

// axios.get(`https://api.spotify.com/v1/me/tracks`, {
//     headers: {
//         'Authorization': 'Bearer ' + OAuth
//     }
// }).then(res => {
//     const tracks = res.data.items;
//     for (let i = 0; i < tracks.length; i++) {
//         console.log({ name: tracks[i].track.name, id: tracks[i].track.id });
//     }
// }
// ).catch(err => {
//     if (err.status == 429) {
//         console.log("Too many requests");
//         console.log(`retry after ${res.headers['Retry-After']}`);
//     } else if (err.status == 401) {
//         console.log("Unauthorized");
//     }
//     console.log(err);
// }
// );

// get available devices
axios.get(`https://api.spotify.com/v1/me/player/devices`, {
    headers: {
        'Authorization': 'Bearer ' + OAuth
    }
}).then(res => {
    const devices = res.data.devices;
    for (let i = 0; i < devices.length; i++) {
        console.log({ name: devices[i].name, id: devices[i].id });
    }
}
).catch(err => {
    if (err.status == 429) {
        console.log("Too many requests");
        console.log(`retry after ${res.headers['Retry-After']}`);
    } else if (err.status == 401) {
        console.log("Unauthorized");
    }
    console.log(err);
}
);
