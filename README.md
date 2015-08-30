# Ansible Role: Ruby

Installs Ruby on RHEL/CentOS and Debian/Ubuntu servers.

## Requirements

Requires `aptitude` to be installed on the server.

## Role Variables

Available variables are listed below, along with default values (see `defaults/main.yml`):

```
  ruby_gems:
    - bundler
    - sass
    - compass
```

## Dependencies

  none

## Example Playbook

```
  - { role: fubarhouse.ruby, when: '"ruby" in installed_extras' }
```

## Installation

  * Add "ruby" to the installed_extras variable in your config.yml file to use this role with the playbook example above.
  * Override ruby_gems variable in your config.yml to install a list of gems instead of the default value of that array.

## License

MIT / BSD

## Author Information

This role was created in 2015 by [Karl Hepworth](https://twitter.com/fubarhouse).

Inspired from several role packages created by [Jeff Geerling](https://github.com/geerlingguy/).
