#!/bin/bash
JQ=`command -v jq`
PACKAGE_VERSION=`$JQ .version ./package.json`

PACKAGE_JSON="{ \
  \"name\": \"@i-cell/vuengin\", \
  \"version\": $PACKAGE_VERSION, \
  \"private\": false, \
  \"main\": \"./lib.umd.min.js\", \
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

TYPES_PACKAGE_JSON="{ \
  \"name\": \"@types/i-cell__vuengin\", \
  \"version\": $PACKAGE_VERSION, \
  \"private\": false, \
  \"typings\": \"./lib.d.ts\", \
  \"publishConfig\": { \
    \"registry\": \"https://registry.npmjs.org\", \
    \"access\": \"public\" \
  } \
}"

mv ./lib.vue.config.js ./vue.config.js
sed -i 's/tsconfig.app/tsconfig.lib/' tsconfig.json
npx vue-cli-service build --target lib --formats umd-min --name lib src/lib.ts
sed -i 's/tsconfig.lib/tsconfig.app/' tsconfig.json
mv ./vue.config.js ./lib.vue.config.js

echo $PACKAGE_JSON > ./dist/package.json
echo $TYPES_PACKAGE_JSON > ./dist-types/package.json
