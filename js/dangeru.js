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
 * Gets a thread synchronously. Duh. DON'T USE THIS IN THE MAIN THREAD, YOU FUCKING DOLT!
 * @param {string} board - The board.
 * @param {number} length - How many entries to get.
 * @param {number} id - ID of the thread.
 * @returns {object} The posts and all. Dunno much more to describe this.
*/
_G.dangeru.threadSync = function(board, length, id) {
	if (typeof board !== "string" || typeof length !== "number" || typeof id !== "string")
		throw "Invalid type! Check your arguments, faggot.";
    var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET",`https://boards.dangeru.us/api.php?type=thread&board=${board}&ln=${length}&id=${id}`, false ); 
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText.replace(/[\r\n]+/g, ""));
};

/**
 * Gets a thread asynchronously.
 * @param {string} board - The board.
 * @param {number} length - How many entries to get.
 * @param {number} id - ID of the thread.
 * @param {dangerucallback} callback - This is called when the XMLHttp request is completed.
*/
_G.dangeru.thread = function(board, length, id, callback) {
	if (typeof board !== "string" || typeof length !== "number" || typeof id !== "string" || typeof callback !== "function")
		throw "Invalid type! Check your arguments, faggot.";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback("success", JSON.parse(xmlHttp.responseText.replace(/[\r\n]+/g, "")), 200);
		else if (xmlHttp.readyState === 4 && xmlHttp.status !== 200)
			callback("error", {}, xmlHttp.status);
    }
    xmlHttp.open("GET", `https://boards.dangeru.us/api.php?type=thread&board=${board}&ln=${length}&id=${id}`, true);
    xmlHttp.send(null);
}
/**
 * Gets a board's posts synchronously. Duh. DON'T USE THIS IN THE MAIN THREAD, YOU FUCKING DOLT!
 * @param {string} board - The board.
 * @param {number} length - How many entries to get.
 * @returns {object} The threads and all. Dunno much more to describe this.
*/
_G.dangeru.listSync = function(board, length) {
	if (typeof board !== "string" || typeof length !== "number")
		throw "Invalid type! Check your arguments, faggot.";
    var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET",`https://boards.dangeru.us/api.php?type=index&board=${board}&ln=${length}`, false ); 
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText.replace(/[\r\n]+/g, ""));
    //return xmlHttp.responseText;
}
/**
 * Gets a board's posts asynchronously.
 * @param {string} board - The board.
 * @param {number} length - How many entries to get.
 * @param {dangerucallback} callback - This is called when the XMLHttp request is completed.
*/
_G.dangeru.list = function(board, length, callback) {
	if (typeof board !== "string" || typeof length !== "number" || typeof callback !== "function")
		throw "Invalid type! Check your arguments, faggot.";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback("success", JSON.parse(xmlHttp.responseText.replace(/[\r\n]+/g, "")), 200);
		else if (xmlHttp.readyState === 4 && xmlHttp.status !== 200)
			callback("error", {}, xmlHttp.status);
    }
    xmlHttp.open("GET", `https://boards.dangeru.us/api.php?type=index&board=${board}&ln=${length}`, true);
    xmlHttp.send(null);
}

/**
 * The callback of an async danger/u/ request
 * @callback dangerucallback
 * @param {string} type - Either success or error.
 * @param {object} resp - The object representing the response of the sever
 * @param {number} code - The HTTP response code.
 */
