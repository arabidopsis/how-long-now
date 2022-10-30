#!/bin/bash

REPO=/var/www/how-long-now
ssh chloe "source ~/.nvm/nvm.sh && cd ${REPO} && git pull && ~/.local/share/pnpm/pnpm run production"
