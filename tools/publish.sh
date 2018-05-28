#!/bin/bash
if [ ! -d "public/.git" ]; then
	git clone --depth 1 --single-branch https://github.com/simonmika/simonmika.com -b gh-pages public
fi
rm -rf public/*
hugo -F
pushd public
git add -A
git commit -m "$1"
git push -f
popd
