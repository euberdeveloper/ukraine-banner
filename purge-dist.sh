#!/bin/bash

rm -f dist/favicon.ico
rm -f dist/index.html
cp README.md dist

version=$1

for file in dist/*.js
do
  mv $file ${file//js/$version.js}
done

mv dist ukraine-banner