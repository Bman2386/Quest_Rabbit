#!/usr/bin/env bash

# exit on error
set -o errexit

npm run build
bundle install
rails assets:precompile
rails assets:clean
rails db:migrate
rails db:seed 