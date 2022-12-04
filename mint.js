const { exec } = require('child_process');

(async () => {
    for (let i = 0; i < limit; i++) {
        await exec('sugar mint -n 30');
    }
})();