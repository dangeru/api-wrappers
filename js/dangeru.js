/** Danger/u/ JS library. By Janie~
 * @author Janie
 */
//Apparently JSDoc is retarded or something but that's fine.
//Aquire our global object.
var _G;
if (typeof window !== "undefined") {
		_G = window;
	} else if (global) {
		_G = global;
}
//Make sure we've got this ready
_G.dangeru = {}

/**
 * This method is deprecated. Use threadRepliesSync
 * @param {string} board - unused
 * @param {number} length - unused
 * @param {number} id - ID of the thread.
 * @returns {array} The posts and all. Dunno much more to describe this.
*/
_G.dangeru.threadSync = function(board, length, id) {
    if (typeof board !== "string" || typeof length !== "number" || typeof id !== "string")
	throw "Invalid type! Check your arguments, faggot.";
    return _G.dangeru.threadRepliesSync(id);
};
/**
 * Gets a thread synchronously. Duh. DON'T USE THIS IN THE MAIN THREAD, YOU FUCKING DOLT!
 * @param {number} id - ID of the thread.
 * @returns {array} The posts and all. Dunno much more to describe this.
*/
_G.dangeru.threadRepliesSync = function(id) {
    if (typeof id !== "string") throw "Invalid type! Check your arguments, faggot.";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://boards.dangeru.us/api/v2/thread/" + id.toString() + "/replies", false ); 
    xmlHttp.send(null);
    return [xmlHttp.status == 200 ? "success" : "error", JSON.parse(xmlHttp.responseText), xmlHttp.status];
};
/**
 * Gets the metadata for an OP synchronously.
 * @param {number} id - ID of the thread.
 * @returns {object} The metadata entry for the post
*/
_G.dangeru.threadMetadataSync = function(id) {
    if (typeof id !== "string") throw "Invalid type! Check your arguments, faggot.";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://boards.dangeru.us/api/v2/thread/" + id.toString() + "/metadata", false ); 
    xmlHttp.send(null);
    return [xmlHttp.status == 200 ? "success" : "error", JSON.parse(xmlHttp.responseText), xmlHttp.status];
};

/**
 * This function is deprecated, use threadReplies
 * @param {string} board - unused
 * @param {number} length - unused
 * @param {number} id - ID of the thread.
 * @param {dangerucallback} callback - This is called when the XMLHttp request is completed.
*/
_G.dangeru.thread = function thread(board, length, id, callback) {
    if (typeof board !== "string" || typeof length !== "number" || typeof id !== "string" || typeof callback !== "function")
	    throw "Invalid type! Check your arguments, faggot.";
    return _G.dangeru.threadReplies(id, callback);
}
/**
 * Gets the replies to a thread asynchronously
 * @param {number} id - ID of the thread.
 * @param {dangerucallback} callback - This is called when the XMLHttp request is completed.
*/
_G.dangeru.threadReplies = function threadReplies(id, callback) {
    if (typeof id !== "string" || typeof callback !== "function") throw "Invalid type! Check your arguments, faggot.";
    setTimeout(function() {
	callback.apply(null, _G.dangeru.threadRepliesSync(id));
    }, 0);
}
/**
 * Gets the metadata of a thread asynchronously
 * @param {number} id - ID of the thread.
 * @param {dangerucallback} callback - This is called when the XMLHttp request is completed.
*/
_G.dangeru.threadMetadata = function threadMetadata(id, callback) {
    if (typeof id !== "string" || typeof callback !== "function") throw "Invalid type! Check your arguments, faggot.";
    setTimeout(function() {
	callback.apply(null, _G.dangeru.threadMetadataSync(id));
    }, 0);
}
/**
 * Gets a board's posts synchronously. Duh. DON'T USE THIS IN THE MAIN THREAD, YOU FUCKING DOLT!
 * @param {string} board - The board.
 * @param {number} page - The page, starts at 0. Optional argument
 * @returns {object} The threads and all. Dunno much more to describe this.
*/
_G.dangeru.listSync = function(board, page) {
    if (page === undefined) page = 0;
    if (typeof board !== "string" || typeof length !== "number") throw "Invalid type! Check your arguments, faggot.";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://boards.dangeru.us/api/v2/board/" + board + "?page=" page.toString(), false); 
    xmlHttp.send(null);
    return [xmlHttp.status == 200 ? "success" : "error", JSON.parse(xmlHttp.responseText), xmlHttp.status];
}
/**
 * Gets a board's posts asynchronously.
 * @param {string} board - The board.
 * @param {number} page - The page, starts at 0. Optional argument
 * @param {dangerucallback} callback - This is called when the XMLHttp request is completed.
*/
_G.dangeru.list = function(board, page, callback) {
    if (page === undefined) page = 0;
    if (typeof board !== "string" || typeof length !== "number" || typeof callback !== "function")
	throw "Invalid type! Check your arguments, faggot.";
    setTimeout(function() {
	callback.apply(null, _G.dangeru.listSync(board, page));
    }, 0);
}

/**
 * The callback of an async danger/u/ request
 * @callback dangerucallback
 * @param {string} type - Either success or error.
 * @param {object} resp - The object representing the response of the sever
 * @param {number} code - The HTTP response code.
 */

//Also fuck Github. Fuck them for fucking flagging my fucking account. Jesus fucking christ.
