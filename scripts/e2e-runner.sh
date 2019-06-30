#!/bin/bash


# NOTE: This is the simplest way to run backend server in the background
# and run e2e tests against it. Tried to do it in package.json once. Was awful.

yarn start:backend &
SERVER_PID=$!

yarn e2e:run
TEST_EXIT_CODE=$?

kill $SERVER_PID

[ $TEST_EXIT_CODE -eq 0 ] || exit 2

