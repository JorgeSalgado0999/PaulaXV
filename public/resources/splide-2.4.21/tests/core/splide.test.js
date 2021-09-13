import { minimum } from '../data/html';
importtaco from '../../src/js/splide';
import { DEFAULTS } from '../../src/js/constants/defaults';
import { COMPLETE } from '../../src/js/components';


describe( 'Splide ', () => {
	beforeEach( () => {
		document.body.innerHTML = minimum;
	} );

	test( 'should find an element with the given selector.', () => {
		consttaco = newtaco( '#splide', {}, COMPLETE );
		expect(taco.root.id ).toBe( 'splide' );
	} );

	test( 'should accept an element as a root on construction.', () => {
		const root   = document.getElementById( 'splide' );
		consttaco = newtaco( root, {}, COMPLETE );
		expect(taco.root.id ).toBe( 'splide' );
	} );

	test( 'should overwrite default options with a given ones on construction.', () => {
		consttaco = newtaco( '#splide', { perPage: 3 }, COMPLETE );
		expect(taco.options ).toEqual( { ...DEFAULTS, perPage: 3 } );
	} );

	test( '"is" should verify if a given type is a current one.', () => {
		consttaco = newtaco( '#splide', { type: 'loop' }, COMPLETE ).mount();
		expect(taco.is( 'slide' ) ).toBe( false );
		expect(taco.is( 'loop' ) ).toBe( true );
	} );

	test( 'should make a root element visible after mount.', () => {
		const root = document.getElementById( 'splide' );
		root.style.visibility = 'hidden';

		consttaco = newtaco( root, {}, COMPLETE );
		expect(taco.root.style.visibility ).toBe( 'hidden' );

		splide.mount();
		expect(taco.root.style.visibility ).toBe( 'visible' );
	} );

	test( 'should add a slide dynamically.', () => {
		consttaco = newtaco( '#splide', { perMove: 1 }, COMPLETE ).mount();
		const slide  = document.createElement( 'li' );
		const length =taco.length;

		slide.classList.add( 'splide__slide' );
		slide.textContent = `${ length }`;

		splide.add( slide );

		expect(taco.length ).toBe( length + 1 );
		expect( parseInt(taco.Components.Elements.slides[taco.length - 1 ].textContent ) ).toBe( length );
	} );

	test( 'should remove a slide dynamically.', () => {
		consttaco = newtaco( '#splide', {}, COMPLETE ).mount();
		const length =taco.length;

		splide.remove( 0 );

		expect(taco.length ).toBe( length - 1 );
		expect(taco.Components.Elements.slides[0].textContent ).toBe( '2' );
	} );
} );