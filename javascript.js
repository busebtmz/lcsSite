(function () {
	const quotes = [
		{
			quote:
				"In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.",
			author: " Theodore Roosevelt"
		},
		{
			quote:
				"Things turn out best for the people who make the best of the way things turn out.",
			author: "John Wooden"
		},
		{
			quote:
				"You have to accept whatever comes and the only important thing is that you meet it with courage and with the best that you have to give.",
			author: "Eleanor Roosevelt"
		},
		{
			quote: "The best preparation for tomorrow is to do today's work superbly well.",
			author: "William Osler"
		},
		{
			quote:
				"Life is what happens when you're busy making other plans. ",
			author: "John Lennon"
		},
		{
			quote:
				"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
			author: " Mark Twain"
		}
	];

	const btn = document.getElementById("generate-btn");

	btn.addEventListener("click", function () {
		let random = Math.floor(Math.random() * quotes.length);
		console.log(random);

		document.getElementById("quote").textContent = quotes[random].quote;
		document.querySelector(".author").textContent = quotes[random].author;
	});
})();