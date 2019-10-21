const core = require('@actions/core');
const slugify = require('@sindresorhus/slugify');

async function run() {
  try {
    const ref = process.env.GITHUB_REF;
    if (!ref) {
      throw new Error('No GITHUB_REF environment variable available.');
    }

    console.log(`Converting '${ref}' to a slug...`);

    const regex = /refs\/(tags|heads)\/(?<name>.*)/i;
    const refMatch = ref.match(regex);
    if (!refMatch) {
      throw new Error('Unrecognized GITHUB_REF format.');
    }

    const refName = refMatch.groups.name;
    if (!refName) {
      throw new Error('No branch or tag name available.');
    }

    const slug = slugify(refName);
    if (!slug) {
      throw new Error('No slug available after slugification.')
    }

    const slugUnderscore = slugify(refName, { separator: '_' });

    core.setOutput('slug', slug);
    core.setOutput('_slug', slugUnderscore);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
