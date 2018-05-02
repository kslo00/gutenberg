/**
 * Returns all the available terms for the given taxonomy.
 *
 * @param {Object} state    Data state.
 * @param {string} taxonomy Taxonomy name.
 *
 * @return {Array} Categories list.
 */
export function getTerms( state, taxonomy ) {
	return state.terms[ taxonomy ];
}

/**
 * Returns all the available categories.
 *
 * @param {Object} state Data state.
 *
 * @return {Array} Categories list.
 */
export function getCategories( state ) {
	return getTerms( state, 'categories' );
}

/**
 * Returns true if a request is in progress for terms data of a given taxonomy,
 * or false otherwise.
 *
 * @param {Object} state    Data state.
 * @param {string} taxonomy Taxonomy name.
 *
 * @return {boolean} Whether a request is in progress for taxonomy's terms.
 */
export function isRequestingTerms( state, taxonomy ) {
	return state.terms[ taxonomy ] === null;
}

/**
 * Returns true if a request is in progress for categories data, or false
 * otherwise.
 *
 * @param {Object} state Data state.
 *
 * @return {boolean} Whether a request is in progress for categories.
 */
export function isRequestingCategories( state ) {
	return isRequestingTerms( state, 'categories' );
}

/**
 * Returns the media object by id.
 *
 * @param {Object} state Data state.
 * @param {number} id    Media id.
 *
 * @return {Object?}     Media object.
 */
export function getMedia( state, id ) {
	return state.media[ id ];
}

/**
 * Returns the Entity's record object by primary key.
 *
 * @param {Object} state       State tree
 * @param {string} kind        Entity kind.
 * @param {string} name        Entity name.
 * @param {number} primaryKey  Record's Primary key
 *
 * @return {Object?} Record.
 */
export function getEntityRecord( state, kind, name, primaryKey ) {
	return state.entities[ kind ][ name ].byPrimaryKey[ primaryKey ];
}

/**
 * Return theme suports data in the index.
 *
 * @param {Object} state Data state.
 *
 * @return {*}           Index data.
 */
export function getThemeSupports( state ) {
	return state.themeSupports;
}
