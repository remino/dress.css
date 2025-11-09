#!/usr/bin/env bash
set -euo pipefail
BRANCH=${1:-deploy}
WORKTREE_DIR=deploy

if [ -d "$WORKTREE_DIR" ]; then
	echo "deploy/ already exists. Remove or rename it before initializing." >&2
	exit 1
fi

git worktree add --orphan "$BRANCH"
