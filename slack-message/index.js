const axios = require('axios');
const core = require('@actions/core');

async function run() {
  try {
    const data = JSON.parse(core.getInput('data', { required: true }));
    const token = core.getInput('token', { required: true });

    const response = await axios.request({
      method: 'post',
      url: 'https://slack.com/api/chat.postMessage',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data,
    });
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
