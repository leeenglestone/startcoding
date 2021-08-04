var items = {
    "categories": [
        { 
            "name": "Books", 
            "items": 
            [
                {"title":"Get Coding", "link": "https://amzn.to/3yf89Wl", "image": "books/get-coding.jpg" },
                {"title":"Get Coding 2", "link": "https://amzn.to/3zRUhlk", "image": "books/get-coding-2.jpg" },
                {"title":"C# Programming Yellow Book", "link": "https://amzn.to/2Ve98rF", "image": "books/csharp-yellow-book.jpg" },
                {"title":"Coding for Beginners", "link": "https://amzn.to/2WV93cL", "image": "books/coding-for-beginners.jpg" },
                {"title":"Learn Python in One Day", "link": "https://amzn.to/3ltix9i", "image": "books/learn-python-in-one-day.jpg" },
                {"title":"Coding for Dummies", "link": "https://amzn.to/3xp1yHE", "image": "books/coding-for-dummies.png" }
            ]
        },
        { 
            "name": "Online Training", 
            "items": 
            [
                {"title":"Pluralsight", "link": "https://www.pluralsight.com/", "image": "online-training/pluralsight.png" },
                {"title":"Code Academy", "link": "https://www.codecademy.com/", "image": "online-training/code-academy.jpg" },
                {"title":"Microsoft Learn", "link": "https://docs.microsoft.com/en-us/learn/", "image": "online-training/microsoft-learn.jpg" },
                {"title":"LinkedIn Learning", "link": "https://www.linkedin.com/learning/subscription/topics/developer", "image": "online-training/linkedin-learning.jpg" },
                {"title":"JetBrains Academy", "link": "https://www.jetbrains.com/academy/", "image": "online-training/jetbrains.png" },
                {"title":"Udemy", "link": "https://www.udemy.com/courses/search/?src=ukw&q=start+coding", "image": "online-training/udemy.jpg" },
                //https://code.org/
            ]
        },
        { 
            "name": "Code Camps", 
            "items": 
            [
                {"title":"Free Code Camp", "link": "https://www.freecodecamp.org/", "image": "code-camps/free-code-camp.jpg" },
                {"title":"North Coders", "link": "https://northcoders.com/", "image": "code-camps/north-coders.png" },
                {"title":"Code Camp", "link": "https://www.codecamp.co.uk/", "image": "code-camps/code-camp.jpg" },
                {"title":"School of Code", "link": "https://www.schoolofcode.co.uk/", "image": "code-camps/school-of-code.png" },
                {"title":"Code Nation", "link": "https://wearecodenation.com/", "image": "code-camps/code-nation.png" },
                {"title":"Le Wagon", "link": "https://www.lewagon.com/", "image": "code-camps/le-wagon.png" }
                //
            ]
        },
    ]
};

var categoriesDiv = document.getElementById('categoriesDiv');

// Categories
items.categories.forEach(c => {
    var categoryDiv = document.createElement('div');
    categoryDiv.classList.add("category");

    var heading = document.createElement('h2');
    heading.innerHTML = c.name;

    categoryDiv.appendChild(heading);

    // Items
    c.items.forEach(i => 
    {
        var itemDiv = document.createElement('div');
        itemDiv.classList.add("item");

        // Heading
        var itemHeading = document.createElement('h2');
        itemHeading.innerHTML = i.title;				
        itemDiv.appendChild(itemHeading);
    
        // Image
        var itemImage = document.createElement('img');
        itemImage.src = "images/" + i.image;
        itemImage.alt = i.title;
        itemImage.title = i.title;
        
        // Link
        var itemLink = document.createElement('a');
        itemLink.href = i.link;
        itemLink.appendChild(itemImage);
        itemDiv.appendChild(itemLink);
    
        categoryDiv.appendChild(itemDiv);
    });
    
    categoriesDiv.appendChild(categoryDiv);
});