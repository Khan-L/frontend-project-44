install: 
	npm ci
run: 
	node bin/brain-games.js
publish: 
	npm publish --dry-run
brain-even:
	node /bin/src/brain-even.js 
lint:
	npx eslint .