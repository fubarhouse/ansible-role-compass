# Ansible Role: Compass

Installs Compass on RHEL/CentOS and Debian/Ubuntu servers.

Inspired from several role packages created by [Jeff Geerling](https://github.com/geerlingguy/) and the unavailability of similar packages.

## Requirements

Requires `aptitude` to be installed on the server.

## Role Variables

Available variables are listed below, along with default values (see `defaults/main.yml`):

  compass_gems:
    - bundler
    - sass
    - susy
    - compass
    - compass-aurora
    - chunky_png
    - fssm

## Dependencies

  none

## Example Playbook

  - { role: compass, when: '"compass" in installed_extras' }

## Installation

  Add "compass" to the installed_extras variable in your config.yml file to use this role with the playbook example above.

## License

MIT / BSD

## Author Information

This role was created in 2015 by [Karl Hepworth](https://twitter.com/fubarhouse).
