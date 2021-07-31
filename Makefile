.PHONY: all
all: install

NODE_INDEXJS=node index.js

.PHONY: install
install:
	@echo "Installing dependencies..."
	npm install

.PHONY: serve 
serve:
	@echo "Serving..."
	${NODE_INDEXJS}

.PHONY: debug
debug:
	@echo "Debugging..."
	DEBUG=1 ${NODE_INDEXJS}

.PHONY: clean
clean:
	@echo "Cleaning..."
	rm -rf ./node_modules
