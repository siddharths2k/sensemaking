const cheerio = require('cheerio')

var getTitles = function(mitcourses)
{
	// -----------------------------------
	//  This function gets the course data 
	//  from mitcourses.js and returns
	//  an array of course titles
	// -----------------------------------	

	const $ = cheerio.load(mitcourses);

	titles = [];

	// Read values from 'h3' of HTML and append to 'titles'
	$('h3').each(function(i,course)
	{
		titles.push($(course).text());
	});

	return titles;
}


module.exports = getTitles;