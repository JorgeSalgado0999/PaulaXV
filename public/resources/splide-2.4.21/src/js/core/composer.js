/**
 * Provide a function for composing components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import { each } from "../utils/object";
import { Slide, Fade } from "../transitions";
import { FADE } from "../constants/types";

/**
 * Compose components.
 *
 * @param {Splide}  taco     -taco instance.
 * @param {Object}   Components - Additional components.
 * @param {function} Transition - Change component for transition.
 *
 * @return {Object} - An object containing all components.
 */
export default function compose(taco, Components, Transition) {
	const components = {};

	each(Components, (Component, name) => {
		components[name] = Component(taco, components, name.toLowerCase());
	});

	if (!Transition) {
		Transition = taco.is(FADE) ? Fade : Slide;
	}

	components.Transition = Transition(taco, components);

	return components;
}
