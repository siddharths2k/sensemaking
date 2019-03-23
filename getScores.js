
var getScores = function(wordsFlat){

	// -----------------------------------
	//  This function returns an object
	//  containing words and their 
	//  corresponding frequencies
	// -----------------------------------	

	scores = wordsFlat.reduce(function(frequency_list,word)
	{
		// If the word has been added to the object already
		if (word in frequency_list)
		{
			// Increase frequency by 1
			frequency_list[word] += 1;
		}		
		// If the word has not been added to the object yet
		else
		{
			// Set frequency as 1
			frequency_list[word] = 1;
		}
		// Return updated list of word frequencies
		return frequency_list;
	},{});

	return scores; 
}

module.exports = getScores;