const fs = require('fs');
const core = require('@actions/core');

async function run() {
  try {
    const path = core.getInput('path', { required: true });
    const content = core.getInput('content');

    fs.writeFileSync(path, content);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
