/*
* Author: Wellington Costa
* License: Apache 2.0
*/
function getLatestRelease(groupId, artifactId, callback) {
    if(fetch) {
        var releaseUrl = "https://jitpack.io/api/builds/"+ groupId +"/"+ artifactId +"/latestOk";
        fetch(releaseUrl).then(function(response) {
            return response.json();
        }).then(function(data) {
            var version = data.version;
            var groupIdUrl = groupId.replace(/\./g  , "/");
            var downloadJarUrl = "https://jitpack.io/"+ groupIdUrl +"/"+ artifactId +"/"+ version +"/" + artifactId + "-" + version + ".jar";
            callback(version, downloadJarUrl);
        });
    } else {
        console.error("Your browser does not support fetch.")
    }
}

function getLatestModuleRelease(groupId, artifactId, moduleId, callback) {
    if(fetch) {
        var releaseUrl = "https://jitpack.io/api/builds/"+ groupId +"/"+ artifactId +"/latestOk";
        fetch(releaseUrl).then(function(response) {
            return response.json();
        }).then(function(data) {
            var version = data.version;
            var groupIdUrl = groupId.replace(/\./g  , "/");
            var downloadModuleUrl = "https://jitpack.io/"+ groupIdUrl +"/"+ artifactId +"/"+ moduleId +"/"+ version +"/"+ moduleId +"-"+ version +".jar";
            callback(downloadModuleUrl);
        });
    } else {
        console.error("Your browser does not support fetch.")
    }
}