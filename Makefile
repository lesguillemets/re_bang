./build/main.js: $(wildcard ./src/*.hs)
	hastec -Wall -O2 ./src/Main.hs -isrc -o ./build/main.js
