# Ansible Role: Ruby

Installs RVM, Ruby and Gems on RHEL/CentOS and Debian/Ubuntu servers.

## Requirements

  None.

## Role Variables

Default Ruby version

    ruby_version: 2.3.0

All Ruby versions to install

    ruby_versions:
      - 2.3.0

Ruby packages to download

    ruby_packages:
      - bundler
      - sass
      - compass

## Dependencies

  None.

## Example Playbook

```
  - { role: fubarhouse.ruby }
```

## Installation

* Add the RVM role to your playbook.
* Modify above variables as desired.

## License

MIT / BSD

## Author Information

This role was created in 2015 by [Karl Hepworth](https://twitter.com/fubarhouse).
