<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EDOODLE</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header class="container w-100 text-center ">
        <h1>SEARCHER 🔍</h1>
    </header>
    <div class="container w-100 text-center">
        <h2>Welcome to the most advanced search site ever!</h2>
    </div>
    <hr />
    <div class="container">
        <form action="server.php" method="get" class="form-container">
            <div class="mb-3">
                <label class="form-label" for="search">Search:</label>
                <input class="form-control" type="text" name="search" id="search" placeholder="Search for..." required>
            </div>
            <div class="mb-3 text-center">
                <button type="submit" class="btn btn-dark">Search!</button>
            </div>
        </form>
    </div>
    <div class="container w-100 text-center mt-5">
        <img src="./istockphoto-1172290687-612x612.jpg" alt="searching" class="img-fluid">
    </div>
</body>

</html>