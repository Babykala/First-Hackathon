//Retrieve channel information

let YOUR_API_KEY = "AIzaSyDOrZUQ-6pGd0RWb7aOxcHzpuj_1iWtraI";

fetch("https://youtube.googleapis.com/youtube/v3/channels?" + new URLSearchParams({
    key: YOUR_API_KEY,
    part: 'contentDetails',
    id: 'UCXTzvyLeFHsMa6sSxM2C3dA'
}))

    .then(res => res.json())
    .then(data => console.log('Channel Information',data))


//Uploaded videos and system-generated playlists

fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?" + new URLSearchParams({
    key: YOUR_API_KEY,
    part: 'snippet,contentDetails',
    maxResults: 25,
    playlistId: 'PLBCF2DAC6FFB574DE'
}))

    .then(res => res.json())
    .then(data => console.log('Uploaded videos and system-generated playlists',data))

//User-created playlists

fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?" + new URLSearchParams({
    key: YOUR_API_KEY,
    part: 'snippet,contentDetails',
    channelId: 'UCXTzvyLeFHsMa6sSxM2C3dA',
    playlistId: 'PLBCF2DAC6FFB574DE',
    regionCode: "IN"
}))

    .then(res => res.json())
    .then(data => console.log('Playlists',data.items))


//Retrieve Subscriptions

fetch("https://youtube.googleapis.com/youtube/v3/subscriptions?" + new URLSearchParams({
    key: YOUR_API_KEY,
    part: 'snippet,contentDetails,subscriberSnippet',
    channelId: 'UCXTzvyLeFHsMa6sSxM2C3dA',
    type: 'channel',
    regionCode: "IN"
}))

    .then(res => res.json())
    .then(data => console.log('Subscriptions list',data.items))


//Retrieve user activity

fetch("https://youtube.googleapis.com/youtube/v3/activities?" + new URLSearchParams({
    key: YOUR_API_KEY,
    part: 'snippet,contentDetails',
    channelId: 'UCXTzvyLeFHsMa6sSxM2C3dA'
}))

    .then(res => res.json())
    .then(data => console.log('User Activity',data.items))

//Search
fetch("https://youtube.googleapis.com/youtube/v3/search?" + new URLSearchParams({
    key: YOUR_API_KEY,
    part: 'snippet',
    channelId: 'UCXTzvyLeFHsMa6sSxM2C3dA',
    order: "viewCount",
    type: 'channel',
    regionCode: "IN"
}))

    .then(res => res.json())
    .then(data => console.log('Search Result',data.items))

//create playlists

const body = {
    'snippet': {
        'playlistId': '400754718733-ndbspqp59ndu1fi0d6i4qdkl323c46cf.apps.googleusercontent.com',
        'title': 'New playlist',
        'description': 'Sample playlist for Data API'
    }
}
var requestOptions = {
    key: YOUR_API_KEY,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
}
fetch("https://youtube.googleapis.com/youtube/v3/playlists?", requestOptions)
    .then(res => res.json())
    .then(data => console.log('Created playlists',data))


//Updating a playlist
const body1 = {
    'clientId':'400754718733-ndbspqp59ndu1fi0d6i4qdkl323c46cf.apps.googleusercontent.com',
        'snippet': {
        'playlistId': '400754718733-ndbspqp59ndu1fi0d6i4qdkl323c46cf.apps.googleusercontent.com',
        'resourceId': {
            'kind': 'youtube#video',
            'videoId': 'v=Zi6B5LDDDaw&t=5s'
        },
        'position': 0
    }
}

var requestOptions = {
    key: YOUR_API_KEY,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify(body1)
}
fetch("https://youtube.googleapis.com/youtube/v3/playlists?", requestOptions)
    .then(res => res.json())
    .then(data => console.log(data))

