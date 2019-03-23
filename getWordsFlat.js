
var getWordsFlat = function(words){

	// -----------------------------------
	//  This function obtains a list of
	// 	words in all course titles
	// -----------------------------------	

	wordsFlat = words.reduce(function(word_list,words_in_course)
	{
		// Iterate through each word in the array of 
		// words in one course name
		words_in_course.forEach(function(word_in_course)
		{
			// If the word is not present in the reduced list
			if(!word_list.includes(word_in_course))
			{
				// Append the word to the reduced list
				word_list.push(word_in_course);
			}
		});
		// Return new reduced list of words after adding 
		// new words of current course name
		return word_list;
	},[]);

	return wordsFlat;
}


module.exports = getWordsFlat;