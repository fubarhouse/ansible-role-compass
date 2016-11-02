# Ansible Role: Ruby

[![Build Status](https://travis-ci.org/fubarhouse/ansible-role-ruby.svg?branch=master)](https://travis-ci.org/fubarhouse/ansible-role-ruby)

Installs RVM, Ruby and Gems on RHEL/CentOS and Debian/Ubuntu servers.

## Requirements

  * GPG

## Role Variables

Default Ruby version
````
ruby_version: 2.3.0
````
All other Ruby versions to install
````
ruby_versions:
  - 2.3.0
````
Ruby packages to download
````
ruby_packages:
  - bundler
  - sass
  - compass
````
## Dependencies

  None.

## Example Playbook

````
- hosts: localhost
  sudo: true
  vars:
  ruby_version: 2.3.0
  ruby_packages:
    - sass
  roles:
  - fubarhouse.ruby
````

## License

MIT / BSD

## Author Information

This role was created in 2015 by [Karl Hepworth](https://twitter.com/fubarhouse).
