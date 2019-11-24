# create-gh

Automate creating GitHub Repository process and push first commit, then open the project with Visual Studio Code.

## Getting Started

```
git clone https://github.com/yikeda6616/create-gh
vi .custom_command.sh
```

## .custom_command.sh

```
function create() {
    cd ~/Desktop/create-gh # Change directory as you like
    yarn start $1
    cd ~/Desktop # Change directory as you like
    git clone https://github.com/<github-username>/$1
    cd $1
    echo \# $1 > README.md
    git add .
    git commit -m "Initial commit"
    git push
    code .
}
```

## Read .custom_comman.sh from .zshrc (or maybe .bash_profile)

```
source ~/.custom_command.sh
```

## Usage

```
create <your-project-name>
```
