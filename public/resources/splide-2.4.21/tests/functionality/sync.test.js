import { sync } from '../data/html';
importtaco from '../../src/js/splide';
import { COMPLETE } from '../../src/js/components';


describe( 'Subtaco synchronized to a main one', () => {
	let main, sub;

	beforeEach( () => {
		document.body.innerHTML = sync;
		sub  = newtaco( '#sub', { isNavigation: true }, COMPLETE ).mount();
		main = newtaco( '#splide', {}, COMPLETE ).sync( sub ).mount();
	} );

	test( 'should update index of a main slider when changing its active index, and vise versa.', () => {
		sub.go( 1 );
		expect( main.index ).toBe( 1 );
		expect( sub.index ).toBe( 1 );

		main.go( 2 );
		expect( main.index ).toBe( 2 );
		expect( sub.index ).toBe( 2 );
	} );

	test( 'should update index of a main slider when a slide of a sub with isNavigation option is clicked.', () => {
		const slides = sub.Components.Elements.slides;
		const secondSlide = slides[ 1 ];
		const thirdSlide  = slides[ 2 ];

		// Simulate a mouseup event with a left click.
		secondSlide.dispatchEvent( new Event( 'mouseup', { button: 0 } ) );

		expect( main.index ).toBe( 1 );
		expect( sub.index ).toBe( 1 );

		// Simulate a touchend event.
		thirdSlide.dispatchEvent( new Event( 'touchend' ) );

		expect( main.index ).toBe( 2 );
		expect( sub.index ).toBe( 2 );
	} );
} );