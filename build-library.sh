#!/bin/bash
NODE_ENV=production
JQ=`command -v jq`
PACKAGE_VERSION=`$JQ .version ./package.json`

PACKAGE_JSON="{ \
  \"name\": \"@i-cell/vuengin\", \
  \"version\": $PACKAGE_VERSION, \
  \"private\": false, \
  \"main\": \"./lib.js\", \
  \"module\": \"./lib.es.js\", \
  \"typings\": \"./src/lib.d.ts\", \
  \"dependencies\": { \
    \"buefy\": \"^0.9.3\", \
    \"lodash\": \"^4.17.20\", \
    \"moment\": \"^2.29.1\", \
    \"vee-validate\": \"^3.4.1\" \
  }, \
  \"publishConfig\": { \
    \"registry\": \"https://registry.npmjs.org\", \
    \"access\": \"public\" \
  } \
}"

if [ -d dist ]; then
  rm -rf dist/
fi
mv ./lib.vue.config.js ./vue.config.js
sed -i 's/tsconfig.app/tsconfig.lib/' tsconfig.json
# npx vue-cli-service build --target lib --formats commonjs,umd,umd-min --name lib src/lib.ts
npx rollup -c
sed -i 's/tsconfig.lib/tsconfig.app/' tsconfig.json
mv ./vue.config.js ./lib.vue.config.js

echo $PACKAGE_JSON > ./dist/package.json
