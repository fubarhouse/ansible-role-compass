# Ansible Role: Ruby

Installs RVM, Ruby and Gems on RHEL/CentOS and Debian/Ubuntu servers.

## Requirements

  None.

## Role Variables

  Available variables are listed below, along with default values (see `defaults/main.yml`):

  ### Clean install
  ````
  fubarhouse_ruby.clean_install: true
  ````
  ### Process controls
  ````
  fubarhouse_ruby.install_rvm: true
  fubarhouse_ruby.install_ruby: true
  fubarhouse_ruby.install_gems: false
  ````
  ### Key
  ````
  rvm_key_keyserver: "hkp://keys.gnupg.net"
  rvm_key_id: "409B6B1796C275462A1703113804BB82D39DC0E3"
  rvm_key_keyring: /etc/apt/trusted.gpg.d/debian.gpg
  ````
  ### Repositories
  ````
  fubarhouse_ruby.rvm_repo: "https://github.com/rvm/rvm.git"
  ````
  ### Install directories
  ````
  fubarhouse_ruby.rvm_install_dir: "~/.rvm"
  ````
  ### Install paths
  ````
  fubarhouse_ruby.rvm_install_path: "binscripts"
  fubarhouse_ruby.gem_path: "rubies/ruby-{{ ruby_version }}/bin"
  ````
  ### Executables
  ````
  fubarhouse_ruby.rvm_exec: "rvm"
  fubarhouse_ruby.rvm_install_exec: "rvm-installer"
  fubarhouse_ruby.gem_exec: "gem"
  ````
  ### Application versions
  ````
  fubarhouse_ruby.ruby_version: "2.3.0"
  ````
  ### Packages
  ````
  fubarhouse_ruby.packages:
    - { name: bundler }
    - { name: sass }
    - { name: compass }
  ````

## Dependencies

  None.

## Example Playbook

```
  - { role: fubarhouse.ruby, when: '"ruby" in installed_extras' }
```

## Installation

  * Add "ruby" to the installed_extras variable in your config.yml file to use this role with the playbook example above.
  * Override fubarhouse_ruby.packages variable with one with the structure listed above in your config.yml to install a list of gems instead of the default value of that array.

## License

  MIT / BSD

## Author Information

  This role was created in 2015 by [Karl Hepworth](https://twitter.com/fubarhouse).

  This role was redeveloped in 2016  by [Karl Hepworth](https://twitter.com/fubarhouse).
