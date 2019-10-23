const axios = require('axios');
const core = require('@actions/core');
const slugify = require('@sindresorhus/slugify');

async function run() {
  try {
    // Trim @ and / chars from the repo name
    const repository = core.getInput('repository', { required: true }).replace(/^@+|^\/+|\/+$/g, '');
    const token = core.getInput('token', { required: true });

    const response = await axios.request({
      url: `https://api.github.com/repos/${repository}/branches`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const branches = response.data.map(branch => branch.name);
    const branchSlugs = branches.map(branch => slugify(branch));
    const branchSlugsUnderscored = branches.map(branch => slugify(branch, { separator: '_' }));

    core.setOutput('slugs', JSON.stringify(branchSlugs));
    core.setOutput('_slugs', JSON.stringify(branchSlugsUnderscored))
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
