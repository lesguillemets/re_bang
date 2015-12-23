./build/main.js: $(wildcard ./src/*.hs)
	hastec -Wall -O2 --opt-all --opt-minify ./src/Main.hs -isrc -o ./build/main.js
