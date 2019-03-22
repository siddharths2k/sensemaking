require('string')

var getWords = function(titles)
{
	// -----------------------------------
	//  This function removes punctuation 
	//  and numbers from each course title
	//  and returns an array of arrays of
	//  words of each title
	// -----------------------------------	

	var words = titles.map(function(title)
	{
		// Convert to lower case
		var edited_title = title.toLowerCase();
		// Select only lower case characters and spaces
		edited_title = edited_title.match(/[a-z]\s/g);
		// Remove extra spaces at start and end
		edited_title = edited_title.trim();
		// Return array of words
		return edited_title.split(' ');
	});

	return words;
}


module.exports = getWords;