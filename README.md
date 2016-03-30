# Ansible Role: Ruby

Installs RVM, Ruby and Gems on RHEL/CentOS and Debian/Ubuntu servers.

## Requirements

  None.

## Role Variables

  Copy the defaults/main.yml into the ansible system and add to the playbook, and change the variables accordingly.

  ````

  fubarhouse_ruby:
  # Clean install
  clean_install: false
  # Process controls
  install_rvm: true
  install_ruby: true
  install_gems: true
  # Key
  rvm_key_keyserver: "hkp://keys.gnupg.net"
  rvm_key_id: "409B6B1796C275462A1703113804BB82D39DC0E3"
  rvm_key_keyring: /etc/apt/trusted.gpg.d/debian.gpg
  # Repositories
  rvm_repo: "https://github.com/rvm/rvm.git"
  # Symlinks
  # Install directories
  rvm_install_dir: "~/.rvm"
  # Install paths
  rvm_install_path: "binscripts"
  rvm_path: "bin"
  gem_path: "rubies/ruby-{{ ruby_version }}/bin"
  # Executables
  rvm_exec: "rvm"
  rvm_install_exec: "rvm-installer"
  gem_exec: "gem"
  # Application versions
  ruby_version: "2.3.0"
  # Packages
  packages:
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
