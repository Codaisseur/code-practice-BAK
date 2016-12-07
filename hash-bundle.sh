#!/bin/bash

for bundle in $(cd dist/static && ls bundle-*.js);
do
  sed -i '' "s/bundle.js/${bundle}/" dist/index.html
done
