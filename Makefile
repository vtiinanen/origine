.PHONY: all
all: install serve

.PHONY: install
install: node_modules	

node_modules: package.json
	npm install
	touch node_modules

.PHONY: serve 
serve: node_modules
	@echo "Serving..."
	node index.js

.PHONY: debug
debug:
	@echo "Debugging..."
	DEBUG=1 ${NODE_INDEXJS}

.PHONY: depclean
depclean:
	@echo "Cleaning dependencies..."
	rm -rfv ./node_modules
