# Github Actions

A collection of useful GitHub Actions.

## [Branch Slugs](branch-slugs)

Get all repository branch names converted to slugs.

## [Create File](create-file)

Create a file. Useful for .env or other dynamically-generated files.

## [GitHub Reference Slug](ref-slug)

Convert the `GITHUB_REF` to a simple slug that can be used in URIs, filenames, and IDs.

## [Slack Message](slack-message)

Send a Slack message as a bot user using the chat.postMessage API endpoint.

## [SSH](ssh)

Run SSH commands on a remote server.

```yaml
- name: Run SSH command
  uses: nexza/actions/ssh@master
  env:
    PRIVATE_KEY: MYPRIVATEKEY
    HOST: MYHOSTNAME
    USER: MYUSERNAME
  with:
    args: echo 'hello world!'
```
