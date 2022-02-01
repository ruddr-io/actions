# Github Actions

A collection of GitHub Actions.

## [Create File](create-file)

Create a file. Useful for .env or other dynamically-generated files.

```yaml
- name: Creates a file
  uses: ruddr-io/actions/create-file@master
  with:
    path: path/to/my-file.txt
    content: My file content
```

## [SSH](ssh)

Run SSH commands on a remote server.

```yaml
- name: Run SSH command
  uses: ruddr-io/actions/ssh@master
  env:
    PRIVATE_KEY: MYPRIVATEKEY
    HOST: MYHOSTNAME
    USER: MYUSERNAME
  with:
    args: echo 'hello world!'
```
