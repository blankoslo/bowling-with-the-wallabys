import chai from 'chai';
import {expect, assert} from 'chai';
chai.should();

import game from '../src/bowling.js';


function roll(pins, times = 1) {
	for(let i = 0; i < times; i++) game.roll(pins);
}


describe("Game", () => {
	beforeEach(game.reset);

	it("should score 0 on gutter game", () => {
		roll(0, 20);
		game.sum().should.equal(0);
	});

	it("should score 1 on 1 pin and rest gutter game", () => {
		roll(1);
		roll(0, 19);
		game.sum().should.equal(1);
	});

	it("should score 20 on all 1s", () => {
		roll(1,20);
		game.sum().should.equal(20);
	})

	
	it("should score 10 on spare and rest gutter game", () => {
		roll(5);
		roll(5);
		roll(0, 18);
		game.sum().should.equal(10);
	});
	
	it("should score 10 on strike and rest gutter game", () => {
		roll(10);
		roll(0, 19);
		game.sum().should.equal(10);
	});

	it("should score 12 on spare, 1 and rest gutter", () => {
		roll(5);
		roll(5);
		roll(1);
		roll(0,17);
		game.sum().should.equal(12);
	});

	it("should score 12 on strike, 1 and rest gutter", () => {
		roll(10);
		roll(1);
		roll(0,18);
		game.sum().should.equal(12);
	});
	
	it("should score 150 on all 5s", () => {
		roll(5, 21);
		game.sum().should.equal(150);
	});

	it("should score 300 on perfect game", () => {
		roll(10, 12);
		game.sum().should.equal(300);
	});

})