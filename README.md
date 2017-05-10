# Ansible Role: Ruby

[![Build Status](https://travis-ci.org/fubarhouse/ansible-role-ruby.svg?branch=master)](https://travis-ci.org/fubarhouse/ansible-role-ruby)

Installs RVM, Ruby and Gems on RHEL/CentOS, Debian/Ubuntu and MacOSX systems.

## Requirements

None.

## Role Variables

Default Ruby version
````
ruby_version: 2.4.0
````
All other Ruby versions to install
````
ruby_versions:
  - 2.4.0
````
Ruby packages to download
````
ruby_packages:
  - bundler
  - sass
  - compass
````
You can flag installations as insecure by falsifying:
````
secure_rvm_install: true
````
To change the autolibs flag:
````
rvm_autolibs_mode: enable
````
To remove everything before starting (fresh installation):
````
clean_rvm_install: false
````
To enable/disable tasks of a certain category
````
install_rvm: true
install_ruby: true
install_gems: true
````
## Dependencies

  None.

## Example Playbook

````
- hosts: localhost
  sudo: true
  vars:
  ruby_version: 2.4.0
  ruby_packages:
    - sass
  roles:
  - fubarhouse.ruby
````

## License

MIT / BSD

## Author Information

This role was created in 2015 by [Karl Hepworth](https://twitter.com/fubarhouse).
