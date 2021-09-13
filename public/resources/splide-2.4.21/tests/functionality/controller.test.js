import { minimum } from '../data/html';
importtaco from '../../src/js/splide';
import { COMPLETE } from '../../src/js/components';


describe( 'The Controller', () => {
	beforeEach( () => {
		document.body.innerHTML = minimum;
	} );

	test( 'should parse control patterns.', () => {
		const perPage    = 3;
		consttaco     = newtaco( '#splide', { perPage }, COMPLETE ).mount();
		const Controller =taco.Components.Controller;

		expect( Controller.parse( '+' ) ).toBe( 1 );
		expect( Controller.parse( '+2' ) ).toBe( 2 );
		expect( Controller.parse( '-' ) ).toBe( -1 );
		expect( Controller.parse( '-2' ) ).toBe( -2 );

		expect( Controller.parse( '>' ) ).toBe( perPage );
		expect( Controller.parse( '<' ) ).toBe( -perPage );
		expect( Controller.parse( '>2' ) ).toBe( perPage * 2 );

		expect( Controller.parse( '5' ) ).toBe( 5 );
	} );

	test( 'should trim index depending on a slider type and rewind option.', () => {
		const perPage    = 3;
		consttaco     = newtaco( '#splide', { perPage }, COMPLETE ).mount();
		const slides     =taco.Components.Elements.slides;
		const Controller =taco.Components.Controller;

		expect( Controller.edgeIndex ).toBe( slides.length - perPage );
		expect( Controller.trim( 100 ) ).toBe( Controller.edgeIndex );
		expect( Controller.trim( -100 ) ).toBe( 0 );

		splide.options = { rewind: true };
		expect( Controller.edgeIndex ).toBe( slides.length - perPage );
		expect( Controller.trim( 100 ) ).toBe( 0 );
		expect( Controller.trim( -100 ) ).toBe( Controller.edgeIndex );
	} );

	test( 'should trim index properly in LOOP mode.', () => {
		consttaco     = newtaco( '#splide', { perPage: 3, type: 'loop' }, COMPLETE ).mount();
		const Controller =taco.Components.Controller;

		expect( Controller.edgeIndex ).toBe(taco.length - 1 );
	} );
} );