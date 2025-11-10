#!/usr/bin/env bash
set -euo pipefail

BRANCH=${1:-deploy}
WORKTREE_DIR=deploy

if [ ! -d "node_modules" ]; then
	echo "Install dependencies first (npm install)" >&2
	exit 1
fi

if [ ! -e "$WORKTREE_DIR/.git" ]; then
	echo "deploy/ worktree not initialized. Run npm run worktree:init first." >&2
	exit 1
fi

npm run build || {
	echo "Build failed" >&2
	exit 1
}

COMMIT_HASH=$(git rev-parse --short HEAD)

cd "$WORKTREE_DIR" || {
	echo "Failed to enter deploy/ directory" >&2
	exit 1
}

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "$CURRENT_BRANCH" != "$BRANCH" ]; then
	echo "deploy/ worktree is on branch $CURRENT_BRANCH not $BRANCH" >&2
	exit 1
fi

git add -A
git commit -m "Add build for ${COMMIT_HASH}" || true

echo "Site updated in $WORKTREE_DIR. Push with 'cd deploy && git push origin $BRANCH'"
