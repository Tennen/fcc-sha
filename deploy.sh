if [ "$TRAVIS_BRANCH" != "$DEPLOY_BRANCH" ]; then
    echo "Travis should only deploy from the DEPLOY_BRANCH ($DEPLOY_BRANCH) branch"
    exit 0
  else
    if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
      echo "Travis should not deploy from pull requests" # After test integrated 
      exit 0  # here would trigger npm run test instead
    else
      echo ${GH_REPO}
      echo ${USER_EMAIL}
      echo ${USER_NAME}
      git config user.name "${USER_NAME}"
      git config user.email "${USER_EMAIL}"
      git add .
      git commit -m "Update github pages [skip ci]"
      git push "https://${GITHUB_TOKEN}@${GH_REPO}" master
      exit 0
    fi
fi