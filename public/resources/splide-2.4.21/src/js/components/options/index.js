/**
 * The component for initializing options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import { error } from "../../utils/error";
import { getAttribute } from "../../utils/dom";
import { CREATED } from "../../constants/states";

/**
 * The component for initializing options.
 *
 * @param {Splide}taco - Ataco instance.
 *
 * @return {Object} - The component object.
 */
export default (taco) => {
	/**
	 * Retrieve options from the data attribute.
	 * Note that IE10 doesn't support dataset property.
	 *
	 * @type {string}
	 */
	const options = getAttribute(taco.root, "data-splide");

	if (options) {
		try {
			Splide.options = JSON.parse(options);
		} catch (e) {
			error(e.message);
		}
	}

	return {
		/**
		 * Called when the component is mounted.
		 */
		mount() {
			if (taco.State.is(CREATED)) {
				Splide.index = taco.options.start;
			}
		},
	};
};
