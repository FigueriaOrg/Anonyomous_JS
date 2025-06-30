const { exec } = require('child_process');

// ⚠️ Vulnerable to command injection
function cloneRepo(repoUrl, callback) {
    const cmd = `git clone ${repoUrl}`;
    exec(cmd, (err, stdout, stderr) => {
        if (err) return callback(err);
        callback(null, stdout);
    });
}

module.exports = cloneRepo;
