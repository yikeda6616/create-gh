# create-gh

Automate creating GitHub Repository process and push first commit, then open the project with Visual Studio Code.

## Getting Started

```
cd ~
git clone https://github.com/yikeda6616/create-gh
vi ~/create-gh/.create-gh.sh
```

## Edit .create-gh.sh

```
function create() {
    cd ~/create-gh # Change directory as you like
    yarn start $1
    cd ~/Desktop # Change directory as you like
    git clone https://github.com/<github-username>/$1 # Change here to your GitHub username
    cd $1
    echo \# $1 > README.md
    git add .
    git commit -m "Initial commit"
    git push
    code .
}
```

## Read `.create-gh.sh` from `.zshrc` (or maybe `.bash_profile`)

Add the line below to your `.zshrc`

```
source ~/create-gh/.create-gh.sh
```

Relogin to Shell after editing `.zshrc`

```
$ exec $SHELL -l
```

## Usage

```
create <your-project-name>
```
