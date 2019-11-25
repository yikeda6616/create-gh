function create() {
    cd ~/create-gh
    yarn start $1
    cd ~/Desktop # Change directory as you like
    git clone https://github.com/yikeda6616/$1 # Change username to yours
    cd $1
    echo \# $1 > README.md
    git add .
    git commit -m "Initial commit"
    git push
    code .
}